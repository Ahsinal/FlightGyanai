"use client";
import React from "react";
import Link from "next/link";
import { Container } from "react-bootstrap";
import PackageCard from "../cards/PackageCard";
import { cardData } from "@/data/Data";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
SwiperCore.use([Navigation]);
const Packages = () => {
  const swiperRef = React.useRef(null);
  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };
  return (
    <Container className="pb-40">
      <div className=" flex-between align-items-center mb-32">
        <h3 className="bitter text-cGray900">
          Popular<span className="ms-8 text-secondary">Packages</span>
        </h3>
        <div className="d-flex gap-16 h2  text-primary ">
          <FaArrowAltCircleLeft onClick={goPrev} className="arrow" />
          <FaArrowAltCircleRight onClick={goNext} className="arrow" />
        </div>
      </div>
      <Swiper
        spaceBetween={20}
        loop={true}
        ref={swiperRef}
        // autoplay={{ delay: 3000 }}
        modules={[Autoplay]}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        className="mySwiper"
      >
        {cardData?.data.map((d, i) => {
          return (
            <SwiperSlide key={i}>
              <PackageCard
                img={d.img}
                title={d.title}
                location={d.location}
                rating={d.rating}
                price={d.price}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Container>
  );
};

export default Packages;
