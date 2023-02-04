import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { User } from 'src/app/types/user';
import { AuthData } from './auth-data.model';

@Injectable()
export class AuthService {
  public authChange = new Subject<boolean>();
  private user!: User;

  constructor(private router: Router, private afAuth: AngularFireAuth) {}

  registerUser(authData: AuthData) {
    // this.user = {
    //   email: authData.email,
    //   userId: String(Math.round(Math.random() * 10000)),
    // };

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
    this.user = {
      email: authData.email,
      userId: String(Math.round(Math.random() * 10000)),
    };
    this.onSuccessfulAuthentication();
  }

  logout() {
    this.user = {
      email: '',
      userId: '',
    };
    this.authChange.next(false);
  }

  getUser() {
    // The spread operator here returns a different object with the same properties as the private user object.
    return { ...this.user };
  }

  isAuth() {
    if (this.user?.userId) {
      return true;
    }
    return false;
  }

  private onSuccessfulAuthentication() {
    this.authChange.next(true);
    this.router.navigate(['']);
  }
}
