import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import mainImage from "../img/main-img.png";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import ImageSlider from "./ImageSlider";
import { SliderData } from "./DummyBookAPI";

function Landing() {
  // const [quote, setQuote] = useState("");
  // const [author, setAuthor] = useState("");

  // useEffect(() => {
  //   fetch("http://api.quotable.io/random")
  //     .then((res) => res.json())
  //     .then((quote) => {
  //       setQuote(quote.content);
  //       setAuthor(quote.author);
  //     });
  // }, []);

  return (
    <React.Fragment>
      <div className="landing-wrapper">
        <span className="header">
          <h1>Recommended Today</h1>
        </span>
        {/* <span className="quote-container">
          <h3>Quote of the Day:</h3>
          <p className="quote">{quote}</p>
          <p className="author">{author}</p>
        </span> */}
        <div className="img-display">
          <ImageSlider slides={SliderData} />
          {/* <img src={mainImage} /> */}
        </div>
      </div>
      <div className="arrow-down">
        <p> Read More </p>
        <span>
          <IoIosArrowDropdownCircle />
        </span>
      </div>
    </React.Fragment>
  );
}

export default Landing;
