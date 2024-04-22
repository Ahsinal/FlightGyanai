import Link from "next/link";
import { FaStar, FaWhatsapp } from "react-icons/fa";

const PopularPackageCard = (props) => {
  return (
    <>
      {/* <div className="card-package-popular position-relative d-flex flex-column  py-16">
        <div className="img-wrapper img rounded-12 mx-auto overflow-hidden">
          <img src={props.img} alt="image" />
        </div>
        <div className="content d-flex flex-column bg-white shadow-4 px-16 pb-24 rounded-12 ">
          <div className="flex-between align-items-center mb-12">
            <div className="d-flex gap-4 align-items-center small text-yellow500">
              {stars}
            </div>
            <div className=" flex-center-center gap-4 price bg-secondary text-white px-24 rounded-12 py-4 fw-normal">
              <div className="x-small ">{props.currency}</div>
              <div className=" small">{props.price}</div>
            </div>
          </div>
          <div className="title" style={{minHeight:"58px"}}>
            <p className="mb-8 fw-medium clamp-2">{props.title}</p>
          </div>
          <p
            className="mb-16 clamp-3 fw-light  small text-justify"
            dangerouslySetInnerHTML={{ __html: props.desc }}
          ></p>
          <Link
            href={`/package/${props.slug}`}
            className="btn btn-xs btn-outline-primary py-8 rounded-8 w-100 mx-auto  stretched-link  text-center"
          >
            <span className="small p-0 m-0">View Details</span>
          </Link>
          <button className="btn-primary w-100 py-12 mt-12 rounded-8 z-5 rounded-4 gap-12 flex-center-center">
            <FaWhatsapp />
            Connect on WhatsApp
          </button>
        </div>
      </div> */}

      <div className="card-package-popular position-relative d-flex flex-column  py-16">
        <div className="img-wrapper img rounded-12 mx-auto overflow-hidden">
          <img src={props.img} alt="image" />
        </div>
        <div className="content d-flex flex-column bg-white shadow-4 px-16 pb-24 rounded-12 ">
          <div className="flex-between align-items-center mb-12">
            <div className=" flex-center-center gap-4 price bg-secondary text-white px-24 rounded-12 py-4 fw-normal">
              <div className="x-small ">{props.currency}</div>
              <div className=" small">{props.price}</div>
            </div>
          </div>
          <div className="title d-flex align-items-center" style={{ minHeight: "52px" }} >
            <p className="mb-8 fw-medium clamp-2">{props.title}</p>
          </div>
          <p
            className="mb-16 clamp-3 fw-light  small text-justify"
            dangerouslySetInnerHTML={{ __html: props.desc }}
          ></p>
          <Link
            href={`/package/${props.slug}`}
            className="btn btn-xs btn-outline-primary py-8 rounded-8 w-100 mx-auto  stretched-link  text-center"
          >
            <span className="small p-0 m-0">View Details</span>
          </Link>
          <button className="btn-primary w-100 py-12 mt-12 rounded-8 z-5 rounded-4 gap-12 flex-center-center">
            <FaWhatsapp />
            Connect on WhatsApp
          </button>
        </div>
      </div>
    </>
  );
};

export default PopularPackageCard;
