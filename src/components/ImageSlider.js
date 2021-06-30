import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import SwiperCore, { Navigation } from "swiper";
import BookCard from "./BookCard";

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
        <SwiperSlide>
          <BookCard />
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
      </Swiper>
    </div>
  );
}

export default ImageSlider;
