import React from "react";
import classes from "./About.module.css";
import ill from "../../assets/illustration.png";

const About: React.FC = () => {
  return (
    <section className={classes.about}>
      <header className={classes.header}>
        <h1>About</h1>
        <div className={classes.top}>
          <h2>This website is meant to inform!</h2>
          <div>
            <img src={ill} alt="illustration" />
          </div>
        </div>
      </header>
      <main className={classes.main}>
        <p>
          The main aim of this website is to educate persons about the trending
          topic of crypto and allow them to keep up with the rapidly changing
          world of digital currencies. It outlines the fundamentals principles
          of crypto along with other topics that are related such as nft’s
          decentralized apps and web 3.
        </p>
      </main>
    </section>
  );
};

export default About;
