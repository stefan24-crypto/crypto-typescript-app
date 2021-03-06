import React, { useEffect, useRef } from "react";
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
import decentralized from "../../assets/decentralized.png";
import inflation from "../../assets/inflamable.png";
import secure from "../../assets/secure-shield.png";
import Aos from "aos";
import "aos/dist/aos.css";
import FAQ from "./FAQ";
import { TimelineMax } from "gsap";
import { gsap } from "gsap";
import Button2 from "../UI/Button2";
import About from "./About";

const HomeSection: React.FC = () => {
  gsap.registerPlugin(TimelineMax);
  Aos.init({ duration: 1000 });
  const homeData = useAppSelector((state) => state.data.currencyForHome);
  const icons = [
    { icon: BTC, name: "BTC" },
    { icon: ETH, name: "ETH" },
    { icon: USDT, name: "USDT" },
    { icon: SOL, name: "SOL" },
    { icon: ADA, name: "ADA" },
  ];
  const animateRef1 = useRef<HTMLHeadingElement>(null);
  const animateRef2 = useRef<HTMLParagraphElement>(null);
  const animateRef3 = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const tl = new TimelineMax();
    tl.from(animateRef1.current, 1, {
      left: "-1000px",
      ease: "elastic.out(1, 0.75)",
    }).from(
      animateRef2.current,
      1,
      { left: "-1000px", ease: "elastic.out(1, 0.75)" },
      "-=0.8"
    );
  }, []);

  return (
    <section className={classes.home}>
      <header className={classes.header}>
        <div className={classes.content}>
          <h1 ref={animateRef1}>
            What are Cryptocurrencies and how is it changing the World?
          </h1>
          <p ref={animateRef2}>
            A cryptocurrency (or “crypto”) is a form of payment that can
            circulate without the need for a central monetary authority such as
            a government or bank. Instead, cryptocurrencies are created using
            cryptographic techniques that enable people to buy, sell or trade
            them securely.
          </p>
          <button
            ref={animateRef3}
            onClick={() => {
              window.open(
                "https://www.youtube.com/watch?v=mMUnNsY2ztg",
                "_blank"
              );
            }}
            className={classes.btn}
          >
            <span>Learn More</span>
          </button>
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
        <div className={classes.advantages}>
          <div
            className={classes.card}
            data-aos-init="aos-initclassname"
            data-aos="fade-up"
          >
            <div>
              <img src={decentralized} alt="icon" />
              <h2>Decentralized</h2>
            </div>
            <p>
              A major pro of cryptocurrencies is that they are mainly
              decentralized. Many cryptocurrencies are controlled by the
              developers using it and those who have a significant amount of the
              coin or by a corporation to develop it before it’s released into
              the market. The decentralization helps keep the currency monopoly
              free and in restraint, so nobody organization can determine the
              flow and so the worth of the coin, which, in turn, will keep it
              stable and secure, unlike fiat currencies which are controlled by
              the Government.
            </p>
          </div>
          <div className={classes.card} data-aos="fade-up" data-aos-delay="200">
            <div>
              <img src={inflation} alt="icon" />
              <h2>Protection from Inflation</h2>
            </div>
            <p>
              Inflation has caused many currencies to urge their value to
              decline with time. At the time of its launch, almost every
              cryptocurrency is released with a tough and fast amount. There are
              only 21 million Bitcoins released within the planet. So, because
              the demand increases, its value will increase which might maintain
              with the market and, within the long run, prevent inflation.
            </p>
          </div>
          <div className={classes.card} data-aos="fade-up" data-aos-delay="400">
            <div>
              <img src={secure} alt="icon" />
              <h2>Secure</h2>
            </div>
            <p>
              Privacy and security have always been concerns for
              cryptocurrencies. The blockchain ledger relies on different
              mathematical puzzles, which are hard to decode. It makes
              cryptocurrency safer than ordinary electronic transactions.
              Cryptocurrencies are for better security and privacy, and they use
              pseudonyms that are unconnected to any user account or stored data
              that might be linked to a profile.
            </p>
          </div>
        </div>
        <FAQ />
        <About />
      </main>
      <footer className={classes.footer}>
        <Button2
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
        >
          Back To Top
        </Button2>
      </footer>
    </section>
  );
};

export default HomeSection;
