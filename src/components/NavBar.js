import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo-01.png";
import { BiSearchAlt } from "react-icons/bi";

const Menu = () => {
  return (
    <div className="nav-container">
      <nav className="navbar">
        <Link to="/home" style={{ textDecoration: "none" }}>
          <div id="logo-wrapper">
            <span className="logo">
              <img src={logo} />
            </span>
          </div>
        </Link>
        <span>
          <input className="search-bar" type="text" placeholder="Search.." />
          <span className="search-icon">
            <BiSearchAlt />
          </span>
        </span>

        <Link to="/home" style={{ textDecoration: "none" }}>
          <li>Home</li>
        </Link>
        <Link to="/books" style={{ textDecoration: "none" }}>
          <li>Books</li>
        </Link>
        <Link to="/about" style={{ textDecoration: "none" }}>
          <li>About</li>
        </Link>
      </nav>
    </div>
  );
};

export default Menu;
