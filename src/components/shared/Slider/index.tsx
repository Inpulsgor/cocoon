import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Thumbs } from "swiper/core";
import SofaSample from "@images/sofa_sample.jpg";

SwiperCore.use([Navigation, Thumbs]);
import "swiper/swiper.min.css";
import "swiper/components/thumbs/thumbs.min.css";
import "./Swiper.scss";

const index = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={20}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        className="mainSwiper"
      >
        <SwiperSlide>
          <img src={SofaSample} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={SofaSample} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={SofaSample} />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={12}
        slidesPerView={6}
        freeMode={true}
        watchSlidesVisibility={true}
        watchSlidesProgress={true}
        className="subSwiper"
      >
        <SwiperSlide>
          <img src={SofaSample} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={SofaSample} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={SofaSample} />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default index;
