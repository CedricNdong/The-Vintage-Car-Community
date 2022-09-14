import { Injectable, NgZone } from '@angular/core';
import { SignupApplication, User, UserRole } from '../models/user.model';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import firebase from 'firebase/compat';
import { BehaviorSubject, Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userSubject = new BehaviorSubject<any>(null);
  userData$: Observable<any> = this.userSubject.asObservable();

  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    return this.userData !== null;
  }

  get userData(): any {
    return JSON.parse(localStorage.getItem('user')!);
  }

  constructor(
    public firestoreService: AngularFirestore, // Inject Firestore service
    public firebaseAuthService: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public ngZoneService: NgZone // NgZone service to remove outside scope warning
  ) {

    /* Saving user data in localstorage when logged in and setting up null when logged out */
    this.firebaseAuthService.authState
      .subscribe((user) => {
        let userJSON = 'null';
        if (user) {
          this.userSubject.next(user);
          this.setUserData(user);
          userJSON = JSON.stringify(user);
        }
        localStorage.setItem('user', userJSON);
      });
  }

  // Sign in with email/password
  login(email: string, password: string) {
    return this.firebaseAuthService
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        if (userCredential.user)
          this.setUserData(userCredential.user);

        this.firebaseAuthService.authState
          .subscribe(user => {
            if (user)
              this.router.navigate([`dashboard`]);
          });
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  setUserData(user: firebase.User): void {
    if (user?.uid)
      this.firestoreService.doc(`users/${user?.uid}`)
        .valueChanges()
        .subscribe(user => this.userSubject.next(user));
  }

  // Sign up with email/password
  register(user: SignupApplication): Promise<void> {
    return this.firebaseAuthService
      .createUserWithEmailAndPassword(user.email, user.password)
      .then((userCredentials) => {
        /* Send verificaiton mail when new user sign up */
        this.sendVerificationMail();
        this.storeUserData(userCredentials.user, user);
        this.router.navigate(['auth/verify-email'], { state: { user: user } });
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  // Send email verfificaiton when new user sign up
  sendVerificationMail(): Promise<void> {
    return this.firebaseAuthService.currentUser
      .then((user) => user.sendEmailVerification());
  }

  // Reset Forggot password
  forgotPassword(passwordResetEmail: string): Promise<void> {
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
  storeUserData(user: any, signupApplication?: SignupApplication): Promise<void> {
    const userRef: AngularFirestoreDocument<any> = this.firestoreService
      .doc(`users/${user.uid}`);

    const username = signupApplication ? signupApplication?.username : user?.displayName
    const userData = {
      uid: user.uid,
      email: user.email,
      displayName: username,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
      role: signupApplication?.role
    };

    return userRef.set(userData, { merge: true });
  }

  logout(): Promise<void> {
    return this.firebaseAuthService.signOut()
      .then(() => {
        localStorage.removeItem('user');
        this.router.navigate(['auth/login']);
      });
  }
}