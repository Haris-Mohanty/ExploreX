import React from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="NavbarItems">
        <h1 className="navbar-logo">ExploreX</h1>

<div className="menu-icons"><i className="fas fa-bar"></i></div>

        <ul className="nav-menu">
          {MenuItems.map((items, index) => (
            <li key={items.id}>
              <Link to={items.url} className={items.className}>
                <i className={items.icon}></i> {items.title}
              </Link>
            </li>
          ))}
          <button>Sign Up</button>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
