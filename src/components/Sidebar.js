import React, { Component } from "react";
import { Avatar } from "@material-ui/core";

export default class Sidebar extends Component {
  componentDidMount() {
    console.log(this.props.section);
  }
  render() {
    const { login } = this.props;
    return (
      <div className="sidebar">
        <div className="top__cont">
          <Avatar style={{ width: "4rem", height: "4rem" }} />
          <h5 className="mt-2">{login.name}</h5>
        </div>
        <ul>
          <li
            className={this.props.section === "post" ? "active" : ""}
            onClick={() => this.props.setSection("post")}
          >
            Posts
          </li>

          <li
            className={this.props.section === "user" ? "active" : ""}
            onClick={() => this.props.setSection("user")}
          >
            User
          </li>
          <li
            className={this.props.section === "admin" ? "active" : ""}
            onClick={() => this.props.setSection("admin")}
          >
            Admin
          </li>
          <li
            className={this.props.section === "review" ? "active" : ""}
            onClick={() => this.props.setSection("review")}
          >
            Comments
          </li>
        </ul>
      </div>
    );
  }
}
