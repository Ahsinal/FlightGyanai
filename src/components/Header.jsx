"use client";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Link from "next/link";
import React, { useState, useEffect } from "react";
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
  useGetDestinationQuery,
  useGetSocialQuery,
  useGetMenuSlugQuery,
} from "../../frontend/api";
import { MdLocationPin } from "react-icons/md";
const Header = () => {
  const { data: settingData } = useGetSettingsQuery();
  const { data: socialmediaData } = useGetSocialQuery();
  const { data: domesticData } = useGetMenuSlugQuery("3");
  const { data: internationalData } = useGetMenuSlugQuery("4");
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

  const [windowChange, setWindowChange] = useState(false);
  useEffect(() => {
    const changeNavbarPosition = () => {
      if (window.scrollY >= 90) {
        setWindowChange(true);
      } else {
        setWindowChange(false);
      }
    };
    window.addEventListener("scroll", changeNavbarPosition);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", changeNavbarPosition);
    };
  }, []);
  const [selectedItem1, setSelectedItem1] = useState("");
  const [selectedItem2, setSelectedItem2] = useState("");
  const [selectedItem3, setSelectedItem3] = useState("");
  const [isOpen, setIsOpen] = useState("");
  const handleItemClick = (title) => {
    setIsOpen(!isOpen);
    setHoveredItem2(title);
  };
  const handleHover1 = (title) => {
    setSelectedItem1(title);
  };
  const handleHoverOut1 = (title) => {
    setSelectedItem1("");
    // Set a timeout to clear selectedItem1 after 300 milliseconds
  };
  const handleHover2 = (title) => {
    setSelectedItem2(title);
  };
  const handleHoverOut2 = (title) => {
    setSelectedItem2("");
  };
  const handleHover3 = (title) => {
    setSelectedItem3(title);
  };
  const handleHoverOut3 = (title) => {
    setSelectedItem3("");
  };
  return (
    <>
      <section className="top-bar bg-primary d-none d-md-block d-lg-block">
        <Container className="d-flex justify-content-between text-white py-8 small fw-light">
          <div className="d-flex gap-32">
            <div className="d-flex gap-4 align-items-center">
              <MdLocationPin />
              <p className="small">{settingData?.data.site_location}</p>
            </div>
            <div className="d-flex gap-4 align-items-center">
              <FaPhoneAlt />
              <p className="small">{settingData?.data.site_contact}</p>
            </div>
          </div>
          <div className="flex-items-center gap-12 ">
            {socialmediaData?.data.map((d, i) => {
              return (
                <Link
                  href={d.link}
                  className=" p text-white"
                  key={i}
                  target="blank"
                >
                  {checkIcon(d.title.toLowerCase())}
                </Link>
              );
            })}
          </div>
        </Container>
      </section>
      <header className="w-100">
        <Navbar
          expand="lg"
          className={windowChange ? "sticky shadow-1 w-100" : ""}
        >
          <Container className=" d-flex justify-content-between">
            <Navbar.Brand href="/" as={Link}>
              <img
                src={settingData?.data.site_main_logo}
                alt="logo"
                width={100}
                height={60}
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav  ">
              <Nav className="mx-auto gap-12 bg-white  position-relative ">
                <Nav.Link href="/" as={Link}>
                  Home
                </Nav.Link>
                <NavDropdown
                  title="International"
                  id="collapsible-nav-dropdown"
                  className="dropdown  "
                  show={selectedItem1 === "International"}
                  onMouseOver={() => handleHover1("International")}
                  onMouseOut={handleHoverOut1}
                >
                  {internationalData?.data
                    .slice(0, 6)
                    .map((category, index) => {
                      if (category.children && category.children?.length > 0) {
                        return (
                          <NavDropdown
                            title={category.title}
                            id={`international-dropdown-${category.id}`}
                            key={index}
                            drop="end"
                            className="px-8 "
                            show={selectedItem2 === `${category.title}`}
                            onMouseOver={() =>
                              handleHover2(`${category.title}`)
                            }
                            onMouseOut={handleHoverOut2}
                          >
                            {category.children[0].map((subcategory, idx) => (
                              <React.Fragment key={idx}>
                                {subcategory.children &&
                                subcategory.children.length > 0 ? (
                                  <>
                                    <NavDropdown
                                      title={subcategory.title}
                                      id={`international-dropdown-${subcategory.id}`}
                                      key={index}
                                      drop="end"
                                      className="px-8 "
                                      show={
                                        selectedItem3 === `${subcategory.title}`
                                      }
                                      onMouseOver={() =>
                                        handleHover3(`${subcategory.title}`)
                                      }
                                      onMouseOut={handleHoverOut3}
                                    >
                                      {subcategory.children[0].map((d, i) => {
                                        return (
                                          <NavDropdown.Item
                                            href={subcategory.slug}
                                            key={i}
                                            slug={subcategory.slug}
                                            show={
                                              selectedItem2 ===
                                              `${category.title}`
                                            }
                                            onMouseOver={() =>
                                              handleHover2(`${category.title}`)
                                            }
                                            onMouseOut={handleHoverOut2}
                                          >
                                            {d.title}
                                          </NavDropdown.Item>
                                        );
                                      })}
                                    </NavDropdown>
                                  </>
                                ) : (
                                  <NavDropdown.Item
                                    href={subcategory.slug}
                                    key={idx}
                                    slug={subcategory.slug}
                                  >
                                    {subcategory.title}
                                  </NavDropdown.Item>
                                )}
                              </React.Fragment>
                            ))}
                          </NavDropdown>
                        );
                      } else {
                        return (
                          <NavDropdown.Item
                            href={category.slug}
                            key={index}
                            slug={category.slug}
                          >
                            {category.title}
                          </NavDropdown.Item>
                        );
                      }
                    })}
                </NavDropdown>

                <NavDropdown
                  title="Domestic"
                  id="collapsible-nav-dropdown"
                  className="dropdown "
                  show={selectedItem1 === "Domestic"}
                  onMouseEnter={() => handleHover1("Domestic")}
                  onMouseLeave={handleHoverOut1}
                >
                  {domesticData?.data.slice(0, 6).map((category, index) => {
                    if (category.children && category.children.length > 0) {
                      return (
                        <NavDropdown
                          title={category.title}
                          id={`domestic-dropdown-${category.id}`}
                          key={index}
                          drop="end"
                          className="px-8"
                          show={selectedItem2 === `${category.title}`}
                          onMouseEnter={() => handleHover2(`${category.title}`)}
                          onMouseLeave={handleHoverOut2}
                        >
                          {category.children[0].map((subcategory, idx) => (
                            <React.Fragment key={idx}>
                              {subcategory.children &&
                              subcategory.children.length > 0 ? (
                                <>
                                  <NavDropdown
                                    title={subcategory.title}
                                    id={`domestic-dropdown-${subcategory.id}`}
                                    key={index}
                                    drop="end"
                                    className="px-8"
                                    show={
                                      selectedItem3 === `${subcategory.title}`
                                    }
                                    onMouseEnter={() =>
                                      handleHover3(`${subcategory.title}`)
                                    }
                                    onMouseLeave={handleHoverOut3}
                                  >
                                    {subcategory.children[0].map((d, i) => {
                                      return (
                                        <NavDropdown.Item
                                          href={d.slug}
                                          key={i}
                                          slug={d.slug}
                                        >
                                          {d.title}
                                        </NavDropdown.Item>
                                      );
                                    })}
                                  </NavDropdown>
                                </>
                              ) : (
                                <NavDropdown.Item
                                  href={subcategory.slug}
                                  key={idx}
                                  slug={subcategory.slug}
                                >
                                  {subcategory.title}
                                </NavDropdown.Item>
                              )}
                            </React.Fragment>
                          ))}
                        </NavDropdown>
                      );
                    } else {
                      return (
                        <NavDropdown.Item
                          href={category.slug}
                          key={index}
                          slug={category.slug}
                          name={category.name}
                        >
                          {category.name}
                        </NavDropdown.Item>
                      );
                    }
                  })}
                </NavDropdown>

                <Nav.Link href="/about" as={Link}>
                  About Us
                </Nav.Link>
                <Nav.Link href="/teams" as={Link}>
                  Our teams
                </Nav.Link>
                <Nav.Link href="/blog" as={Link}>
                  Blog
                </Nav.Link>
              </Nav>
              <Link
                href="/contact"
                className="btn-xs btn-primary text-white rounded-8 py-12 px-24  d-none d-xl-block"
              >
                Contact Us
              </Link>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default Header;
