import {
  SET_ALL_POST,
  SET_POST_TAGS,
  SET_POST_HEADING,
  SET_CURRENT_POST,
  SET_POST_IMG,
  SET_POST_OLD_IMG,
  SET_POST_AUTHOR_EMAIL,
  SET_POST_AUTHOR_IMG,
  SET_POST_AUTHOR_NAME,
  SET_POST_AUTHOR_ID,
  SET_PAGINATED_POST,
  SET_POSTS_LENGTH,
  RESET_POST,
  TOGGLE_LIKE_BTN,
  SET_POST_MAIN_TEXT,
} from "../../constants/posts/postsConst";
import {
  set_snackbar_message,
  set_snackbar_serverity,
  set_snackbar_status,
} from "../snackbar/snackbarActions";
import UNIVERSAL from "../../config/config";
import firebase from "firebase";
import {
  set_all_post_loader,
  unset_all_post_loader,
  set_like_loader,
  unset_like_loader,
  unset_comment_loader,
  set_post_loader,
  unset_post_loader,
} from "../loader/loaderActions";

export function get_all_posts(login) {
  return (dispatch) => {
    dispatch(set_all_post_loader());

    return fetch(UNIVERSAL.BASEURL + "/api/posts", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        // token: login.token,
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.status === "success") {
          console.log(responseJson.posts);
          responseJson.posts.sort(
            (a, b) => new Date(b.date) - new Date(a.date)
          );

          dispatch(set_all_posts(responseJson.posts));
          console.log(responseJson.posts);
          // var tmp = [...responseJson.posts];
          // dispatch(paginate_post(tmp, 1));
          // dispatch({
          //   type: SET_POSTS_LENGTH,
          //   payload: responseJson.posts.length,
          // });
        } else {
          if (responseJson.message === "User does not exist") {
            // dispatch(onLogout()) ;
          } else {
            // dispatch(set_snack_bar(responseJson.status, responseJson.message))
          }
        }
        dispatch(unset_all_post_loader());
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function get_post_by_id(id, login) {
  return (dispatch) => {
    dispatch(set_post_loader());

    return fetch(UNIVERSAL.BASEURL + "/api/posts/get_post", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        // token: login.token,
        // post_id: id,
      },
      body: JSON.stringify({
        id: id,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.status === "success") {
          dispatch(set_current_post(responseJson.posts));
        } else {
          if (responseJson.message === "User does not exist") {
            // dispatch(onLogout()) ;
          } else {
            // dispatch(set_snack_bar(responseJson.status, responseJson.message))
          }
        }
        dispatch(unset_comment_loader());
        dispatch(unset_post_loader());
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function add_post(post, login) {
  return (dispatch) => {
    dispatch(set_post_loader());
    if (post.img !== "") {
      var storageRef = firebase.storage().ref();
      var uploadTask = storageRef
        .child("posts/" + Date.now() + ".png")
        .put(post.img);
      uploadTask.on(
        "state_changed",
        function (snapshot) {},
        function (error) {
          // dispatch(set_snack_bar(true, "Image Could Not Be sUploaded"));
        },
        function () {
          uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
            dispatch(add_post_api(post, login, downloadURL));
          });
        }
      );
    } else {
      dispatch(add_post_api(post, login, ""));
    }
  };
}

export function add_post_api(post, login, url) {
  return (dispatch) => {
    console.log(UNIVERSAL, "Baseurl...");
    return fetch(UNIVERSAL.BASEURL + "/api/posts", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        date: Date.now(),
        url: url,
        heading: post.heading,
        tags: post.tags,
        author: login._id,
        mainText: post.main_text,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.status === "success") {
          dispatch(get_all_posts());
          dispatch(set_snackbar_message("Post successful"));
          dispatch(set_snackbar_status(true));
          dispatch(set_snackbar_serverity("success"));
          dispatch(unset_post_loader());
          dispatch(reset_post());
        } else {
          if (responseJson.message === "User does not exist") {
            dispatch(unset_post_loader());
          } else {
            dispatch(set_snackbar_message("Something went wrong! try again"));
            dispatch(set_snackbar_status(true));
            dispatch(set_snackbar_serverity("error"));
            dispatch(reset_post());
            dispatch(unset_post_loader());
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function update_post(id, post, login) {
  return (dispatch) => {
    // dispatch(setLoader());
    if (post.img !== "") {
      var storageRef = firebase.storage().ref();
      var uploadTask = storageRef
        .child("posts/" + login.name + ".png")
        .put(post.img);
      uploadTask.on(
        "state_changed",
        function (snapshot) {},
        function (error) {
          // dispatch(set_snack_bar(true, "Image Could Not Be sUploaded"));
        },
        function () {
          uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
            dispatch(update_post_api(id, post, login, downloadURL));
          });
        }
      );
    } else {
      dispatch(update_post_api(id, post, login, post.old_img));
    }
  };
}

export function update_post_api(id, post, login, url) {
  return (dispatch) => {
    // dispatch(setLoader());
    console.log("update action", post);
    return fetch(UNIVERSAL.BASEURL + "/api/posts/", {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        url: url,
        heading: post.heading,
        tags: post.tags,
        mainText: post.main_text,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.status === "success") {
          dispatch(get_all_posts());
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

export function delete_post(id, login) {
  return (dispatch) => {
    // dispatch(setLoader());

    return fetch(UNIVERSAL.BASEURL + "/api/posts", {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        // token: login.token,
      },
      body: JSON.stringify({
        id: id,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.status === "success") {
          dispatch(get_all_posts(login));
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

export function set_post_author(id, post, login) {
  return (dispatch) => {
    console.log("kkkk");
    return fetch(UNIVERSAL.BASEURL + "/api/users/get_user", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        // token: login.token,
      },
      body: JSON.stringify({
        id: id,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.status === "success") {
          dispatch(set_post_author_id(id));
          dispatch(set_post_author_name(responseJson.user.name));
          dispatch(set_post_author_email(responseJson.user.email));
          dispatch(set_post_author_img(responseJson.user.url));
          // dispatch(update_post(post_id, post, login));
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

export function like_post(id, login) {
  return (dispatch) => {
    dispatch(set_like_loader());
    if (!login._id) {
      dispatch(get_post_by_id(id, login));
      dispatch(set_snackbar_message("You must login to like post"));
      dispatch(set_snackbar_status(true));
      dispatch(set_snackbar_serverity("info"));
      dispatch(unset_like_loader());
      return;
    }
    dispatch(toggle_like_btn(true));
    return fetch(UNIVERSAL.BASEURL + "/api/posts/like_post", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        // token: login.token,
      },
      body: JSON.stringify({
        id: id,
        user_id: login._id,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.status === "success") {
          dispatch(get_post_by_id(id, login));
          dispatch(set_snackbar_message("You liked the post"));
          dispatch(set_snackbar_status(true));
          dispatch(set_snackbar_serverity("info"));
          // dispatch(update_post(post_id, post, login));
        } else {
          if (responseJson.message === "User does not exist") {
            // dispatch(onLogout()) ;
          } else {
            dispatch(set_snackbar_message("Something went wrong"));
            dispatch(set_snackbar_status(true));
            dispatch(set_snackbar_serverity("error"));
          }
        }
        dispatch(unset_like_loader());
        dispatch(toggle_like_btn(false));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function unlike_post(id, login) {
  return (dispatch) => {
    dispatch(set_like_loader());
    dispatch(toggle_like_btn(true));
    return fetch(UNIVERSAL.BASEURL + "/api/posts/unlike_post", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        // token: login.token,
      },
      body: JSON.stringify({
        id: id,
        user_id: login._id,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.status === "success") {
          dispatch(get_post_by_id(id, login));
          dispatch(set_snackbar_message("You unliked the post"));
          dispatch(set_snackbar_status(true));
          dispatch(set_snackbar_serverity("warning"));
          // dispatch(update_post(post_id, post, login));
        } else {
          if (responseJson.message === "User does not exist") {
            // dispatch(onLogout()) ;
          } else {
            dispatch(set_snackbar_message("Something went wrong"));
            dispatch(set_snackbar_status(true));
            dispatch(set_snackbar_serverity("error"));
          }
        }
        dispatch(unset_like_loader());
        dispatch(toggle_like_btn(false));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function paginate_post(posts, i) {
  // console.log("hello pagination", posts.splice(0, 12));
  // console.log("hello pagination", posts);
  var tmp = [...posts];
  if (i === 1) {
    tmp = tmp.splice(0, 12);
  } else {
    tmp = tmp.splice(12 * (i - 1), 12 * (i + 1));
  }

  console.log("hh", tmp);

  return {
    type: SET_PAGINATED_POST,
    payload: tmp,
  };
}

export function set_post_author_id(payload) {
  return {
    type: SET_POST_AUTHOR_ID,
    payload: payload,
  };
}

export function set_post_author_name(payload) {
  return {
    type: SET_POST_AUTHOR_NAME,
    payload: payload,
  };
}

export function set_post_author_email(payload) {
  return {
    type: SET_POST_AUTHOR_EMAIL,
    payload: payload,
  };
}

export function set_post_author_img(payload) {
  console.log("1hh", payload);
  return {
    type: SET_POST_AUTHOR_IMG,
    payload: payload,
  };
}

export function set_all_posts(payload) {
  return {
    type: SET_ALL_POST,
    payload: payload,
  };
}

export function set_current_post(payload) {
  return {
    type: SET_CURRENT_POST,
    payload: payload,
  };
}

export function set_post_heading(payload) {
  return {
    type: SET_POST_HEADING,
    payload: payload,
  };
}

export function set_post_main_text(payload) {
  return {
    type: SET_POST_MAIN_TEXT,
    payload: payload,
  };
}

export function set_post_img(payload) {
  return {
    type: SET_POST_IMG,
    payload: payload,
  };
}

export function set_post_old_img(payload) {
  return {
    type: SET_POST_OLD_IMG,
    payload: payload,
  };
}

export function set_post_tags(payload) {
  return {
    type: SET_POST_TAGS,
    payload: payload,
  };
}

export function reset_post() {
  return {
    type: RESET_POST,
  };
}

export function toggle_like_btn(payload) {
  return {
    type: TOGGLE_LIKE_BTN,
    payload: payload,
  };
}
