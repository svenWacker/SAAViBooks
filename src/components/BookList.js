import React from "react";
import BookCard from "./BookCard";
import ImageSlider from "./ImageSlider";

const BookList = (props) => {
  return (
    <div className="list">
      {/* renders all individual book components, takes props.books- the data from api from state and use map on book, i, and return book card component */}
      {props.books.map((book, i) => {
        return (
          <BookCard
            key={i}
            image={book.volumeInfo.imageLinks.thumbnail}
            title={book.volumeInfo.title}
            author={book.volumeInfo.authors}
            published={book.volumeInfo.publishedDate}
            description={book.volumeInfo.description}
            averageRating={book.volumeInfo.averageRating}
          />
        );
      })}
    </div>
  );
};

export default BookList;
