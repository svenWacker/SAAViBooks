import React, { useState, useEffect } from "react";

function TopReviewsGenerator() {
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
    <div className="reviews-wrapper">
      <div>
        <p className="quote">{quote}</p>
        <p className="author">{author}</p>
      </div>
    </div>
  );
}

export default TopReviewsGenerator;
