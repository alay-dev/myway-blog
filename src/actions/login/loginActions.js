import {
  SET_USER_CONFIRM_PASSWORD,
  SET_USER_PASSWORD,
  SET_USER_CONTACT_NUM,
  SET_USER_OLD_IMG,
  SET_USER_IMG,
  SET_USER_EMAIL,
  SET_USER_NAME,
  SET_USER_CURRENT_PASSWORD,
  RESET_USER,
} from "../../constants/user/userConst";
import { set_login_loader, unset_login_loader } from "../loader/loaderActions";
import {
  set_snackbar_message,
  set_snackbar_serverity,
  set_snackbar_status,
} from "../snackbar/snackbarActions";
import { RELOAD_LOGIN, LOGIN, LOGOUT } from "../../constants/login/loginConst";
import UNIVERSAL from "../../config/config";
import firebase from "firebase";
import history from "../../history";
// import { facebookProvider, googleProvider } from "../../config/firebaseConfig";

export function signup(user) {
  return (dispatch) => {
    dispatch(set_login_loader());
    if (user.name === "") {
      dispatch(unset_login_loader());
      dispatch(set_snackbar_message("Please provide your name"));
      dispatch(set_snackbar_status(true));
      dispatch(set_snackbar_serverity("warning"));
      return;
    }
    if (user.email === "") {
      dispatch(unset_login_loader());
      dispatch(set_snackbar_message("Please provide your email"));
      dispatch(set_snackbar_status(true));
      dispatch(set_snackbar_serverity("warning"));
      return;
    }
    if (user.password !== user.confirm_password) {
      dispatch(set_snackbar_message("Confirm password doesn't match password"));
      dispatch(set_snackbar_status(true));
      dispatch(set_snackbar_serverity("warning"));
      dispatch(unset_login_loader());
      return;
    }
    if (user.img !== "") {
      var storageRef = firebase.storage().ref();
      var uploadTask = storageRef
        .child("users/" + user.name + ".png")
        .put(user.img);
      uploadTask.on(
        "state_changed",
        function (snapshot) {},
        function (error) {
          // dispatch(set_snack_bar(true, "Image Could Not Be sUploaded"));
        },
        function () {
          uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
            console.log(downloadURL);
            dispatch(signup_api(user, downloadURL));
          });
        }
      );
    } else {
      dispatch(signup_api(user, ""));
    }
  };
}

export function signup_api(user, url) {
  return (dispatch) => {
    console.log(UNIVERSAL, "Baseurl...");
    return fetch(UNIVERSAL.BASEURL + "/api/users/signup", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: user.name,
        email: user.email,
        contact_no: user.contact_num,
        password: user.password,
        id: user.id,
        url: url,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.status === "success") {
          dispatch(set_login(responseJson.data));
          dispatch(reset_user());
          dispatch(set_snackbar_message("Signup successfull"));
          dispatch(set_snackbar_status(true));
          dispatch(set_snackbar_serverity("success"));
          dispatch(unset_login_loader());
          history.push("/");
        } else {
          if (
            responseJson.message ===
            "Duplicate field value: undefined please use another value"
          ) {
            dispatch(set_snackbar_message("User already exists"));
            dispatch(set_snackbar_status(true));
            dispatch(set_snackbar_serverity("error"));
            dispatch(unset_login_loader());
          } else {
            dispatch(set_snackbar_message("Something went wrong! try again"));
            dispatch(set_snackbar_status(true));
            dispatch(set_snackbar_serverity("error"));
          }
        }
        // dispatch(unsetLoader()) ;
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function add_admin(user) {
  return (dispatch) => {
    dispatch(set_login_loader());
    if (user.name === "") {
      dispatch(unset_login_loader());
      dispatch(set_snackbar_message("Please provide your name"));
      dispatch(set_snackbar_status(true));
      dispatch(set_snackbar_serverity("warning"));
      return;
    }
    if (user.email === "") {
      dispatch(unset_login_loader());
      dispatch(set_snackbar_message("Please provide your email"));
      dispatch(set_snackbar_status(true));
      dispatch(set_snackbar_serverity("warning"));
      return;
    }
    if (user.password !== user.confirm_password) {
      dispatch(set_snackbar_message("Confirm password doesn't match password"));
      dispatch(set_snackbar_status(true));
      dispatch(set_snackbar_serverity("warning"));
      dispatch(unset_login_loader());
      return;
    }
    if (user.img !== "") {
      var storageRef = firebase.storage().ref();
      var uploadTask = storageRef
        .child("users/" + user.name + ".png")
        .put(user.img);
      uploadTask.on(
        "state_changed",
        function (snapshot) {},
        function (error) {
          // dispatch(set_snack_bar(true, "Image Could Not Be sUploaded"));
        },
        function () {
          uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
            console.log(downloadURL);
            dispatch(signup_api(user, downloadURL));
          });
        }
      );
    } else {
      dispatch(add_admin_api(user, ""));
    }
  };
}

