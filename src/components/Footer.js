import { FaMailBulk, FaInstagram, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="footer-wrapper">
      <div className="copyright">
        <h6>
          SAAViGroup Copyright<sup>©</sup> <span className="year">{year}</span>
        </h6>
      </div>
    </div>
  );
};
export default Footer;
