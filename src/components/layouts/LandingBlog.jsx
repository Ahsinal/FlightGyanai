"use client";
import React from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import BlogCard from "../cards/BlogCard";
import { blogData } from "@/data/Data";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
SwiperCore.use([Navigation]);

const LandingBlog = () => {
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
    <Container fluid className="position-relative">
      <h3 className="bitter text-cGray900">Latest Updates</h3>
      <div className="d-flex gap-16 h2">
        <FaArrowAltCircleLeft onClick={goPrev} className="text-primary100 position-absolute top-0" />
        <FaArrowAltCircleRight onClick={goNext} className="text-primary100 " />
      </div>
      <Swiper
        spaceBetween={20}
        loop={true}
        ref={swiperRef}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        className="mySwiper"
      >
        {blogData?.data.map((d, i) => {
          return (
            <SwiperSlide key={i}>
              <BlogCard
                img={d.image}
                date={d.date}
                desc={d.short_description}
                title={d.title}
                slug={d.slug}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Container>
  );
};

export default LandingBlog;
