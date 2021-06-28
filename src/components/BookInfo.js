import React from "react";
import { Link } from "react-router-dom";

const BookInfo = () => {
  return (
    <React.Fragment>
      <div className="book-container">
        <div className="book-cover-img-container">
          <a href="/book-cover-link" target="_blank">
            <img className="book-cover-img" />
          </a>
        </div>
        <div className="book-details-container">
          <a href="/book-title-link" target="_blank">
            <h2 className="book-title">Book Title</h2>
          </a>
          <a href="/book-author-link" target="_blank">
            <h3 className="book-author">by author name</h3>
          </a>
          <div className="book-small-details">
            <span>published: year</span>
            <span>Google rating: rating</span>
            <span>Community rating: rating</span>
            <span>Community ratings: number of ratings</span>
          </div>
          <div className="book-series">Books series with number</div>
          <div className="book-lang">Edition Language: language</div>
        </div>
      </div>
      <div className="book-reviews-container"></div>
    </React.Fragment>
  );
};

export default BookInfo;
