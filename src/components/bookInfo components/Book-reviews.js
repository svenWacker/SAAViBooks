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

            <div className="other-user-name-date-container">
              <p className="other-user-name">Other user username</p>
              <p className="other-user-post-date">date of review</p>
            </div>

            <div className="other-user-rating">other user's rating</div>
          </div>

          <div className="other-users-book-review">
            Book Review:
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non
              dapibus nisl. Vivamus sed suscipit lorem, id mattis nulla. Sed
              vehicula fringilla tortor, nec fringilla velit. Ut ut massa quis
              massa pulvinar imperdiet in sed urna. Ut facilisis ante ac
              sollicitudin tempus. Vestibulum ante ipsum primis in faucibus orci
              luctus et ultrices posuere cubilia curae; Nunc gravida libero
              lacus, sed faucibus purus semper in. Vestibulum mattis ante
              sagittis scelerisque aliquam. Donec non urna non elit sollicitudin
              gravida in quis nisl. Morbi sit amet laoreet velit, sit amet
              feugiat ipsum.
            </p>
            <p>
              Vestibulum a pellentesque nisi. Vivamus tortor massa, placerat sit
              amet consectetur quis, viverra eu lacus. Sed consequat laoreet
              porta. Phasellus posuere sed augue et efficitur. Donec ligula
              elit, maximus bibendum est vitae, maximus ornare lorem. Donec eget
              arcu id lectus tincidunt vehicula. Vivamus porta ante eget libero
              tristique, sed ultrices purus luctus. Aenean ac sagittis lorem.
              Integer faucibus, nisl eget pretium gravida, turpis justo gravida
              eros, non ullamcorper nulla neque rhoncus mi. Duis pharetra mi nec
              ipsum ultricies auctor.
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BookReviews;
