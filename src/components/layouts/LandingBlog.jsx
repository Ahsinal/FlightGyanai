"use client";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { BlogCardlg, BlogCardsm } from "../cards/BlogCard";
import { useGetBlogQuery, useGetSettingsQuery } from "../../../frontend/api";

const LandingBlog = () => {
  const { data: settingData } = useGetSettingsQuery();
  const { data: blogData } = useGetBlogQuery();
  const swiperRef = React.useRef(null);

  return (
    <Container>
      <h3 className="mb text-cGray800 bitter">
        {settingData?.data.homepage_blog_section_description}
      </h3>
      <Row className="d-flex gx-40">
        {blogData?.data.slice(0, 1).map((d, i) => {
          return (
            <Col lg={6} sm={12} className="rounded-12 p-12 px-sm-12 " key={i}>
              <BlogCardlg
                img={d.image}
                title={d.title}
                desc={d.short_description}
                date={d.date}
                slug={d.slug}
              />
            </Col>
          );
        })}
        <Col lg={6} sm={12} className=" px-12 d-none d-lg-block d-md-block">
          {blogData?.data.slice(1, 5).map((d, i) => {
            return (
              <div className="w-100 p-12" key={i}>
                <BlogCardsm
                  img={d.image}
                  title={d.title}
                  desc={d.short_description}
                  date={d.date}
                  slug={d.slug}
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
