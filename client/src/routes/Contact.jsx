import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import contactImg from "../Assets/2.jpg";

const Contact = () => {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={contactImg}
        title="Contact"
        btnClass="hide"
      />
    </>
  );
};

export default Contact;
