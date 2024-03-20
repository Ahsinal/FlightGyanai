"use client";
import { MdOutlineTravelExplore } from "react-icons/md";
import { CgDanger } from "react-icons/cg";
import { Col } from "react-bootstrap";
import { useGetPackageDetailQuery } from "../../../frontend/api";
const PackageDetailActivities = () => {
  const { data: packageDetailData } = useGetPackageDetailQuery();
  console.log(packageDetailData, "data");
  return (
    <>
      <Col lg={4} sm={6} className="g-16">
        <div className="d-flex align-items-center gap-12 card-package-overview">
          <MdOutlineTravelExplore className="h1 text-secondary" />
          <div className=" flex-column">
            <p className="fw-medium">Activity</p>
            <p className="mt-0 text-cGray700 small">
              {packageDetailData?.data.activity.activities}
            </p>
          </div>
        </div>
      </Col>
      <Col lg={4} sm={6} className="g-16">
        <div className="d-flex align-items-center gap-12 card-package-overview">
          <MdOutlineTravelExplore className="h1 text-secondary" />
          <div className=" flex-column">
            <p className="fw-medium">Trip Grade</p>
            <p className="mt-0 text-cGray700 small">
              {packageDetailData?.data.activity.trip_grade}
            </p>
          </div>
        </div>
      </Col>
    </>
  );
};

export default PackageDetailActivities;
