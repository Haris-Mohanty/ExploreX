import React from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="NavbarItems">
        <h1 className="navbar-logo">ExploreX</h1>
        <ul className="nav-menu">
          {MenuItems.map((items, index) => (
            <li key={items.id}>
              <Link to={items.url}>
                <i className={items.icon}></i> {items.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
