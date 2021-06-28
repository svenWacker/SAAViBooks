import React from "react";
import { Link } from "react-router-dom";

// books's component BookInfo
import BookInfo from "./BookInfo";

const Books = () => {
  return (
    <React.Fragment>
      <div className="books-wrapper">
        <h2 className="page-headings">Books</h2>
        <h3>Top Rated Books/Book Recommendations/Book Of The Day</h3>
      </div>
      <BookInfo />
    </React.Fragment>
  );
};

export default Books;
