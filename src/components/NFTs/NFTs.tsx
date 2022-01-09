import React from "react";
import classes from "./NFTs.module.css";
import ape from "../../assets/nft.png";
import kitties from "../../assets/cryptokitties.png";
import nft2 from "../../assets/nft2.png";

const NFTs: React.FC = () => {
  return (
    <section className={classes.nfts}>
      <div className={classes.top}>
        <h1>NFTs</h1>
        <p></p>
      </div>
      <header className={classes.section}>
        <div>
          <img src={ape} alt="nft" />
        </div>
        <div className={classes.content}>
          <h2>What is an NFT?</h2>
          <p>
            <strong> NFT’s (Nun-Fungible tokens)</strong> are unique
            cryptographic tokens that exist on the blockchain and cannot be
            replicated. Like money, crypto is fungible meaning that it can be
            traded or exchanged for another.
            <strong>
              For example 1 Bitcoin is always equal in value to another Bitcoin.
            </strong>
          </p>
        </div>
      </header>
      <main className={classes.section}>
        <div className={classes.content}>
          <h2>What are NFT's so valuable?</h2>
          <p>
            Although you may think any digital image is immediately copyable
            with a quick “right-click, save as”,NFTs are based on cryptographic
            technology that does not allow duplication to happen. They are like
            collectors' items such as baseball or pokemon cards are collectables
            in the physical world.
          </p>
        </div>
        <div className={classes.img}>
          <img src={kitties} alt="nft" />
        </div>
      </main>
      <footer className={classes.section}>
        <div className={classes.img}>
          <img src={nft2} alt="nft" />
        </div>
        <div className={classes.content}>
          <h2>What are NFT's so valuable?</h2>
          <p>
            Although you may think any digital image is immediately copyable
            with a quick “right-click, save as”,NFTs are based on cryptographic
            technology that does not allow duplication to happen. They are like
            collectors' items such as baseball or pokemon cards are collectables
            in the physical world.
          </p>
        </div>
      </footer>
      <div className={classes.question}>
        <h2>Are NFT's all Hype and Are They Worth Investing In?</h2>
        <p>
          Are NFTs a good investment? People create, collect and trade NFTs for
          millions of dollars, some with the hopes to profit in the future. But
          experts are still skeptical that NFTs are a good investment. The surge
          in NFTs is still fairly new, but massive amounts of money has already
          exchanged hands among collectors. The most expensive NFT is a digital
          collage of images by Beeple that sold for $69.3 million at a
          Christie's auction in March. Alien Cryptopunks, unique pixel art
          created using algorithms in 2017, dominate the listing of the most
          expensive NFTs.
        </p>
      </div>
    </section>
  );
};

export default NFTs;
