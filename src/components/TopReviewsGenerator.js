import React, { useState, useEffect } from "react";

function TopReviewsGenerator() {
  const [review, setReview] = useState("");

  useEffect(() => {
    fetch("https://api.nytimes.com/svc/books/v3/reviews.json")
      .then((res) => res.json())
      .then((data) => {
        setReview(data.status);
      });
  }, []);

  return (
    <div className="reviews-wrapper">
      <div>
        <p className="quote">{review}</p>
      </div>
    </div>
  );
}

export default TopReviewsGenerator;
