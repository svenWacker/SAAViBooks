import React from "react";
import { Link } from "react-router-dom";

const BookCard = (props) => {
  return (
    <div className="card-container">
      <img src={props.image} alt="" />
      <div className="desc">
        <h2>{props.title}</h2>
        <h3>{props.author}</h3>
        <p>{props.published}</p>
        <p>{props.description}</p>
        <p>{props.averageRating}</p>
      </div>
      <Link to={`/BookInfo/${props.id}`}>See Details</Link>
      {/* <Link to={{pathname:"/BookInfo/:id"}}>See Details</Link> */}
    </div>
  );
};

export default BookCard;
