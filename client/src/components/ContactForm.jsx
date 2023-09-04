import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <>
      <div className="form">
        <h1>Send Message to Us!</h1>
        <form>
            <input type="text" placeholder="Name" />
        </form>
      </div>
    </>
  );
};

export default ContactForm;
