import $api from "../api";

export default class RuleService {
  static async getRules() {
    return $api.get("/api/v1/rules");
  }
}
