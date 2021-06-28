import React from "react";
import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <nav className="navbar">
      <Link to="/home" style={{ textDecoration: "none" }}>
        <div id="logo-wrapper">
          <h1 className="logo">
            <span className="logo_clr1">S</span>
            <span className="logo_clr2">A</span>
            <span className="logo_clr3">A</span>
            <span className="logo_clr4">V</span>
            <span className="logo_text">iBooks</span>
          </h1>
        </div>
      </Link>
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
  );
};

export default Menu;
