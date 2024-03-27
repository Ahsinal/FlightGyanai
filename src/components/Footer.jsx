"use client";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaFacebook,
  FaPhoneAlt,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaPinterest,
  FaAngleDoubleRight,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import {
  useGetSettingsQuery,
  useGetSocialQuery,
  useGetCategoryPackageQuery,
} from "../../frontend/api";
const Footer = () => {
  const { data: settingData } = useGetSettingsQuery();
  const { data: socialmediaData } = useGetSocialQuery();
  const { data: packagecategoryData } = useGetCategoryPackageQuery();
  function checkIcon(icon) {
    switch (icon) {
      case "facebook":
        return <FaFacebook />;
      case "twitter":
        return <FaTwitter />;
      case "instagram":
        return <FaInstagram />;
      case "youtube":
        return <FaYoutube />;
      case "pinterest":
        return <FaPinterest />;

      default:
        return <FaInstagram />;
    }
  }
  return (
    <>
      <footer>
        <section className="bg-gray50 py-40 px-sm-16 ">
          <Container>
            <Row className="gap-24-row">
              <Col lg={4} sm={12}>
                <a href="/">
                  <img
                    src={settingData?.data.site_footer_logo}
                    alt="logo"
                    width={100}
                    height={60}
                  />
                </a>
                <p className="mt-12 fw-semibold">
                  Welcome to our Trip and Tour Agency.
                </p>
                <p className="x-small mt-4">
                  {settingData?.data.site_information}
                </p>
              </Col>
              <Col lg={2} sm={6}>
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
                    <Link href="/about" className="stretched-link">
                      About Us
                    </Link>
                  </li>
                  <li className="d-flex align-items-center gap-2 position-relative ">
                    <FaAngleDoubleRight className="text-cGray700 " />
                    <Link href="/blog" className="stretched-link">
                      Our Blogs
                    </Link>
                  </li>
                  <li className="d-flex align-items-center gap-2 position-relative ">
                    <FaAngleDoubleRight className="text-cGray700 " />
                    <Link href="/contact" className="stretched-link">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </Col>
              <Col lg={2} sm={6}>
                <h6 className="fw-semibold mb-16">Packages</h6>
                <ul className="d-flex flex-column gap-12">
                  {packagecategoryData?.data.slice(0, 4).map((d, i) => {
                    return (
                      <li
                        className="d-flex align-items-center gap-2 position-relative "
                        key={i}
                      >
                        <FaAngleDoubleRight className="text-cGray700 " />
                        <Link
                          href={`/package?slug=${d.slug}`}
                          passHref
                          className="stretched-link"
                        >
                          {d.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </Col>
              <Col lg={2} sm={6}>
                <h6 className="fw-semibold mb-16">Explore</h6>
                <ul className="d-flex flex-column gap-12">
                  <li className="d-flex align-items-center gap-2 position-relative ">
                    <FaAngleDoubleRight className="text-cGray700 " />
                    <Link href="/privacy-policy" className="stretched-link">
                      Privacy Policy
                    </Link>
                  </li>
                  <li className="d-flex align-items-center gap-2 position-relative ">
                    <FaAngleDoubleRight className="text-cGray700 " />
                    <Link
                      href="/terms-and-conditions"
                      className="stretched-link"
                    >
                      Terms And Conditions
                    </Link>
                  </li>
                  <li className="d-flex align-items-center gap-2 position-relative ">
                    <FaAngleDoubleRight className="text-cGray700 " />
                    <Link href="/faq" className="stretched-link">
                      FAQ
                    </Link>
                  </li>
                  <li className="d-flex align-items-center gap-2 position-relative ">
                    <FaAngleDoubleRight className="text-cGray700 " />
                    <Link href="/teams" className="stretched-link">
                      Our Teams
                    </Link>
                  </li>
                </ul>
              </Col>
              <Col lg={2} sm={6}>
                <h6 className="fw-semibold mb-16">Find Us</h6>
                <ul className="d-flex flex-column gap-12">
                  <li className="d-flex align-items-center gap-8">
                    <FaPhoneAlt className="text-cGray700" />{" "}
                    <p className="small">{settingData?.data.site_contact}</p>
                  </li>
                  <li className="d-flex align-items-center gap-8">
                    <FaLocationDot className="text-cGray700" />{" "}
                    <p className="small">{settingData?.data.site_location}</p>
                  </li>
                  <li className="d-flex align-items-center gap-8">
                    <IoMail className="text-cGray700" />{" "}
                    <p className="small">{settingData?.data.site_email}</p>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="bg-secondary text-white">
          <Container className="flex-between align-items-center py-12 ">
            <Row className="gap-8-row  w-100 align-items-center">
              <Col lg={6} sm={12} className="">
                <div className="flex-items-center gap-8 ">
                  {socialmediaData?.data.map((d, i) => {
                    return (
                      <Link
                        href={d.link}
                        className=" btn-circle-xs btn-outline-gray text-white"
                        key={i}
                      >
                        {checkIcon(d.title.toLowerCase())}
                      </Link>
                    );
                  })}
                </div>
              </Col>
              <Col lg={6} sm={12}>
                <p className="xx-small text-lg-end">
                  {settingData?.data.site_copyright}
                </p>
              </Col>
            </Row>
          </Container>
        </section>
      </footer>
    </>
  );
};

export default Footer;
