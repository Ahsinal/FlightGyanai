import Link from "next/link";
import { FaCalendar, FaEye, FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const PackageCard = (props) => {
  const stars = Array.from({ length: props.rating }, (_, index) => (
    <FaStar key={index} />
  ));
  return (
    <div className="card-package-all shadow-1  rounded-8 overflow-hidden position-relative">
      <div className="img">
        <img src={props.img} alt="" />
      </div>
      <div className="position-absolute top-0 d-flex bg-white m-8 py-4 px-16 x-small btn-pill text-secondary">
        <div className="small me-4">{props.currency}</div>
        <div className=" small">{props.price}</div>
      </div>
      <div className="flex-between  gap-4  mb-8 px-8 mt-12">
        <div className="align-center gap-4 small ">
          <FaCalendar className="text-cGray400 h6" />
          <span className="text-cGray800 x-small p">{props.days} Days</span>
        </div>
        <div className="d-flex gap-4 align-items-center small text-yellow500">
          {stars}
        </div>
      </div>
      <div className=" px-16 mt-12">
        <div className="title">
          <p className="fw-medium">{props.title}</p>
        </div>
        <div
          className=" p fw-light mt-4 clamp-2 small text-justify"
          dangerouslySetInnerHTML={{ __html: props.desc }}
        ></div>
        <hr />
        <Link
          href={`/package/${props.slug}`}
          className="stretched-link x-small text-primary  align-items-end mb-12"
        >
          <FaEye /> View More
        </Link>
      </div>
    </div>
  );
};

export default PackageCard;
