"use client";
import { Container, Badge, Row, Col, BreadcrumbItem } from "react-bootstrap";
import Link from "next/link";
import { Breadcrumb } from "antd";
import { FaStar } from "react-icons/fa";
import PackageSidetable from "@/components/layouts/PackageSideTable";
import { cardData } from "@/data/Data";
import SideCardPackage from "@/components/cards/SideCard";
import { includesdata, excludesData, packageDetailOverview } from "@/data/Data";
import { IoIosCheckmarkCircle } from "react-icons/io";
import Booking from "@/components/layouts/Booking";
import Itinerary from "@/components/layouts/Itinerary";
const PackageDetail = () => {
  return (
    <>
      <section className="breadcrumb-banner position-relative">
        <div className="img-wide">
          <img
            src="https://cdn.pixabay.com/photo/2017/10/10/07/48/beach-2836300_1280.jpg"
            alt="about-image"
          />

          <Container>
            <div className="about-banner-content bitter">
              <h2>Package Name 1</h2>
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
      </section>
      <section>
        <Container>
          <div className="mt-32 flex-between align-items-center">
            <div className="">
              <h5 className="bitter ">SUMMER HOLIDAY TO THE OXOLOTAN RIVER</h5>
              <div className="text-warning d-flex gap-4 mt-4">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
            <div className="text-white mt-12  btn btn-pill btn-secondary btn-xs">
              NPR 100000
            </div>
          </div>
          <Row className="mt-32 ">
            <Col lg={8} sm={12}>
              <div className="img-landscape rounded-12 overflow-hidden">
                <img
                  src="https://img.freepik.com/premium-photo/bangkok-city-skyscraper-sunset_268174-1501.jpg?size=626&ext=jpg&ga=GA1.1.2047347518.1707369163&semt=sph"
                  alt="image package"
                />
              </div>
              <Row className="mt-12">
                <h5>Overview</h5>
                {packageDetailOverview?.data.map((d, i) => {
                  return (
                    <Col lg={4} sm={6} className="g-16" key={i}>
                      <div className="d-flex align-items-center gap-12 card-package-overview">
                        <div className="img">
                          <img src={d.img} alt="icon" />
                        </div>
                        <div className=" flex-column">
                          <p className="fw-semibold">{d.title}</p>
                          <p className="mt-0 text-cGray700 small">
                            {d.content}
                          </p>
                        </div>
                      </div>
                    </Col>
                  );
                })}
              </Row>
              <p className="mt-32">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                iusto corrupti voluptatum hic dolores consectetur recusandae est
                velit vero facilis, exercitationem impedit quis explicabo nobis
                commodi quod ex. Quae amet, similique aliquid distinctio minus
                ea laborum commodi placeat maiores a beatae sed molestiae? Ipsum
                adipisci, dicta atque corporis fugit dolores harum optio, rem
                hic eveniet dolorum rerum suscipit, alias veniam modi velit
                impedit? Pariatur quasi, facilis quis tenetur iure expedita.
                Illo magni dolorum molestiae ex odit, at impedit, corporis,
                assumenda autem velit ducimus omnis? Magnam iustion.
              </p>
              <Col sm={12} className="mt-24">
                <Itinerary />
              </Col>
              <Col
                sm={12}
                className="mt-24 py-24 px-8 bg-cGray100 rounded-12 mb-24"
              >
                <h6 className="mb-12"> Includes</h6>
                {includesdata?.data?.map((d, i) => {
                  return (
                    <div className="d-flex gap-8 mb-8" key={i}>
                      <IoIosCheckmarkCircle className="text-secondary h4" />
                      <p>{d.desc}</p>
                    </div>
                  );
                })}
              </Col>
              <Col
                sm={12}
                className="mt-24 py-24 px-8 bg-cGray100 rounded-12 mb-24"
              >
                <h6 className="mb-12"> Excludes</h6>
                {excludesData?.data?.map((d, i) => {
                  return (
                    <div className="d-flex gap-8 mb-8" key={i}>
                      <IoIosCheckmarkCircle className="text-secondary h4" />
                      <p>{d.desc}</p>
                    </div>
                  );
                })}
              </Col>
            </Col>

            <Col lg={4}>
              <Row>
                <Col sm={12}>
                  <Booking />
                </Col>
                <Col sm={12} className="mt-32">
                  <div className="p-24 shadow-1 rounded-16">
                    <h6 className="text-cGray700 mb-12">
                      Other Packages for you
                    </h6>
                    {cardData?.data.slice(0, 3).map((d, i) => {
                      return (
                        <SideCardPackage
                          title={d.title}
                          price={d.price}
                          img={d.img}
                          key={i}
                        />
                      );
                    })}
                  </div>
                </Col>
                <Col sm={12} className="mt-32">
                  <div className=" p-24 rounded-12 shadow-1">
                    <h5 className="text-cGray300 fw-seibold mb-16">City Map</h5>
                    <iframe
                      width="100%"
                      height="250"
                      src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=kathmandu+(Flight%20Gyani)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    ></iframe>
                  </div>
                </Col>
              </Row>
              {/* <Col sm={12} className="p-24 shadow-1 rounded-16 mt-24">
                <h6 className="text-cGray700">Basic Information</h6>
                <PackageSidetable />
              </Col> */}
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default PackageDetail;
