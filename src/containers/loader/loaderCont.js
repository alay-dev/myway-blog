import { Component } from "react";
import Loader from "../../components/Loader";
// import {} from "../../actions/login/loginActions";
import { connect } from "react-redux";

class LoaderCont extends Component {
  render() {
    return <Loader {...this.props} />;
  }
}

const mapStateToProps = (store) => {
  return {
    login: store.login,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapDispatchToProps, mapStateToProps)(LoaderCont);
