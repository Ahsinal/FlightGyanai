import TeamsCard from "@/components/cards/TeamsCard";
import { Col, Container, Row } from "react-bootstrap";
import { teamsData, aboutCardData } from "@/data/Data";
import { Breadcrumb } from "antd";
import Link from "next/link";
const About = () => {
  return (
    <>
      <section className="breadcrumb-banner position-relative">
        <div className="img-wide">
          <img
            src="https://media.istockphoto.com/id/523262976/photo/about-us-concept-with-alphabet-blocks.webp?b=1&s=170667a&w=0&k=20&c=8I_-0GMuZqgT54o3mjHeHCsiffqw0mxa2fFB6wxgHd0="
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
          <Row>
            {aboutCardData?.data.map((d, i) => {
              return (
                <Col lg={3} sm={6} key={i}>
                  <div className="card-about-us bg-white flex-center-center flex-column border border-1 border-cGray200 shadow rounded-8 p-24">
                    <div className="image ">
                      <img src={d.img} alt="icon" />
                    </div>
                    <p className="mt-12 fw-bold text-cGray700 bitter">
                      {d.title}
                    </p>
                    <p className="mt-8 fw-light " style={{ fontSize: "14px" }}>
                      {d.desc}
                    </p>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
      <section className="mt-32">
        <Container>
          <Row className="gx-32 d-flex align-items-center">
            <Col lg={7} sm={12}>
              <h6>About Us</h6>
              <div className="p mt-8 text-cGray900 fw-light">
                FlightsGyani.com is one of the Reliable Tour Operators in
                Butwal/Kathmandu. As an efficient Tour Operator, we specialize
                in organizing personalized Domestic and International Tours for
                our eager travelers. Services offered by us are highly flexible
                and we take care of all the aspects that are required for the
                fulfillment of your travel expectations. Whether this time is an
                adventurous tour with friends or a relaxing trip with family, we
                have almost everything in our kitty for you. Each of our tours
                are created with the objective of delivering incomparable travel
                experiences which is what differentiates us from other
                cookie-cutter packaged .Based in Kathmandu /Butwal
                <br />
                <br />
                FlightsGyani.Com was founded in the year 2018 with a vision to
                make a great contribution. We are specialized in design to every
                kind of holiday, like Group, incentive and mice & tailor made
                for Europe, Scandinavia, USA, Canada, Far East, Middle East,
                Africa, and Australia & New Zealand. In addition, many more
                spots and have catered many clients. Our experienced
                professionals plan your tours in an organized manner so that you
                do not miss anything along the way as you travel with us. We
                make sure that your traveling experience is lifetime memorial.
              </div>
            </Col>
            <Col lg={5} sm={12} className="img">
              <img
                src="https://img.freepik.com/premium-vector/vector-cute-people-playing-laptop-cartoon_300636-3013.jpg?w=826"
                alt="about us"
              />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="about-teams py-40">
        <Container>
          <h3 className="text-center bitter text-cGray700">
            Meet Our Teammates
          </h3>
          <Row className="gap-24-row mt-16">
            {teamsData?.data.slice(0, 4).map((d, i) => {
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

export default About;
