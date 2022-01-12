import React from "react";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Sphere from "./Sphere";
import classes from "./FAQ.module.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FAQ = () => {
  return (
    <section className={classes.faq}>
      <div className={classes.left}>
        <div className={classes.heading}>
          <h1>
            Frequently Asked <span>Questions</span>
          </h1>
        </div>
        <Canvas>
          <Suspense fallback={null}>
            <Sphere />
          </Suspense>
        </Canvas>
      </div>
      <div className={classes.right}>
        <Accordion sx={{ background: "transparent", padding: "0.8rem" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography sx={{ color: "white" }}>
              Who invented Bitcoin?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Satoshi Nakamoto was responsible for inventing bitcoin and
              inventing the first blockchain.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ background: "transparent", padding: "0.8rem" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography sx={{ color: "white" }}>
              What is the best cryptocurrency to invest in?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              There are a couple currencies that are worth investing in namely
              bitcoin, ethereum and cardano.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ background: "transparent", padding: "0.8rem" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography sx={{ color: "white" }}>
              What are smart contracts?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Smart contracts are simply programs stored on a blockchain that
              run when predetermined conditions are met. They typically are used
              to automate the execution of an agreement so that all participants
              can be immediately certain of the outcome, without any
              intermediary's involvement or time loss.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
