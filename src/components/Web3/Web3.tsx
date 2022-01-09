import React from "react";
import classes from "./Web3.module.css";

const Web3 = () => {
  return (
    <section className={classes.section}>
      <header className={classes.header}>
        <div className={classes.content}>
          <h1>Web 3</h1>
          <p></p>
        </div>
        <div className={classes.img}>
          <img
            src="https://cdn-images-1.medium.com/fit/t/1600/480/1*3h53YpX0eybU1hzDk7LHSw.gif"
            alt="gif"
          />
        </div>
      </header>
    </section>
  );
};

export default Web3;