export function add_admin_api(user, url) {
  return (dispatch) => {
    console.log(UNIVERSAL, "Baseurl...");
    return fetch(UNIVERSAL.BASEURL + "/api/users/add_admin", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: user.name,
        email: user.email,
        contact_no: user.contact_num,
        password: user.password,
        id: user.id,
        url: url,
        type: "A",
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.status === "success") {
          dispatch(set_login(responseJson.data));
          dispatch(reset_user());
          dispatch(set_snackbar_message("Signup successfull"));
          dispatch(set_snackbar_status(true));
          dispatch(set_snackbar_serverity("success"));
          dispatch(unset_login_loader());
          history.push("/");
        } else {
          if (
            responseJson.message ===
            "Duplicate field value: undefined please use another value"
          ) {
            dispatch(set_snackbar_message("User already exists"));
            dispatch(set_snackbar_status(true));
            dispatch(set_snackbar_serverity("error"));
            dispatch(unset_login_loader());
          } else {
            dispatch(set_snackbar_message("Something went wrong! try again"));
            dispatch(set_snackbar_status(true));
            dispatch(set_snackbar_serverity("error"));
          }
        }
        // dispatch(unsetLoader()) ;
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function do_login(user) {
  return (dispatch) => {
    dispatch(set_login_loader());
    if (user.email === "" || user.password === "") {
      dispatch(set_snackbar_message("Email or Password is missing"));
      dispatch(set_snackbar_status(true));
      dispatch(set_snackbar_serverity("warning"));
      dispatch(unset_login_loader());
      return;
    }
    return fetch(UNIVERSAL.BASEURL + "/api/users/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: user.email,
        password: user.password,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.status === "success") {
          dispatch(set_login(responseJson.data));
          dispatch(reset_user());
          history.push("/");
          dispatch(set_snackbar_message("Login Successful"));
          dispatch(set_snackbar_status(true));
          dispatch(set_snackbar_serverity("success"));
        } else {
          if (responseJson.message === "User does not exist") {
            // dispatch(onLogout()) ;
          } else {
            dispatch(set_snackbar_message(responseJson.message));
            dispatch(set_snackbar_status(true));
            dispatch(set_snackbar_serverity("error"));
          }
        }
        dispatch(unset_login_loader());
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function set_login(payload) {
  localStorage.setItem("mywayblog_token", payload.token);
  localStorage.setItem("mywayblog_login", JSON.stringify(payload.user));
  return {
    type: LOGIN,
    payload: payload.user,
  };
}

export function set_reload_login(payload) {
  console.log(payload);
  return {
    type: RELOAD_LOGIN,
    payload: payload,
  };
}

export function logout() {
  return (dispatch) => {
    localStorage.removeItem("mywayblog_token");
    localStorage.removeItem("mywayblog_login");
    dispatch(set_snackbar_message("Logout Successful"));
    dispatch(set_snackbar_status(true));
    dispatch(set_snackbar_serverity("success"));
    history.push("/");
    dispatch({
      type: LOGOUT,
    });
  };
}

// export function googleLogin() {
//   return (dispatch) => {
//     firebase
//       .auth()
//       .signInWithPopup(googleProvider)
//       .then((res) => {
//         let payload = {
//           token: res.credential.idToken,
//           user: {
//             _id: res.additionalUserInfo.profile.id,
//             name: res.additionalUserInfo.profile.name,
//             email: res.additionalUserInfo.profile.email,
//             contact_no: "",
//             url: res.additionalUserInfo.profile.picture,
//           },
//         };
//         dispatch(set_login(payload));
//         history.push("/");
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
// }

export function set_user_name(payload) {
  return {
    type: SET_USER_NAME,
    payload: payload,
  };
}

export function set_user_email(payload) {
  return {
    type: SET_USER_EMAIL,
    payload: payload,
  };
}

export function set_user_img(payload) {
  return {
    type: SET_USER_IMG,
    payload: payload,
  };
}

export function set_user_old_img(payload) {
  return {
    type: SET_USER_OLD_IMG,
    payload: payload,
  };
}

export function set_user_contact_num(payload) {
  return {
    type: SET_USER_CONTACT_NUM,
    payload: payload,
  };
}
export function set_user_current_password(payload) {
  return {
    type: SET_USER_CURRENT_PASSWORD,
    payload: payload,
  };
}

export function set_user_password(payload) {
  return {
    type: SET_USER_PASSWORD,
    payload: payload,
  };
}

export function set_user_confirm_password(payload) {
  return {
    type: SET_USER_CONFIRM_PASSWORD,
    payload: payload,
  };
}

export function reset_user() {
  return {
    type: RESET_USER,
  };
}
