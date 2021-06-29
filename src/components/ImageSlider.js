import React, { useState } from "react";
import data from "./DummyBookAPI";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import SwiperCore, { Navigation } from "swiper";

SwiperCore.use([Navigation]);

function ImageSlider() {
  return (
    <div className="slider-container">
      <Swiper
        spaceBetween={20}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {data.map((book) => (
          <SwiperSlide key={book.id}>
            <div className="book">
              <img src={book.image} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ImageSlider;
