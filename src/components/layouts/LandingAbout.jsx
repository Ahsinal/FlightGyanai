import { Col, Container, Row } from "react-bootstrap";
import { FaHandPointRight } from "react-icons/fa";
import { ourServices } from "@/data/Data";
import Link from "next/link";
const LandingAbout = () => {
  return (
    <>
      <Container>
        <Row className="flex-center-center gap-12-row gx-40">
          <Col lg={5} sm={12}>
            <div className="img-portrait">
              <img
                src="https://img.freepik.com/free-vector/plane-skyscrapers_1057-4874.jpg?t=st=1709535706~exp=1709539306~hmac=cc3a6940e52c04ed313bd5b7b8e54d6c47b1247a48b98960c8c6211e41cc0b81&w=1060"
                alt="image"
              />
            </div>
          </Col>
          <Col lg={7} sm={12}>
            <h3 className="mb-12 bitter text-cGray800">About US</h3>
            <p className="mb-12 fw-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              tempora quidem quia eum ducimus itaque non facilis, repellendus
              sint fugit! Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Vero esse maiores accusantium eveniet officia qui iste eos
              minima reiciendis nobis. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Dicta vel, eum esse harum dolores corporis quam
              fugit doloribus molestiae minima.
            </p>
            <Row className="px-16 gap-8-row mt-24">
              {ourServices?.data.slice(0, 6).map((d, i) => {
                return (
                  <Col
                    lg={6}
                    sm={12}
                    className="d-flex align-items-center gap-12"
                    key={i}
                  >
                    <h4 className="text-secondary">
                      <FaHandPointRight />
                    </h4>
                    <p className="text-cGray700">{d.service} </p>
                  </Col>
                );
              })}
            </Row>
            <Link href="/about" className="btn btn-xs btn-primary mt-32">
              Learn More
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LandingAbout;
