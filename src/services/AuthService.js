import $api from "../api";

export default class AuthService {
  static async login(username, password) {
    return $api.post("/api/token/", JSON.stringify({ username, password }), {
      headers: { "Content-Type": "application/json" },
    });
  }

  // static async logout() {
  //   return $api.post("/api/token/");
  // }
}
