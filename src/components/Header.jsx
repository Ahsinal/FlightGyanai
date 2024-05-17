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
} from "react-icons/fa";
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
  // const { data: domesticData } = useGetMenuSlugQuery("3");
  // const { data: internationalData } = useGetMenuSlugQuery("4");
  const { data: menuData } = useGetMenuSlugQuery("5");

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
              <Nav className="mx-48 gap-12 bg-white  position-relative ">
                {menuData?.data.map((d, i) => {
                  if (d.children && Array.isArray(d.children[0])) {
                    return (
                      <NavDropdown
                        title={d.title}
                        id="collapsible-nav-dropdown"
                        key={i}
                        className="dropdown-custom"
                        show={selectedItem1 === `${d.title}`}
                        onMouseOver={() => handleHover1(`${d.title}`)}
                        onMouseOut={handleHoverOut1}
                      >
                        {d.children[0].map((child1, idx1) => {
                          if (child1.children && child1.children?.length > 0) {
                            return (
                              <NavDropdown
                                title={child1.name ? child1.name : child1.title}
                                id={`${child1.title}-dropdown-${child1.id}`}
                                key={idx1}
                                drop="end"
                                show={selectedItem2 === `${child1.title}`}
                                onMouseOver={() =>
                                  handleHover2(`${child1.title}`)
                                }
                                onMouseOut={handleHoverOut2}
                              >
                                {child1.children[0].map((child2, idx2) => {
                                  if (
                                    child2.children &&
                                    child2.children?.length > 0
                                  ) {
                                    return (
                                      <NavDropdown
                                        title={
                                          child2.name
                                            ? child2.name
                                            : child2.title
                                        }
                                        id={`${child2.title}-dropdown-${child2.id}`}
                                        key={idx2}
                                        drop="end"
                                        className="child-menu"
                                        show={
                                          selectedItem3 === `${child1.title}`
                                        }
                                        onMouseOver={() =>
                                          handleHover3(`${child2.title}`)
                                        }
                                        onMouseOut={handleHoverOut3}
                                      >
                                        {child2.children[0].map(
                                          (child3, idx3) => {
                                            return (
                                              <NavDropdown.Item
                                                href={child3.slug}
                                                key={idx3}
                                                slug={child3.slug}
                                                className="grand-child-menu"
                                              >
                                                {child3.name ? child3.name :child3.title}
                                              </NavDropdown.Item>
                                            );
                                          }
                                        )}
                                      </NavDropdown>
                                    );
                                  } else {
                                    return (
                                      <NavDropdown.Item
                                        href={child2.slug}
                                        key={idx2}
                                        slug={child2.slug}
                                      >
                                        {child2.name ? child2.name : child2.title}
                                      </NavDropdown.Item>
                                    );
                                  }
                                })}
                              </NavDropdown>
                            );
                          } else {
                            return (
                              <NavDropdown.Item
                                href={child1.slug}
                                key={idx1}
                                slug={child1.slug}
                              >
                                { child1.name ? child1.name : child1.title}
                              </NavDropdown.Item>
                            );
                          }
                        })}
                      </NavDropdown>
                    );
                  } else {
                    return (
                      <NavDropdown.Item href={d.slug} key={i} slug={d.slug}>
                        {d.name ? d.name : d.title}
                      </NavDropdown.Item>
                    );
                  }
                })}
              </Nav>
            </Navbar.Collapse>
            <Link
              href="/contact"
              className="btn-xs btn-primary text-white rounded-8 py-12 px-24  d-none d-xl-block"
            >
              Contact Us
            </Link>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default Header;
