"use client";
import { Col, Container, Row } from "react-bootstrap";
import { Breadcrumb, Pagination } from "antd";
import Link from "next/link";
import { useGetBlogQuery, useGetSettingsQuery } from "../../../frontend/api";
import { BlogCard, BlogCardlg } from "@/components/cards/BlogCard";
import { useState } from "react";
import Loading from "@/components/layouts/Loading";
const Blog = () => {
  const { data: blogData, isLoading: blogLoading } = useGetBlogQuery();
  const { data: settingData, isLoading: settingLoading } =
    useGetSettingsQuery();
  const pageSize = 6; // Number of blogs per page
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentBlogs = blogData?.data.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const isLoading = settingLoading || blogLoading;
  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <section className="breadcrumb-banner position-relative">
        <div className="img-wrapper">
          <img src={settingData?.data.blog_page_banner} alt="about-image" />

          <Container>
            {/* <h5 className=" bitter  mt-8">{idData?.data?.name}</h5> */}
            <div className="about-banner-content bitter">
              <h2>Our Blogs</h2>
              <Breadcrumb
                className="h5 fw-normal mt-8"
                items={[
                  {
                    title: <Link href="/">Home</Link>,
                  },
                  {
                    title: "Blogs",
                  },
                ]}
              />
            </div>
          </Container>
        </div>
      </section>
      <section className="py-40">
        <Container>
          {/* <p className="text-primary text-center small">{settingData?.data.datahomepage_blog_section_description}</p> */}
          <Row className="mt-32">
            {currentBlogs &&
              currentBlogs.map((d, i) => (
                <Col lg={4} sm={12} className="rounded-12" key={i}>
                  <BlogCard
                    img={d.image}
                    title={d.title}
                    desc={d.short_description}
                    date={d.date}
                    slug={d.slug}
                  />
                </Col>
              ))}
          </Row>
          <Row className=" mt-32">
            <Col className="flex-center-center">
              <Pagination
                total={blogData?.data.length} // Total number of blogs
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

export default Blog;
