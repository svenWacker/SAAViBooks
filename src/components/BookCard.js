import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
const BookCard = (props) => {
  return (
    <Card className="grid">
      <Card.Img className="grid-img" src={props.image} alt="book cover" />
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
        {/* <p>{props.description}</p>
        <p>{props.averageRating}</p> */}
        <Button variant="info">Read More</Button>
      </Card.Body>
    </Card>
  );
};
export default BookCard;
