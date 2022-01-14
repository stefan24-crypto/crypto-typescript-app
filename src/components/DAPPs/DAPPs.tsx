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
import Button2 from "../UI/Button2";

const DAPPs: React.FC = () => {
  const leftDiv = useRef<HTMLDivElement>(null);
  const rightDiv = useRef<HTMLDivElement>(null);

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
        <img src={img} alt="header" className={classes.phone} />
        <div ref={rightDiv} className={classes.left}>
          <img src={dapp5} className={classes.img} alt="dapp" />
          <img src={dapp6} className={classes.img} alt="dapp" />
          <img src={dapp7} className={classes.img} alt="dapp" />
          <img src={dapp8} className={classes.img} alt="dapp" />
        </div>
      </header>
      <main className={classes.main}>
        <div className={classes.two}>
          <div className={classes.dapps}>
            <h2>How do DAPPs work?</h2>
            <p>
              For example Ethereum Blockchain: Ethereum is like a giant network
              of computers where all the participants agree on the same state of
              the data throughout the network. Ether is the crypto currency on
              the ethereum network which is used to create transactions that
              change the state of the data. When you broadcast a transaction you
              also offer up a small amount of ether which provides incentive for
              another computer in the network to execute the transaction. A
              decentralized app also needs a front-end which works just like
              before. However user authentication works in a completely
              different way.
            </p>
          </div>
          <div className={classes.defi}>
            <h2>What is DEFI?</h2>
            <p>
              Defi stands fro Decentralized Finance. In the past we have always
              used centralized finance which is means that there was a central
              authority to control the flow of money for example the government
              and banks. In the world of decentralized finance, instead of banks
              there are pieces of code that run and act as a bank. They code is
              open to everyone and they are also much cheaper than centralized
              finance. Defi is built on three main principles. Cryptography, the
              blockchain and smart contracts.
            </p>
          </div>
        </div>
      </main>
      <footer>
        <Button2
          onClick={() =>
            window.open(
              "https://www.youtube.com/watch?v=nHhAEkG1y2U&t=436s",
              "_blank"
            )
          }
        >
          Learn More
        </Button2>
      </footer>
    </section>
  );
};

export default DAPPs;
