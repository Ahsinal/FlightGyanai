"use client";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaQuoteRight, FaQuoteLeft } from "react-icons/fa";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import TestimonialCard from "../cards/TestimonialCard";
import { testimonialData } from "@/data/Data";
SwiperCore.use([Navigation]);
const LandingTestimonial = () => {
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
    <>
      <div className="testimonial-shape-1 ms-16">
        <img src="assets/image/testicon1.png" alt="flight img" />
      </div>
      <Container>
        <div className="gap-12 flex-center">
          <FaQuoteLeft className="text-secondary" />
          <h3 className="text-cGray800 bitter text-center mb-48 position-relative">
            What Our Customer Says
          </h3>
          <FaQuoteRight className="text-primary" />
        </div>
        <Row className="flex-center-center">
          <Col lg={10}>
            <Swiper
              loop={true}
              ref={swiperRef}
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
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
              }}
              className="mySwiper"
            >
              {testimonialData?.data.map((d, i) => {
                return (
                  <SwiperSlide key={i} className="p-12">
                    <TestimonialCard
                      img={d.img}
                      name={d.name}
                      desc={d.desc}
                      designation={d.designation}
                      org={d.org}
                      rating={d.rating}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <div className="flex-center-center gap-16 mt-12 h3">
              <FaLongArrowAltLeft
                onClick={goPrev}
                className="text-secondary "
              />
              <FaLongArrowAltRight
                onClick={goNext}
                className="text-secondary "
              />
            </div>
          </Col>
        </Row>
      </Container>
      <div className="bg-testimonial "></div>
    </>
  );
};

export default LandingTestimonial;
