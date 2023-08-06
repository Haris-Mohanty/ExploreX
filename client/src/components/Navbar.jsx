import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="NavbarItems">
        <h1 className="navbar-logo">ExploreX</h1>
        <ul className="nav-menu">
          <li>
            <Link><i className="fa-solid fa-house-user"></i> Home</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
