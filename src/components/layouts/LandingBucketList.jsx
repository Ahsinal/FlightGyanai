"use client";
import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { familyData, honeymoonData, cooperateData } from "@/data/Data";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import PackageCard from "../cards/PackageCard";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
SwiperCore.use([Navigation]);
const LandingBucketList = () => {
  const [selected, setSelected] = useState("family");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "family",
      title: "Family Package",
    },
    {
      id: "honeymoon",
      title: "Honeymoon Package",
    },
    {
      id: "cooperate",
      title: "Cooperate Package",
    },
    {
      id: "group",
      title: "Group Package",
    },
    {
      id: "cruise",
      title: "Cruise Package",
    },
  ];
  useEffect(() => {
    switch (selected) {
      case "family":
        setData(familyData.data);
        break;
      case "honeymoon":
        setData(honeymoonData.data);
        break;
      case "cooperate":
        setData(cooperateData.data);
        break;
      default:
        setData(familyData.data);
    }
  }, [selected]);
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
      <h3 className="bitter text-cGray800 mb-32 text-center">
        Browse All Packages
      </h3>
      <div className="flex-center gap-8">
        {list.map((d, i) => {
          return (
            <div
              className={`card-side-bucketlist rounded-8 py-8 px-12 mb-32 fw-normal text-center text-cGray800 ${
                selected === d.id ? "active" : ""
              }`}
              key={i}
              onClick={() => setSelected(d.id)}
            >
              <p> {d.title}</p>
            </div>
          );
        })}
      </div>
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
              spaceBetween: 10,
            },
          }}
          className="mySwiper p-12"
        >
          {data.map((d, i) => {
            return (
              <SwiperSlide key={i}>
                <PackageCard
                  img={d.img}
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
