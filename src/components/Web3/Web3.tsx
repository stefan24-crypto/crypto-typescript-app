import React from "react";
import classes from "./Web3.module.css";
import authentication from "../../assets/authentication.png";
import backend from "../../assets/backend.png";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import HotelIcon from "@mui/icons-material/Hotel";

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
      <div className={classes.timeline}>
        <div className={classes.heading}>
          <h2>Evolution of The Web</h2>
        </div>
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              align="right"
              variant="body2"
              color="text.secondary"
            >
              1990 - 2000
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector sx={{ bgcolor: "#15d260" }} />
              <TimelineDot>
                <FastfoodIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <h2>Web 1.0</h2>
              <p>
                Web 1.0 refers to the first stage of the World Wide Web
                evolution. Earlier, there were only a few content creators in
                Web 1.0 with a huge majority of users who are consumers of
                content. Personal web pages were common, consisting mainly of
                static pages hosted on ISP-run web servers, or on free web
                hosting services.{" "}
              </p>
              <a
                href="https://www.geeksforgeeks.org/web-1-0-web-2-0-and-web-3-0-with-their-difference/"
                target="_blank"
              >
                Learn More
              </a>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              variant="body2"
              color="text.secondary"
            >
              2000 - now
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector sx={{ bgcolor: "#15d260" }} />
              <TimelineDot color="primary">
                <LaptopMacIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <h2>Web 2.0</h2>
              <p>
                Web 2.0 refers to worldwide websites which highlight
                user-generated content, usability, and interoperability for end
                users. Web 2.0 is also called the participative social web. It
                does not refer to a modification to any technical specification,
                but to modify the way Web pages are designed and used. The
                transition is beneficial but it does not seem that when the
                changes occur. Interaction and collaboration with each other are
                allowed by Web 2.0 in a social media dialogue as the creator of
                user-generated content in a virtual community. Web 1.0 is an
                enhanced version of Web 2.0.{" "}
              </p>

              <a
                href="https://www.geeksforgeeks.org/web-1-0-web-2-0-and-web-3-0-with-their-difference/"
                target="_blank"
              >
                Learn More
              </a>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              variant="body2"
              color="text.secondary"
            >
              now - whenever
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector sx={{ bgcolor: "#15d260" }} />
              <TimelineDot color="primary" variant="outlined">
                <HotelIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <h2>Web 3.0</h2>
              <p>
                It refers to the evolution of web utilization and interaction
                which includes altering the Web into a database. It enables the
                up-gradation of the back-end of the web, after a long time of
                focus on the front-end (Web 2.0 has mainly been about AJAX,
                tagging, and another front-end user-experience innovation). Web
                3.0 is a term that is used to describe many evolutions of web
                usage and interaction among several paths. In this, data isn’t
                owned but instead shared, where services show different views
                for the same web / the same data.
              </p>

              <a
                href="https://www.geeksforgeeks.org/web-1-0-web-2-0-and-web-3-0-with-their-difference/"
                target="_blank"
              >
                Learn More
              </a>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </section>
  );
};

export default Web3;
