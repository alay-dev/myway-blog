import Loader from "../../components/Loader";
// import {} from "../../actions/login/loginActions";
import { connect } from "react-redux";

const LoaderCont = (props) => {
  return <Loader {...props} />;
};

const mapStateToProps = (store) => {
  return {
    login: store.login,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapDispatchToProps, mapStateToProps)(LoaderCont);
