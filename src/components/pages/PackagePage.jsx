"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Col, Container, Row } from "react-bootstrap";
import { Breadcrumb, Pagination } from "antd";
import Link from "next/link";
import PopularPackageCard from "@/components/cards/PopularPackageCard";
import {
  useGetSettingsQuery,
  useGetCategoryPackageDetailQuery,
  useGetPackageQuery,
} from "../../../frontend/api";
import Loading from "@/components/layouts/Loading";
import CardPackageNew from "@/components/cards/CardPackageNew";
const Package = () => {
  const router = useRouter();
  const { slug } = router.query || {}; // Extract slug from the router query
  const { data: settingData, isLoading: settingLoading } =
    useGetSettingsQuery();
  // const { data: categoryData } = useGetCategoryPackageDetailQuery(
  //   `${slug}` || ""
  // );
  const { data: packageData, isLoading: packageLoading } = useGetPackageQuery();
  const [currentPage, setCurrentPage] = useState(1);

  const pageSize = 6; // Number of blogs per page

  useEffect(() => {
    // Reset current page when slug changes
    setCurrentPage(1);
  }, [slug]);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentPackage = packageData?.data?.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const isLoading = settingLoading || packageLoading;
  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <section className="breadcrumb-banner position-relative">
        <div className="img-wrapper">
          <img src={settingData?.data.package_page_banner} alt="about-image" />

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
                total={packageData?.data?.length} // Total number of blogs
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
