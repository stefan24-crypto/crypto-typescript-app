import React, { useRef } from "react";
import classes from "./ContactForm.module.css";
import Button from "../UI/Button";
import emailjs from "emailjs-com";
import { useNavigate } from "react-router";
import SendIcon from "@mui/icons-material/Send";
import validator from "validator";

const ContactForm: React.FC = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const sendEmail = (e: any) => {
    e.preventDefault();

    const email = emailRef.current!.value;
    if (!validator.isEmail(email)) {
      return alert("Please enter a valid email :)");
    }

    emailjs
      .sendForm(
        "service_ezo9sii",
        "template_m5q87dh",
        e.target,
        "user_SlEzDhGHUlabz6kVwUjzU"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    navigate("/");
    e.target.reset();
  };

  return (
    <section className={classes.section}>
      <header className={classes.header}>
        <h1>Contact Me</h1>
      </header>
      <main className={classes.main}>
        <form className={classes.form} onSubmit={sendEmail}>
          <div className={classes.input}>
            <input placeholder="Name" name="name" type="text" required></input>
          </div>
          <div className={classes.input}>
            <input
              placeholder="Email Address"
              name="email"
              type="text"
              required
              ref={emailRef}
            ></input>
          </div>
          <div className={classes.input}>
            <input
              placeholder="Subject"
              name="subject"
              type="text"
              required
            ></input>
          </div>
          <div className={classes.input}>
            <textarea
              placeholder="Your Message"
              name="message"
              cols={30}
              rows={8}
              required
            ></textarea>
          </div>
          <div className={classes.btns}>
            <Button>
              Send <SendIcon />
            </Button>
          </div>
        </form>
      </main>
    </section>
  );
};

export default ContactForm;
