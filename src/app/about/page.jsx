import TeamsCard from "@/components/cards/TeamsCard";
import { Col, Container, Row } from "react-bootstrap";
import { teamsData } from "@/data/Data";
const About = () => {
  return (
    <section className="about-teams py-40">
      <Container>
        <h3 className="text-center bitter text-cGray700">Meet Our Teammates</h3>
        <Row className="gap-24-row mt-16">
          {teamsData?.data.map((d, i) => {
            return (
              <Col lg={3} md={4} sm={12} key={i}>
                <TeamsCard img={d.img} designation={d.designation} name={d.name}/>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default About;
