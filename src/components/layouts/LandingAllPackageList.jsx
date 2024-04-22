"use client";
import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import {
  useGetSettingsQuery,
  useGetCategoryPackageQuery,
  useGetCategoryPackageDetailQuery,
} from "../../../frontend/api";
import PopularPackageCard from "../cards/PopularPackageCard";

const LandingBucketList = () => {
  const { data: settingData } = useGetSettingsQuery();
  const { data: categoryData } = useGetCategoryPackageQuery();
  const [selected, setSelected] = useState("group-package");
  const { data: categorywise } = useGetCategoryPackageDetailQuery(selected);

  const swiperRef = React.useRef(null);
  useEffect(() => {
    setSelected(categoryData?.data[0].slug);
  }, [categoryData]);

  return (
    <Container>
      <h3 className="bitter text-cGray800 mb-8 mb-sm-16 text-center">
        {settingData?.data.homepage_combo_package_section_description}
      </h3>
      <Row>
        <Col
          lg={12}
          className="flex-center gap-4 mb-12 mb-sm-32 py-12 overflow-auto"
        >
          {categoryData?.data.map((d, i) => {
            // Exclude categories with slugs "international-tours" and "domestic-tours"
            if (
              d.slug !== "international-tours" &&
              d.slug !== "domestic-tours"
            ) {
              return (
                <div
                  className={`card-side-bucketlist  rounded-8 x-small bg-white shadow-4 py-8 px-24 fw-normal text-center text-cGray800 ${
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
      <Row className="gap-24-row">
        <Col lg={12}>
        <Swiper
          spaceBetween={20}
          loop={true}
          // autoplay={{ delay: 3000 }}
          pagination={{
            // dynamicBullets: true,
            clickable:true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper py-16"
        >
          {categorywise?.data?.map((d, i) => {
            return (
              <SwiperSlide key={i} className="pb-12">
                {/* <PopularPackageCard
                  img={d.image}
                  title={d.name}
                  location={d.location}
                  currency={d.currency}
                  price={d.fair_price}
                  days={d.duration}
                  rating={d.rating}
                  desc={d.short_description}
                  slug={d.slug}
                  id={d.id}
                /> */}
                <PopularPackageCard
                  img={d.image}
                  title={d.name}
                  desc={d.description}
                  currency={d.currency}
                  price={d.fair_price}
                  slug={d.slug}
                  id={d.id}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        </Col>
      </Row>
    </Container>
  );
};

export default LandingBucketList;
