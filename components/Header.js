import React from "react";
import Slide_1 from "./Slide_1";
import Slide_2 from "./Slide_2";
import Slide_3 from "./Slide_3";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Parallax, Pagination } from "swiper";

import "swiper/css";

const Header = () => {
  return (
    <header>
      <Swiper
        className="mySwiper"
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Parallax, Pagination]}
      >
        <SwiperSlide>
          <Slide_3 />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Slide_1 />
        </SwiperSlide>
        <SwiperSlide>
          <Slide_2 />
        </SwiperSlide>
      </Swiper>
    </header>
  );
};

export default Header;
