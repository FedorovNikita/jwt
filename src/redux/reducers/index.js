import { combineReducers } from "redux";
import auth from "./auth";
import rules from "./rules";

const rootReducer = combineReducers({
  rules: rules,
  auth: auth,
});

export default rootReducer;