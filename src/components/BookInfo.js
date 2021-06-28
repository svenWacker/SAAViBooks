import React from "react";
import { Link } from "react-router-dom";

// BookInfo components
import BookDetails from "./bookInfo components/Book-details";
import BookReviews from "./bookInfo components/Book-reviews";

const BookInfo = () => {
  return (
    <React.Fragment>
      <div className="book-container">
        <BookDetails />
        <BookReviews />
      </div>
    </React.Fragment>
  );
};

export default BookInfo;
