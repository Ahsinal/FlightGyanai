"use client";

import { Container } from "react-bootstrap";
import { Breadcrumb } from "antd";
import Link from "next/link";
import { useGetPageDetailQuery } from "../../../frontend/api";
const SlugPages = ({ params }) => {
  const { data: pageData } = useGetPageDetailQuery(params.slug);
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
