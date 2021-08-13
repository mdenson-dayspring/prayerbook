import { Injectable } from '@angular/core';
import { User } from "../services/user";
import firebase from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
import { switchMap } from 'rxjs/operators';
import { BehaviorSubject, from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private user: BehaviorSubject<Observable<User>>;
  public user$: Observable<User>;
  private _isLoggedIn: boolean = false;

  constructor(
    public auth: AngularFireAuth
  ) {

    this.user = new BehaviorSubject<Observable<User>>(this.auth.authState as Observable<User>);
    this.user$ = this.user.asObservable().pipe(switchMap((user: Observable<User>) => user));

    this.user$.subscribe(user => {
      if (user) {
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
    })
  }

  public get isLoggedIn(): boolean {
    return this._isLoggedIn;
  }
  private set isLoggedIn(val:boolean) {
    this._isLoggedIn = val;
  }

  // Sign in with Google
  googleAuth(): Observable<firebase.auth.UserCredential> {
    return from(this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()));
  }

  // Sign out
  signOut(): Observable<void> {
    return from(this.auth.signOut());
  }

}
