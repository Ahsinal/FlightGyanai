import Link from "next/link";
import { FaArrowRight, FaClock, FaStar, FaWhatsapp } from "react-icons/fa";
const CardPackageNew = (props) => {
  return (
    <div className="card-package-new  rounded-12 shadow-sm position-relative">
      <div className=" ribbon  d-flex gap-4 align-items-center">
        <div className="x-small ">{props.currency}</div>
        <div className=" small">{props.price}</div>
      </div>
      <div className="img overflow-hidden">
        <img src={props.img} alt="" />
      </div>
      <div className="contents p-24">
        <p className="mb-8 fw-medium clamp-2">{props.title}</p>
        <p
          className="mb-16 clamp-2 fw-light  small text-justify"
          dangerouslySetInnerHTML={{ __html: props.desc }}
        ></p>

        <div className="d-flex justify-content-between align-items-center">
          <Link
            href={`/package/${props.slug}`}
            className="btn btn-xs btn-outline-primary py-8 rounded-16 stretched-link d-flex align-items-center gap-8"
          >
            <p className="small p-0 m-0">View Details</p>
            <FaArrowRight className="small fw-light" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardPackageNew;
