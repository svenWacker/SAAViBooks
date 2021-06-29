import React from "react";

// google icon from react icons
import { SiGoogle } from "react-icons/si";
// stars for rating from react icons
import { RiStarFill, RiStarHalfFill, RiStarLine } from "react-icons/ri";

const BookDetails = () => {
  return (
    <React.Fragment>
      <div className="book-details-container">
        <div className="book-cover-img-container">
          <a href="/book-cover-link" target="_blank">
            <img
              className="book-cover-img"
              alt="book title's book cover picture"
            />
          </a>
        </div>

        <div className="book-info-container">
          <a href="/book-title-link" target="_blank">
            <h2 className="book-title">Book Title</h2>
          </a>
          <a href="/book-author-link" target="_blank">
            <h3 className="book-author">by author name</h3>
          </a>

          <div className="book-ratings-container">
            <p>
              <SiGoogle className="google" />: 3.5
            </p>
            <p>
              SAAVI Community: <RiStarFill />
              <RiStarFill />
              <RiStarFill />
              <RiStarHalfFill />
              <RiStarLine />
              /from 68 ratings
            </p>
          </div>

          <div className="book-small-details-container">
            <div className="book-year-pub">published: year published</div>
            <div className="book-series">Books series with number</div>
            <div className="book-lang">Edition Language: language</div>
            <div className="book-orig-lang">
              Original Language: orig. language
            </div>
          </div>
        </div>

        <div className="book-genres">book's genres</div>

        <div className="book-description">Book description</div>
      </div>
    </React.Fragment>
  );
};

export default BookDetails;
