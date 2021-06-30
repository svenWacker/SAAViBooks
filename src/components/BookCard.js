import React from "react";
import Card from "react-bootstrap/Card";

const BookCard = (props) => {
  return (
    <Card className="grid">
      <Card.Img src={props.image} alt="book cover" />
      <Card.Body className="card-container">
        <Card.Title>
          {" "}
          <h3>{props.title}</h3>
        </Card.Title>
        <Card.Text>
          <h4>{props.author}</h4>
        </Card.Text>
        <p>{props.published}</p>
        {/* <p>{props.description}</p>
        <p>{props.averageRating}</p> */}
      </Card.Body>
    </Card>
  );
};

export default BookCard;
