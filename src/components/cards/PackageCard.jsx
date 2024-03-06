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
      <div className="position-absolute top-0 bg-white m-8 p-4 btn-pill text-secondary">
        Rs 100,000
      </div>
      <div className="flex-between  gap-4  mb-8 px-8 mt-12">
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
      <div className=" px-16 mt-12">
        <div className="title">
          <h6>{props.title}</h6>
        </div>
        <p className=" fw-light mt-12 clamp-2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique
          corrupti, in totam quod facilis quibusdam ratione alias, nesciunt
          dolores quasi tempora fugit saepe ea magnam nam praesentium placeat!
          Sequi, atque?
        </p>
        <hr />
        <Link
          href="/"
          className="stretched-link x-small text-primary  align-items-end mb-12"
        >
          <FaEye /> View More
        </Link>
      </div>
    </div>
  );
};

export default PackageCard;
