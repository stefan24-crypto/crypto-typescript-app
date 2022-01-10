import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import classes from "./Layout.module.css";

const Layout: React.FC = ({ children }) => {
  return (
    <section>
      <Navbar />
      <main className={classes.main}>{children}</main>
      <Footer />
    </section>
  );
};

export default Layout;
