import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Container, Button, Row, Col, Form } from "react-bootstrap";
import { Modal } from "antd";
const Booking = () => {
  const router = useRouter();

  const [isModalOpen, setIsModalOpen] = useState(false); // ant design modal
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    router.push("/");
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div style={{ minHeight: "250px" }} className="flex-center-center">
        <Button
          variant="light"
          className="btn-outline-white "
          onClick={showModal}
        >
          Book Now
        </Button>
      </div>
      <Modal
        title="Booking Form"
        open={isModalOpen}
        onCancel={handleCancel}
        onOk={handleOk}
        footer={[
          <Button className="btn-xs" key="OK" type="submit">
            Book Now
          </Button>,
        ]}
      >
        <hr />
        <Container>
          <Row className="gap-8-row mt-8 ">
            <Col lg={12} sm={12}>
              <Form>
                <div className="mb-4">
                  <label htmlFor="" className="form-label">
                    Full Name
                  </label>
                  <input type="text" />
                </div>

                <div className="mb-4">
                  <label htmlFor="" className="form-label">
                    Email
                  </label>
                  <input type="email" />
                </div>

                <div className="d-flex gap-16">
                  <div className="mb-4">
                    <label htmlFor="" className="form-label">
                      Phone
                    </label>
                    <input type="tel" />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="" className="form-label">
                      Country
                    </label>
                    <input type="tel" />
                  </div>
                </div>

                <div className="mb-8">
                  <label htmlFor="" className="form-label">
                    Message
                  </label>
                  <textarea />
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </Modal>
    </>
  );
};

export default Booking;
