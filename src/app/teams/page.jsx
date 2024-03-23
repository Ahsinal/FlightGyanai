"use client";
import { Col, Container, Row } from "react-bootstrap";
import { Breadcrumb } from "antd";
import Link from "next/link";
import { useGetTeamsQuery, useGetSettingsQuery } from "../../../frontend/api";
import TeamsCard from "@/components/cards/TeamsCard";
const OurTeams = () => {
  const { data: teamsData } = useGetTeamsQuery();
  const { data: settingData } = useGetSettingsQuery();
  return (
    <>
      <section className="breadcrumb-banner position-relative">
        <div className="img-wide">
          <img src={settingData?.data.banner_image} alt="about-image" />

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
                    title: "Our Teams",
                  },
                ]}
              />
            </div>
          </Container>
        </div>
      </section>
      <section>
        <Container className="py-40">
          <h4 className="text-center bitter text-cGray700">
            {settingData?.data.ourteam_section_description}
          </h4>
          <Row className="gap-24-row mt-16">
            {teamsData?.data.map((d, i) => {
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

export default OurTeams;
