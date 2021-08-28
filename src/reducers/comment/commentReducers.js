import {
  SET_COMMENT,
  SET_COMMENT_USER_NAME,
  SET_ALL_COMMENT,
  SET_COMMENT_USER_IMG,
  RESET_COMMENT,
} from "../../constants/comments/commentConst";

const initial_state = {
  all_comment: [],
  user_id: "",
  user_img: "",
  user_name: "",
  comment: "",
};

export default function reducer(state = initial_state, action) {
  switch (action.type) {
    case SET_ALL_COMMENT:
      return (state = { ...state, all_comment: action.payload });
    case SET_COMMENT:
      return (state = { ...state, comment: action.payload });
    case SET_COMMENT_USER_NAME:
      return (state = { ...state, user_name: action.payload });
    case SET_COMMENT_USER_IMG:
      return (state = { ...state, user_img: action.payload });
    case RESET_COMMENT:
      return (state = {
        ...state,
        user_name: "",
        user_img: "",
        comment: "",
      });
    default:
      return state;
  }
}
