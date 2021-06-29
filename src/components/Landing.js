import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import ImageSlider from "./ImageSlider";
import shelf from "../img/shelf.png";
import QuoteGenerator from "./QouteGenerator";
import TopReviewsGenerator from "./TopReviewsGenerator";

function Landing() {
  return (
    <React.Fragment>
      <div className="landing-wrapper">
        <div className="top-main-container">
          <div className="quote-of-the-day-container">
            <h5>Qoute of the Day</h5>
            <QuoteGenerator />
          </div>

          <div className="reviews-container">
            <h5>Top Reviews!</h5>
            <TopReviewsGenerator />
          </div>
        </div>

        <div className="middle-main-container">
          <div>
            <h5>Recommended Books of the Day</h5>
          </div>
          <div className="image-display">
            <ImageSlider />
          </div>
          <div className="shelf">
            <img src={shelf} />
          </div>
        </div>

        <div className="bottom-main-container">
          <p> Read More </p>
          <span>
            <IoIosArrowDropdownCircle />
          </span>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Landing;
