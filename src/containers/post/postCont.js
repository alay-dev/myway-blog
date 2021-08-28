import { Component } from "react";
import Post from "../../pages/Post";
import { set_snackbar_status } from "../../actions/snackbar/snackbarActions";
import { get_post_by_id } from "../../actions/posts/postActions";
import { add_comment, set_comment } from "../../actions/comment/commentAction";
import { connect } from "react-redux";

class HomeCont extends Component {
  render() {
    return <Post {...this.props} />;
  }
}

const mapStateToProps = (store) => {
  return {
    login: store.login,
    post: store.post,
    loader: store.loader,
    snackbar: store.snackbar,
    comment: store.comment,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    set_snackbar_status: (payload) => {
      dispatch(set_snackbar_status(payload));
    },
    get_post_by_id: (id) => {
      dispatch(get_post_by_id(id));
    },
    add_comment: (id, comment, login) => {
      dispatch(add_comment(id, comment, login));
    },
    set_comment: (comment) => {
      dispatch(set_comment(comment));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeCont);
