"use client";

import { Container } from "react-bootstrap";
import { Breadcrumb } from "antd";
import Link from "next/link";
import { useGetPageDetailQuery } from "../../../frontend/api";
import Loading from "@/components/layouts/Loading";
const SlugPages = ({ params }) => {
  const {
    data: pageData,
    isError,
    isLoading: dataLoading,
  } = useGetPageDetailQuery(params.slug);
  // Custom error handling for page not found
  if (isError) {
    return (
      <section>
        <Container className="py-40">
          <div className="img-wide">
            <img src="/assets/image/404.webp" alt="4o4 Not found" />
          </div>
          <div className="mt-32 flex-center-center flex-column">
            <p>The Page that you are trying to access doesnot exist</p>
            <Link
              href="/"
              className="mt-12 text-secondary btn btn-xs btn-secondary text-white "
            >
              Back To Home
            </Link>
          </div>
        </Container>
      </section>
    );
  }
  const isLoading = dataLoading;
  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <section className="breadcrumb-banner position-relative">
        <div className="img-wrapper">
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
