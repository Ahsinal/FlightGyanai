"use client";
import { usePathname } from "next/navigation";
import { Container } from "react-bootstrap";
import { Breadcrumb } from "antd";
import Link from "next/link";
import { useGetPageDetailQuery, useGetPageQuery } from "../../../frontend/api";
import Loading from "@/components/layouts/Loading";
import NotFoundPage from "../layouts/PageNotFound";
const SlugPages = ({ params }) => {
  const { data: pageDataAll } = useGetPageQuery();
  const { data: pageData, isLoading: dataLoading } = useGetPageDetailQuery(
    params.slug
  );
  // Custom error handling for page not found
  const currentPathName = usePathname();
  const slug = currentPathName.replace("/", "");
  const isPathFound = pageDataAll?.data.some((page) => page.slug === slug);
  if (!isPathFound) {
    return (
      <>
        <NotFoundPage />
      </>
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
