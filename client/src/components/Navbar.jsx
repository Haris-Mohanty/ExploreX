import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";

const Navbar = () => {
  const [isIconClicked, setIsIconClicked] = useState(false);

  //Handle hamburger icon
  const handleIcon = () => {
    setIsIconClicked(!isIconClicked);
  };
  return (
    <>
      <nav className="NavbarItems">
        <h1 className="navbar-logo">ExploreX</h1>

        <div className="menu-icons" onClick={handleIcon}>
          {isIconClicked ? (
            <i className="fas fa-times" />
          ) : (
            <i className="fas fa-bars" />
          )}
        </div>
         

        <ul className={isIconClicked ? "nav-menu active" :"nav-menu"}>
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
