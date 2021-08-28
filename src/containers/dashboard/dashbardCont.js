import { Component } from "react";
import Dashboard from "../../pages/Dashboard";
import { set_snackbar_status } from "../../actions/snackbar/snackbarActions";
import { get_all_users } from "../../actions/user/userActions";
import { connect } from "react-redux";
import {
  add_post,
  set_post_author,
  set_post_heading,
  set_post_img,
  set_post_main_text,
  set_post_old_img,
  set_post_tags,
  get_all_posts,
  delete_post,
  update_post,
} from "../../actions/posts/postActions";

class DashboardCont extends Component {
  render() {
    return <Dashboard {...this.props} />;
  }
}

const mapStateToProps = (store) => {
  return {
    login: store.login,
    loader: store.loader,
    snackbar: store.snackbar,
    user: store.user,
    post: store.post,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    set_snackbar_status: (status) => {
      dispatch(set_snackbar_status(status));
    },
    get_all_users: (login) => {
      dispatch(get_all_users(login));
    },
    get_all_posts: (login) => {
      dispatch(get_all_posts(login));
    },
    add_post: (post, login) => {
      dispatch(add_post(post, login));
    },
    set_post_author: (author) => {
      dispatch(set_post_author(author));
    },
    set_post_heading: (heading) => {
      dispatch(set_post_heading(heading));
    },
    set_post_img: (img) => {
      dispatch(set_post_img(img));
    },
    set_post_main_text: (txt) => {
      dispatch(set_post_main_text(txt));
    },
    update_post: (id, post, login) => {
      dispatch(update_post(id, post, login));
    },
    set_post_old_img: (img) => {
      dispatch(set_post_old_img(img));
    },
    delete_post: (id) => {
      dispatch(delete_post(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardCont);
