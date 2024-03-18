"use client";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { bannerData } from "@/data/Data";
import { FaPlaneDeparture } from "react-icons/fa";
import { FaBusinessTime } from "react-icons/fa6";
import { IoHappyOutline } from "react-icons/io5";
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
                <div className="card-swiper w-100 ">
                  <img src={d.img} alt="image" />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <div style={{ marginTop: "-3.5%" }}>
        <Container>
          <Row>
            <Col
              lg={10}
              sm={12}
              className="card-banner flex-between mx-auto py-16  px-32 shadow rounded-12 mt-0 bg-white flex-wrap"
            >
              <div className="card-col flex-center-center  gap-16 pe-24">
                <div className="text-secondary h2">
                  <FaPlaneDeparture />
                </div>
                <div className="content">
                  <h6 className="text-cGray800">100 K +</h6>
                  <p className="small text-cGray600"> Total Flights</p>
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
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default LandingBanner;
