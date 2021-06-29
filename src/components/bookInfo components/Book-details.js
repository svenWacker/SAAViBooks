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
          <div className="book-title-author-container">
            <a href="/book-title-link" target="_blank">
              <h2 className="book-title">Book Title</h2>
            </a>
            <a href="/book-author-link" target="_blank">
              <h3 className="book-author">by author name</h3>
            </a>
          </div>

          <div className="book-ratings-container">
            <div className="google-rating">
              <SiGoogle className="google-icon" />
              <p>: 3.5</p>
            </div>
            <p className="saavi-community-rating">SAAVI Community: </p>
            <div className="saavi-community-ratings-container">
              <p className="saavi-community-rating-stars">
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                <RiStarHalfFill />
                <RiStarLine />
              </p>
              <p className="saavi-community-rating-number">from 68 ratings</p>
            </div>
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

        <div className="book-genres">
          Genres: horror, thriller, fantasy, fiction, sci-fi
        </div>

        <div className="book-description">
          Book description:
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non
            dapibus nisl. Vivamus sed suscipit lorem, id mattis nulla. Sed
            vehicula fringilla tortor, nec fringilla velit. Ut ut massa quis
            massa pulvinar imperdiet in sed urna. Ut facilisis ante ac
            sollicitudin tempus. Vestibulum ante ipsum primis in faucibus orci
            luctus et ultrices posuere cubilia curae; Nunc gravida libero lacus,
            sed faucibus purus semper in. Vestibulum mattis ante sagittis
            scelerisque aliquam. Donec non urna non elit sollicitudin gravida in
            quis nisl. Morbi sit amet laoreet velit, sit amet feugiat ipsum.
          </p>
          <p>
            Vestibulum a pellentesque nisi. Vivamus tortor massa, placerat sit
            amet consectetur quis, viverra eu lacus. Sed consequat laoreet
            porta. Phasellus posuere sed augue et efficitur. Donec ligula elit,
            maximus bibendum est vitae, maximus ornare lorem. Donec eget arcu id
            lectus tincidunt vehicula. Vivamus porta ante eget libero tristique,
            sed ultrices purus luctus.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BookDetails;
