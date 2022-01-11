import React from "react";
import classes from "./Web3.module.css";
import authentication from "../../assets/authentication.png";
import backend from "../../assets/backend.png";

const Web3 = () => {
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
        <div className={classes.card}>
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
        <div className={classes.card}>
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
    </section>
  );
};

export default Web3;
