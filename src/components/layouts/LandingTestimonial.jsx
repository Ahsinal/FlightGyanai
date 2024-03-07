import { Col, Container, Row } from "react-bootstrap";
import { FaQuoteRight, FaQuoteLeft } from "react-icons/fa";

const LandingTestimonial = () => {
  return (
    <>
      <div className="testimonial-shape-1 ms-32">
        <img src="assets/image/testicon1.png" alt="flight img" />
      </div>
      <Container>
        <div className="position-relative">
          <h1 className="position-absolute top-0 right">
            <FaQuoteRight />
          </h1>
          <h1 className="position-absolute bottom-0">
            <FaQuoteLeft />
          </h1>
          <h3 className="text-cGray800 bitter text-center mb-24">
            What Our Customer Says
          </h3>
        </div>
        <Row>
          <Col lg={12} className="">
            <div className="w-75 mx-auto">
              1234 Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Fuga reprehenderit dignissimos mollitia totam nulla perferendis
              illo, sit molestiae sed tempore praesentium porro a iste, corrupti
              distinctio magnam impedit. Mollitia doloremque sequi aliquid
              ducimus odio in. Iusto ex corporis impedit nulla.lorem100 Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Exercitationem,
              minima. Doloremque placeat minus dicta similique ut dolorem. Quod
              veritatis expedita ipsum tempore est eius nisi. Corporis numquam,
              ipsa, illum repellat porro eos assumenda cupiditate accusamus
              soluta odit labore? Molestiae voluptatem nisi a saepe repellendus,
              nulla in quia dicta delectus veniam voluptas est soluta culpa
              consequuntur dolores cupiditate doloremque mollitia quaerat
              repellat alias! Illum non, quam neque tempore perferendis
              explicabo est quibusdam veniam consectetur hic dignissimos quas
              sequi recusandae nostrum molestiae fuga repudiandae omnis quo id
              ipsum mollitia? Fuga accusantium eveniet numquam repellat
              voluptatem eum illum tempore, maiores eius. Id, recusandae?
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LandingTestimonial;
