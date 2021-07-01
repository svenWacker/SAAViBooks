import React, { useState } from "react";
import request from "superagent";

const Search = (props) => {
<<<<<<< HEAD
  const [userInput, setUserInput] = useState("");
  const [booksData, setBooksData] = useState([]);

  const handleClick = () => {
    request
      // superagent
      .get("https://www.googleapis.com/books/v1/volumes")
      .query({ q: userInput })
      .then((data) => {
        console.log(data);
        setBooksData(data.body.items);
        // this.setState({ books: [...data.body.items] });
      });
    console.log(booksData);
  };

=======
>>>>>>> main
  return (
    <div className="area">
      <form onSubmit={props.findBook} action="">
        <input onChange={props.handleSearch} type="text" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};
export default Search;
