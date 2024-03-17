"use client";
import { useState } from "react";
import { Button, Col, Container, Form, Row, InputGroup } from "react-bootstrap";
import { useForm } from "react-hook-form";
const Booking = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const [formData, setFormData] = useState({});
  const onSubmit = (data) => {
    console.log("Form Data submitted:", data);
    setFormData(data);
    reset();
  };
  return (
    <>
      <Container className="py-40">
        <Row className="gap-8-row mt-8 flex-center-center">
          <Col lg={6} sm={12} className="rounded-12 shadow p-32">
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
                  required
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
            <Button
              className="btn-xs mt-16"
              type="submit"
              onClick={handleSubmit(onSubmit)}
            >
              Submit
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Booking;
