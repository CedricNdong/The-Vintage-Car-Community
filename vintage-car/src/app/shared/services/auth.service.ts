import { Injectable, NgZone } from '@angular/core';
import { User } from './user.model';
import * as auth from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData: any; // Save logged in user data

  constructor(
    public firestoreService: AngularFirestore, // Inject Firestore service
    public firebaseAuthService: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public ngZoneService: NgZone // NgZone service to remove outside scope warning
  ) {

    /* Saving user data in localstorage when 
    logged in and setting up null when logged out */

    this.firebaseAuthService.authState
      .subscribe((user) => {
        this.userData = user;
        const userJSON = user ? JSON.stringify(this.userData) : 'null';
        localStorage.setItem('user', userJSON);
        JSON.parse(localStorage.getItem('user')!);
      });
  }

  // Sign in with email/password
  SignIn(email: string, password: string) {
    return this.firebaseAuthService
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        this.SetUserData(userCredential.user);
        this.firebaseAuthService.authState
          .subscribe((user) => {
            if (user) {
              this.router.navigate([`dashboard`]);
            }
          });
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  // Sign up with email/password
  SignUp(email: string, password: string) {
    return this.firebaseAuthService
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        /* Send verificaiton mail when new user sign up */
        this.SendVerificationMail();
        this.SetUserData(userCredentials.user);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  // Send email verfificaiton when new user sign up
  SendVerificationMail() {
    return this.firebaseAuthService.currentUser
      .then((user: any) => user.sendEmailVerification())
      .then(() => {
        this.router.navigate(['auth/verify-email']);
      });
  }

  // Reset Forggot password
  ForgotPassword(passwordResetEmail: string) {
    return this.firebaseAuthService
      .sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert('Password reset email sent, check your inbox.');
      })
      .catch((error) => {
        window.alert(error);
      });
  }

  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user !== null;
  }

  // Sign in with Google
  GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider())
      .then((res: any) => {
        this.router.navigate([`dashboard`]);
      });
  }

  // Auth logic to run auth providers
  AuthLogin(provider: any) {
    return this.firebaseAuthService
      .signInWithPopup(provider)
      .then((userCredential) => {
        this.SetUserData(userCredential.user);
        this.router.navigate([`dashboard`]);
      })
      .catch((error) => {
        window.alert(error);
      });
  }

  /* Setting up user data when signing in with username/password, 
     signing up with username/password and signing in with social auth provider in Firestore database 
     using AngularFirestore + AngularFirestoreDocument service */
  SetUserData(user: any) {
    this.userData = user;

    const userRef: AngularFirestoreDocument<any> = this.firestoreService
      .doc(`users/${user.uid}`);

    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
    };
    return userRef.set(userData, {
      merge: true,
    });
  }

  // Sign out
  SignOut() {
    return this.firebaseAuthService.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['auth/login']);
    });
  }
}