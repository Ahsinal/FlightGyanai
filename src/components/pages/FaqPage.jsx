"use client";
import React, { useState } from "react";
import { Container, Accordion } from "react-bootstrap";
import { Breadcrumb } from "antd";
import Link from "next/link";
import { useGetFaqQuery, useGetSettingsQuery } from "../../../frontend/api";
import Loading from "@/components/layouts/Loading";
const Faq = () => {
  const { data: faqData, isLoading: faqLoading } = useGetFaqQuery();
  const { data: settingData, isLoading: settingLoading } =
    useGetSettingsQuery();
  const [openAccordion, setOpenAccordion] = useState(null);
  const handleAccordionToggle = (id) => {
    setOpenAccordion(openAccordion == id ? null : id);
  };
  const isLoading = faqLoading || settingLoading;
  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <section className="breadcrumb-banner position-relative">
        <div className="img-wrapper">
          <img src={settingData?.data.faq_page_banner} alt="about-image" />

          <Container>
            <div className="about-banner-content bitter">
              <h2>Frequently Asked Questions</h2>
              <Breadcrumb
                className="h5 fw-normal mt-8"
                items={[
                  {
                    title: <Link href="/">Home</Link>,
                  },
                  {
                    title: "FQA",
                  },
                ]}
              />
            </div>
          </Container>
        </div>
      </section>
      <section className="faq py-40 ">
        <Container>
          <h5 className=" mb-16 ">Any Queries?</h5>
          {faqData?.data.map((d, i) => {
            return (
              <Accordion
                activeKey={openAccordion}
                onSelect={handleAccordionToggle}
                className="mt-16"
              >
                <Accordion.Item eventKey={d.id}>
                  <Accordion.Header>{d.title}</Accordion.Header>
                  <Accordion.Body>
                    <div
                      className="p fw-light "
                      dangerouslySetInnerHTML={{ __html: d.description }}
                    ></div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            );
          })}
        </Container>
      </section>
    </>
  );
};

export default Faq;
