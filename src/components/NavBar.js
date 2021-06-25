import React from "react";
import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <nav className="navbar">
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
