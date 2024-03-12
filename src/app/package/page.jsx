import React from "react";
import { cardData } from "@/data/Data";
import { Col, Container, Row } from "react-bootstrap";
import PopularPackageCard from "@/components/cards/PopularPackageCard";
const Package = () => {
  return (
    <section className="py-40">
      <Container>
        <Row className="gap-16-row">
          {cardData?.data.map((d, i) => {
            return (
              <Col lg={4} sm={6} key={i}>
                <PopularPackageCard
                  img={d.img}
                  title={d.title}
                  location={d.location}
                  rating={d.rating}
                  price={d.price}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Package;
