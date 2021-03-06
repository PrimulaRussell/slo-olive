import React from "react";
import emailjs from "emailjs-com";
import "../Styles/contact/contact.css";
import ContactInfo from "./ContactInfo";
import Footer from "./Footer";
import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_YOUR_SERVICE_ID,
        "contact_form",
        e.target,
        process.env.REACT_APP_YOUR_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <div className="contact" id="contact">
      <div className="container">
        <p className="h1">Contact Us</p>
        <p className="h3">
          We appreciate your time and business, if you have any inquiries please
          fill out the form below and we will get back to you within 48 hours.
        </p>

        {/*Contact Form*/}
        <form className="contact-form" onSubmit={sendEmail}>
          <input type="hidden" name="contact_number" />

          {/*Name Field*/}
          <div className="name">
            <label className="h3">Name</label>
            <input
              type="text"
              name="user_name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/*Email Field*/}
          <div className="email">
            <label className="h3">Email</label>
            <input
              type="email"
              name="user_email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/*Message Field*/}
          <div className="message">
            <label className="h3">Message</label>
            <textarea
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          {/*Submit Button*/}
          <button type="submit" value="Submit" className="normal-text">
            Submit
          </button>
        </form>

        <ContactInfo></ContactInfo>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Contact;
