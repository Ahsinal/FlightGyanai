"use client";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  useGetSettingsQuery,
  useGetDestinationQuery,
} from "../../frontend/api";
const Header = () => {
  const { data: settingData } = useGetSettingsQuery();
  const { data: destinationInternational } = useGetDestinationQuery(
    "international-tours"
  );
  const { data: destinationDomestic } =
    useGetDestinationQuery("domestic-tours");

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
  // const [dropdownOpen, setDropdownOpen] = useState(false);
  // const handleMouseEnter = () => {
  //   setDropdownOpen(true);
  // };

  // const handleMouseLeave = () => {
  //   setDropdownOpen(false);
  // };

  return (
    <>
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
            <Navbar.Collapse id="basic-navbar-nav ">
              <Nav className="mx-auto gap-12 bg-white ">
                <Nav.Link href="/" as={Link}>
                  Home
                </Nav.Link>
                <NavDropdown
                  title="International"
                  id="collapsible-nav-dropdown"
                  className="dropdown "
                  // show={dropdownOpen}
                  // onMouseEnter={handleMouseEnter}
                  // onMouseLeave={handleMouseLeave}
                >
                  {destinationInternational?.data
                    .slice(0, 6)
                    .map((category, index) => {
                      if (category.children.length > 0) {
                        return (
                          <NavDropdown
                            title={category.name}
                            id={`international-dropdown-${index}`}
                            key={index}
                            drop="end"
                            className="px-8 "
                          >
                            {category.children.map((subcategory, idx) => (
                              <NavDropdown.Item
                                href={`/destination/${subcategory.slug}`}
                                key={idx}
                                slug={subcategory.slug}
                              >
                                {subcategory.name}
                              </NavDropdown.Item>
                            ))}
                          </NavDropdown>
                        );
                      } else {
                        return (
                          <NavDropdown.Item
                            href={`/destination/${category.slug}`}
                            key={index}
                            slug={category.slug}
                          >
                            {category.name}
                          </NavDropdown.Item>
                        );
                      }
                    })}
                </NavDropdown>

                <NavDropdown
                  title="Domestic"
                  id="collapsible-nav-dropdown"
                  className="dropdown "
                  // show={dropdownOpen}
                  // onMouseEnter={handleMouseEnter}
                  // onMouseLeave={handleMouseLeave}
                >
                  {destinationDomestic?.data
                    .slice(0, 6)
                    .map((category, index) => {
                      if (category.children.length > 0) {
                        return (
                          <NavDropdown
                            title={category.name}
                            id={`domestic-dropdown-${index}`}
                            key={index}
                            drop="end"
                            className="px-8"
                          >
                            {category.children.map((subcategory, idx) => (
                              <NavDropdown.Item
                                href={`/destination/${subcategory.slug}`}
                                key={idx}
                                slug={subcategory.slug}
                                name={subcategory.name}
                              >
                                {subcategory.name}
                              </NavDropdown.Item>
                            ))}
                          </NavDropdown>
                        );
                      } else {
                        return (
                          <NavDropdown.Item
                            href={`/destination/${category.slug}`}
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
                <Nav.Link href="/blog" as={Link}>
                  Blog
                </Nav.Link>
                <Nav.Link href="/about" as={Link}>
                  About Us
                </Nav.Link>
                <Nav.Link href="/teams" as={Link}>
                  Our teams
                </Nav.Link>
                {/* <Nav.Link href="/services" as={Link}>
                  Services
                </Nav.Link> */}
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
