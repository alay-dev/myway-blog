import {
  SET_SNACKBAR_SEVERITY,
  SET_SNACKBAR_STATUS,
  SET_SNACKBAR_MESSAGE,
} from "../../constants/snackbar/snackbarConst";

const initial_state = {
  status: false,
  severity: "",
  message: "",
};

export default function reducer(state = initial_state, action) {
  switch (action.type) {
    case SET_SNACKBAR_STATUS:
      return (state = { ...state, status: action.payload });
    case SET_SNACKBAR_SEVERITY:
      return (state = { ...state, severity: action.payload });
    case SET_SNACKBAR_MESSAGE:
      return (state = { ...state, message: action.payload });
    default:
      return state;
  }
}
