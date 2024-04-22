"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import { Breadcrumb } from "antd";
import { FaClock, FaStar } from "react-icons/fa";
import { CgDanger } from "react-icons/cg";
import { MdOutlineTravelExplore } from "react-icons/md";
import { TbTrekking } from "react-icons/tb";
import { BsCarFront } from "react-icons/bs";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  useGetPackageQuery,
  useGetPackageDetailQuery,
  useGetSettingsQuery,
} from "../../../../frontend/api";
import SideCardPackage from "@/components/cards/SideCard";
import Booking from "@/components/layouts/Booking";
import Itinerary from "@/components/layouts/Itinerary";
import { FaUserGroup } from "react-icons/fa6";
const PackageDetail = ({ params }) => {
  const { data: packageData } = useGetPackageQuery();
  const { data: packageDetailData } = useGetPackageDetailQuery(params.slug);

  const { data: settingData } = useGetSettingsQuery();
  const stars = Array.from(
    { length: packageDetailData?.data.rating },
    (_, index) => <FaStar key={index} />
  );
  return (
    <>
      {/* <section className="breadcrumb-banner position-relative">
        <div className="img-wide">
          <img
            src={settingData?.data.destination_page_image}
            alt="about-image"
          />

          <Container>
            <div className="about-banner-content bitter">
              <h2>{packageDetailData?.data.name}</h2>
              <Breadcrumb
                className="h5 fw-normal mt-8"
                items={[
                  {
                    title: <Link href="/">Home</Link>,
                  },
                  {
                    title: <Link href="/">Packages</Link>,
                  },
                ]}
              />
            </div>
          </Container>
        </div>
      </section> */}
      <section className="py-16 package-detail-page px-sm-12">
        <Container>
          <Row className="mt-24 gap-24-row ">
            <Col lg={8} sm={12}>
              <div className=" flex-between align-items-center mb-16">
                <div className="h4 bitter fw-medium">
                  {packageDetailData?.data.name}
                </div>
                <div className="d-flex gap-4 btn-pill text-white bg-secondary px-12">
                  <div className="">{packageDetailData?.data.currency}</div>
                  <div>{packageDetailData?.data.adult_price}</div>
                </div>
              </div>
              <Swiper
                slidesPerView={1}
                pagination={{
                  clickable: true,
                }}
                autoplay={{ delay: 3000 }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
              >
                {packageDetailData?.data.galleries.map((d, i) => {
                  return (
                    <SwiperSlide key={i}>
                      <div className="img-landscape rounded-12 overflow-hidden">
                        <img src={d.image} alt="image package" />
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
              {/* <Row className="mt-12">
                <h5>Overview</h5>
                <Col lg={4} sm={6} className="g-16">
                  <div className="d-flex align-items-center gap-12 card-package-overview">
                    <MdOutlineTravelExplore className="h1 text-secondary" />
                    <div className=" flex-column">
                      <p className="fw-medium">Activity</p>
                      <p className="mt-0 text-cGray700 small">
                        {packageDetailData?.data.activity.activities}
                      </p>
                    </div>
                  </div>
                </Col>
                <Col lg={4} sm={6} className="g-16">
                  <div className="d-flex align-items-center gap-12 card-package-overview">
                    <CgDanger className="h1 text-secondary" />
                    <div className=" flex-column">
                      <p className="fw-medium">Trip Grade</p>
                      <p className="mt-0 text-cGray700 small">
                        {packageDetailData?.data.activity.trip_grade}
                      </p>
                    </div>
                  </div>
                </Col>
                <Col lg={4} sm={6} className="g-16">
                  <div className="d-flex align-items-center gap-12 card-package-overview">
                    <TbTrekking className="h1 text-secondary" />
                    <div className=" flex-column">
                      <p className="fw-medium">Trip Type</p>
                      <p className="mt-0 text-cGray700 small">
                        {packageDetailData?.data.activity.trip_type}
                      </p>
                    </div>
                  </div>
                </Col>
                <Col lg={4} sm={6} className="g-16">
                  <div className="d-flex align-items-center gap-12 card-package-overview">
                    <BsCarFront className="h1 text-secondary" />
                    <div className=" flex-column">
                      <p className="fw-medium">Trip Mode</p>
                      <p className="mt-0 text-cGray700 small">
                        {packageDetailData?.data.activity.trip_mode}
                      </p>
                    </div>
                  </div>
                </Col>
                <Col lg={4} sm={6} className="g-16">
                  <div className="d-flex align-items-center gap-12 card-package-overview">
                    <FaClock className="h1 text-secondary" />
                    <div className=" flex-column">
                      <p className="fw-medium">Trip Duration</p>
                      <p className="mt-0 text-cGray700 small">
                        {packageDetailData?.data.activity.trip_duration}
                      </p>
                    </div>
                  </div>
                </Col>
                <Col lg={4} sm={6} className="g-16">
                  <div className="d-flex align-items-center gap-12 card-package-overview">
                    <FaUserGroup className="h1 text-secondary" />
                    <div className=" flex-column">
                      <p className="fw-medium">Group Size</p>
                      <p className="mt-0 text-cGray700 small">
                        {packageDetailData?.data.activity.group_size}
                      </p>
                    </div>
                  </div>
                </Col>
              </Row> */}
              <div className="mt-32 p fw-light">
                {packageDetailData?.data.short_description}
              </div>

              <Col sm={12} lg={12} className="mt-24">
                <h6 className=" text-cGray800 mb-12">ITINERARY</h6>
                {packageDetailData?.data.itenaries.map((d, i) => {
                  return (
                    <Itinerary
                      key={i}
                      day={i + 1}
                      id={d.id}
                      title={d.title}
                      body={d.description}
                    />
                  );
                })}
              </Col>
              <Col
                sm={12}
                className="mt-24 py-24 px-8 bg-cGray100 rounded-12 mb-24"
              >
                <h6 className="mb-12"> Includes</h6>
                <div
                  className="p details-contents "
                  dangerouslySetInnerHTML={{
                    __html: packageDetailData?.data.inclusion,
                  }}
                ></div>
              </Col>
              <Col sm={12} className="mt-24 py-24 px-8 bg-cGray100 rounded-12 ">
                <h6 className="mb-12"> Excludes</h6>
                <div
                  className="p details-contents "
                  dangerouslySetInnerHTML={{
                    __html: packageDetailData?.data.exclusion,
                  }}
                ></div>
              </Col>
            </Col>

            <Col lg={4} className="side-col">
              <Row className="stick-side-card">
                <Col sm={12}>
                  <Booking packageId={packageDetailData?.data.id} />
                </Col>
                <Col sm={12} className="mt-32">
                  <div className="p-24 shadow-1 rounded-16">
                    <h6 className="text-cGray700 mb-12">
                      Other Packages for you
                    </h6>
                    {packageData?.data
                      .filter((d) => d.slug != packageDetailData?.data.slug)
                      .slice(0, 5)
                      .map((d, i) => {
                        return (
                          <SideCardPackage
                            title={d.name}
                            key={i}
                            slug={d.slug}
                            id={d.id}
                          />
                        );
                      })}
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default PackageDetail;
