"use client";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaQuoteRight, FaQuoteLeft } from "react-icons/fa";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import TestimonialCard from "../cards/TestimonialCard";
import {
  useGetTestimonialQuery,
  useGetSettingsQuery,
} from "../../../frontend/api";
import TestimonialCardNew from "../cards/TestimonialCardNew";
SwiperCore.use([Navigation]);
const TestimonialNew = () => {
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
      <Container>
        <p className="text-secondary mb-4 text-center">Testimonials</p>
        <div className="gap-12 flex-center">
          <FaQuoteLeft className="text-secondary" />
          <h3 className="text-cGray800 bitter text-center mb-48 position-relative">
            {settingData?.data.testimonial_section_description}
          </h3>
          <FaQuoteRight className="text-primary" />
        </div>
        <Row className="gap-24-row  testimonial-swiper-wrapper align-items-center ">
          <Col lg={5} sm={12} className="img">
            <img src={settingData?.data.testimonial_image} alt="" />
            {/* <img src="https://travelinvue.htmldesigntemplates.com/assets/travel2-CbOejDsv.png" alt="" /> */}
          </Col>
          <Col lg={7}>
            <Swiper
              loop={true}
              autoplay={{ delay: 2500 }}
              ref={swiperRef}
              modules={[Autoplay]}
              className="mySwiper"
            >
              {testimonialData?.data.map((d, i) => {
                return (
                  <SwiperSlide key={i} className="p-24">
                    <TestimonialCardNew
                      image={d.image}
                      name={d.name}
                      desc={d.description}
                      designation={d.position}
                      rating={d.rating}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <div className="px-24 gap-12  h5">
              {/* <FaLongArrowAltLeft
                onClick={goPrev}
                className="text-secondary arrow"
              />
              <FaLongArrowAltRight
                onClick={goNext}
                className="text-secondary arrow"
              /> */}
              <div className="circle-xs bg-primary text-white" onClick={goPrev}>
                <IoIosArrowBack />
              </div>
              <div className="circle-xs bg-primary text-white" onClick={goNext}>
                <IoIosArrowForward />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="bg-testimonial d-none d-lg-block"></div>
    </>
  );
};

export default TestimonialNew;
