import React from "react";

const BookReviews = () => {
  return (
    <React.Fragment>
      <div className="book-reviews-container">
        <div className="user-book-review-container">
          <form className="user-book-review-form">
            <div className="user-rating">rating input of user</div>
            <textarea
              className="user-book-review-input"
              placeholder="Write a review for this book"
            />
            <input type="submit" className="book-review-submit-button" />
          </form>
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

export default BookReviews;
