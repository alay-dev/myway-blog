import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Menu,
  MenuItem,
  Drawer,
  // Accordion,
  // Typography,
  // AccordionSummary,
  // AccordionDetails,
  Dialog,
  // Input,
  InputAdornment,
  IconButton,
  // InputLabel,
  FilledInput,
} from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Loader from "../containers/loader/loaderCont";

import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

import Logo from "../img/logo.png";
import "../css/header.css";

const Header = (props) => {
  const [student_status, setStudentStatus] = useState(false);
  // const [employer, setEmployer] = useState(false);
  // const [business, setBusiness] = useState(false);
  const [el, setEl] = useState(null);
  const [drawer, setDrawer] = useState(false);
  const [login_modal, setLoginModal] = useState(false);
  // const [edit_modal, setEditModal] = useState(false);
  const [visible, setVisible] = useState(false);
  const [register_modal, setRegisterModal] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("mywayblog_login")) {
      props.set_reload_login(
        JSON.parse(localStorage.getItem("mywayblog_login"))
      );
    }
  }, []);

  const handleClickShowPassword = () => {
    setVisible(!visible);
  };

  const handleClose = () => {
    setStudentStatus(false);
    // setEmployer(false);
    // setBusiness(false);
  };

  const {
    user,
    signup,
    login,
    set_user_confirm_password,
    set_user_contact_num,
    set_user_email,
    // set_user_img,
    set_user_name,
    set_user_password,
    // loader,
    set_user_campus_id,
    do_login,
    logout,
  } = props;
  return (
    <div className="header">
      <Link to="/" style={{ textDecoration: "none", color: "#222" }}>
        <div className="header__left">
          <img src={Logo} alt="logo" />
          <p>MyWays</p>
        </div>
      </Link>

      <div className="header__right">
        <i className="fas fa-bars " onClick={() => setDrawer(true)} />
        <ul>
          <li
            onClick={(e) => {
              setStudentStatus(true);
              setEl(e.currentTarget);
            }}
          >
            For Students <ArrowDropDownIcon className="arrow" />
          </li>
          <Menu
            id="simple-menu"
            anchorEl={el}
            anchorOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            keepMounted
            open={student_status}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
          <li>
            For Employers <ArrowDropDownIcon className="arrow" />
          </li>
          <li>
            For Businesses <ArrowDropDownIcon className="arrow" />
          </li>
          {login.type === "A" ? (
            <Link to="/dashboard">
              <li>Dashboard</li>
            </Link>
          ) : (
            ""
          )}
          {login._id ? (
            <li>
              {" "}
              <Button
                className="btn__primary"
                variant="contained"
                onClick={() => logout()}
              >
                Log out
              </Button>
            </li>
          ) : (
            <React.Fragment>
              <li>
                <Button
                  className="btn__secondary"
                  variant="outlined"
                  onClick={() => setLoginModal(true)}
                >
                  Log in
                </Button>
              </li>
              <li>
                {" "}
                <Button
                  className="btn__primary"
                  variant="contained"
                  onClick={() => setRegisterModal(true)}
                >
                  Register
                </Button>
              </li>{" "}
            </React.Fragment>
          )}
        </ul>
      </div>
      <Drawer anchor="right" open={drawer} onClose={() => setDrawer(false)}>
        <div className="drawer__cont">
          <i className="far fa-times-circle" onClick={() => setDrawer(false)} />
          {login._id ? (
            <li>
              {" "}
              <Button
                className="btn__primary"
                variant="contained"
                onClick={() => logout()}
              >
                Log out
              </Button>
            </li>
          ) : (
            <React.Fragment>
              <Button
                className="btn__secondary"
                variant="outlined"
                onClick={() => {
                  setLoginModal(true);
                  setDrawer(false);
                }}
              >
                Log in
              </Button>
              <Button
                className="btn__primary"
                variant="contained"
                onClick={() => {
                  setRegisterModal(true);
                  setDrawer(false);
                }}
              >
                Register
              </Button>
            </React.Fragment>
          )}
          {/* <Accordion
              expanded={this.state.panel === 1}
              onChange={() => this.setState({ panel: 1 })}
            >
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon
                    onClick={() => this.setState({ panel: null })}
                  />
                }
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography>General settings</Typography>
                <Typography>I am an accordion</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                  feugiat. Aliquam eget maximus est, id dignissim quam.
                </Typography>
              </AccordionDetails>
            </Accordion> */}
        </div>
      </Drawer>
      <Dialog
        onClose={() => setLoginModal(false)}
        aria-labelledby="simple-dialog-title"
        open={login_modal}
      >
        <div className="login__cont">
          <h2 style={{ color: "#222", marginBottom: "3rem" }}>Login</h2>
          <Button
            style={{ marginBottom: "1rem" }}
            variant="outlined"
            color="secondary"
            startIcon={<i className="fab fa-google" />}
          >
            Login with google
          </Button>
          <Button
            variant="outlined"
            color="primary"
            startIcon={<i className="fab fa-linkedin" />}
          >
            Login with Linkedin
          </Button>
          <div className="divider__cont">
            <p>OR</p>
          </div>
          <FilledInput
            style={{
              width: "100%",
              height: "2.5rem",
              marginBottom: "0.6rem",
            }}
            placeholder="Email"
            id="standard-adornment-email"
            variant="filled"
            type="text"
            value={user.email}
            onChange={(e) => set_user_email(e.target.value)}
          />
          <FilledInput
            style={{ width: "100%", height: "2.5rem", marginBottom: "1rem" }}
            placeholder="Password"
            id="standard-adornment-password"
            variant="filled"
            type={visible ? "text" : "password"}
            value={user.password}
            onChange={(e) => set_user_password(e.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                >
                  {visible ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
          <Button
            fullWidth
            style={{ backgroundColor: "#3c5a5f", color: "#eee" }}
            onClick={() => {
              do_login(user);
              setLoginModal(false);
            }}
          >
            {" "}
            Login
          </Button>
          <small>Forgot Your password?</small>
          <p>Dont have an account yet? Register</p>
        </div>
      </Dialog>
      <Dialog
        // className="scrollbar"
        onClose={() => {
          setRegisterModal(false);
        }}
        aria-labelledby="simple-dialog-title"
        open={register_modal}
      >
        <div className="login__cont">
          <h2 style={{ color: "#222", marginBottom: "3rem" }}>Register</h2>
          <Button
            style={{ marginBottom: "1rem" }}
            variant="outlined"
            color="secondary"
            startIcon={<i className="fab fa-google" />}
          >
            Sign up with google
          </Button>
          <Button
            variant="outlined"
            color="primary"
            startIcon={<i className="fab fa-linkedin" />}
          >
            Sign up with Linkedin
          </Button>
          <div className="divider__cont">
            <p>OR</p>
          </div>
          <FilledInput
            style={{
              width: "100%",
              height: "2.5rem",
              marginBottom: "0.6rem",
            }}
            placeholder="Full Name"
            id="standard-adornment-email"
            variant="filled"
            type="text"
            value={user.name}
            onChange={(e) => set_user_name(e.target.value)}
          />
          <FilledInput
            style={{
              width: "100%",
              height: "2.5rem",
              marginBottom: "0.6rem",
            }}
            placeholder="Email"
            id="standard-adornment-email"
            variant="filled"
            type="email"
            value={user.email}
            onChange={(e) => set_user_email(e.target.value)}
          />
          <FilledInput
            style={{
              width: "100%",
              height: "2.5rem",
              marginBottom: "0.6rem",
            }}
            placeholder="Phone Number"
            id="standard-adornment-email"
            variant="filled"
            type="text"
            value={user.contact_num}
            onChange={(e) => set_user_contact_num(e.target.value)}
          />
          <FilledInput
            style={{ width: "100%", height: "2.5rem", marginBottom: "1rem" }}
            placeholder="Password"
            id="standard-adornment-password"
            variant="filled"
            type={visible ? "text" : "password"}
            value={user.password}
            onChange={(e) => set_user_password(e.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  // onMouseDown={handleMouseDownPassword}
                >
                  {visible ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
          <FilledInput
            style={{ width: "100%", height: "2.5rem", marginBottom: "1rem" }}
            placeholder="Confirm Password"
            id="standard-adornment-password"
            variant="filled"
            type={visible ? "text" : "password"}
            value={user.confirm_password}
            onChange={(e) => set_user_confirm_password(e.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  // onMouseDown={handleMouseDownPassword}
                >
                  {visible ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
          <FilledInput
            style={{
              width: "100%",
              height: "2.5rem",
              marginBottom: "0.6rem",
            }}
            placeholder="Campus Access ID/Refer Code"
            id="standard-adornment-email"
            variant="filled"
            type="text"
            value={user.campus_id}
            onChange={(e) => set_user_campus_id(e.target.value)}
          />
          <small>By registering, you agree to the Terms & condition</small>
          <Button
            fullWidth
            style={{ backgroundColor: "#3c5a5f", color: "#eee" }}
            onClick={() => {
              signup(user);

              setRegisterModal(false);
            }}
          >
            {" "}
            Register as Candidate
          </Button>
          <p>Already have an account? Login</p>
        </div>
      </Dialog>
      <Loader {...props} />
    </div>
  );
};

export default Header;
