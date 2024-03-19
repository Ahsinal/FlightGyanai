import { Col, Container, Row } from "react-bootstrap";
import { Breadcrumb } from "antd";
import Link from "next/link";
import { teamsData } from "@/data/Data";
import TeamsCard from "@/components/cards/TeamsCard";
const OurTeams = () => {
  return (
    <>
      <section className="breadcrumb-banner position-relative">
        <div className="img-wide">
          <img
            src="https://media.istockphoto.com/id/1460999924/photo/business-team-working-on-a-computer-late-in-the-office.jpg?s=612x612&w=0&k=20&c=XA_gat8z9rk5JI0C7XxZ-71q1QgYr3H7h2gzbH2WW7c="
            alt="about-image"
          />

          <Container>
            <div className="about-banner-content bitter">
              <h2>About Us</h2>
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
            Meet Our Teammates
          </h4>
          <Row className="gap-24-row mt-16">
            {teamsData?.data.map((d, i) => {
              return (
                <Col lg={3} md={4} sm={12} key={i}>
                  <TeamsCard
                    img={d.img}
                    designation={d.designation}
                    name={d.name}
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
