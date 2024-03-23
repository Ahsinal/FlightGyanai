"use client";
import { Col, Container, Row } from "react-bootstrap";
import { Breadcrumb, Pagination } from "antd";
import Link from "next/link";
import { useGetBlogQuery } from "../../../frontend/api";
import { BlogCardlg } from "@/components/cards/BlogCard";
import { useState } from "react";
const Blog = () => {
  const { data: blogData } = useGetBlogQuery();
  const pageSize = 6; // Number of blogs per page
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentBlogs = blogData?.data.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <section className="breadcrumb-banner position-relative">
        <div className="img-wide">
          <img
            src="https://media.istockphoto.com/id/1408387701/photo/social-media-marketing-digitally-generated-image-engagement.jpg?s=612x612&w=0&k=20&c=VVAxxwhrZZ7amcPYJr08LLZJTyoBVMN6gyzDk-4CXos="
            alt="about-image"
          />

          <Container>
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
          <Row className="mt-32">
            {currentBlogs &&
              currentBlogs.map((d, i) => (
                <Col lg={4} sm={12} className="rounded-12 p-12" key={i}>
                  <BlogCardlg
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
