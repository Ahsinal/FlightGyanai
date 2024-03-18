"use client";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { BlogCardlg, BlogCardsm } from "../cards/BlogCard";
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
    <Container>
      <h3 className="mb text-cGray800 bitter">Explore Our Latest Blogs</h3>
      <Row className="d-flex align-items-center gx-40">
        {blogData?.data.slice(0, 1).map((d, i) => {
          return (
            <Col lg={6} sm={12} className="rounded-12 p-12 px-sm-12 " key={i}>
              <BlogCardlg
                img={d.img}
                title={d.title}
                desc={d.desc}
                date={d.date}
              />
            </Col>
          );
        })}
        <Col lg={6} sm={12} className=" p-12 d-none d-lg-block d-md-block">
          {blogData?.data.slice(1, 5).map((d, i) => {
            return (
              <div className="w-100 p-12" key={i}>
                <BlogCardsm
                  img={d.img}
                  title={d.title}
                  desc={d.desc}
                  date={d.date}
                />
              </div>
            );
          })}
        </Col>
      </Row>
      {/* <div className="d-flex gap-16 h2">
        <FaArrowAltCircleLeft
          onClick={goPrev}
          className="text-primary100 position-absolute top-0"
        />
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
      </Swiper> */}
    </Container>
  );
};

export default LandingBlog;
