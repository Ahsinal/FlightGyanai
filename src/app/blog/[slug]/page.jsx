"use client";
import { Breadcrumb } from "antd";
import { Container, Row, Col } from "react-bootstrap";
import {
  useGetBlogQuery,
  useGetBlogDetailQuery,
} from "../../../../frontend/api";
import Link from "next/link";
import SideCardBlog from "@/components/cards/SideCardBlog";
const BlogDetail = ({ params }) => {
  const { data: blogData } = useGetBlogQuery();
  const { data: blogDetailData } = useGetBlogDetailQuery(params.slug);
  return (
    <>
      <section className="py-16 blog-detail-breadcrumb">
        <Container>
          <div className="btn btn-circle"></div>
          <Breadcrumb
            className="p fw-normal text-dark"
            items={[
              {
                title: <Link href="/">Home</Link>,
              },
              {
                title: <Link href="/">Blogs</Link>,
              },
            ]}
          />
        </Container>
      </section>
      <section className=" mb-40 blog-details">
        <Container>
          <div className="img-wide rounded-4 overflow-hidden">
            <img src={blogDetailData?.data.image} alt="image-blog" />
          </div>
          <div className="content mt-32">
            <p className="xx-small text-cGray600">
              {blogDetailData?.data.created_at}
            </p>
            <h5 className="mt-12">{blogDetailData?.data.title}</h5>
            <Row className="mt-12 gap-16-row blog-side-cards ">
              <Col lg={8} sm={12} className="">
                <div
                  className="p"
                  dangerouslySetInnerHTML={{
                    __html: blogDetailData?.data.description,
                  }}
                ></div>

                {/* <div className="d-flex gap-12 align-items-center mt-32">
                  <div className="auth-img ">
                    <img
                      src="https://img.freepik.com/free-photo/portrait-smiling-beautiful-brunette-woman-cute-dress-red-lips-flowers-background-concept-professional-photossesion-modern-greenhouse_7502-8441.jpg?t=st=1710131009~exp=1710134609~hmac=7258023d6bf09d634795a87feea61f8bb4891d0ec98d13a28976e67341e74b64&w=740"
                      alt="author"
                    />
                  </div>
                  <p>Written By- Genellia Musk</p>
                </div> */}
              </Col>
              <Col lg={4} sm={12} className=" stick-side-card-blog">
                <h6 className="text-secondary mb-12">Blogs And Articles</h6>
                {blogData?.data
                  .filter((d) => d.slug != blogDetailData?.data.slug)
                  .slice(0, 4)
                  .map((d, i) => {
                    return (
                      <SideCardBlog
                        title={d.title}
                        img={d.image}
                        date={d.created_at}
                        slug={d.slug}
                      />
                    );
                  })}
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
};

export default BlogDetail;
