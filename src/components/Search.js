import React, { useState } from "react";
import request from "superagent";

const Search = (props) => {
  return (
    <div className="area">
      <form onSubmit={props.findBook} action="">
        <input onChange={props.handleSearch} type="text" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

// fetching inside the search
// const [userInput, setUserInput] = useState("");
// const [booksData, setBooksData] = useState([]);

// const handleClick = () => {
//   request
//     // superagent
//     .get("https://www.googleapis.com/books/v1/volumes")
//     .query({ q: userInput })
//     .then((data) => {
//       console.log(data);
//       // set state + spread operater -spreading the data from an api to the new array - books property, when user is searching for a book
//       setBooksData(data.body.items);
//       // this.setState({ books: [...data.body.items] });
//     });
//   console.log(booksData);
// };

//   return (
//     <div className="area">
//       <input onChange={(e) => setUserInput(e.target.value)} type="text" />
//       <button onClick={handleClick}> Search</button>
//     </div>
//   );
// };

export default Search;
