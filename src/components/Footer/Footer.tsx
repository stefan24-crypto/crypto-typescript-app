import React from "react";
import classes from "./Footer.module.css";
import logo from "../../assets/cryptocurrency.png";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.logo}>
        <img src={logo} alt="logo" />
        <h1>
          <span>Crypto</span>Block
        </h1>
        <div className={classes.link}>
          <Link to="/contact">Contact Me</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
