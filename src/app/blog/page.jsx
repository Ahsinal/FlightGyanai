"use client";
import { Col, Container, Row } from "react-bootstrap";
import { Breadcrumb, Pagination } from "antd";
import Link from "next/link";
import { blogData } from "@/data/Data";
import { BlogCardlg } from "@/components/cards/BlogCard";
import { useState } from "react";
const Blog = () => {
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
      <section className="py-40">
        <Container>
          <Breadcrumb
            className="p fw-normal"
            items={[
              {
                title: <Link href="/">Home</Link>,
              },
              {
                title: "Blogs",
              },
            ]}
          />
          <Row className="mt-32">
            {currentBlogs.map((d, i) => {
              return (
                <Col lg={4} sm={12} className="rounded-12 p-12 " key={i}>
                  <BlogCardlg
                    img={d.img}
                    title={d.title}
                    desc={d.desc}
                    date={d.date}
                  />
                </Col>
              );
            })}
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
