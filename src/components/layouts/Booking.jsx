"use client";
import { useState } from "react";
import { Container, Button, Row, Col, Form } from "react-bootstrap";
import { Modal } from "antd";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { FaPhoneAlt } from "react-icons/fa";

const Booking = () => {
  const router = useRouter();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({});

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onSubmit = (data) => {
    console.log("Form Data submitted:", data);
    setFormData(data);
    reset();
    router.push("/");
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
            onClick={handleSubmit(onSubmit)}
          >
            Book Now
          </Button>,
        ]}
      >
        <hr />
        <Container>
          <Row className="gap-8-row mt-8">
            <Col lg={12} sm={12}>
              <Form>
                <div className="mb-4">
                  <Form.Label htmlFor="" className="form-label mb-4">
                    Full Name
                    {errors.name?.type === "required" && (
                      <span className="text-secondary ms-4">*</span>
                    )}
                  </Form.Label>
                  <Form.Control
                    {...register("name", {
                      required: true,
                      pattern: {
                        value: /^[A-Za-z\s]+$/,
                        message:
                          "Full name must not contain numbers and special symbol",
                      },
                    })}
                    aria-invalid={errors.name ? "true" : "false"}
                    type="text"
                  />
                  {errors.name?.type === "required" && (
                    <p className="small text-secondary" role="alert">
                      Full name is required
                    </p>
                  )}
                  {errors.name?.type === "pattern" && (
                    <p className="small text-secondary" role="alert">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div className="mb-4">
                  <Form.Label htmlFor="" className="form-label mb-4">
                    Email
                    {errors.email?.type === "required" && (
                      <span className="text-secondary ms-4">*</span>
                    )}
                  </Form.Label>
                  <Form.Control
                    {...register("email", {
                      required: true,
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Entered value does not match email format",
                      },
                    })}
                    aria-invalid={errors.email ? "true" : "false"}
                  />
                  {errors.email?.type === "required" && (
                    <p className="small text-secondary" role="alert">
                      Email is required
                    </p>
                  )}
                  {errors.email?.type === "pattern" && (
                    <p className="small text-secondary" role="alert">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div className="mb-4">
                  <Form.Label htmlFor="" className="form-label mb-4">
                    Phone{" "}
                    {errors.phone?.type === "required" && (
                      <span className="text-secondary ms-4">*</span>
                    )}
                  </Form.Label>
                  <Form.Control
                    {...register("phone", {
                      required: true,
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: "Phone number must be 10 digit",
                      },
                    })}
                    aria-invalid={errors.phone ? "true" : "false"}
                    type="tel"
                  />
                  {errors.phone?.type === "required" && (
                    <p className="small text-secondary" role="alert">
                      Phone number is required
                    </p>
                  )}
                  {errors.phone?.type === "pattern" && (
                    <p className="small text-secondary" role="alert">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
                <div className="mb-4">
                  <Form.Label htmlFor="" className="form-label mb-4">
                    Country
                    {errors.country?.type === "required" && (
                      <span className="text-secondary ms-4">*</span>
                    )}
                  </Form.Label>
                  <Form.Select
                    {...register("country", { required: true })}
                    className="form-select mb-8"
                    aria-label="country"
                    aria-invalid={errors.country ? "true" : "false"}
                  >
                    <option value="" className="xx-small">
                      Select a country
                    </option>
                    <option value="1">America</option>
                    <option value="2">Australia 2</option>
                    <option value="3">Antartica</option>
                  </Form.Select>
                  {errors.country?.type === "required" && (
                    <p className="small text-secondary" role="alert">
                      Country selection is required
                    </p>
                  )}
                </div>
                <div className="mb-4">
                  <Form.Label htmlFor="" className="form-label mb-4">
                    Message
                    {errors.message?.type === "required" && (
                      <span className="text-secondary ms-4">*</span>
                    )}
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    resize="none"
                    {...register("message", { required: true })}
                    aria-invalid={errors.message ? "true" : "false"}
                  />
                  {errors.message?.type === "required" && (
                    <p className="small text-secondary" role="alert">
                      Message is required
                    </p>
                  )}
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