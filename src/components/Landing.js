import React from "react";
import ImageSlider from "./ImageSlider";
import QuoteGenerator from "./QouteGenerator";
import TopReviewsGenerator from "./TopReviewsGenerator";
import icon from "../img/quote.png";

function Landing() {
  return (
    <React.Fragment>
      <div className="landing-wrapper">
        <div className="top-main-container">
          <div className="header-wrapper">
            <span className="quote-top">
              <img src={icon} />
            </span>
            <h1>
              SAAVi.<span className="highlight">Books</span>
            </h1>
            <h3>
              Your Source of the Most Comprehensive Digital Book Library Online{" "}
            </h3>
            <div className="google-headline-wrapper">
              <p>POWERED BY GOOGLE BOOKS API</p>
            </div>
            <span className="quote-bottom">
              <img src={icon} />
            </span>
          </div>
        </div>

        <div className="middle-main-container">
          <div className="slider-wrapper">
            <div>
              <h5>RECOMMENDED BOOKS</h5>
            </div>
            <div className="image-display">
              <ImageSlider />
            </div>
          </div>

          <div className="quote-review-container">
            <div className="quote-of-the-day-container">
              <h5>QUOTE OF THE DAY</h5>
              <div className="quote-wrapper">
                <QuoteGenerator />
              </div>
            </div>

            <div className="reviews-container">
              <h5>TOP REVIEWS!</h5>
              <div className="reviews-wrapper">
                <TopReviewsGenerator />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom-main-container">
        <p> SAAViBooks &#169; 2021 All Rights Reserved | Privacy Policy</p>
      </div>
    </React.Fragment>
  );
}

export default Landing;
