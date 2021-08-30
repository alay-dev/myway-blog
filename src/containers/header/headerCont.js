import Header from "../../components/Header";
import { set_snackbar_status } from "../../actions/snackbar/snackbarActions";
import {
  set_user_email,
  set_user_password,
  do_login,
  set_reload_login,
  logout,
  signup,
  set_user_confirm_password,
  set_user_contact_num,
  set_user_img,
  set_user_name,
  add_admin,
} from "../../actions/login/loginActions";
import { set_user_campus_id } from "../../actions/user/userActions";

import { connect } from "react-redux";

const HeaderCont = (props) => {
  return <Header {...props} />;
};

const mapStateToProps = (store) => {
  return {
    login: store.login,
    post: store.post,
    loader: store.loader,
    user: store.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    do_login: (user) => {
      dispatch(do_login(user));
    },
    set_snackbar_status: (status) => {
      dispatch(set_snackbar_status(status));
    },
    set_reload_login: (payload) => {
      dispatch(set_reload_login(payload));
    },
    logout: () => {
      dispatch(logout());
    },
    signup: (user) => {
      dispatch(signup(user));
    },
    set_user_name: (name) => {
      dispatch(set_user_name(name));
    },
    set_user_email: (email) => {
      dispatch(set_user_email(email));
    },
    set_user_contact_num: (contact_num) => {
      dispatch(set_user_contact_num(contact_num));
    },
    set_user_img: (img) => {
      dispatch(set_user_img(img));
    },
    set_user_password: (password) => {
      dispatch(set_user_password(password));
    },
    set_user_confirm_password: (confirm_password) => {
      dispatch(set_user_confirm_password(confirm_password));
    },
    set_user_campus_id: (id) => {
      dispatch(set_user_campus_id(id));
    },
    add_admin: (user) => {
      dispatch(add_admin(user));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderCont);
