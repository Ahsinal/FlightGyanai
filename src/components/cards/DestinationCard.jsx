import Link from "next/link";
import { FaStar } from "react-icons/fa";
const DestinationCard = (props) => {
  const stars = Array.from({ length: props.rating }, (_, index) => (
    <FaStar key={index} />
  ));
  return (
    <>
      <div className="card-package-popular position-relative d-flex flex-column  py-16">
        <div className="img-wrapper img rounded-12 mx-auto overflow-hidden">
          <img src={props.img} alt="image" />
        </div>
        <div className="content d-flex flex-column bg-white shadow-4 px-16 pb-40 rounded-12 ">
          <div className="flex-between align-items-center mb-12">
            <div className="d-flex gap-4 align-items-center small text-yellow500">
              {stars}
            </div>
            <div className=" p d-flex gap-4 price bg-secondary text-white px-12 rounded-12 py-4 fw-normal">
              <div className="small ">{props.currency}</div>
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
            className="btn btn-xs btn-outline-primary rounded-8 w-100 mx-auto  stretched-link  text-center"
          >
            View Details
          </Link>
        </div>
      </div>
    </>
  );
};

export default DestinationCard;
