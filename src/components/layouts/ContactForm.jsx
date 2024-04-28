"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Button,
  FormControl,
  FormLabel,
  Form,
  Spinner,
  Row,
  Col,
} from "react-bootstrap";
import { useForm } from "react-hook-form";
import { ClipLoader } from "react-spinners";
import { Modal } from "antd";
import { useCreateInquiriesMutation } from "../../../frontend/api";

const ContactForm = () => {
  const router = useRouter();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  // const [formData, setFormData] = useState({});
  // const onSubmit = (data) => {
  //   console.log("Form Data submitted:", data);
  //   setFormData(data);
  //   reset();
  // };//local setup

  const [createInquiriesMutation, { isError, isSuccess, isLoading }] =
    useCreateInquiriesMutation(); //this is a function so write inside [] otherwise error
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onSubmit = async (data) => {
    try {
      await createInquiriesMutation(data);
      reset();
    } catch (error) {}
  };
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    router.push("/"); //Redirect to landing page
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    if (isError) {
      alert("Failed to submit the form");
    }
    if (isSuccess) {
      showModal(true);
    }
  }, [isSuccess, isError]);
  return (
    <>
      <Form>
        <div className="mb-8">
          <Row>
            <Col lg={6} sm={12}>
              <FormLabel htmlFor="" className="mb-4">
                First Name
                {errors.first_name?.type === "required" && (
                  <span className="text-danger ms-4">*</span>
                )}
              </FormLabel>
              <FormControl
                {...register("first_name", {
                  required: "true",
                  pattern: {
                    value: /^[A-Za-z\s]+$/,
                    message:
                      "First name must not contain special symbol or number",
                  },
                })}
                aria-invalid={errors.first_name ? "true" : "false"}
                type="text"
              />
              {errors.first_name?.type === "required" && (
                <p className="small text-secondary" role="alert">
                  First name is required
                </p>
              )}
              {errors.first_name?.type === "pattern" && (
                <p className="small text-secondary" role="alert">
                  {errors.first_name.message}
                </p>
              )}
            </Col>
            <Col lg={6} sm={12}>
              <FormLabel htmlFor="" className="mb-4">
                Last Name
                {errors.last_name?.type === "required" && (
                  <span className="text-danger ms-4">*</span>
                )}
              </FormLabel>
              <FormControl
                {...register("last_name", {
                  required: "true",
                  pattern: {
                    value: /^[A-Za-z\s]+$/,
                    message:
                      "Last name must not contain special symbol or number",
                  },
                })}
                aria-invalid={errors.last_name ? "true" : "false"}
                type="text"
              />
              {errors.last_name?.type === "required" && (
                <p className="small text-secondary" role="alert">
                  Last name is required
                </p>
              )}
              {errors.last_name?.type === "pattern" && (
                <p className="small text-secondary" role="alert">
                  {errors.last_name.message}
                </p>
              )}
            </Col>
          </Row>
        </div>
        <div className="mb-8">
          <FormLabel htmlFor="" className="mb-4">
            Email
            {errors.name?.type === "required" && (
              <span className="text-danger ms-4">*</span>
            )}
          </FormLabel>
          <FormControl
            {...register("email", {
              required: "true",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Entered value does not match email format",
              },
            })}
            aria-invalid={errors.email ? "true" : "false"}
            type="text"
          />
          {errors.email?.type === "required" && (
            <p className="small text-secondary" role="alert">
              Email name is required
            </p>
          )}
          {errors.email?.type === "pattern" && (
            <p className="small text-secondary" role="alert">
              {errors.email.message}
            </p>
          )}
        </div>
        <div className="mb-8">
          <FormLabel htmlFor="" className="mb-4">
            Phone
            {errors.phone?.type === "required" && (
              <span className="text-danger ms-4">*</span>
            )}
          </FormLabel>
          <FormControl
            {...register("phone", {
              required: "true",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Phone number must be 10 digit",
              },
            })}
            aria-invalid={errors.phone ? "true" : "false"}
            type="text"
          />
          {errors.phone?.type === "required" && (
            <p className="small text-secondary" role="alert">
              Phone Number is required
            </p>
          )}
          {errors.phone?.type === "pattern" && (
            <p className="small text-secondary" role="alert">
              {errors.phone.message}
            </p>
          )}
        </div>
        <div className="mb-8">
          <FormLabel htmlFor="" className="mb-4">
            Message
            {errors.message?.type === "required" && (
              <span className="text-danger ms-4">*</span>
            )}
          </FormLabel>
          <FormControl
            as="textarea"
            style={{ resize: "none" }}
            rows="6"
            {...register("message", {
              required: "true",
            })}
            aria-invalid={errors.message ? "true" : "false"}
          />
          {errors.message?.type === "required" && (
            <p className="small text-secondary" role="alert">
              Message is required
            </p>
          )}
        </div>
        <Button
          onClick={handleSubmit(onSubmit)}
          className="btn btn-xs rounded-8 mt-12"
          variant="primary"
          type="submit"
        >
          {isLoading ? (
            <ClipLoader loading={loading} size={20} color="#CCCCCC" />
          ) : (
            "Send Message"
          )}
        </Button>
      </Form>
      <Modal
        title="Thank You"
        open={isModalOpen}
        onCancel={handleCancel}
        onOk={handleOk}
        footer={[
          <Button className="btn-xs" key="OK" onClick={handleOk}>
            OK
          </Button>,
        ]}
      >
        <p>Your Inquiries has been submitted successfully.</p>
      </Modal>
    </>
  );
};

export default ContactForm;
