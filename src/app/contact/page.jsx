import Link from "next/link";
import { Breadcrumb } from "antd";
import { Col, Container, Row } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";
import ContactForm from "@/components/layouts/ContactForm";
const ContactUs = () => {
  return (
    <>
      <section className="breadcrumb-banner ">
        <div className="img-wide">
          <img
            src="https://img.freepik.com/free-vector/technology-background-navy-digital-grid_53876-116447.jpg?w=826&t=st=1710142024~exp=1710142624~hmac=1ab98f7ae477fdebef7845a1f5b27bfb1efc49f84fadfe77bb64337019eaddf3"
            alt="about-image"
          />
          <Container>
            <div className="about-banner-content bitter">
              <h2>Contact Us</h2>
              <Breadcrumb
                className="h5 fw-normal mt-8"
                items={[
                  {
                    title: <Link href="/">Home</Link>,
                  },
                  {
                    title: "Contact",
                  },
                ]}
              />
            </div>
          </Container>
        </div>
      </section>
      <section className="py-40">
        <Container>
          <Row className="g-24 d-flex align-items-center">
            <Col lg={6} sm={12}>
              <div className="">
                <p className="text-secondary small fw-bold">GET IN TOUCH</p>
                <h3 className="bitter mt-12">REACH & CONTACT US!</h3>
                <p className="mt-8 text-cGray700">
                  Fusce hic augue velit wisi quibusdam pariatur, iusto primis,
                  nec nemo, rutrum. Vestibulum cumque laudantium. Sit ornare
                  mollitia tenetur, aptent. Eget feugiat error necessitatibus
                  taciti.
                </p>
              </div>

              <div className="mt-16 overflow-hidden">
                <div className="overflow-hidden rounded-12 ">
                  <iframe
                    width="100%"
                    height="300"
                    src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=paris+()&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  ></iframe>
                </div>
              </div>
            </Col>
            <Col lg={6} sm={12}>
              <div className="shadow-1 rounded-16 p-32 h-100">
                <ContactForm />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ContactUs;
