import { LOGIN, LOGOUT, RELOAD_LOGIN } from "../../constants/login/loginConst";

const initial_state = {};

export default function reducer(state = initial_state, action) {
  switch (action.type) {
    case LOGIN:
      return (state = { ...action.payload });
    case RELOAD_LOGIN:
      return (state = { ...action.payload });
    case LOGOUT:
      return (state = {});
    default:
      return state;
  }
}
