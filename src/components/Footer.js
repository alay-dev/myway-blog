import React from "react";
import Logo from "../img/logo.png";
import "../css/footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__left">
        <div className="logo__cont">
          <img src={Logo} alt="logo" />
          <p>MyWays</p>
        </div>
        <div className="footer__left--bottom">
          <p>Terms</p>
          <p>Privacy Policy</p>
        </div>
      </div>
      <div className="logo__right"></div>
    </div>
  );
};

export default Footer;
