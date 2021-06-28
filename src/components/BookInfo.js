import React from "react";
import { Link } from "react-router-dom";

const BookInfo = () => {
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
      <div className="book-reviews-container">
        <div className="user-book-review-container">
          <div className="user-rating">rating input of user</div>
          <textarea
            className="user-review-input"
            placeholder="Write a review for this book"
          />
        </div>
        <div className="other-users-book-review-container">
          <div className="other-user-details-container">
            <div className="other-user-profile-img-container">
              <a href="/other-user-link">
                <img
                  className="other-user-profile-img"
                  alt="other user's profile picture"
                />
              </a>
            </div>
            <div className="oher-user-name-date-container">
              <p className="other-user-name">Other user username</p>
              <p className="other-user-post-date">date of review</p>
            </div>
            <div className="other-user-rating">other user's rating</div>
          </div>
          <div className="other-users-book-review">
            other user's book review text
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BookInfo;
