"use client";
import { Container, Badge, Row, Col, BreadcrumbItem } from "react-bootstrap";
import Link from "next/link";
import { Breadcrumb } from "antd";
import { FaLocationDot } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import PackageDetailContent from "@/components/layouts/PackageDetailContent";
import PackageSidetable from "@/components/layouts/PackageSideTable";
import SideCardBlog from "@/components/cards/SideCardBlog";
import { cardData } from "@/data/Data";
import SideCardPackage from "@/components/cards/SideCard";
const PackageDetail = () => {
  return (
    <section className="package-detail-page ">
      <div className="mt-32">
        <Container>
          <Breadcrumb
            className="p"
            items={[
              {
                title: (
                  <Link href="/" className="text-primary">
                    Home
                  </Link>
                ),
              },
              {
                title: (
                  <Link href="/package" className="text-primary">
                    Package
                  </Link>
                ),
              },
              {
                title: (
                  <Link href="/" className="text-primary">
                    j
                  </Link>
                ),
              },
            ]}
          />
        </Container>
      </div>

      <Container className="img-wide mt-32">
        <img
          src="https://img.freepik.com/premium-photo/bangkok-city-skyscraper-sunset_268174-1501.jpg?size=626&ext=jpg&ga=GA1.1.2047347518.1707369163&semt=sph"
          alt="image package"
        />
      </Container>

      <Container className=" mt-16">
        <h5 className="bitter ">
          SUMMER HOLIDAY TO THE OXOLOTAN RIVER
        </h5>
        <p className="mt-12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis iusto
          corrupti voluptatum hic dolores consectetur recusandae est velit vero
          facilis, exercitationem impedit quis explicabo nobis commodi quod ex.
          Quae amet, similique aliquid distinctio minus ea laborum commodi
          placeat maiores a beatae sed molestiae? Ipsum adipisci, dicta atque
          corporis fugit dolores harum optio, rem hic eveniet dolorum rerum
          suscipit, alias veniam modi velit impedit? Pariatur quasi, facilis
          quis tenetur iure expedita. Illo magni dolorum molestiae ex odit, at
          impedit, corporis, assumenda autem velit ducimus omnis? Magnam
          iustion.
        </p>
      </Container>

      <div className="mt-32 package-detail-content ">
        <Container>
          <Row className="g-32">
            <Col lg={8} sm={12}>
              <PackageDetailContent />
            </Col>

            <Col lg={4} sm={12} className=" ">
              <Row className="gap-12-row mt-32">
                <Col sm={12}>
                  <div className="p-24 shadow-1 rounded-16">
                    <h6 className="text-cGray700">Basic Information</h6>
                    <PackageSidetable />
                  </div>
                </Col>
              </Row>
              <Row className="mt-32">
                {/* <div className="other-packages">
                <h6 className="textcGray600">You May also Like</h6>
                <Parallax
                  blur={3}
                  bgImage="https://img.freepik.com/free-photo/cityscape-singapore_335224-688.jpg?size=626&ext=jpg&uid=R74330178&ga=GA1.1.2047347518.1707369163&semt=sph"
                  bgImageAlt="bg-img"
                  strength={50}
                  className="p-32 rounded-16"
                >
                  <div className=" d-flex flex-column">
                    <h6 className="p bg-white py-8 px-16 rounded-16 w-100 fw-normal text-center mb-16 ">
                      Other Packages
                    </h6>
                    <div className="package-list">
                      <ul className="d-flex flex-column gap-16 text-white">
                        <li>
                          {" "}
                          <Link href="/package">
                            <FaRegArrowAltCircleRight /> Honeymoon Package
                          </Link>
                        </li>
                        <li>
                          {" "}
                          <Link href="/package">
                            <FaRegArrowAltCircleRight /> Honeymoon Package
                          </Link>
                        </li>
                        <li>
                          {" "}
                          <Link href="/package">
                            <FaRegArrowAltCircleRight /> Honeymoon Package
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Parallax> 
                {cardData?.data.slice(0, 4).map((d, i) => {
                  return (
                    <Col sm={12} key={i} className="mt-12">
                      <SideCard
                        title={d.title}
                        price={d.price}
                        img={d.img}
                      />
                    </Col>
                  );
                })}
              </div> */}

                <Col sm={12}>
                  <div className="p-24 shadow-1 rounded-16">
                    <h6 className="text-cGray700 mb-12">
                      Other Packages for you
                    </h6>
                    {cardData?.data.slice(0, 3).map((d, i) => {
                      return (
                        <SideCardPackage
                          title={d.title}
                          price={d.price}
                          img={d.img}
                          key={i}
                        />
                      );
                    })}
                  </div>
                </Col>
              </Row>
              <Row className="mt-32">
                <Col sm={12}>
                  <div className=" p-24 rounded-12 shadow-1">
                    <h5 className="text-cGray300 fw-seibold mb-16">City Map</h5>
                    {/* <Map /> */}
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default PackageDetail;
