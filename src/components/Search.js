import React, { useState } from "react";
import request from "superagent";
import { useHistory } from "react-router-dom";
import { data } from "dom7";
import { BiSearchAlt } from "react-icons/bi";

const Search = (props) => {
  const [userInput, setUserInput] = useState("");
  const [booksData, setBooksData] = useState([]);

  const history = useHistory();

  const handleClick = () => {
    request
      // superagent
      .get("https://www.googleapis.com/books/v1/volumes")
      .query({ q: userInput })
      .then((data) => {
        console.log(data);
        // set state + spread operater -spreading the data from an api to the new array - books property, when user is searching for a book
        setBooksData(data.body.items);
        history.push("/books", { state: data.body.items });
        // this.setState({ books: [...data.body.items] });
      });

    // console.log(booksData);
  };

  return (
    <div className="area">
      <input
        className="search-bar"
        onChange={(e) => setUserInput(e.target.value)}
        type="text"
        placeholder="Search .."
      />
      <button className="search-icon" onClick={handleClick}>
        <BiSearchAlt />
      </button>
    </div>
  );
};

export default Search;
