import React from "react";
import BookCard from "./BookCard";

const BookList = (props) => {
  if (!props) {
    return <p>Please wait for the loading of the information. Thank you.</p>;
  } else {
    return (
      <div className="list">
        {/* renders all individual book components, takes props.books- the data from api from state and use map on book, i, and return book card component */}
        {props.books.map((book, i) => {
          // Vivi's id's
          console.log(book.id);
          return (
            <BookCard
              key={i}
              image={book.volumeInfo.imageLinks.thumbnail}
              title={book.volumeInfo.title}
              author={book.volumeInfo.authors}
              published={book.volumeInfo.publishedDate}
              id={book.id}
            />
          );
        })}
      </div>
    );
  }
};
export default BookList;
