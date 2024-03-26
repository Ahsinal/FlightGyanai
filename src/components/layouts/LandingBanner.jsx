"use client";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { FaPlaneDeparture } from "react-icons/fa";
import { FaBusinessTime } from "react-icons/fa6";
import { IoHappyOutline } from "react-icons/io5";
import { useGetBannerQuery, useGetChooseUsQuery } from "../../../frontend/api";
const LandingBanner = () => {
  const { data: bannerData } = useGetBannerQuery();
  const { data: cardBanner } = useGetChooseUsQuery();
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
                  <img src={d.image} alt="image" />
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
