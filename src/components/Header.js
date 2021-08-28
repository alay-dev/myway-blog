import React, { Component } from "react";
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

import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

import Logo from "../img/logo.png";
import "../css/header.css";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      student_status: false,
      employer: false,
      business: false,
      el: null,
      drawer: false,
      login_modal: false,
      visible: false,
      register_modal: false,
    };
  }

  componentDidMount() {
    if (localStorage.getItem("mywayblog_login")) {
      this.props.set_reload_login(
        JSON.parse(localStorage.getItem("mywayblog_login"))
      );
    }
  }

  handleClickShowPassword = () => {
    this.setState({
      visible: !this.state.visible,
    });
  };

  handleClose = () => {
    this.setState({
      student_status: false,
      employer: false,
      business: false,
    });
  };
  render() {
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
    } = this.props;
    return (
      <div className="header">
        <Link to="/" style={{ textDecoration: "none", color: "#222" }}>
          <div className="header__left">
            <img src={Logo} alt="logo" />
            <p>MyWays</p>
          </div>
        </Link>

        <div className="header__right">
          <i
            className="fas fa-bars "
            onClick={() => this.setState({ drawer: true })}
          />
          <ul>
            <li
              onClick={(e) => {
                this.setState({ student_status: true, el: e.currentTarget });
                console.log(this.state.el);
              }}
            >
              For Students <ArrowDropDownIcon className="arrow" />
            </li>
            <Menu
              id="simple-menu"
              anchorEl={this.state.el}
              anchorOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
              keepMounted
              open={this.state.student_status}
              onClose={this.handleClose}
            >
              <MenuItem onClick={this.handleClose}>Profile</MenuItem>
              <MenuItem onClick={this.handleClose}>My account</MenuItem>
              <MenuItem onClick={this.handleClose}>Logout</MenuItem>
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
                    onClick={() => this.setState({ login_modal: true })}
                  >
                    Log in
                  </Button>
                </li>
                <li>
                  {" "}
                  <Button
                    className="btn__primary"
                    variant="contained"
                    onClick={() => this.setState({ register_modal: true })}
                  >
                    Register
                  </Button>
                </li>{" "}
              </React.Fragment>
            )}
          </ul>
        </div>
        <Drawer
          anchor="right"
          open={this.state.drawer}
          onClose={() => this.setState({ drawer: false })}
        >
          <div className="drawer__cont">
            <i
              className="far fa-times-circle"
              onClick={() => this.setState({ drawer: false })}
            />
            <Button
              className="btn__secondary"
              variant="outlined"
              onClick={() => this.setState({ login_modal: true })}
            >
              Log in
            </Button>
            <Button className="btn__primary" variant="contained">
              Register
            </Button>
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
          onClose={() => this.setState({ login_modal: false })}
          aria-labelledby="simple-dialog-title"
          open={this.state.login_modal}
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
              type={this.state.visible ? "text" : "password"}
              value={user.password}
              onChange={(e) => set_user_password(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={this.handleClickShowPassword}
                  >
                    {this.state.visible ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
            <Button
              fullWidth
              style={{ backgroundColor: "#3c5a5f", color: "#eee" }}
              onClick={() => {
                do_login(user);
                this.setState({ login_modal: false });
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
          onClose={() => this.setState({ register_modal: false })}
          aria-labelledby="simple-dialog-title"
          open={this.state.register_modal}
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
              type={this.state.visible ? "text" : "password"}
              value={user.password}
              onChange={(e) => set_user_password(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={this.handleClickShowPassword}
                    // onMouseDown={handleMouseDownPassword}
                  >
                    {this.state.visible ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
            <FilledInput
              style={{ width: "100%", height: "2.5rem", marginBottom: "1rem" }}
              placeholder="Confirm Password"
              id="standard-adornment-password"
              variant="filled"
              type={this.state.visible ? "text" : "password"}
              value={user.confirm_password}
              onChange={(e) => set_user_confirm_password(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={this.handleClickShowPassword}
                    // onMouseDown={handleMouseDownPassword}
                  >
                    {this.state.visible ? <Visibility /> : <VisibilityOff />}
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

                this.setState({ edit_modal: false });
              }}
            >
              {" "}
              Register as Candidate
            </Button>
            <p>Already have an account? Login</p>
          </div>
        </Dialog>
      </div>
    );
  }
}
