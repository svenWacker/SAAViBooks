import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
const BookCard = (props) => {
  console.log(props.id);
  return (
    <Card className="grid">
      <Card.Img
        className="grid-img"
        src={props.image ? props.image : `/#img`}
        alt="book cover"
      />
      <Card.Body className="card-container">
        <Card.Title>
          {" "}
          <h3>{props.title}</h3>
          {/* if (string.length > 25) {
  string = string.substring(0, 24) + "...";
} */}
        </Card.Title>
        <Card.Text>
          <h4>Author: {props.author}</h4>
        </Card.Text>
        <p>
          Published:{" "}
          {props.published === "0000"
            ? "Not available"
            : props.published.substring(0, 4)}
        </p>
        {/* Vivi's link */}
        <Link to={`/bookInfo/${props.id}`} id={props.id}>
          <Button variant="info">Read More</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};
export default BookCard;
