import React, { useRef } from "react";
import classes from "./DAPPs.module.css";
import img from "../../assets/web-3.png";
import dapp1 from "../../assets/dapp1.png";
import dapp2 from "../../assets/dapp2.png";
import dapp3 from "../../assets/dapp3.png";
import dapp4 from "../../assets/dapp4.png";
import dapp5 from "../../assets/dapp5.png";
import dapp6 from "../../assets/dapp6.png";
import dapp7 from "../../assets/dapp7.png";
import dapp8 from "../../assets/dapp8.png";

const DAPPs: React.FC = () => {
  const leftDiv = useRef<HTMLDivElement>(null);
  const rightDiv = useRef<HTMLDivElement>(null);

  // const getRandomPosition = () => {
  //   const rightDivProperties = rightDiv.current?.getBoundingClientRect();
  //   const leftDivProperties = leftDiv.current?.getBoundingClientRect();
  //   console.log(rightDivProperties);
  // };

  // getRandomPosition();

  return (
    <section>
      <div className={classes.heading}>
        <h1>DAPPs</h1>
      </div>
      <header className={classes.header}>
        <div ref={leftDiv} className={classes.right}>
          <img src={dapp1} className={classes.img} alt="dapp" />
          <img src={dapp2} className={classes.img} alt="dapp" />
          <img src={dapp3} className={classes.img} alt="dapp" />
          <img src={dapp4} className={classes.img} alt="dapp" />
        </div>
        <img src={img} alt="header" />
        <div ref={rightDiv} className={classes.left}>
          <img src={dapp5} className={classes.img} alt="dapp" />
          <img src={dapp6} className={classes.img} alt="dapp" />
          <img src={dapp7} className={classes.img} alt="dapp" />
          <img src={dapp8} className={classes.img} alt="dapp" />
        </div>
      </header>
      <main></main>
    </section>
  );
};

export default DAPPs;
