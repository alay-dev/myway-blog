import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import UserSection from "../components/UserSection";
import AdminSection from "../components/AdminSection";
// import SnackBar from "../components/Snackbar";
import "../css/dashboard.css";
import PostSection from "../components/PostSection";

const Dashboard = (props) => {
  const [section, setSection] = useState("post");
  useEffect(() => {
    props.get_all_users(props.login);
  }, []);

  return (
    <div className="dashboard">
      <Sidebar
        {...props}
        setSection={(value) => {
          setSection(value);
        }}
        section={section}
      />
      <div className="main">
        {section === "post" ? <PostSection {...props} /> : ""}
        {section === "user" ? <UserSection {...props} /> : ""}
        {section === "admin" ? <AdminSection {...props} /> : ""}
      </div>
      {/* <SnackBar {...this.props} /> */}
    </div>
  );
};

export default Dashboard;
