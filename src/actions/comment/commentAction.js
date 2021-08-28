import {
  SET_COMMENT_USER_NAME,
  SET_COMMENT,
  SET_ALL_COMMENT,
  SET_COMMENT_USER_IMG,
  RESET_COMMENT,
} from "../../constants/comments/commentConst";
import UNIVERSAL from "../../config/config";
import { get_post_by_id } from "../posts/postActions";
import {
  set_comment_loader,
  unset_comment_loader,
} from "../loader/loaderActions";
import {
  set_snackbar_message,
  set_snackbar_serverity,
  set_snackbar_status,
} from "../snackbar/snackbarActions";
// import { logout } from "../login/loginActions";

export function get_all_comment() {
  return (dispatch) => {
    // dispatch(setLoader());

    return fetch(UNIVERSAL.BASEURL + "/api/comments", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        token: localStorage.getItem("mywayblog_token"),
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.status === "success") {
          dispatch(set_all_comment(responseJson.comments));
        } else {
          if (responseJson.message === "User does not exist") {
            // dispatch(onLogout()) ;
          } else {
            // dispatch(set_snack_bar(responseJson.status, responseJson.message))
          }
        }
        // dispatch(unsetLoader()) ;
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function add_comment(id, comment, login) {
  return (dispatch) => {
    dispatch(set_comment_loader());
    if (!login._id) {
      dispatch(set_snackbar_message("You must login to comment"));
      dispatch(set_snackbar_status(true));
      dispatch(set_snackbar_serverity("info"));
      dispatch(unset_comment_loader());
      return;
    }
    return fetch(UNIVERSAL.BASEURL + "/api/comments", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        // token: login.token,
      },
      body: JSON.stringify({
        id: id,
        date: Date.now(),
        comment: comment.comment,
        user: login._id,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.status === "success") {
          dispatch(reset_comment());
          dispatch(get_post_by_id(id));
          dispatch(set_comment_loader());
        } else {
          if (responseJson.message === "User does not exist") {
            // dispatch(onLogout())
          } else {
            // dispatch(responseJson.status, responseJson.message);
          }
        }
        // dispatch(unset_comment_loader());
      });
  };
}

export function update_comment(id, comment, login) {
  return (dispatch) => {
    // dispatch(setLoader());
    return fetch(UNIVERSAL.BASEURL + "update_comment", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        token: login.token,
      },
      body: JSON.stringify({
        post_id: id,
        comment: comment,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.status) {
          dispatch(get_all_comment());
        } else {
          if (responseJson.message === "User does not exist") {
            // dispatch(onLogout())
          } else {
            // dispatch(responseJson.status, responseJson.message);
          }
        }
        // dispatch(unsetLoader()) ;
      });
  };
}

export function delete_comment(id, login) {
  return (dispatch) => {
    //   dispatch(setLoader()) ;
    return fetch(UNIVERSAL.BASEURL + "/api/comments", {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        token: login.token,
      },
      body: JSON.stringify({
        id: id,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.status === "success") {
          dispatch(get_all_comment());
        } else {
          if (responseJson.message === "User does not exist") {
            // dispatch(onLogout()) ;
          } else {
            // dispatch(set_snack_bar(responseJson.status, responseJson.message));
          }
        }
        // dispatch(unsetLoader()) ;
      });
  };
}

export function set_comment(payload) {
  return {
    type: SET_COMMENT,
    payload: payload,
  };
}

export function set_comment_user_name(payload) {
  return {
    type: SET_COMMENT_USER_NAME,
    payload: payload,
  };
}
export function set_comment_user_img(payload) {
  console.log(payload);
  return {
    type: SET_COMMENT_USER_IMG,
    payload: payload,
  };
}

export function reset_comment() {
  return {
    type: RESET_COMMENT,
  };
}

export function set_all_comment(payload) {
  return {
    type: SET_ALL_COMMENT,
    payload: payload,
  };
}
