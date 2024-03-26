import { Col, Container, Row } from "react-bootstrap";
import { useGetPartnersQuery } from "../../../frontend/api";
const PaymentPartner = () => {
  const { data: paymanetData } = useGetPartnersQuery();

  return (
    <Container className="payment-partner flex-center-center flex-column">
      <h3 className="bitter text-cGray800">Payment Partners</h3>
      <p className="text-cGray600 small mt-4">
        Our Secured Payment Gateway Partners
      </p>
      {/* <marquee behavior="scroll" direction="left"  > */}
      <Row className="mt-24">
        {paymanetData?.data.map((d, i) => {
          return (
            <Col className="d-flex">
              <div className="image">
                <img src={d.image} alt="payment" />
              </div>
            </Col>
          );
        })}
      </Row>
      {/* </marquee> */}
    </Container>
  );
};

export default PaymentPartner;
