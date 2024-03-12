import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Accordion } from "react-bootstrap";
import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import { accordionData, packageDetailOverview } from "@/data/Data";
const PackageDetailContent = () => {
  const [openAccordion, setOpenAccordion] = useState(null);
  const handleAccordionToggle = (id) => {
    setOpenAccordion(openAccordion == id ? null : id);
  };
  return (
    <>
      <div>
        <h5 className="bitter text-cGray800">Overview</h5>
        <Row >
          {packageDetailOverview?.data.map((d, i) => {
            return (
              <Col lg={4} sm={6} className="g-12" key={i}>
                <div className="d-flex align-items-center gap-12 card-package-overview">
                  <div className="img">
                    <img src={d.img} alt="icon" />
                  </div>
                  <div className=" flex-column">
                    <p className="fw-semibold">{d.title}</p>
                    <p className="mt-0 text-cGray700 small">{d.content}</p>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
      <div className=" mt-16">
        <Row>
          <Col lg={6} sm={12} className="">
            <h5 className="text-cGray700 ">Included</h5>
            <div className="d-flex align-items-center gap-8">
              <TiTick className="text-primary h4" />
              <p>Pick and Drop Services</p>
            </div>
            <div className="d-flex align-items-center gap-8">
              <TiTick className="text-primary h4" />
              <p>1 Meal Per Day</p>
            </div>
            <div className="d-flex align-items-center gap-8">
              <TiTick className="text-primary h4" />
              <p>Cruise Dinner & Music Event</p>
            </div>
            <div className="d-flex align-items-center gap-8">
              <TiTick className="text-primary h4" />
              <p>Visit 7 Best Places in the City</p>
            </div>
          </Col>
          <Col lg={6} sm={12}>
            <h5 className="text-cGray700 ">Excluded</h5>
            <div className="d-flex align-items-center gap-8">
              <RxCross2 className="text-danger h4" />
              <p>Additional Services</p>
            </div>
            <div className="d-flex align-items-center gap-8">
              <RxCross2 className="text-danger h4" />
              <p>Insurance</p>
            </div>
            <div className="d-flex align-items-center gap-8">
              <RxCross2 className="text-danger h4" />
              <p>Food & Drinks</p>
            </div>
            <div className="d-flex align-items-center gap-8">
              <RxCross2 className="text-danger h4" />
              <p>Tickets</p>
            </div>
          </Col>
        </Row>
      </div>
      <div className="mt-32">
        <h4 className="bitter text-cGray700">Tour Plans</h4>
        <p className="text-cGray700 mb-32">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
          fugiat saepe voluptates id doloremque earum quis optio ipsum! Porro,
          nam ratione explicabo, iure quae voluptate, eum dolor tenetur
          inventore voluptates eius unde aliquam quasi repellendus labore
        </p>
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
                  <div className="d-flex">{d.title}</div>
                </Accordion.Header>
                <Accordion.Body>{d.body}</Accordion.Body>
              </Accordion.Item>
            </Accordion>
          );
        })}
      </div>
      <div className="mt-32 mb-80">
        <h4 className="bitter text-cGray700">Other Information</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis iusto
          corrupti voluptatum hic dolores consectetur recusandae est velit vero
          facilis, exercitationem impedit quis explicabo nobis commodi quod ex.
          Quae amet, similique aliquid distinctio minus ea laborum commodi
          placeat maiores a beatae sed molestiae? Ipsum adipisci, dicta atque
          corporis fugit dolores harum optio, rem hic eveniet dolorum rerum
          suscipit, alias veniam modi velit impedit? Pariatur quasi, facilis
          quis tenetur iure expedita. Illo magni dolorum molestiae ex odit, at
          impedit, corporis, assumenda autem velit ducimus omnis? Magnam iusto
          et itaque nisi officia molestias sequi non ullam debitis nulla nam
          sunt amet maiores quis dicta reprehenderit
        </p>
      </div>
    </>
  );
};

export default PackageDetailContent;
