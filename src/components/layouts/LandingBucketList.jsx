"use client";
import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { familyData, honeymoonData, cooperateData } from "@/data/Data";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Autoplay, Navigation } from "swiper/modules";
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
      <h3 className="bitter text-cGray800 mb-32">Browse All Packages</h3>
      <Row className="gx-48">
        <Col lg={3} sm={12}>
          {list.map((d, i) => {
            return (
              <div
                className={`rounded-4 p-12 mb-12 card-side-bucketlist bg-primary text-white h6 fw-normal text-center shadow ${
                  selected === d.id ? "active" : ""
                }`}
                key={i}
                onClick={() => setSelected(d.id)}
              >
                {d.title}
              </div>
            );
          })}
        </Col>
        <Col lg={9} sm={12} >
          <Swiper
            spaceBetween={10}
            loop={true}
            ref={swiperRef}
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
            {data.map((d, i) => {
              return (
                <SwiperSlide key={i}>
                  <div>{d.title}</div>
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
