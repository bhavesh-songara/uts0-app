import config from "@/config";
import fetcher from "@/lib/fetcher";

export class AuthService {
  static BASE = `${config.serviceUrl}/api/auth`;
  static GOOGLE_LOGIN = `${this.BASE}/google`;
  static LOGOUT = `${this.BASE}/logout`;
  static ME = `${this.BASE}/me`;

  static async logout() {
    return await fetcher({
      url: this.LOGOUT,
    });
  }

  static async me() {
    return await fetcher({
      url: this.ME,
    });
  }
}
