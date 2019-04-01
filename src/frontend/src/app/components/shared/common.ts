import { UserLogin } from '../../models/UserLogin';

export class Common {
  userLogin: UserLogin;
  userId: number;

  getUserId() {
    this.userLogin = JSON.parse(localStorage.getItem('currentUser'));
    const token = this.userLogin.token;
    const tokenParts = token.split(/\./);
    const tokenDecoded = JSON.parse(window.atob(tokenParts[1]));

    return tokenDecoded.user_id;
  }
}
