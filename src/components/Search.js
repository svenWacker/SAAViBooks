import React, { useState } from "react";
import request from "superagent";

const Search = (props) => {
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

  return (
    <div className="area">
      <input onChange={(e) => setUserInput(e.target.value)} type="text" />
      <button onClick={handleClick}> Search</button>
    </div>
  );
};

export default Search;
