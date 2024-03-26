"use client";
import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { familyData, honeymoonData, cooperateData } from "@/data/Data";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import PackageCard from "../cards/PackageCard";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import {
  useGetSettingsQuery,
  useGetCategoryPackageQuery,
  useGetCategoryPackageDetailQuery,
} from "../../../frontend/api";
SwiperCore.use([Navigation]);
const LandingBucketList = () => {
  const { data: settingData } = useGetSettingsQuery();
  const { data: categoryData } = useGetCategoryPackageQuery();
  const [selected, setSelected] = useState("group-package");
  const { data: categorywise } = useGetCategoryPackageDetailQuery(selected);

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
      <h3 className="bitter text-cGray800 mb-8 mb-sm-16 text-center">
        {settingData?.data.homepage_combo_package_section_description}
      </h3>
      <Row>
        <Col lg={12} className="flex-center gap-4 mb-12 mb-sm-32 flex-wrap">
          {categoryData?.data.map((d, i) => {
            // Exclude categories with slugs "international-tours" and "domestic-tours"
            if (
              d.slug !== "international-tours" &&
              d.slug !== "domestic-tours"
            ) {
              return (
                <div
                  className={`card-side-bucketlist rounded-8 x-small bg-white shadow-4 py-8 px-24 fw-normal text-center text-cGray800 ${
                    selected === d.slug ? "active" : ""
                  }`}
                  key={i}
                  onClick={() => setSelected(d.slug)}
                >
                  {d.name}
                </div>
              );
            }
          })}
        </Col>
      </Row>
      <Row>
        <Swiper
          loop={true}
          ref={swiperRef}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          className="mySwiper p-12"
        >
          {categorywise?.data.map((d, i) => {
            return (
              <SwiperSlide key={i}>
                <PackageCard
                  img={d.image}
                  title={d.title}
                  location={d.location}
                  price={d.price}
                  days={d.days}
                  rating={d.rating}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="flex-center gap-16 text-secondary h4 mt-8">
          <FaLongArrowAltLeft className="arrow" onClick={goPrev} />
          <FaLongArrowAltRight className="arrow" onClick={goNext} />
        </div>
      </Row>
    </Container>
  );
};

export default LandingBucketList;
