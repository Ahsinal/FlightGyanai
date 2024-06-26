"use client";
import { usePathname } from "next/navigation";
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
import { FiPrinter } from "react-icons/fi";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  useGetPackageQuery,
  useGetPackageDetailQuery,
  useGetSettingsQuery,
} from "../../../frontend/api";
import SideCardPackage from "@/components/cards/SideCard";
import Booking from "@/components/layouts/Booking";
import Itinerary from "@/components/layouts/Itinerary";
import { FaUserGroup } from "react-icons/fa6";
import { GiPriceTag } from "react-icons/gi";
import SideCardPackageNew from "@/components/cards/SideCardPackageNew";
import Loading from "@/components/layouts/Loading";
import NotFoundPage from "../layouts/PageNotFound";
const PackageDetail = ({ params }) => {
  const { data: packageData, isLoading: packageLoading } = useGetPackageQuery();
  const { data: packageDetailData, isLoading: packageDetailLoading } =
    useGetPackageDetailQuery(params.slug);
  const { data: settingData, isLoading: settingLoading } =
    useGetSettingsQuery();

  const currentPathName = usePathname();
  const slug = currentPathName.replace("/package/", "");
  const isFound = packageData?.data.some((d) => d.slug === slug);
  if (!isFound) {
    return (
      <>
        <NotFoundPage />
      </>
    );
  }
  const isLoading = packageLoading || packageDetailLoading || settingLoading;

  const stars = Array.from(
    { length: packageDetailData?.data?.rating },
    (_, index) => <FaStar key={index} />
  );
  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <section className="mt-16">
        <Container>
          <Breadcrumb
            className=" text-primary"
            items={[
              {
                title: <Link href="/">Home</Link>,
              },
              {
                title: <Link href="/package">Packages</Link>,
              },
              {
                title: `${packageDetailData?.data.name}`,
              },
            ]}
          />
        </Container>
      </section>
      <section className=" package-detail-page px-sm-12 pb-40">
        <Container>
          <div className=" flex-between align-items-center mt-12">
            <div className="flex-column gap-4 ">
              <h5>{packageDetailData?.data.name}</h5>
              <div className="d-flex gap-4 text-yellow500 ">{stars}</div>
            </div>
            <div className="d-flex align-items-center gap-8">
              <Link
                href={`https://admin.gyaniholidays.com/api/print/${packageDetailData?.data.id}`}
                className="btn btn-sm btn-primary w-100 p-12  rounded-4 mt-12  d-flex align-items-center gap-8"
                target="__blank"
              >
                <FiPrinter />
                Download Itinerary
              </Link>
            </div>
          </div>
          <Row className="mt-24 gap-24-row ">
            <Col lg={9} sm={12}>
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
                    <SwiperSlide key={i} className="pb-40">
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
              <div className=" p fw-light">
                {packageDetailData?.data.short_description}
              </div>

              <Col sm={12} lg={12} className="mt-24">
                <h6 className=" mb-12 heading-border  fw-medium">ITINERARY</h6>
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
                <h6 className="mb-12 heading-border "> Includes</h6>
                <div
                  className="p details-contents "
                  dangerouslySetInnerHTML={{
                    __html: packageDetailData?.data.inclusion,
                  }}
                ></div>
              </Col>
              <Col sm={12} className="mt-24 py-24 px-8 bg-cGray100 rounded-12 ">
                <h6 className="mb-12 heading-border "> Excludes</h6>
                <div
                  className="p details-contents "
                  dangerouslySetInnerHTML={{
                    __html: packageDetailData?.data.exclusion,
                  }}
                ></div>
              </Col>
            </Col>

            <Col lg={3} className="side-col">
              <Row className="stick-side-card">
                <Col sm={12}>
                  <Booking
                    packageId={packageDetailData?.data.id}
                    currency={packageDetailData?.data.currency}
                    price={packageDetailData?.data.fair_price}
                  />
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
                  {/* <div className="shadow">
                    <div className="bg-primary text-white h6 text-center p-12">
                      Other Packages You May Like
                    </div>
                    <div className="p-16">
                      {packageData?.data
                        .filter((d) => d.slug != packageDetailData?.data.slug)
                        .slice(0, 5)
                        .map((d, i) => {
                          return (
                            <SideCardPackageNew
                              name={d.name}
                              key={i}
                              image={d.image}
                              short_description={d.short_description}
                              slug={d.slug}
                              id={d.id}
                            />
                          );
                        })}
                    </div>
                  </div> */}
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
