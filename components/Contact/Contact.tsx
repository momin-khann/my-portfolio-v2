"use client";

import React, { useState } from "react";
import emailIcon from "@/public/assets/email.png";
import mobileIcon from "@/public/assets/mobile.png";
import Image from "next/image";
import AppWrap from "@/wrapper/AppWrap";

import "./contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
  };

  return (
    <AppWrap idName={"contact"} classNames={"app__whitebg"}>
      <h2 className="head-text">Take a coffee & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <Image src={emailIcon} alt="email" />
          <a href="mailto:mominkhan.dev@gmail.com" className="p-text">
            mominkhan.dev@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <Image src={mobileIcon} alt="phone" />
          <a href="tel:+92 3158436468" className="p-text">
            +92 3158436468
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <form className={"app__footer-form app__flex"} onSubmit={handleSubmit}>
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your Name"
              name="name"
              value={name}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              className="p-text resize-none"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="submit" className="p-text">
            {!loading ? "Send Message" : "Sending..."}
          </button>
        </form>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )}
    </AppWrap>
  );
};

export default Contact;
