// import React from 'react'
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { useState, useEffect } from "react";
import fb from "/assets/fb.svg";
import g from "/assets/g.svg";
import t from "/assets/t.svg";
import y from "/assets/y.svg";
import emailjs from "emailjs-com";

import "./ContactUs.css";
import { Link } from "react-router-dom";

function ContactUs() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    emailjs.init("oq7QU2c-U02hqjxtL");
  }, []);
  const sendMail = () => {
    const params = {
      from_name: fullName,
      email_id: email,
      message: message,
    };

    emailjs.send("service_wxtiezi", "template_nzgnd0l", params).then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        setFullName('');
        setEmail('');
        setMessage('');
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
  };

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="contact">
        <h1>Get In Touch</h1>
        <div className="form">
          <div className="name-mail">
            <input
              type="text"
              id="FullName"
              className="name"
              placeholder="Full Name"
              required
              data-form-input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            <input
              id="email_id"
              type="email"
              className="mail"
              placeholder="Email address"
              required
              data-form-input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <textarea
            id="Message"
            className="message"
            placeholder="Your Message"
            required
            data-form-input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button className="send-mail" type="submit" onClick={sendMail}>
            Send Message
          </button>
        </div>
      </div>
      <div className="icons">
        <Link>
        <div className="iconf">
          <img className="icon-fb" src={fb}></img>
        </div>
        </Link>
        <Link>
        <div className="icong">
          <img className="icon-g" src={g}></img>
        </div>
        </Link>
        <Link>
        <div className="icont">
          <img className="icon-t" src={t}></img>
        </div>
        </Link>
        <Link>
        <div className="icony">
          <img className="icon-y" src={y}></img>
        </div>
        </Link>
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
}

export default ContactUs;
