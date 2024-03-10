import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaFacebook,
  FaPhoneAlt,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaPinterest,
  FaAngleDoubleRight,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
const Footer = () => {
  return (
    <>
      <footer>
        <section className="bg-gray50 py-40 px-sm-16 ">
          <Container>
            <Row className="gap-24-row">
              <Col lg={4} sm={12}>
                <a href="/">
                  <img
                    src="/assets/image/logo.png"
                    alt="logo"
                    width={60}
                    height={60}
                  />
                </a>
                <p className="mt-12 fw-semibold">
                  Welcome to our Trip and Tour Agency.
                </p>
                <p className="x-small mt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Itaque excepturi deleniti praesentium eligendi praesentium
                  eligendi.
                </p>
              </Col>
              <Col lg={2} sm={12}>
                <h6 className="fw-semibold mb-16">Pages</h6>
                <ul className="d-flex flex-column gap-12">
                  <li className="d-flex align-items-center gap-2 position-relative ">
                    <FaAngleDoubleRight className="text-cGray700 " />
                    <Link href="/" className="stretched-link">
                      Home
                    </Link>
                  </li>
                  <li className="d-flex align-items-center gap-2 position-relative ">
                    <FaAngleDoubleRight className="text-cGray700 " />
                    <Link href="/" className="stretched-link">
                      About
                    </Link>
                  </li>
                  <li className="d-flex align-items-center gap-2 position-relative ">
                    <FaAngleDoubleRight className="text-cGray700 " />
                    <Link href="/" className="stretched-link">
                      Services
                    </Link>
                  </li>
                  <li className="d-flex align-items-center gap-2 position-relative ">
                    <FaAngleDoubleRight className="text-cGray700 " />
                    <Link href="/" className="stretched-link">
                      Blogs
                    </Link>
                  </li>
                </ul>
              </Col>
              <Col lg={2} sm={12}>
                <h6 className="fw-semibold mb-16">Useful Links</h6>
                <ul className="d-flex flex-column gap-12">
                  <li className="d-flex align-items-center gap-2 position-relative ">
                    <FaAngleDoubleRight className="text-cGray700 " />
                    <Link href="/" className="stretched-link">
                      International
                    </Link>
                  </li>
                  <li className="d-flex align-items-center gap-2 position-relative ">
                    <FaAngleDoubleRight className="text-cGray700 " />
                    <Link href="/" className="stretched-link">
                      Domestic
                    </Link>
                  </li>
                  <li className="d-flex align-items-center gap-2 position-relative ">
                    <FaAngleDoubleRight className="text-cGray700 " />
                    <Link href="/" className="stretched-link">
                      All Packages
                    </Link>
                  </li>
                  <li className="d-flex align-items-center gap-2 position-relative ">
                    <FaAngleDoubleRight className="text-cGray700 " />
                    <Link href="/" className="stretched-link">
                      Home
                    </Link>
                  </li>
                </ul>
              </Col>
              <Col lg={2} sm={12}>
                <h6 className="fw-semibold mb-16">Useful Links</h6>
                <ul className="d-flex flex-column gap-12">
                  <li className="d-flex align-items-center gap-2 position-relative ">
                    <FaAngleDoubleRight className="text-cGray700 " />
                    <Link href="/" className="stretched-link">
                      Privacy Policy
                    </Link>
                  </li>
                  <li className="d-flex align-items-center gap-2 position-relative ">
                    <FaAngleDoubleRight className="text-cGray700 " />
                    <Link href="/" className="stretched-link">
                      Terms And Conditions
                    </Link>
                  </li>
                  <li className="d-flex align-items-center gap-2 position-relative ">
                    <FaAngleDoubleRight className="text-cGray700 " />
                    <Link href="/" className="stretched-link">
                      FAQ
                    </Link>
                  </li>
                  <li className="d-flex align-items-center gap-2 position-relative ">
                    <FaAngleDoubleRight className="text-cGray700 " />
                    <Link href="/" className="stretched-link">
                      Home
                    </Link>
                  </li>
                </ul>
              </Col>
              <Col lg={2} sm={12}>
                <h6 className="fw-semibold mb-16">Find Us</h6>
                <ul className="d-flex flex-column gap-12">
                  <li className="d-flex align-items-center gap-8">
                    <FaPhoneAlt className="text-cGray700" />{" "}
                    <p className="small">01-5970440</p>
                  </li>
                  <li className="d-flex align-items-center gap-8">
                    <FaLocationDot className="text-cGray700" />{" "}
                    <p className="small">Address,Kathmandu</p>
                  </li>
                  <li className="d-flex align-items-center gap-8">
                    <IoMail className="text-cGray700" />{" "}
                    <p className="small">info@flightsgyani.com</p>
                  </li>
                </ul>
              </Col>
              {/* <hr className="mt-24 mb-0" /> */}
            </Row>
          </Container>
        </section>
        <section className="bg-secondary text-white">
          <Container className="flex-between align-items-center py-12">
            <div className="flex-items-center gap-8">
              <Link href="/" className=" btn-circle-xs btn-outline-gray">
                <FaFacebook className="text-white" />
              </Link>
              <Link href="/" className=" btn-circle-xs btn-outline-gray">
                <FaTwitter className="text-white" />
              </Link>
              <Link href="/" className=" btn-circle-xs btn-outline-gray">
                <FaInstagram className="text-white" />
              </Link>
              <Link href="/" className=" btn-circle-xs btn-outline-gray">
                <FaYoutube className="text-white" />
              </Link>
              <Link href="/" className=" btn-circle-xs btn-outline-gray">
                <FaPinterest className="text-white" />
              </Link>
            </div>
            <p className="xx-small">
              Copyright @ 2024 Flights Gyani Pvt Ltd | All rights are preserved
            </p>
          </Container>
        </section>
      </footer>
    </>
  );
};

export default Footer;
