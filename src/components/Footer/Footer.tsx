import React from "react";
import classes from "./Footer.module.css";
import logo from "../../assets/cryptocurrency.png";
import { Link, useLocation } from "react-router-dom";
import Button from "../UI/Button";

const Footer: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <footer className={classes.footer}>
      <div className={classes.logo}>
        <img src={logo} alt="logo" />
        <h1>
          <span>Crypto</span>Block
        </h1>
        {pathname !== "/contact" ? (
          <div className={classes.link}>
            <Link to="/contact">Contact Me</Link>
            {/* <Button>Contact Me</Button> */}
          </div>
        ) : (
          ""
        )}
      </div>
    </footer>
  );
};

export default Footer;
