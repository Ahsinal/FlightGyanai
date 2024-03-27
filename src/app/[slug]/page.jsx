"use client";

import { Container } from "react-bootstrap";
import { Breadcrumb } from "antd";
import Link from "next/link";
import { useGetPageDetailQuery } from "../../../frontend/api";
const SlugPages = ({ params }) => {
  const { data: pageData, isError } = useGetPageDetailQuery(params.slug);
  // Custom error handling for page not found
  if (isError) {
    return (
      <section>
        <Container className="py-40">
          <Link href="/" className="text-secondary">
            Back To Home
          </Link>
          <div className="img-landscape">
            <img
              src="https://cdn.pixabay.com/photo/2016/03/12/14/19/error-404-1252056_1280.png"
              alt="4o4 Not found"
            />
          </div>
        </Container>
      </section>
    );
  }
  return (
    <>
      <section className="breadcrumb-banner position-relative">
        <div className="img-wide">
          <img src={pageData?.data.image} alt="about-image" />

          <Container>
            <div className="about-banner-content bitter">
              <h2>{pageData?.data.title}</h2>
              <Breadcrumb
                className="h5 fw-normal mt-8"
                items={[
                  {
                    title: <Link href="/">Home</Link>,
                  },
                  {
                    title: `${pageData?.data.title}`,
                  },
                ]}
              />
            </div>
          </Container>
        </div>
      </section>
      <section className=" py-40">
        <Container>
          <h4 className="text-center mb-12">{pageData?.data.title}</h4>
          <div
            className="p fw-light small"
            dangerouslySetInnerHTML={{ __html: pageData?.data.description }}
          ></div>
        </Container>
      </section>
    </>
  );
};

export default SlugPages;
