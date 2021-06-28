import React from "react";
import { Link } from "react-router-dom";

const BookInfo = () => {
  return (
    <React.Fragment>
      <div className="book-details-container">
        <div className="book-cover-img-container">
          <a href="/book-cover-link" target="_blank">
            <img className="book-cover-img" />
          </a>
        </div>
      </div>
      <div className="book-reviews-container"></div>
    </React.Fragment>
  );
};

export default BookInfo;
