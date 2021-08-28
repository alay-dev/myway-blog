import { combineReducers } from "redux";
import post from "./post/postReducers";
import comment from "./comment/commentReducers";
import user from "./user/userReducers";
import login from "./login/loginReducers";
import loader from "./loader/loaderReducers";
import snackbar from "./snackbar/snackbarReducers";

export default combineReducers({
  post,
  comment,
  user,
  login,
  loader,
  snackbar,
});
