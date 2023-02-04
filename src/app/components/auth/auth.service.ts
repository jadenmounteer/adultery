import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { User } from 'src/app/types/user';
import { AuthData } from './auth-data.model';

@Injectable()
export class AuthService {
  public authChange = new Subject<boolean>();
  private user!: User;

  constructor(private router: Router) {}

  registerUser(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: String(Math.round(Math.random() * 10000)),
    };
    this.onSuccessfulAuthentication();
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
    return this.user.userId != '';
  }

  private onSuccessfulAuthentication() {
    this.authChange.next(true);
    this.router.navigate(['']);
  }
}
