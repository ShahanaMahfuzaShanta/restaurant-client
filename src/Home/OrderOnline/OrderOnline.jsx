import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import banner1 from "../../assets/home/slide1.jpg";
import banner2 from "../../assets/home/slide2.jpg";
import banner3 from "../../assets/home/slide3.jpg";
import banner4 from "../../assets/home/slide4.jpg";
import banner5 from "../../assets/home/slide5.jpg";
import UserTitle from "../../Components/UserTitle";

const bannerData = [
  {
    id: 1,
    title: "Salad",
    image: banner1,
  },
  {
    id: 2,
    title: "Pizza",
    image: banner2,
  },
  {
    id: 3,
    title: "Soup",
    image: banner3,
  },
  {
    id: 4,
    title: "Dessert",
    image: banner4,
  },
  {
    id: 5,
    title: "Salad",
    image: banner5,
  },
];

const OrderOnline = () => {
  return (
    <>
      <UserTitle heading="From 11:00am to 10:00pm" title="Order Online" />
      <div className="w-[900px] mx-auto">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          autoplay={{
            delay: 2500,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {bannerData.map((banner) => (
            <SwiperSlide key={banner.id}>
              <div className=" relative">
                <img src={banner.image} alt="" />
                <p className="absolute bottom-2 right-20 text-white uppercase">
                  {banner.title}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default OrderOnline;
