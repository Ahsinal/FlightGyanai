import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
const BookingForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  return (
    <>
      <Container>
        <Row className="gap-8-row mt-8 ">
          <Col lg={12} sm={12}>
            <Form>
              <div className="mb-4">
                <label htmlFor="" className="form-label">
                  Full Name
                  {errors.name?.type === "required" && (
                    <span className="text-secondary ms-4">*</span>
                  )}
                </label>
                <input
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
                <label htmlFor="" className="form-label">
                  Email
                  {errors.email?.type === "required" && (
                    <span className="text-secondary ms-4">*</span>
                  )}
                </label>
                <input
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

              <div className="d-flex gap-16">
                <div className="mb-4">
                  <label htmlFor="" className="form-label">
                    Phone{" "}
                    {errors.phone?.type === "required" && (
                      <span className="text-secondary ms-4">*</span>
                    )}
                  </label>
                  <input
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
                  <label htmlFor="" className="form-label">
                    Country{" "}
                    {errors.phone?.type === "required" && (
                      <span className="text-secondary ms-4">*</span>
                    )}
                  </label>
                  <input
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
                </div>
              </div>

              <div className="mb-8">
                <label htmlFor="" className="form-label">
                  Message{" "}
                  {errors.message?.type === "required" && (
                    <span className="text-secondary ms-4">*</span>
                  )}
                </label>
                <textarea
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
    </>
  );
};

export default BookingForm;
