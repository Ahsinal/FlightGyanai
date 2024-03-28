"use client";
import React, { useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

import { Autoplay, Navigation } from "swiper/modules";
import { useGetBannerQuery, useGetChooseUsQuery } from "../../../frontend/api";

SwiperCore.use([Navigation]);
const LandingBanner = () => {
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
  const { data: bannerData } = useGetBannerQuery();
  const { data: cardBanner } = useGetChooseUsQuery();
  return (
    <>
      <div className="banner-slider">
        <Swiper
          slidesPerView={1}
          grabCursor={true}
          loop={true}
          autoplay={{ delay: 3000 }}
          modules={[Autoplay, Navigation]}
          className="bannerSwiper"
          ref={swiperRef}
        >
          {bannerData?.data.map((d, i) => {
            return (
              <SwiperSlide key={i}>
                <div className="card-swiper w-100 ">
                  <div className="img-wide">
                    <img src={d.image} alt="image" />
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <button className="prev  bg-primary" onClick={goPrev}>
          <FaChevronLeft className="text-white" />
        </button>
        <button className="next bg-primary" onClick={goNext}>
          <FaChevronRight className="text-white" />
        </button>
      </div>

      <div style={{ marginTop: "-2.5%" }}>
        <Container>
          <Row>
            <Col
              lg={10}
              sm={12}
              className="card-banner flex-between mx-auto py-16  px-32 shadow rounded-12 mt-0 bg-white flex-wrap d-none d-lg-flex d-md-flex"
            >
              {cardBanner?.data.map((d, i) => {
                return (
                  <div
                    className="card-col flex-center-center  gap-16 pe-24"
                    key={i}
                  >
                    <div className="banner-card-icon">
                      {/* <FaPlaneDeparture /> */}
                      <img src={d.image} alt="icon" />
                    </div>
                    <div className="content">
                      <h6 className="text-cGray900">{d.short_description}</h6>
                      <p className="small text-cGray600">{d.title} </p>
                    </div>
                  </div>
                );
              })}
              {/* <div className="card-col flex-center-center  gap-16 pe-24">
                <div className="text-secondary h2">
                  <IoHappyOutline />
                </div>
                <div className="content">
                  <h6 className="text-cGray800">100 K +</h6>
                  <p className="small text-cGray600"> Happy Passengers</p>
                </div>
              </div>
              <div className="card-col flex-center-center  gap-16 pe-24">
                <div className="text-secondary h2">
                  <FaBusinessTime />
                </div>
                <div className="content">
                  <h6 className="text-cGray800">10 +</h6>
                  <p className="small text-cGray600"> Years Experience</p>
                </div>
              </div>
              <div className="card-col flex-center-center  gap-16 pe-24">
                <div className="text-secondary h2">
                  <IoHappyOutline />
                </div>
                <div className="content">
                  <h6 className="text-cGray800">100 K +</h6>
                  <p className="small text-cGray600"> Happy Passengers</p>
                </div>
              </div> */}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default LandingBanner;
