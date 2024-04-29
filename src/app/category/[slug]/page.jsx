"use client";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Breadcrumb, Pagination } from "antd";
import Link from "next/link";
import PopularPackageCard from "@/components/cards/PopularPackageCard";
import {
  useGetSettingsQuery,
  useGetDestinationSlugQuery,
  useGetCategoryPackageDetailQuery,
} from "../../../../frontend/api";
import Loading from "@/components/layouts/Loading";
import CardPackageNew from "@/components/cards/CardPackageNew";

const CategoryPage = ({ params }) => {
  const { data: settingData, isLoading: settingLoading } =
    useGetSettingsQuery();
  const { data: destinationData, isLoading: categoryPackageLoading } =
    useGetCategoryPackageDetailQuery(params.slug);
  const { data: idData, isLoading: destLoading } = useGetDestinationSlugQuery(
    params.slug
  );
  // console.log(idData, "data from id");
  const pageSize = 6; // Number of blogs per page
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentPackage = destinationData?.data?.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const toTitle = (text) => {
    if (text && text.includes("-")) {
      const words = text
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1));
      return words.join(" ");
    } else {
      return text;
    }
  };

  const pageTitle = toTitle(params.slug);

  const isLoading = settingLoading || categoryPackageLoading || destLoading;
  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <section className="breadcrumb-banner position-relative">
        <div className="img-wrapper">
          <img
            src={settingData?.data.destination_page_banner}
            alt="banner-image"
          />

          <Container>
            <div className="about-banner-content bitter">
              <h2>{destinationData?.data.name}</h2>

              <Breadcrumb
                className="h5 fw-normal mt-8"
                items={[
                  {
                    title: <Link href="/">Home</Link>,
                  },
                  {
                    title: "Category",
                  },
                ]}
              />
            </div>
          </Container>
        </div>
      </section>
      <section>
        <Container className="flex-center-center flex-column mt-32">
          <p className="text-primary  small">Popular Packages of</p>
          <h5 className=" bitter  mt-8">{pageTitle}</h5>
          <div
            className="small p w-75 text-cGray500 mt-8 text-center"
            dangerouslySetInnerHTML={{
              __html: idData?.data?.short_description,
            }}
          ></div>
        </Container>
      </section>
      <section className="py-40 ">
        <Container>
          <Row className="gap-24-row">
            {currentPackage?.map((d, i) => {
              return (
                <Col lg={4} sm={6} key={i}>
                  <CardPackageNew
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
                total={destinationData?.data?.length} // Total number of blogs
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

export default CategoryPage;
