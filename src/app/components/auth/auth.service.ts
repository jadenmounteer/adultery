import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { User } from 'src/app/types/user';
import { AuthData } from './auth-data.model';

@Injectable()
export class AuthService {
  public authChange = new Subject<boolean>();
  private isAuthenticated: boolean = false;

  constructor(private router: Router, private afAuth: AngularFireAuth) {}

  iniAuthListener() {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.onSuccessfulAuthentication();
      } else {
        this.onUnsuccessfulAuthentication();
      }
    });
  }

  registerUser(authData: AuthData) {
    this.afAuth
      .createUserWithEmailAndPassword(authData.email, authData.password)
      .then((result) => {
        console.log(result);
        this.onSuccessfulAuthentication();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  login(authData: AuthData) {
    this.afAuth
      .signInWithEmailAndPassword(authData.email, authData.password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  logout() {
    // TODO Cancel subscriptions in your services here. (see videso 95 and 96)
    this.afAuth.signOut();
  }

  isAuth() {
    return this.isAuthenticated;
  }

  private onSuccessfulAuthentication() {
    this.isAuthenticated = true;
    this.authChange.next(true);
    this.router.navigate(['']);
  }

  private onUnsuccessfulAuthentication() {
    this.isAuthenticated = false;
    this.authChange.next(false);
    this.router.navigate(['']);
  }
}
