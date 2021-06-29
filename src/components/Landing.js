import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import mainImage from "../img/main-img.png";

function Landing() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetch("http://api.quotable.io/random")
      .then((res) => res.json())
      .then((quote) => {
        setQuote(quote.content);
        setAuthor(quote.author);
      });
  }, []);

  return (
    <React.Fragment>
      <div className="landing-wrapper">
        <span className="quote-container">
          <h3>Quote of the Day:</h3>
          <p className="quote">{quote}</p>
          <p className="author">{author}</p>
        </span>
        <span>
          <img src={mainImage} />
        </span>
      </div>
      <div className="arrow-down">
        <p>ARROW DOWN</p>
      </div>
    </React.Fragment>
  );
}

export default Landing;
