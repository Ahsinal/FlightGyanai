"use client";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Link from "next/link";
import { useState, useEffect } from "react";
const Header = () => {
  const [windowChange, setWindowChange] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  useEffect(() => {
    const changeNavbarPosition = () => {
      if (window.scrollY >= 100) {
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
  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };
  return (
    <>
      <header className={`  ${windowChange ? "sticky" : ""}`}>
        <Navbar expand="lg" className="shadow-1">
          <Container className=" d-flex justify-content-between">
            <Navbar.Brand href="/" as={Link}>
              <img
                src="/assets/image/logo.png"
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
                  <NavDropdown
                    title="Europe and UK"
                    id="nested-dropdown"
                    drop="end"
                  >
                    <NavDropdown.Item href="/">London</NavDropdown.Item>
                    <NavDropdown.Item href="/">Scotland</NavDropdown.Item>
                    <NavDropdown.Item href="/">Switzerland</NavDropdown.Item>
                    <NavDropdown.Item href="/">UK</NavDropdown.Item>
                    <NavDropdown.Item href="/">Germany</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    title="South East Asia"
                    id="nested-dropdown"
                    drop="end"
                  >
                    <NavDropdown.Item href="/">London</NavDropdown.Item>
                    <NavDropdown.Item href="/">Scotland</NavDropdown.Item>
                    <NavDropdown.Item href="/">Switzerland</NavDropdown.Item>
                    <NavDropdown.Item href="/">UK</NavDropdown.Item>
                    <NavDropdown.Item href="/">Germany</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="England" id="nested-dropdown" drop="end">
                    <NavDropdown.Item href="/">London</NavDropdown.Item>
                    <NavDropdown.Item href="/">Scotland</NavDropdown.Item>
                    <NavDropdown.Item href="/">Switzerland</NavDropdown.Item>
                    <NavDropdown.Item href="/">UK</NavDropdown.Item>
                    <NavDropdown.Item href="/">Germany</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    title="Europe and UK"
                    id="nested-dropdown"
                    drop="end"
                  >
                    <NavDropdown.Item href="/">London</NavDropdown.Item>
                    <NavDropdown.Item href="/">Scotland</NavDropdown.Item>
                    <NavDropdown.Item href="/">Switzerland</NavDropdown.Item>
                    <NavDropdown.Item href="/">UK</NavDropdown.Item>
                    <NavDropdown.Item href="/">Germany</NavDropdown.Item>
                  </NavDropdown>
                </NavDropdown>
                <NavDropdown
                  title="Domestic"
                  id="collapsible-nav-dropdown"
                  className="dropdown "
                >
                  <NavDropdown
                    title="Kathmandu"
                    id="nested-dropdown"
                    drop="end"
                  >
                    <NavDropdown.Item href="/">Bharatpur</NavDropdown.Item>
                    <NavDropdown.Item href="/">Chitwan</NavDropdown.Item>
                    <NavDropdown.Item href="/">Switzerland</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Butwal" id="nested-dropdown" drop="end">
                    <NavDropdown.Item href="/">London</NavDropdown.Item>
                    <NavDropdown.Item href="/">Scotland</NavDropdown.Item>
                    <NavDropdown.Item href="/">Switzerland</NavDropdown.Item>
                    <NavDropdown.Item href="/">UK</NavDropdown.Item>
                    <NavDropdown.Item href="/">Germany</NavDropdown.Item>
                  </NavDropdown>
                </NavDropdown>
                <Nav.Link href="/blog" as={Link}>
                  Blog
                </Nav.Link>
                <Nav.Link href="/about" as={Link}>
                  About US
                </Nav.Link>
                <Nav.Link href="/contact" as={Link}>
                  Contact US
                </Nav.Link>
              </Nav>
              <Link
                href="/login"
                className="btn-xs btn-primary text-white rounded-8 py-12 px-24  d-none d-xl-block"
              >
                Sign In
              </Link>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default Header;
