import React, { useState } from "react";
import { SliderData } from "./DummyBookAPI";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      <IoIosArrowBack className="left-arrow" onClick={prevSlide} />
      <IoIosArrowForward className="right-arrow" onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div>
            <div className="slider-container">
              <div
                className={index === current ? "slide active" : "slide"}
                key={index}
              >
                {index === current && (
                  <img src={slide.image} className="image" />
                )}
                {index === current && (
                  <h3 className="book-title">{slide.title}</h3>
                )}
                {index === current && (
                  <p className="book-author">{slide.author}</p>
                )}
                {index === current && (
                  <p className="book-quote">{slide.quote}</p>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
