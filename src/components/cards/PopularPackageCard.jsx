import Link from "next/link";
import { FaStar, FaWhatsapp } from "react-icons/fa";

const PopularPackageCard = (props) => {
  return (
    <>
      {/* <div className="card-package position-relative overflow-hidden rounded-12">
        <div className="img image-wrapper">
          <img src={props.img} alt="image" />
        </div>
        <div className="price flex-column align-items-center justify-content-center ">
          <div className="bitter d-flex align-items-center ">
            <h6>$</h6>
            <span className="ms-4">{props.price}</span>
          </div>
        </div>
        <div className="flex-column justify-content-center px-16">
          <div className="ratings d-flex gap-8 mt-32 text-warning">{stars}</div>
          <p className="xx-small mt-8 text-cGray600">5 days</p>
          <div className="content mt-8 ">
            <h6 className="bitter">{props.title}</h6>
          </div>
        </div>

        <Link href="/"> View Detail</Link>
      </div> */}

      <div className="card-package-popular position-relative d-flex flex-column  py-16">
        <div className="img-wrapper img rounded-12 mx-auto overflow-hidden">
          <img src={props.img} alt="image" />
        </div>
        <div className="content d-flex flex-column bg-white shadow-4 px-16 pb-24 rounded-12 ">
          <div className="flex-between align-items-center mb-12">
            {/* <div className="d-flex gap-4 align-items-center small text-yellow500">
              {stars}
            </div> */}
            <div className=" flex-center-center gap-4 price bg-secondary text-white px-24 rounded-12 py-4 fw-normal">
              <div className="x-small ">{props.currency}</div>
              <div className=" small">{props.price}</div>
            </div>
          </div>
          <div className="title">
            <p className="mb-8 fw-medium">{props.title}</p>
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
