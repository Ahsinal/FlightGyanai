import { Col, Container, Row } from "react-bootstrap";
import { paymentData } from "@/data/Data";
const PaymentPartner = () => {
  return (
    <Container className="flex-center-center flex-column">
      <h3 className="bitter text-cGray800">Payment Partners</h3>
      <p className="text-cGray600 small mt-4">
        Our Secured Payment Gateway Partners
      </p>
      <marquee behavior="scroll" direction="left" >
        <Row className="mt-24">
          {paymentData?.data.map((d, i) => {
            return (
              <Col className="d-flex">
                <div className="img">
                  <img src={d.img} alt="payment" />
                </div>
              </Col>
            );
          })}
        </Row>
      </marquee>
    </Container>
  );
};

export default PaymentPartner;
