"use client";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaQuoteRight, FaQuoteLeft } from "react-icons/fa";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import TestimonialCard from "../cards/TestimonialCard";
import {
  useGetTestimonialQuery,
  useGetSettingsQuery,
} from "../../../frontend/api";
SwiperCore.use([Navigation]);
const LandingTestimonial = () => {
  const { data: settingData } = useGetSettingsQuery();
  const { data: testimonialData } = useGetTestimonialQuery();
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
      <div className="testimonial-shape-1" style={{ marginLeft: "-20px" }}>
        <img src="assets/image/testicon1.png" alt="flight img" />
      </div>
      <Container>
        <div className="gap-12 flex-center">
          <FaQuoteLeft className="text-secondary" />
          <h3 className="text-cGray800 bitter text-center mb-48 position-relative">
            {settingData?.data.testimonial_section_description}
          </h3>
          <FaQuoteRight className="text-primary" />
        </div>
        <Row className="flex-center-center testimonial-swiper-wrapper">
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
                      img={d.image}
                      name={d.name}
                      desc={d.description}
                      designation={d.position}
                      rating={d.rating}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <div className="flex-center-center gap-16 mt-12 h3">
              <FaLongArrowAltLeft
                onClick={goPrev}
                className="text-secondary arrow"
              />
              <FaLongArrowAltRight
                onClick={goNext}
                className="text-secondary arrow"
              />
            </div>
          </Col>
        </Row>
      </Container>
      <div className="bg-testimonial d-none d-lg-block"></div>
    </>
  );
};

export default LandingTestimonial;
