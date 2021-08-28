import {
  SET_USER_EMAIL,
  SET_USER_NAME,
  SET_USER_CONTACT_NUM,
  SET_USER_CONFIRM_PASSWORD,
  SET_USER_CURRENT_PASSWORD,
  SET_USER_PASSWORD,
  SET_USER_IMG,
  SET_USER_OLD_IMG,
  RESET_USER,
  SET_ALL_USER,
  SET_USER_CAMPUS_ID,
} from "../../constants/user/userConst";

const initial_state = {
  all_users: [],
  email: "",
  name: "",
  contact_num: "",
  password: "",
  confirm_password: "",
  current_password: "",
  img: "",
  old_img: "",
  campus_id: "",
};

export default function reducer(state = initial_state, action) {
  switch (action.type) {
    case SET_ALL_USER:
      return (state = { ...state, all_users: action.payload });
    case SET_USER_NAME:
      return (state = { ...state, name: action.payload });
    case SET_USER_EMAIL:
      return (state = { ...state, email: action.payload });
    case SET_USER_IMG:
      return (state = { ...state, img: action.payload });
    case SET_USER_OLD_IMG:
      return (state = { ...state, old_img: action.payload });
    case SET_USER_CONTACT_NUM:
      return (state = { ...state, contact_num: action.payload });
    case SET_USER_CURRENT_PASSWORD:
      return (state = { ...state, current_password: action.payload });
    case SET_USER_PASSWORD:
      return (state = { ...state, password: action.payload });
    case SET_USER_CONFIRM_PASSWORD:
      return (state = { ...state, confirm_password: action.payload });
    case SET_USER_CAMPUS_ID: {
      return (state = { ...state, campus_id: action.payload });
    }
    case RESET_USER:
      return (state = {
        email: "",
        name: "",
        contact_num: "",
        password: "",
        confirm_password: "",
        current_password: "",
        img: "",
        old_img: "",
        campus_id: "",
      });
    default:
      return state;
  }
}
