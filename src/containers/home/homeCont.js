import { Component } from "react";
import Home from "../../pages/Home";
import { set_snackbar_status } from "../../actions/snackbar/snackbarActions";
import { get_all_posts, paginate_post } from "../../actions/posts/postActions";
import { contact_us } from "../../actions/user/userActions";
import { connect } from "react-redux";

class HomeCont extends Component {
  render() {
    return <Home {...this.props} />;
  }
}

const mapStateToProps = (store) => {
  return {
    login: store.login,
    post: store.post,
    loader: store.loader,
    snackbar: store.snackbar,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    get_all_posts: () => {
      dispatch(get_all_posts());
    },
    set_snackbar_status: (payload) => {
      dispatch(set_snackbar_status(payload));
    },
    paginate_post: (posts, i) => {
      dispatch(paginate_post(posts, i));
    },
    contact_us: (name, email, message) => {
      dispatch(contact_us(name, email, message));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeCont);
