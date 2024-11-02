import config from "@/config";
import fetcher from "@/lib/fetcher";

export class AuthService {
  static BASE = `${config.serviceUrl}/api/auth`;
  static LOGIN = `${this.BASE}/login`;
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
