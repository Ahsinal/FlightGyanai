"use client";
import TeamsCard from "@/components/cards/TeamsCard";
import { Col, Container, Row } from "react-bootstrap";
import { Breadcrumb } from "antd";
import Link from "next/link";
import {
  useGetTeamsQuery,
  useGetServicesQuery,
  useGetSettingsQuery,
  useGetPageDetailQuery,
} from "../../../frontend/api";
const About = () => {
  const { data: teamsData } = useGetTeamsQuery();
  const { data: servicesData } = useGetServicesQuery();
  const { data: aboutusData } = useGetPageDetailQuery("about-us");
  const { data: chooseusData } = useGetPageDetailQuery("why-choose-us");
  const { data: settingData } = useGetSettingsQuery();
  return (
    <>
      <section className="breadcrumb-banner position-relative">
        <div className="img-wide">
          <img src={settingData?.data.about_page_image} alt="about-image" />

          <Container>
            <div className="about-banner-content bitter">
              <h2>Our Teams</h2>
              <Breadcrumb
                className="h5 fw-normal mt-8"
                items={[
                  {
                    title: <Link href="/">Home</Link>,
                  },
                  {
                    title: "About Us",
                  },
                ]}
              />
            </div>
          </Container>
        </div>
      </section>
      <section className="py-32  ">
        <Container>
          <Row className="gap-16-row">
            {servicesData?.data?.slice(0, 4).map((d, i) => {
              return (
                <Col lg={3} sm={6} key={i}>
                  <div className="card-about-us bg-white flex-center-center flex-column border border-1 border-cGray200 shadow rounded-8 p-24">
                    <div className="image ">
                      <img src={d.image} alt="icon" />
                    </div>
                    <p className="mt-12 fw-bold text-cGray700 bitter">
                      {d.title}
                    </p>
                    <p className="mt-8 fw-light " style={{ fontSize: "14px" }}>
                      {d.short_description}
                    </p>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
      <section className="mt-32 px-sm-12 about-us">
        <Container>
          <Row className="gx-32 gap-24-row d-flex align-items-center">
            <Col lg={7} sm={12}>
              <h6 className="text-cGray700">{aboutusData?.data?.title}</h6>
              <div
                className="p mt-8 text-cGray900 fw-light"
                dangerouslySetInnerHTML={{
                  __html: aboutusData?.data?.description,
                }}
              ></div>
            </Col>
            <Col lg={5} sm={12} className="img">
              <img src={aboutusData?.data?.image} alt="about us" />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="mt-32 choose-us px-sm-12">
        <Container>
          <Row className="gx-32 gap-24-row d-flex align-items-center">
            <Col lg={5} sm={12} className="img">
              <img src={chooseusData?.data?.image} alt="about us" />
            </Col>
            <Col lg={7} sm={12}>
              <h6>{chooseusData?.data?.title}</h6>
              <div
                className="p mt-8 text-cGray900 fw-light"
                dangerouslySetInnerHTML={{
                  __html: chooseusData?.data?.description,
                }}
              ></div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="about-teams py-40 ">
        <Container>
          <h5 className="text-center bitter text-cGray700">
            {settingData?.data.ourteam_section_description}
          </h5>
          <Row className="gap-24-row mt-16 px-sm-12">
            {teamsData?.data?.slice(0, 4).map((d, i) => {
              return (
                <Col lg={3} md={4} sm={12} key={i}>
                  <TeamsCard
                    img={d.image}
                    designation={d.position}
                    name={d.name}
                    facebook={d.facebook_link}
                    twitter={d.twitter_link}
                    linkedin={d.linkedin_link}
                  />
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default About;
