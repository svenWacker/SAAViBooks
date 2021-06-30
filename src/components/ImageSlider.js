import React from "react";
import bookCoverData from "../api/bookCoverData";

//Swiper Package Imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import SwiperCore, { Navigation, Autoplay } from "swiper";

//Swiper Package Modules
SwiperCore.use([Navigation]);
SwiperCore.use([Autoplay]);

function ImageSlider() {
  return (
    <div className="slider-container">
      <Swiper
        spaceBetween={20}
        slidesPerView={4}
        navigation
        autoplay={{ delay: 2000 }}
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
