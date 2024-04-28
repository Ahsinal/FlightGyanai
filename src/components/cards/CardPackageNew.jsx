import Link from "next/link";
import { FaArrowRight, FaClock, FaStar, FaWhatsapp } from "react-icons/fa";
const CardPackageNew = (props) => {
  return (
    <div className="card-package-new  shadow-sm position-relative">
      <div className=" ribbon  d-flex gap-4 align-items-center">
        <div className="x-small ">{props.currency}</div>
        <div className=" small">{props.price}</div>
      </div>
      <div className="img overflow-hidden">
        <img src={props.img} alt="" />
      </div>
      <div className="contents p-24 ">
        <p className="mb-8 fw-medium clamp-2" style={{ minHeight: "52px" }}>
          {props.title}
        </p>
        <p
          className="mb-16 clamp-2 fw-light  small text-justify"
          dangerouslySetInnerHTML={{ __html: props.desc }}
        ></p>

        {/* <div className="d-flex justify-content-between align-items-center">
          <Link
            href={`/package/${props.slug}`}
            className="btn btn-xs btn-outline-primary py-8 rounded-16 stretched-link d-flex align-items-center gap-8"
          >
            <p className="small p-0 m-0">View Details</p>
            <FaArrowRight className="small fw-light" />
          </Link>
        </div> */}

        <Link
          href={`/package/${props.slug}`}
          className="btn btn-xs btn-outline-primary py-8 rounded-8 w-100 mx-auto    text-center"
        >
          <span className="small p-0 m-0">View Details</span>
        </Link>
        <Link
          href="https://api.whatsapp.com/send/?phone=9779857015300&text&type=phone_number&app_absent=0"
          target="blank"
          className="btn-primary w-100 py-12 mt-12 rounded-8 z-5 rounded-4 gap-12 flex-center-center"
        >
          <FaWhatsapp />
          Connect on WhatsApp
        </Link>
      </div>
    </div>
  );
};

export default CardPackageNew;
