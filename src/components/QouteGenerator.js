import React, { useState, useEffect } from "react";

function QuoteGenerator() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetch("http://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      });
  }, []);

  return (
    <div className="quote-wrapper">
      <div>
        <p className="quote">{quote}</p>
        <p className="author">{author}</p>
      </div>
    </div>
  );
}

export default QuoteGenerator;
