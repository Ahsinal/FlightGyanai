"use client";
import React from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Autoplay, Navigation } from "swiper/modules";
import { useGetPackageQuery, useGetSettingsQuery } from "../../../frontend/api";
import PopularPackageCard from "../cards/PopularPackageCard";
import CardPackageNew from "../cards/CardPackageNew";
SwiperCore.use([Navigation]);
const Packages = () => {
  const { data: packageData } = useGetPackageQuery();
  const { data: settingData } = useGetSettingsQuery();
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
    <Container className="pb-40">
      <div className=" flex-between align-items-center mb-32">
        <h3 className="bitter text-cGray900">
          {settingData?.data.homepage_trending_section_description}
        </h3>
      </div>
      <Swiper
        spaceBetween={20}
        loop={true}
        ref={swiperRef}
        autoplay={{ delay: 3000 }}
        modules={[Autoplay]}
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
            spaceBetween: 20,
          },
        }}
        className="mySwiper"
      >
        {packageData?.data.map((d, i) => {
          return (
            <SwiperSlide key={i} className="px-8 py-8">
              <CardPackageNew
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
    </Container>
  );
};

export default Packages;
