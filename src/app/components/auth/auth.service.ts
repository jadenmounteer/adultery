import { User } from 'src/app/types/user';
import { AuthData } from './auth-data.model';

export class AuthService {
  private user!: User;

  registerUser(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: String(Math.round(Math.random() * 10000)),
      name: 'Jaden',
      isLoggedIn: true,
    };
  }

  login(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: String(Math.round(Math.random() * 10000)),
      name: 'Jaden',
      isLoggedIn: true,
    };
  }

  logout() {
    this.user = {
      email: '',
      userId: '',
      name: '',
      isLoggedIn: false,
    };
  }

  getUser() {
    // The spread operator here returns a different object with the same properties as the private user object.
    return { ...this.user };
  }

  isAuth() {
    return this.user.userId != '';
  }
}
