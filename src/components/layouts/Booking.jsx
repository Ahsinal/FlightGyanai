import { useState } from "react";
import { Container, Button, Row, Col, Form } from "react-bootstrap";
import { Modal } from "antd";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { FaPhoneAlt } from "react-icons/fa";

const Booking = () => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const [submittedData, setSubmittedData] = useState(null);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onSubmit = (data) => {
    console.log(data); // Log submitted data to console
    setSubmittedData(data); // Store submitted data
  };

  const handleOk = () => {
    if (submittedData) {
      reset();
      setIsModalOpen(false); // Close modal only if form is submitted
      router.push("/");
    } else {
      alert("Please submit the form first.");
    }
  };

  return (
    <>
      <div className="p-24 shadow-1 rounded-16 bg-secondary text-white flex-center-center flex-column">
        <h6 className="text-center mb-8">Booking Form</h6>
        <p className="text-center small">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, dicta.
        </p>
        <div className="bg-white w-100 p-12 text-secondary rounded-4 my-12">
          starts
        </div>
        <Button
          variant="light"
          className="btn-outline-white btn-block w-100"
          onClick={showModal}
        >
          Book Now
        </Button>
        <div className="text-white flex-center-center flex-column">
          <p className="xx-small mt-12">Neep Help? Call us on WhatsApp</p>
          <div className="d-flex gap-4 align-items-center mt-12 ">
            <FaPhoneAlt />
            01-5970440
          </div>
        </div>
      </div>
      <Modal
        title="Booking Form"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={[
          <Button
            className="btn-xs"
            key="OK"
            type="submit"
            form="bookingForm"
            onClick={handleOk}
          >
            Book Now
          </Button>,
        ]}
      >
        <hr />
        <Container>
          <Row className="gap-8-row mt-8">
            <Col lg={12} sm={12}>
              <Form id="bookingForm" onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                  <label htmlFor="fullName" className="form-label">
                    Full Name
                  </label>
                  <input {...register("fullName")} type="text" id="fullName" />
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input {...register("email")} type="email" id="email" />
                </div>

                <div className="d-flex gap-16">
                  <div className="mb-4">
                    <label htmlFor="phone" className="form-label">
                      Phone
                    </label>
                    <input {...register("phone")} type="tel" id="phone" />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="country" className="form-label">
                      Country
                    </label>
                    <input {...register("country")} type="text" id="country" />
                  </div>
                </div>

                <div className="mb-8">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea {...register("message")} id="message" />
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
