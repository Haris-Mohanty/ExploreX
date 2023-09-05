import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import serviceImg from "../Assets/1.png";

const SignUp = () => {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={serviceImg}
        title="Signup"
        btnClass="hide"
      />
    </>
  );
};

export default SignUp;
