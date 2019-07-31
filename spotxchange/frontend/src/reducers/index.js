import { combineReducers } from "redux";
import spots from "./spots";
import errors from "./errors";
import messages from "./messages";
import auth from "./auth";

export default combineReducers({
  spots,
  errors,
  messages,
  auth
});
