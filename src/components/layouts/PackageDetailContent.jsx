import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Accordion } from "react-bootstrap";

import { accordionData, packageDetailOverview } from "@/data/Data";
const PackageDetailContent = () => {
  const [openAccordion, setOpenAccordion] = useState(null);
  const handleAccordionToggle = (id) => {
    setOpenAccordion(openAccordion == id ? null : id);
  };
  return (
    <>
      <div className="mt-32">
        <h5 className=" text-cGray800 mb-12">ITINERARY</h5>
        {accordionData?.data.map((d, i) => {
          return (
            <Accordion
              key={i}
              activeKey={openAccordion === d.id ? d.id : null}
              onSelect={handleAccordionToggle}
              className="mb-12"
            >
              <Accordion.Item eventKey={d.id}>
                <Accordion.Header>
                  <div className="d-flex">
                    <strong className="me-12">Day:</strong>
                    {d.title}
                  </div>
                </Accordion.Header>
                <Accordion.Body>{d.body}</Accordion.Body>
              </Accordion.Item>
            </Accordion>
          );
        })}
      </div>
    </>
  );
};

export default PackageDetailContent;
