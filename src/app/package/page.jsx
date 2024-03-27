"use client";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Breadcrumb, Pagination } from "antd";
import Link from "next/link";
import PopularPackageCard from "@/components/cards/PopularPackageCard";
import {
  useGetPackageQuery,
  useGetSettingsQuery,
  useGetCategoryPackageDetailQuery,
} from "../../../frontend/api";
const Package = (props) => {
  const { data: cardData } = useGetPackageQuery();
  const { data: settingData } = useGetSettingsQuery();
  const { data: categoryData } =
    useGetCategoryPackageDetailQuery("domestic-tours");
  const pageSize = 6; // Number of blogs per page
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentPackage = categoryData?.data.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <>
      <section className="breadcrumb-banner position-relative">
        <div className="img-wide">
          <img
            src={settingData?.data.destination_page_image}
            alt="about-image"
          />

          <Container>
            <div className="about-banner-content bitter">
              <h2>Our Packages</h2>
              <Breadcrumb
                className="h5 fw-normal mt-8"
                items={[
                  {
                    title: <Link href="/">Home</Link>,
                  },
                  {
                    title: "Packages",
                  },
                ]}
              />
            </div>
          </Container>
        </div>
      </section>
      <section className="py-40 ">
        <Container>
          <Row className="gap-16-row">
            {currentPackage?.map((d, i) => {
              return (
                <Col lg={4} sm={6} key={i}>
                  <PopularPackageCard
                    img={d.image}
                    title={d.name}
                    desc={d.description}
                    rating={d.rating}
                    currency={d.currency}
                    price={d.fair_price}
                    slug={d.slug}
                  />
                </Col>
              );
            })}
          </Row>
          <Row className=" mt-32">
            <Col className="flex-center-center">
              <Pagination
                total={categoryData?.data.length} // Total number of blogs
                pageSize={pageSize} // Number of blogs per page
                current={currentPage} // Current page
                showSizeChanger={false} // Hide option to change page size
                onChange={handlePageChange} // Handle page change
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Package;
