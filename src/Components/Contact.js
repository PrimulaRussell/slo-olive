import React from "react";
import "../Styles/contact/contact.css";
import ContactInfo from "./ContactInfo";
import Footer from "./Footer";
const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="container">
        <p className="h1">Contact Us</p>
        <p className="h3">
          We appreciate your time and business, if you have any inquiries please
          fill out the form below and we will get back to you within 48 hours.
        </p>
        <form>
          <div className="name">
            <label className="h3">Name:</label>
            <input placeholder="name" type="text" required />
          </div>
          <div className="email">
            <label className="h3">Email:</label>
            <input type="email" required placeholder="email" />
          </div>
          <div className="message">
            <label className="h3">Message:</label>
            <textarea placeholder="message" type="text" required></textarea>
          </div>
          <button type="submit" className="normal-text">
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
