import React from "react";
import "./FooterStyles.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="top">
          <div>
            <h1>ExploreX</h1>
            <p>Choose Your Favourite Destination!</p>
          </div>
          <div>
            <a href="/">
              <i className="fa-brands fa-facebook-square"></i>
            </a>
            <a href="/">
              <i className="fa-brands fa-instagram-square"></i>
            </a>
            <a href="/">
              <i className="fa-brands fa-twitter-square"></i>
            </a>
            <a href="/">
              <i className="fa-brands fa-snapchat-square"></i>
            </a>
          </div>
        </div>
        <div className="bottom">
          <div>
            <h4>Contact Us</h4>
            <a href="/">Address:City: Bangalore</a>
            <a href="/">Zip code: 560004</a>
            <a href="/">Email: explorex@ac.in</a>
            <a href="/">Phone: 1800 658 547</a>
          </div>
          <div>
            <h4>Explore With Us</h4>
            <a href="/">More Tours</a>
            <a href="/">Blog</a>
            <a href="/">License</a>
            <a href="/">Status</a>
          </div>
          <div>
            <h4>Customer Service</h4>
            <a href="/">FAQs</a>
            <a href="/">Terms & Conditions</a>
            <a href="/">Privacy Policy</a>
            <a href="/">Refund Policy</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
