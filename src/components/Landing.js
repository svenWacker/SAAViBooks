import React from "react";
import { Link } from "react-router-dom";
import mainImage from "../img/main-img.png";

const Landing = () => {
  return (
    <React.Fragment>
      <div className="landing-wrapper">
        <div>
          <img src={mainImage} />
        </div>
        <p>Qoute of the Day:</p>
        <p>A journey to a thousand miles begins with a single step.</p>
        <p>ARROW DOWN</p>
      </div>
    </React.Fragment>
  );
};

export default Landing;
