import React from "react";
import classes from "./Web3.module.css";
import authentication from "../../assets/authentication.png";
import backend from "../../assets/backend.png";
import web3 from "../../assets/web_3.png";
import Aos from "aos";

const Web3 = () => {
  Aos.init({ duration: 1000 });
  return (
    <section className={classes.section}>
      <header className={classes.header}>
        <div className={classes.content}>
          <h1>Web 3</h1>
          <p>
            Web 3 is a decentralized but secure internet where people can
            exchange money and information without the need for an unnecessary
            middleman such as a bank or tech corporation. Rather than just using
            free tech platforms like facebook in exchange for our data, users
            can participate in the governance and operation of the protocpls
            themselves. Essentially, this means that your data is under your
            control!
          </p>
        </div>
        <div className={classes.img}>
          <img
            src="https://cdn-images-1.medium.com/fit/t/1600/480/1*3h53YpX0eybU1hzDk7LHSw.gif"
            alt="gif"
          />
        </div>
      </header>
      <main className={classes.main}>
        <div className={classes.card} data-aos="fade-up">
          <div className={classes.heading}>
            <h2>How would User Authentication work?</h2>
            <div className={classes.icon}>
              <img src={authentication} alt="icon" />
            </div>
          </div>
          <p>
            Unlike web 2.0, the end user owns all their data. There is no need
            for you as the developer to collect an email and password. The end
            user has a public wallet address that can receive payments and a
            private key that can sign transactions to send payments to someone
            else.The user can connect their wallet to a browser plugin like
            metamask. Your front-end application like a react-app for example
            can then interact with that user’s wallet to do something in the UI
            like buy an NFT.
          </p>
        </div>
        <div className={classes.card} data-aos="fade-up" data-aos-delay="100">
          <div className={classes.heading}>
            <h2>How would the backend work?</h2>
            <div className={classes.icon}>
              <img src={backend} alt="icon" />
            </div>
          </div>
          <p>
            Instead of a server and database, you will be writing smart
            contracts. The programming language used to write these smart
            contracts will be Solidity. All your data is not stored on the
            blockchain as this data is read-only but rather stored on off-chain
            storage. In some cases data might be too large to store on the
            blockchain or it might need to be modified or deleted where it is
            not possible on the blockchain.
          </p>
        </div>
      </main>
      <div className={classes.web3}>
        <img src={web3} alt="web3" />
      </div>
      <div className={classes.h2}>
        <h2>Evolution of The Web</h2>
      </div>
      <div className={classes.evolution}>
        <div className={classes.div}>
          <h2>1.0</h2>
          <span>1990 - 2000</span>
          <p>
            Web 1.0 refers to the first stage of the World Wide Web evolution.
            Earlier, there were only a few content creators in Web 1.0 with a
            huge majority of users who are consumers of content.
          </p>
        </div>
        <div className={classes.div}>
          <h2>2.0</h2>
          <span>2000 - now</span>
          <p>
            Web 2.0 refers to worldwide websites which highlight user-generated
            content, usability, and interoperability for end users. Web 2.0 is
            also called the participative social web. It does not refer to a
            modification to any technical specification, but to modify the way
            Web pages are designed and used
          </p>
        </div>
        <div className={classes.div}>
          <h2>3.0</h2>
          <span>now - whenever</span>
          <p>
            It refers to the evolution of web utilization and interaction which
            includes altering the Web into a database. It enables the
            up-gradation of the back-end of the web, after a long time of focus
            on the front-end (Web 2.0 has mainly been about AJAX, tagging, and
            another front-end user-experience innovation).
          </p>
        </div>
      </div>
    </section>
  );
};

export default Web3;
