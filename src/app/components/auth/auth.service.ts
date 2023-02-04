import { Subject } from 'rxjs';
import { User } from 'src/app/types/user';
import { AuthData } from './auth-data.model';

export class AuthService {
  public authChange = new Subject<boolean>();
  private user!: User;

  registerUser(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: String(Math.round(Math.random() * 10000)),
    };
    this.authChange.next(true);
  }

  login(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: String(Math.round(Math.random() * 10000)),
    };
    this.authChange.next(true);
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
}
