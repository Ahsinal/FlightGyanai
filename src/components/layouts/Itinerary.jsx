import React, { useState } from "react";
import { Accordion } from "react-bootstrap";

import { accordionData } from "@/data/Data";
const Itinerary = (props) => {
  const [openAccordion, setOpenAccordion] = useState(null);
  const handleAccordionToggle = (id) => {
    setOpenAccordion(openAccordion == id ? null : id);
  };
  return (
    <>
      <Accordion
        activeKey={openAccordion === props.id ? props.id : null}
        onSelect={handleAccordionToggle}
        className="mb-12 w-auto"
      >
        <Accordion.Item eventKey={props.id}>
          <Accordion.Header>
            <div className="d-flex p fw-medium">
              <strong className="me-12">Day:</strong>
              {props.title}
            </div>
          </Accordion.Header>
          <Accordion.Body>
            <div className="p fw-light small" dangerouslySetInnerHTML={{__html:props.body}}></div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
};

export default Itinerary;
