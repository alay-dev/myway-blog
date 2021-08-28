import React, { Component } from "react";
import Sidebar from "../components/Sidebar";
import UserSection from "../components/UserSection";
import AdminSection from "../components/AdminSection";
// import SnackBar from "../components/Snackbar";
import "../css/dashboard.css";
import PostSection from "../components/PostSection";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { section: "post" };
  }
  componentDidMount() {
    console.log(this.props);
    this.props.get_all_users(this.props.login);
  }

  render() {
    return (
      <div className="dashboard">
        <Sidebar
          {...this.props}
          setSection={(value) => {
            this.setState({ section: value });
          }}
          section={this.state.section}
        />
        <div className="main">
          {this.state.section === "post" ? <PostSection {...this.props} /> : ""}
          {this.state.section === "user" ? <UserSection {...this.props} /> : ""}
          {this.state.section === "admin" ? (
            <AdminSection {...this.props} />
          ) : (
            ""
          )}
        </div>
        {/* <SnackBar {...this.props} /> */}
      </div>
    );
  }
}
