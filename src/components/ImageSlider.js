import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import SwiperCore, { Navigation } from "swiper";
import bookCoverData from "../api/bookCoverData";

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
        {bookCoverData.map((book) => (
          <SwiperSlide>
            <img src={require(`../img/book-covers/${book.img}`).default} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ImageSlider;
