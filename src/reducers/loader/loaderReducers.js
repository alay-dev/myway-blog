import {
  SET_ALL_POSTS_LOADER,
  SET_COMMENT_LOADER,
  SET_LIKE_LOADER,
  SET_POST_LOADER,
  UNSET_ALL_POSTS_LOADER,
  UNSET_COMMENT_LOADER,
  UNSET_LIKE_LOADER,
  UNSET_POST_LOADER,
  SET_LOGIN_LOADER,
  UNSET_LOGIN_LOADER,
  SET_UPDATE_PROFILE_LOADER,
  SET_UPDATE_PASSWORD_LOADER,
  SET_DELETE_LOADER,
  UNSET_UPDATE_PROFILE_LOADER,
  UNSET_UPDATE_PASSWORD_LOADER,
  UNSET_DELETE_LOADER,
} from "../../constants/loader/loaderConst";

const initial_state = {
  all_posts_loader: false,
  post_loader: false,
  comment_loader: false,
  like_loader: false,
  login_loader: false,
  update_password_loader: false,
  update_profile_loader: false,
  delete_loader: false,
};

export default function reducer(state = initial_state, action) {
  switch (action.type) {
    case SET_ALL_POSTS_LOADER:
      return (state = { ...state, all_posts_loader: true });
    case UNSET_ALL_POSTS_LOADER:
      return (state = { ...state, all_posts_loader: false });
    case SET_POST_LOADER:
      return (state = { ...state, post_loader: true });
    case UNSET_POST_LOADER:
      return (state = { ...state, post_loader: false });
    case SET_COMMENT_LOADER:
      return (state = { ...state, comment_loader: true });
    case UNSET_COMMENT_LOADER:
      return (state = { ...state, comment_loader: false });
    case SET_LIKE_LOADER:
      return (state = { ...state, like_loader: true });
    case UNSET_LIKE_LOADER:
      return (state = { ...state, like_loader: false });
    case SET_LOGIN_LOADER:
      return (state = { ...state, login_loader: true });
    case UNSET_LOGIN_LOADER:
      return (state = { ...state, login_loader: false });
    case SET_UPDATE_PROFILE_LOADER:
      return (state = { ...state, update_profile_loader: true });
    case UNSET_UPDATE_PROFILE_LOADER:
      return (state = { ...state, update_profile_loader: false });
    case SET_UPDATE_PASSWORD_LOADER:
      return (state = { ...state, update_password_loader: true });
    case UNSET_UPDATE_PASSWORD_LOADER:
      return (state = { ...state, update_password_loader: false });
    case SET_DELETE_LOADER:
      return (state = { ...state, delete_loader: true });
    case UNSET_DELETE_LOADER:
      return (state = { ...state, delete_loader: false });
    default:
      return state;
  }
}
