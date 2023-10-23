import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import banner1 from "../assets/home/01.jpg";
import banner2 from "../assets/home/02.jpg";
import banner3 from "../assets/home/03.png";
import banner4 from "../assets/home/04.jpg";
import banner5 from "../assets/home/05.png";
import banner6 from "../assets/home/06.png";

const TopSwipBanner = () => {
  const bannerData = [
    {
      id: 1,
      image: banner1,
    },
    {
      id: 2,
      image: banner2,
    },
    {
      id: 3,
      image: banner3,
    },
    {
      id: 4,
      image: banner4,
    },
    {
      id: 5,
      image: banner5,
    },
    {
      id: 6,
      image: banner6,
    },
  ];

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper w-full h-[500px]"
      >
        {bannerData?.map((banner) => (
          <SwiperSlide key={banner.id}>
            <img className="w-full h-[500px]" src={banner.image} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default TopSwipBanner;
