"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button, FormControl, FormLabel } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";
import TextArea from "antd/es/input/TextArea";
const ContactForm = () => {
  const router = useRouter();
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
      <Form>
        <div className="mb-8">
          <FormLabel htmlFor="" className="mb-4">
            Full Name
            {errors.name?.type === "required" && (
              <span className="text-danger ms-4">*</span>
            )}
          </FormLabel>
          <FormControl
            {...register("name", {
              required: "true",
              pattern: {
                value: /^[A-Za-z\s]+$/,
                message: "Full name must not contain special symbol or number",
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
          className="btn btn-xs rounded-8"
          variant="primary"
          type="submit"
        >
          Send Message
        </Button>
      </Form>
    </>
  );
};

export default ContactForm;
