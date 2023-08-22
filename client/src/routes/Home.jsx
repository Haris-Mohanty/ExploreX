import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import homeImg from "../Assets/12.jpg";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={homeImg}
        title="Your Journey, Our Passion!"
        text="Discover More, Explore More, Be More with Explorex!"
        btnText="Set Plan"
        btnClass="show"
        url="/"
      />
    </>
  );
};

export default Home;
