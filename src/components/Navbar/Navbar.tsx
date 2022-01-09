import React from "react";
import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import logo from "../../assets/cryptocurrency.png";

const Navbar: React.FC = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.logo}>
        <img src={logo} alt="logo" />
        <h1>
          <span>Crypto</span>Block
        </h1>
      </div>
      <ul className={classes.links}>
        <NavLink to="/" className={classes.link}>
          Home
        </NavLink>
        <NavLink to="/all/" className={classes.link}>
          All
        </NavLink>
        <NavLink to="/nft/" className={classes.link}>
          NFT's
        </NavLink>
        <NavLink to="/web3/" className={classes.link}>
          Web 3
        </NavLink>
        <NavLink to="/blockchain/" className={classes.link}>
          Blockchain
        </NavLink>
        <NavLink to="/DAAPs/" className={classes.link}>
          DAPPS
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
