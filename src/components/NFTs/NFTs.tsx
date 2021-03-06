import React from "react";
import classes from "./NFTs.module.css";
import ape from "../../assets/nft.png";
import kitties from "../../assets/cryptokitties.png";
import nft2 from "../../assets/nft2.png";
import nft from "../../assets/nfticon.png";
import assets from "../../assets/assets.png";
import diamond from "../../assets/diamond.png";
import Aos from "aos";
import Button2 from "../UI/Button2";

const NFTs: React.FC = () => {
  Aos.init({ duration: 1000 });
  return (
    <section className={classes.nfts}>
      <div className={classes.top}>
        <h1>NFTs</h1>
      </div>
      <header className={classes.section}>
        <div>
          <img src={ape} alt="nft" />
        </div>
        <div className={`${classes.content} ${classes.right}`}>
          <div className={classes.heading}>
            <h2>What is an NFT?</h2>
            <div className={classes.icon}>
              <img src={nft} alt="icon" />
            </div>
          </div>
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
        <div
          className={`${classes.content} ${classes.left}`}
          data-aos="fade-right"
        >
          <div className={classes.heading}>
            <h2>Why are NFT's so valuable?</h2>
            <div className={classes.icon}>
              <img src={diamond} alt="icon" />
            </div>
          </div>
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
        <div
          className={`${classes.content} ${classes.right}`}
          data-aos="fade-left"
        >
          <div className={classes.heading}>
            <h2>Why are NFTs so important?</h2>
            <div className={classes.icon}>
              <img src={assets} alt="assets" />
            </div>
          </div>
          <p>
            They are an evolution over the simple concept of cryptocurrencies.
            Modern finance systems consist of sophisticated trending and loan
            systems for different asset types, ranging from real estate to
            lending contracts to artwork. By enabling digital representations of
            physical assets, NFTs are a step forward in the reinvention of this
            infrastructure.
          </p>
        </div>
      </footer>
      <div className={classes.question}>
        <div>
          <h2>Are NFT's all Hype and Are They Worth Investing In?</h2>
          <div></div>
        </div>
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
      <footer>
        <Button2
          onClick={() =>
            window.open(
              "https://www.theverge.com/22310188/nft-explainer-what-is-blockchain-crypto-art-faq",
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

export default NFTs;
