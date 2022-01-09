import React, { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import classes from "./DrawSvg.module.css";
import nft from "../../assets/nft1.png";
import blockchain from "../../assets/blockchain.png";
import web3 from "../../assets/world-wide-web.png";

const DrawSvg: React.FC = () => {
  const animate1Ref = useRef<SVGLineElement | null>(null);
  const animate2Ref = useRef<SVGPathElement | null>(null);
  const scrollEl = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const animation = (theRef: any) => {
      const rect = scrollEl.current?.getBoundingClientRect();
      let theLength = theRef.current!.getTotalLength();

      if (rect!.top <= 400) {
        theRef.current!.style.strokeDasharray! = String(theLength);
        theRef.current!.style.strokeDashoffset! = String(theLength);

        // const scrollPercent =
        //   (document.body.scrollTop + document.documentElement.scrollTop) /
        //   (document.documentElement.scrollHeight -
        //     document.documentElement.clientHeight);

        const scrollPercent = Math.abs((rect!.top - 400) / rect!.height);

        const draw = theLength * scrollPercent;
        theRef.current!.style.strokeDashoffset = String(theLength - draw);
        theRef.current!.style.opacity = "1";
      } else {
        theRef.current!.style.opacity = "0";
      }
    };

    const func = () => {
      animation(animate1Ref);
      animation(animate2Ref);
    };

    if (animate1Ref.current && scrollEl.current) {
      document.addEventListener("scroll", func);
    }

    return () => document.removeEventListener("scroll", func);
  });

  return (
    <section className={classes.section} ref={scrollEl}>
      <div className={classes.side}>
        <div className={classes.first}>
          <div className={classes.img}>
            <img src={nft} alt="nft" />
          </div>
          <h2>NFT's</h2>
          <p>
            NFT’s (Nun-Fungible tokens) are unique cryptographic tokens that
            exist on the blockchain and cannot be replicated. Like money, crypto
            is fungible meaning that it can be traded or exchanged for another.
            For example 1 Bitcoin is always equal in value to another Bitcoin.
          </p>
          <Link to="/nft" className={classes.link}>
            Read More
          </Link>
        </div>
        <div className={classes.third}>
          <div className={classes.img}>
            <img src={web3} alt="web3" />
          </div>
          <h2>Web 3</h2>
          <p>
            Web 3 is a decentralized but secure internet where people can
            exchange money and information without the need for an unnecessary
            middleman such as a bank or tech corporation.
          </p>
          <Link to="/web3" className={classes.link}>
            Read More
          </Link>
        </div>
      </div>
      <div className={classes.svg}>
        <svg className={classes.animate}>
          <line
            x1="50%"
            y1="0"
            x2="50%"
            y2="1500"
            fill="none"
            stroke="black"
            strokeWidth="2px"
            ref={animate1Ref}
          />
        </svg>
      </div>
      <div className={classes.side}>
        <div className={classes.svg1}>
          <svg viewBox="0 0 128 128">
            <path
              fill="none"
              stroke="black"
              strokeWidth="2px"
              ref={animate2Ref}
              d="M74.8 4c0 5.8-.1 13.1-.1 18.3 3 .5 5.9 1 8.8 1.6 4.1.9 7.9 2.5 11.4 5 8.5 6.2 9.6 24.3-2.2 30.3-.2.1-.4.3-.7.5 2.4 1.1 4.8 1.8 6.9 3.1 4.6 2.7 7.3 6.8 8 12.2.8 5.5.3 10.9-1.8 16-2.8 6.6-8 10.4-14.7 12-5.1 1.3-10.4 1.7-15.7 2.6-.3 0-.5.1-.9.1-.1 5.4-.1 12.3-.2 18.2h-11c0-5.7.1-12.6.1-18.2-2.9-.1-5.7-.2-8.8-.2-.1 5.5-.1 12.5-.2 18.4h-11c0-5.9.1-13 .1-18.7-7.5-.1-14.7-.2-22.2-.3.8-4.4 1.5-8.6 2.3-13.1H30.3c3.4 0 4.8-1.4 4.8-4.8.2-15.7.4-31.4.5-47.1 0-3.8-2-5.9-5.8-6.2-1.4-.1-2.8-.1-4.2-.1-1.4 0-2.8 0-4.4-.1 0-3.9.1-7.7.1-11.7 7.4.1 14.7.1 22.2.2.4-5 .5-12.2.5-18h11c0 5.7-.1 12.7-.1 17.9h8.8c.1-5.1.1-12.2.2-17.9h10.9M60.4 57c4.5 0 8.9-.3 13.2-1.8 4.4-1.4 6.9-4.5 7.1-8.8.2-4.1-1.8-7.4-5.9-9.2-4.5-2-9.3-2.3-14.1-2.3h-5.6c-.1 7.5-.1 14.7-.2 22 1.8 0 3.6.1 5.5.1m-5.3 11h-.5l-.3 24.2c1.8 0 3.5.1 5.2.1h.4c6.4-.1 12.9-.1 18.9-2.8 4-1.8 6.5-4.7 6.5-9.3 0-4.6-2.4-7.7-6.4-9.4-5.6-2.5-11.6-2.8-17.8-2.8h-6M74.8 0h-11c-2.2 0-4 1.8-4 4 0 2.4-.1 5.1-.1 7.7 0 2.1 0 4.2-.1 6.2h-.8v-6.3L59 4c0-1.1-.4-2.1-1.2-2.8C57.1.4 56.1 0 55 0H44c-2.2 0-4 1.8-4 4 0 2.5-.1 5.2-.1 7.9 0 2.2 0 4.3-.1 6.4l-6.1-.1-12-.2c-2.2 0-4 1.8-4 4l-.1 8.2v3.5c0 2.2 1.7 4 3.9 4h5.4c1 0 2 0 3 .1 1.8.1 2.1.6 2.1 2.2-.2 15.9-.3 32-.5 47.1 0 .4 0 .6-.1.8h-8.2c-1.9 0-3.6 1.4-3.9 3.3l-1.1 6.3-1.2 6.8c-.2 1.2.1 2.3.9 3.2s1.9 1.4 3 1.4h1.3l16.9.2v14.7c0 1.1.4 2.1 1.2 2.8.8.8 1.8 1.2 2.8 1.2h11c2.2 0 4-1.8 4-4 0-2.7.1-5.6.1-8.5 0-2 0-4 .1-5.9H59.1v14.2c0 1.1.4 2.1 1.2 2.8.8.8 1.8 1.2 2.8 1.2h11c2.2 0 4-1.8 4-4 0-2.7.1-5.6.1-8.5 0-2.2 0-4.3.1-6.4.8-.1 1.6-.2 2.3-.3 3.7-.5 7.5-1 11.2-2 8.3-2.1 14.3-7 17.4-14.4 2.3-5.5 3-11.6 2.1-18.1-1-6.6-4.4-11.8-10-15-.4-.2-.7-.4-1.1-.6 3.1-3.4 5-7.9 5.4-13.1.6-8.1-2.5-15.9-8.1-19.9-3.8-2.7-8-4.6-12.9-5.7-1.9-.4-3.8-.8-5.6-1.1v-6.9c0-2.7 0-5.4.1-7.9v-.2c-.3-1.7-2-3.5-4.3-3.5zm0 8zM59 38.8h1.6c4.9 0 8.8.3 12.5 2 2.5 1.1 3.7 2.9 3.6 5.4-.1 1.7-.6 4-4.4 5.3-3.3 1.1-7 1.6-11.9 1.6h-1.5v-3.8l.1-10.5zM58.6 72h2.5c5.4 0 11 .2 16.3 2.5 2.8 1.2 4 3 4 5.8 0 1.9-.5 4.1-4.1 5.7-5.3 2.3-11.1 2.4-17.2 2.4h-1.6l.1-12.8V72z"
            />
          </svg>
        </div>
        <div className={classes.second}>
          <div className={classes.img}>
            <img src={blockchain} alt="blockchain" />
          </div>
          <h2>Blockchain</h2>
          <p>
            Blockchain technology might be one of the most-hyped innovations of
            the 21st century. A blockchain is a public digital ledger of
            transactions maintained by a network of computers in a way that
            makes it difficult to have or alter.
          </p>
          <Link to="/blockchain" className={classes.link}>
            Read More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DrawSvg;
