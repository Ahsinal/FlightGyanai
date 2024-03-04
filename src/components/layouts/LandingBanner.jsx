"use client";
import React from "react";
import { Container } from "react-bootstrap";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { bannerData } from "@/data/Data";
const LandingBanner = () => {
  return (
    <>
      <div className="">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          navigation={true}
          autoplay={{ delay: 5000 }}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          {bannerData?.data.map((d, i) => {
            return (
              <SwiperSlide key={i}>
                <div className="card-banner w-100 ">
                  <img src={d.img} alt="image" />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default LandingBanner;
