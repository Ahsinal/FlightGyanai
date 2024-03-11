import { Breadcrumb } from "antd";
import { Container, Row, Col } from "react-bootstrap";
import { blogData } from "@/data/Data";
import Link from "next/link";
import SideCardBlog from "@/components/cards/SideCardBlog";
const BlogDetail = () => {
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
          <div className="img-wide">
            <img src={blogData?.data[2].img} alt="image-blog" />
          </div>
          <div className="content mt-32">
            <p className="xx-small text-cGray600">{blogData?.data[2].date}</p>
            <h5 className="mt-12">{blogData?.data[2].title}</h5>
            <Row className="mt-12">
              <Col lg={8} sm={12} className="">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Quidem a, modi facilis quos voluptatem ipsa amet delectus
                  minus impedit dolorum nostrum. Voluptates impedit saepe magnam
                  veritatis? Exercitationem, nesciunt natus obcaecati deserunt
                  sit sunt, debitis iure architecto animi eum culpa ab ullam
                  soluta? Voluptatum quidem sunt similique cum cumque temporibus
                  quod.
                </p>
                <p className="mt-12">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Quidem a, modi facilis quos voluptatem ipsa amet delectus
                  minus impedit dolorum nostrum. Voluptates impedit saepe magnam
                  veritatis? Exercitationem, nesciunt natus obcaecati deserunt
                  sit sunt, debitis iure architecto animi eum culpa ab ullam
                  soluta? Voluptatum quidem sunt similique cum cumque temporibus
                  quod.
                </p>
                <p className="mt-12">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Quidem a, modi facilis quos voluptatem ipsa amet delectus
                  minus impedit dolorum nostrum. Voluptates impedit saepe magnam
                  veritatis? Exercitationem, nesciunt natus obcaecati deserunt
                  sit sunt, debitis iure architecto animi eum culpa ab ullam
                  soluta? Voluptatum quidem sunt similique cum cumque temporibus
                  quod.
                </p>
                <p className="mt-12">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Quidem a, modi facilis quos voluptatem ipsa amet delectus
                  minus impedit dolorum nostrum. Voluptates impedit saepe magnam
                  veritatis? Exercitationem, nesciunt natus obcaecati deserunt
                  sit sunt, debitis iure architecto animi eum culpa ab ullam
                  soluta? Voluptatum quidem sunt similique cum cumque temporibus
                  quod.
                </p>
                <p className="mt-12">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Quidem a, modi facilis quos voluptatem ipsa amet delectus
                  minus impedit dolorum nostrum. Voluptates impedit saepe magnam
                  veritatis? Exercitationem, nesciunt natus obcaecati deserunt
                  sit sunt, debitis iure architecto animi eum culpa ab ullam
                  soluta? Voluptatum quidem sunt similique cum cumque temporibus
                  quod.
                </p>
                <div className="d-flex gap-12 align-items-center mt-32">
                  <div className="auth-img ">
                    <img
                      src="https://img.freepik.com/free-photo/portrait-smiling-beautiful-brunette-woman-cute-dress-red-lips-flowers-background-concept-professional-photossesion-modern-greenhouse_7502-8441.jpg?t=st=1710131009~exp=1710134609~hmac=7258023d6bf09d634795a87feea61f8bb4891d0ec98d13a28976e67341e74b64&w=740"
                      alt="author"
                    />
                  </div>
                  <p>Written By- Genellia Musk</p>
                </div>
              </Col>
              <Col lg={4} sm={12}>
                <h6 className="text-secondary mb-12">Blogs And Articles</h6>
                {blogData?.data.slice(0, 4).map((d, i) => {
                  return <SideCardBlog title={d.title} img={d.img} />;
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
