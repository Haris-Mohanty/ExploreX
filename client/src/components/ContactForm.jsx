import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <>
      <div className="form">
        <h1>Send Message to Us!</h1>
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Subject" />
          <textarea placeholder="Write a message" rows="4"></textarea>
          <button>Send</button>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
