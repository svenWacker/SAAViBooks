import React from "react";
import dummyReviews from "../api/dummyReviews";

//Swiper Package Imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import SwiperCore, { Navigation, Autoplay } from "swiper";

//Swiper Package Modules
SwiperCore.use([Navigation]);

function ImageSlider() {
  return (
    <div className="slider-container">
      <Swiper
        spaceBetween={100}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {dummyReviews.map((review) => (
          <SwiperSlide>
            <div className="reviews-main">
              <div className="user-photo-container">
                <img
                  src={require(`../img/user-photos/${review.user}`).default}
                />
              </div>

              <div className="user-reviews">
                <h3>{review.title}</h3>
                <h5>
                  <span className="shade">by:</span> {review.author}
                </h5>
                <h5>
                  <span className="shade">Rating:</span> {review.rating}
                </h5>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ImageSlider;
