import { Link } from "react-router-dom";

// new components Alina
import React, { Component } from "react";
import Search from "./Search";
import BookList from "./BookList";
import request from "superagent";

// books's component BookInfo
import BookInfo from "./BookInfo";

class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      field: "",
    };
  }

  findBook = (e) => {
    e.preventDefault();
    request
      // superagent
      .get("https://www.googleapis.com/books/v1/volumes")
      .query({ q: this.state.field })
      .then((data) => {
        console.log(data);
        // set state + spread operator -spreading the data from an api to the new array - books property, when user is searching for a book
        this.setState({ books: [...data.body.items] });
      });
  };

  handleSearch = (e) => {
    // console.log(e.target.value);
    this.setState({ field: e.target.value });
  };

  render() {
    return (
      <React.Fragment>
        <div className="books-wrapper">
          <h2 className="page-headings">Meet your next book</h2>
          <Search findBook={this.findBook} handleSearch={this.handleSearch} />
          <BookList books={this.state.books} />
        </div>
        <BookInfo />
      </React.Fragment>
    );
  }
}
export default Books;
