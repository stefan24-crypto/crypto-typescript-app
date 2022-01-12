import React, { useState } from "react";
import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import logo from "../../assets/cryptocurrency.png";
import hamburger from "../../assets/hamburger.png";

const Navbar: React.FC = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const toggleNav = () => {
    setShowMobileNav((prev: boolean) => !prev);
  };

  const hideNav = () => {
    setShowMobileNav(false);
  };

  return (
    <nav className={classes.nav}>
      <div className={classes.logo}>
        <img src={logo} alt="logo" />
        <h1>
          <span>Crypto</span>Block
        </h1>
      </div>
      <ul
        className={
          showMobileNav
            ? `${classes.links} ${classes.navActive}`
            : classes.links
        }
      >
        <NavLink to="/" className={classes.link} onClick={hideNav}>
          Home
        </NavLink>
        <NavLink to="/all/" className={classes.link} onClick={hideNav}>
          Prices
        </NavLink>
        <NavLink to="/nft/" className={classes.link} onClick={hideNav}>
          NFT's
        </NavLink>
        <NavLink to="/web3/" className={classes.link} onClick={hideNav}>
          Web 3
        </NavLink>
        <NavLink to="/blockchain/" className={classes.link} onClick={hideNav}>
          Blockchain
        </NavLink>
        <NavLink to="/DAAPs/" className={classes.link} onClick={hideNav}>
          DAPPs
        </NavLink>
      </ul>
      <div className={classes.burger} onClick={toggleNav}>
        <img src={hamburger} alt="hamburger" />
      </div>
    </nav>
  );
};

export default Navbar;
