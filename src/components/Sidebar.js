import React from "react";
import { Avatar } from "@material-ui/core";

const Sidebar = (props) => {
  const { login } = props;
  return (
    <div className="sidebar">
      <div className="top__cont">
        <Avatar style={{ width: "4rem", height: "4rem" }} />
        <h5 className="mt-2">{login.name}</h5>
      </div>
      <ul>
        <li
          className={props.section === "post" ? "active" : ""}
          onClick={() => props.setSection("post")}
        >
          Posts
        </li>

        <li
          className={props.section === "user" ? "active" : ""}
          onClick={() => props.setSection("user")}
        >
          User
        </li>
        <li
          className={props.section === "admin" ? "active" : ""}
          onClick={() => props.setSection("admin")}
        >
          Admin
        </li>
        <li
          className={props.section === "review" ? "active" : ""}
          onClick={() => props.setSection("review")}
        >
          Comments
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
