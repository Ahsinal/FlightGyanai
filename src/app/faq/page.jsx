"use client";
import React, { useState } from "react";
import { Container, Accordion } from "react-bootstrap";
import { Breadcrumb } from "antd";
import Link from "next/link";
import { faqData } from "@/data/Data";
const Faq = () => {
  //   const { data: faqData } = useGetFaqQuery();
  const [openAccordion, setOpenAccordion] = useState(null);
  const handleAccordionToggle = (id) => {
    setOpenAccordion(openAccordion == id ? null : id);
  };
  return (
    <>
      <section className="breadcrumb-banner position-relative">
        <div className="img-wide">
          <img
            src="https://media.istockphoto.com/id/1423349102/photo/red-question-mark-glowing-amid-black-question-marks-on-black-background.jpg?s=612x612&w=0&k=20&c=xJP7YhXo-Hv-_GmP3IjF0XPq_4J0oEXVSrru6BPisgw="
            alt="about-image"
          />

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
      <section className="faq py-40">
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
                    <div>{d.desc}</div>
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
