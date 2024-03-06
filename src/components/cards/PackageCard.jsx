import Link from "next/link";
import { FaCalendar, FaEye, FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const PackageCard = (props) => {
  const stars = Array.from({ length: props.rating }, (_, index) => (
    <FaStar key={index} />
  ));
  return (
    <div className="card-package-all shadow-1 rounded-8 overflow-hidden position-relative">
      <div className="img">
        <img src={props.img} alt="" />
      </div>
      <div className="content p-16">
        <div className="flex-between  gap-4  mb-8">
          <div className="d-flex gap-4 align-items-center small ">
            <FaLocationDot className="text-cGray700" />
            <span className="text-cGray800">{props.location}</span>
          </div>
          <div className="d-flex gap-4 align-items-center small text-warning ">
            {/* <FaCalendar className="text-cGray700" />
            <span className="text-cGray-800">{props.days} Days</span> */}
            {stars}
          </div>
        </div>
        <h6 className="content ">{props.title}</h6>
        <hr />
        <Link href="/" className="stretched-link x-small text-primary mt-12">
          <FaEye /> View More
        </Link>
      </div>
    </div>
  );
};

export default PackageCard;
