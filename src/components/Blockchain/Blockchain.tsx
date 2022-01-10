import React from "react";
import classes from "./Blockchain.module.css";
import btc from "../../assets/bitcoin.png";
import mining from "../../assets/mining.png";
import node from "../../assets/nodes.png";
import cryptography from "../../assets/cryptography.png";
import blockchain from "../../assets/blockchain-header.png";

const Blockchain: React.FC = () => {
  return (
    <section className={classes.section}>
      <header className={classes.header}>
        <h1>Blockchain</h1>
        <div className={classes.img}>
          <img src={blockchain} alt="header" />
        </div>
        <div className={classes.text}>
          <p>
            Blockchain technology might be one of the most-hyped innovations of
            the 21st century. A blockchain is a public digital ledger of
            transactions maintained by a network of computers in a way that
            makes it difficult to have or alter. The technology offers a secure
            way for individuals to deal directly with each other without outside
            interference such as the government.
            <br />
            <br />
            The growing list of records, called blocks, is linked together using
            cryptography. Each transaction is independently verified by
            peer-to–peer computer networks, time-stamped and added to a growing
            chain of data. Once recorded it cannot be altered.
          </p>
        </div>
      </header>
      <main className={classes.main}>
        <div className={classes.heading}>
          <h2>How does It Work?</h2>
        </div>
        <div className={classes.grid}>
          <div className={classes.card}>
            <header className={classes.top}>
              <div>
                <img src={btc} alt="icon" />
              </div>
              <h3>Step 1</h3>
            </header>
            <p>
              Using Bitcoin as an example, the purchase and sale of bitcoin is
              entered and transmitted to a network of powerful computers, known
              as nodes.
            </p>
          </div>
          <div className={classes.card}>
            <header className={classes.top}>
              <div>
                <img src={mining} alt="icon" />
              </div>
              <h3>Step 2</h3>
            </header>
            <p>
              This network of thousands of nodes around the world views to
              confirm the transaction using computer algorithms. This is known
              as bitcoin mining, The miner who first successfully completes a
              new block is rewarded with bitcoin for their work.
            </p>
          </div>
          <div className={classes.card}>
            <header className={classes.top}>
              <div>
                <img src={node} alt="icon" />
              </div>
              <h3>Step 3</h3>
            </header>
            <p>
              After the purchase is cryptographically confirmed, the sale is
              added to a block on the distributed ledger, The majority of the
              network must then confirm the sale.
            </p>
          </div>
          <div className={classes.card}>
            <header className={classes.top}>
              <div>
                <img src={cryptography} alt="icon" />
              </div>
              <h3>Step 4</h3>
            </header>
            <p>
              The block is permanently chained to all previous blocks of bitcoin
              transactions, using a cryptographic fingerprint known as a hash,
              and the sale is processed.
            </p>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Blockchain;
