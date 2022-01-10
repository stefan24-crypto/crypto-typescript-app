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
      </div>
      {/* <div className={classes.sources}>
        <p>Got info from:</p>
        <li>
          <span>Whiteboard Crypto on Youtube</span>
          <a href="https://www.youtube.com/channel/UCsYYksPHiGqXHPoHI-fm5sg">
            here
          </a>
        </li>
        <li>
          <span>Fireship on Youtube</span>
          <a href="https://www.youtube.com/channel/UCsBjURrPoezykLs9EqgamOA">
            here
          </a>
        </li>
      </div> */}
    </footer>
  );
};

export default Footer;
