import {
  SET_POST_LOADER,
  SET_LIKE_LOADER,
  SET_COMMENT_LOADER,
  SET_ALL_POSTS_LOADER,
  UNSET_POST_LOADER,
  UNSET_LIKE_LOADER,
  UNSET_COMMENT_LOADER,
  UNSET_ALL_POSTS_LOADER,
  SET_LOGIN_LOADER,
  UNSET_LOGIN_LOADER,
  SET_DELETE_LOADER,
  SET_UPDATE_PASSWORD_LOADER,
  SET_UPDATE_PROFILE_LOADER,
  UNSET_DELETE_LOADER,
  UNSET_UPDATE_PASSWORD_LOADER,
  UNSET_UPDATE_PROFILE_LOADER,
} from "../../constants/loader/loaderConst";

export function set_all_post_loader(payload) {
  return {
    type: SET_ALL_POSTS_LOADER,
    payload: payload,
  };
}

export function unset_all_post_loader(payload) {
  return {
    type: UNSET_ALL_POSTS_LOADER,
    payload: payload,
  };
}

export function set_post_loader(payload) {
  return {
    type: SET_POST_LOADER,
    payload: payload,
  };
}

export function unset_post_loader(payload) {
  return {
    type: UNSET_POST_LOADER,
    payload: payload,
  };
}

export function set_comment_loader(payload) {
  return {
    type: SET_COMMENT_LOADER,
    payload: payload,
  };
}

export function unset_comment_loader(payload) {
  return {
    type: UNSET_COMMENT_LOADER,
    payload: payload,
  };
}

export function set_like_loader(payload) {
  return {
    type: SET_LIKE_LOADER,
    payload: payload,
  };
}

export function unset_like_loader(payload) {
  return {
    type: UNSET_LIKE_LOADER,
    payload: payload,
  };
}

export function set_login_loader(payload) {
  return {
    type: SET_LOGIN_LOADER,
    payload: payload,
  };
}

export function unset_login_loader(payload) {
  return {
    type: UNSET_LOGIN_LOADER,
    payload: payload,
  };
}

export function set_update_profile_loader(payload) {
  return {
    type: SET_UPDATE_PROFILE_LOADER,
    payload: payload,
  };
}

export function unset_update_profile_loader(payload) {
  return {
    type: UNSET_UPDATE_PROFILE_LOADER,
    payload: payload,
  };
}

export function set_update_password_loader(payload) {
  return {
    type: SET_UPDATE_PASSWORD_LOADER,
    payload: payload,
  };
}

export function unset_update_password_loader(payload) {
  return {
    type: UNSET_UPDATE_PASSWORD_LOADER,
    payload: payload,
  };
}

export function set_delete_loader(payload) {
  return {
    type: SET_DELETE_LOADER,
    payload: payload,
  };
}

export function unset_delete_loader(payload) {
  return {
    type: UNSET_DELETE_LOADER,
    payload: payload,
  };
}
