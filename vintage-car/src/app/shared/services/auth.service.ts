import { Injectable, NgZone } from '@angular/core';
import { SignupApplication, User, UserRole } from '../models/user.model';
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

  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user !== null;
  }

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
  login(email: string, password: string) {
    return this.firebaseAuthService
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
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
  register(user: SignupApplication) {
    return this.firebaseAuthService
      .createUserWithEmailAndPassword(user.email, user.password)
      .then((userCredentials) => {
        /* Send verificaiton mail when new user sign up */
        this.sendVerificationMail();
        this.storeUserData(userCredentials.user, user);
        this.router.navigate(
          ['auth/verify-email'],
          { state: { user: user } });
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  // Send email verfificaiton when new user sign up
  sendVerificationMail() {
    return this.firebaseAuthService.currentUser
      .then((user) => user.sendEmailVerification());
  }

  // Reset Forggot password
  forgotPassword(passwordResetEmail: string) {
    return this.firebaseAuthService
      .sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert('Password reset email sent, check your inbox.');
      })
      .catch((error) => {
        window.alert(error);
      });
  }

  /* Setting up user data when signing in with username/password, 
     signing up with username/password and signing in with social auth provider in Firestore database 
     using AngularFirestore + AngularFirestoreDocument service */
  storeUserData(user: any, signupApplication?: SignupApplication) {
    this.userData = user;

    const userRef: AngularFirestoreDocument<any> = this.firestoreService
      .doc(`users/${user.uid}`);

    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: signupApplication.username,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
      role: signupApplication.role
    };
    return userRef.set(userData, {
      merge: true,
    });
  }

  // Sign out
  logout() {
    return this.firebaseAuthService.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['auth/login']);
    });
  }
}