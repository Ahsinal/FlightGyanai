"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Container, Button, Row, Col, Form } from "react-bootstrap";
import { Modal } from "antd";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import {
  FaWhatsapp,
  FaPrint,
  useGetPackageDetailQuery,
  FaPhone,
  FaPhoneAlt,
  FaStar,
} from "react-icons/fa";
import {
  useCreateBookingMutation,
  useGetSettingsQuery,
} from "../../../frontend/api";
import { ClipLoader } from "react-spinners";
const Booking = ({ packageId, currency, price }) => {
  const router = useRouter();
  const { data: settingData } = useGetSettingsQuery();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const [selectedPackageId, setSelectedPackageId] = useState(null);
  const [createBookingMutation, { isError, isSuccess, isLoading }] =
    useCreateBookingMutation();
  //this is function so write inside [] otherwise error
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalFinalOpen, setIsModalFinalOpen] = useState(false);
  const showModal = (packageId) => {
    setSelectedPackageId(packageId);
    // {
    //   console.log(packageId, "pid model open");
    // }
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onSubmit = async (data) => {
    try {
      //include the selected package id in the form data
      const formData = {
        ...data,
        packageId: selectedPackageId,
      };
      // {
      //   console.log(formData, "formdata");
      // }
      await createBookingMutation(formData);
      reset();
      setIsModalOpen(false); // Close the first modal
      setIsModalFinalOpen(true); // Open the final modal upon successful submission
    } catch (error) {}
  };
  const showModalFinal = () => {
    setIsModalFinalOpen(true);
  };
  const handleCancelFinal = () => {
    setIsModalFinalOpen(false);
  };
  const handleOk = () => {
    setIsModalFinalOpen(false);
    router.push("/"); // Redirect to the homepage
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
      <div className="side-box py-48 shadow-1 rounded-16 border border-1 border-gray100  flex-center-center flex-column">
        <h4 className="fw-medium text-center mt-12">Go On This TRIP</h4>
        <p className="text-uppercase small mt-4"> with Flights Gyani</p>
        <div className="d-flex align-items-center gap-4 text-secondary mt-16">
          <h4>{currency}</h4>
          <h4>{price}</h4>
        </div>
        <p>/Person</p>
        <div class="left-ribbon d-flex flex-center-center gap-4 small px-40 py-4">
          <FaStar />
          Top Seller
        </div>
        <div className="w-100 px-16">
          <button className="btn btn-xs btn-secondary w-100 rounded-8 mt-16 d-flex gap-4 flex-center-center">
            <FaWhatsapp className="text-white" />
            WhatsApp Now
          </button>
          <Button
            variant="secondary"
            className="border border-2 border-white text-white w-100 p-12 rounded-8 text-secondary rounded-4 mt-16 gap-12 flex-center-center"
            onClick={() => showModal(packageId)} // Use packageId from props
          >
            Book Now
          </Button>
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
            {isLoading ? (
              <ClipLoader loading={loading} size={20} color="#CCCCCC" />
            ) : (
              "Submit"
            )}
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
                    {errors.full_name?.type === "required" && (
                      <span className="text-secondary ms-4">*</span>
                    )}
                  </Form.Label>
                  <Form.Control
                    {...register("full_name", {
                      required: true,
                      pattern: {
                        value: /^[A-Za-z\s]+$/,
                        message:
                          "Full name must not contain numbers and special symbol",
                      },
                    })}
                    aria-invalid={errors.full_name ? "true" : "false"}
                    type="text"
                  />
                  {errors.full_name?.type === "required" && (
                    <p className="small text-secondary" role="alert">
                      Full name is required
                    </p>
                  )}
                  {errors.full_name?.type === "pattern" && (
                    <p className="small text-secondary" role="alert">
                      {errors.full_name.message}
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
                    Comments
                    {errors.comments?.type === "required" && (
                      <span className="text-secondary ms-4">*</span>
                    )}
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    resize="none"
                    {...register("comments", { required: true })}
                    aria-invalid={errors.comments ? "true" : "false"}
                  />
                  {errors.comments?.type === "required" && (
                    <p className="small text-secondary" role="alert">
                      Comment is required
                    </p>
                  )}
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </Modal>
      <Modal
        title="Thank You"
        open={isModalFinalOpen}
        onCancel={handleCancelFinal}
        onOk={handleOk}
        footer={[
          <Button className="btn-xs" key="OK" onClick={handleOk}>
            OK
          </Button>,
        ]}
      >
        <p>Your Package has been booked</p>
      </Modal>
    </>
  );
};
export default Booking;
