import React from "react";
const Bookdetails = () => {
  return (
    <React.Fragment>
      <div className="book-container">
        <div className="book-cover-img-container">
          <a href="/book-cover-link" target="_blank">
            <img
              className="book-cover-img"
              alt="book title's book cover picture"
            />
          </a>
        </div>
        <div className="book-details-container">
          <a href="/book-title-link" target="_blank">
            <h2 className="book-title">Book Title</h2>
          </a>
          <a href="/book-author-link" target="_blank">
            <h3 className="book-author">by author name</h3>
          </a>
          <div className="book-ratings-container">
            <span>Google rating: rating</span>
            <span>Community rating: rating</span>
            <span>Community ratings: number of ratings</span>
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
        <div className="book-description">Book description</div>
      </div>
    </React.Fragment>
  );
};

export default Bookdetails;
