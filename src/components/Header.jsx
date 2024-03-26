"use client";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  useGetSettingsQuery,
  useGetCategoryPackageDetailQuery,
  useGetCategoryPackageQuery,
  useGetDestinationQuery,
  useGetPackageQuery,
} from "../../frontend/api";
const Header = () => {
  const { data: settingData } = useGetSettingsQuery();
  const { data: categoryData } = useGetCategoryPackageQuery();
  const { data: destination } = useGetDestinationQuery();
  const { data: packageData } = useGetPackageQuery();
  const { data: dropdownDomestic } =
    useGetCategoryPackageDetailQuery("domestic-tours");
  const { data: dropdownInternational } = useGetCategoryPackageDetailQuery(
    "international-tours"
  );
  const [windowChange, setWindowChange] = useState(false);
  const [nestedDropdownData, setNestedDropdownData] = useState([]);
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

  useEffect(() => {
    // Fetch nested dropdown data from API
    fetchNestedDropdownData();
  }, []);

  const fetchNestedDropdownData = async () => {
    try {
      const response = await fetch("API_ENDPOINT_FOR_INTERNATIONAL_CATEGORIES");
      const data = await response.json();
      setNestedDropdownData(data.data);
    } catch (error) {
      console.error("Error fetching nested dropdown data:", error);
    }
  };
  // const [dropdownOpen, setDropdownOpen] = useState(false);
  // const handleMouseEnter = () => {
  //   setDropdownOpen(true);
  // };

  // const handleMouseLeave = () => {
  //   setDropdownOpen(false);
  // };
  return (
    <>
      <header className={`w-100  ${windowChange ? "sticky" : ""}`}>
        <Navbar expand="lg" className="shadow-1">
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
                  {packageData?.data.slice(0, 5).map((category, index) => (
                    <NavDropdown
                      title={category.name}
                      id={`international-dropdown-${index}`}
                      key={index}
                      drop="end"
                    >
                      {category.destinations.map((subcategory, idx) => (
                        <NavDropdown.Item
                          href={`/package/${subcategory.slug}`}
                          key={idx}
                        >
                          {subcategory.name}
                        </NavDropdown.Item>
                      ))}
                    </NavDropdown>
                  ))}
                </NavDropdown>

                <NavDropdown
                  title="Domestic"
                  id="collapsible-nav-dropdown"
                  className="dropdown "
                  // show={dropdownOpen}
                  // onMouseEnter={handleMouseEnter}
                  // onMouseLeave={handleMouseLeave}
                >
                  {packageData?.data.slice(0, 5).map((category, index) => (
                    <NavDropdown
                      title={category.name}
                      id={`international-dropdown-${index}`}
                      key={index}
                      drop="end"
                    >
                      {category.destinations.map((subcategory, idx) => (
                        <NavDropdown.Item
                          href={`/package/${subcategory.slug}`}
                          key={idx}
                        >
                          {subcategory.name}
                        </NavDropdown.Item>
                      ))}
                    </NavDropdown>
                  ))}
                </NavDropdown>
                {/* <NavDropdown
                  title="Domestic"
                  id="collapsible-nav-dropdown"
                  className="dropdown "
                  // show={dropdownOpen}
                  // onMouseEnter={handleMouseEnter}
                  // onMouseLeave={handleMouseLeave}
                >
                  {destination?.data.slice(0, 5).map((d, i) => {
                    return (
                      <NavDropdown.Item href={`/package/${d.slug}`} key={i}>
                        {d.name}
                      </NavDropdown.Item>
                    );
                  })}
                </NavDropdown> */}

                <Nav.Link href="/blog" as={Link}>
                  Blog
                </Nav.Link>
                <Nav.Link href="/about" as={Link}>
                  About US
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
