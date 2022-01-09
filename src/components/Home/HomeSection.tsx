import React from "react";
import DrawSvg from "./DrawSvg";
import classes from "./HomeSection.module.css";
import phone from "../../assets/phone.png";
import Button from "../UI/Button";
import { useAppSelector } from "../../store/hooks";
import CurrencyCard from "./CurrencyCard";
import BTC from "../../assets/bitcoin.png";
import ETH from "../../assets/ethereum.png";
import USDT from "../../assets/tether.png";
import SOL from "../../assets/solana.png";
import ADA from "../../assets/cardano.png";

const HomeSection: React.FC = () => {
  const homeData = useAppSelector((state) => state.data.currencyForHome);
  const icons = [
    { icon: BTC, name: "BTC" },
    { icon: ETH, name: "ETH" },
    { icon: USDT, name: "USDT" },
    { icon: SOL, name: "SOL" },
    { icon: ADA, name: "ADA" },
  ];

  //Add paralax effect to first section!

  return (
    <section className={classes.home}>
      <header className={classes.header}>
        <div className={classes.content}>
          <h1>What are Cryptocurrencies and how is it changing the World?</h1>
          <p>
            A cryptocurrency (or “crypto”) is a form of payment that can
            circulate without the need for a central monetary authority such as
            a government or bank. Instead, cryptocurrencies are created using
            cryptographic techniques that enable people to buy, sell or trade
            them securely.
          </p>
          <Button
            onClick={() => {
              window.location.href =
                "https://www.youtube.com/watch?v=mMUnNsY2ztg";
            }}
          >
            Learn More
          </Button>
        </div>
        <div className={classes.img}>
          <img src={phone} alt="phone" />
        </div>
      </header>
      <main className={classes.main}>
        <ul className={classes.top_trending}>
          {homeData.map((each, index) => (
            <CurrencyCard
              key={each?.data?.coins[0].id}
              name={each?.data?.coins[0].name}
              price={each?.data?.coins[0]?.price}
              icons={icons}
              upOrDownPercentage={each?.data?.coins[0]?.change}
              symbol={each?.data?.coins[0]?.symbol}
            />
          ))}
        </ul>
        <DrawSvg />
        <div className={classes.other}></div>
      </main>
    </section>
  );
};

//use aos
// add parallax effect to header!
// also add an initial animation!
//Get prices from api and show prices
// Advantages
// How are currencies made?
// How it works

export default HomeSection;
