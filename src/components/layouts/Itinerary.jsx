import React, { useState } from "react";
import { Accordion } from "react-bootstrap";

import { accordionData } from "@/data/Data";
const Itinerary = () => {
  const [openAccordion, setOpenAccordion] = useState(null);
  const handleAccordionToggle = (id) => {
    setOpenAccordion(openAccordion == id ? null : id);
  };
  return (
    <>
      <h5 className=" text-cGray800 mb-12">ITINERARY</h5>
      {accordionData?.data.map((d, i) => {
        return (
          <Accordion
            key={i}
            activeKey={openAccordion === d.id ? d.id : null}
            onSelect={handleAccordionToggle}
            className="mb-12 w-auto"
          >
            <Accordion.Item eventKey={d.id}>
              <Accordion.Header>
                <div className="d-flex p fw-medium">
                  <strong className="me-12">Day:</strong>
                  {d.title}
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <div className="p fw-light small">{d.body}</div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        );
      })}
    </>
  );
};

export default Itinerary;
