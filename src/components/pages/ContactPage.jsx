"use client";
import Link from "next/link";
import { Breadcrumb } from "antd";
import { Col, Container, Row } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";
import {
  useGetSettingsQuery,
  useGetPageDetailQuery,
} from "../../../frontend/api";
import ContactForm from "@/components/layouts/ContactForm";
import Loading from "../layouts/Loading";
const ContactUs = () => {
  const { data: settingData, isloading: settingLoading } =
    useGetSettingsQuery();
  const { data: contactData, isLoading: dataLoading } =
    useGetPageDetailQuery("contact-page");
  const isLoading = settingLoading || dataLoading;
  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <section className="breadcrumb-banner ">
        <div className="img-wrapper">
          <img src={settingData?.data.contact_page_banner} alt="about-image" />
          <Container>
            <div className="about-banner-content bitter">
              <h2>{contactData?.data.title}</h2>
              <Breadcrumb
                className="h5 fw-normal mt-8"
                items={[
                  {
                    title: <Link href="/">Home</Link>,
                  },
                  {
                    title: "Contact",
                  },
                ]}
              />
            </div>
          </Container>
        </div>
      </section>
      <section className="py-40">
        <Container>
          <Row className="g-24 d-flex align-items-center">
            <Col lg={6} sm={12}>
              <div className="">
                <p className="text-secondary small fw-bold">GET IN TOUCH</p>
                <h3 className="bitter mt-12">
                  {contactData?.data.short_description}
                </h3>
                <div
                  className=" p mt-8 text-cGray700"
                  dangerouslySetInnerHTML={{
                    __html: contactData?.data.description,
                  }}
                ></div>
              </div>

              <div className="mt-16 overflow-hidden">
                <div className="overflow-hidden rounded-12 ">
                  <iframe
                    width="100%"
                    height="300"
                    src="https://maps.google.com/maps?width=100%25&amp;height=auto&amp;hl=en&amp;q=Flights%20gyani+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  ></iframe>
                </div>
              </div>
            </Col>
            <Col lg={6} sm={12}>
              <div className="shadow-1 rounded-16 p-32 h-100">
                <ContactForm />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ContactUs;
