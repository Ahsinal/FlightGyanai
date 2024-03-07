import Link from "next/link";
import { FaStar } from "react-icons/fa";
const PopularPackageCard = (props) => {
  const stars = Array.from({ length: props.rating }, (_, index) => (
    <FaStar key={index} />
  ));
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
       
          View Detail
        </Link>
      </div> */}

      <div className="card-package-popular position-relative d-flex flex-column  py-16">
        <div className="img-wrapper img rounded-12 mx-auto overflow-hidden">
          <img src={props.img} alt="image" />
        </div>
        <div className="content d-flex flex-column bg-white shadow-4 px-16 pb-40 rounded-12 ">
          <div className="flex-between align-items-center mb-12">
            <div className="d-flex gap-4 align-items-center small text-yellow500">
              {stars}
            </div>
            <p className="price bg-secondary text-white px-12 rounded-12 py-4 fw-normal xx-small">
              Rs 100,000
            </p>
          </div>
          <h6 className="mb-8">{props.title}</h6>
          <p className="mb-16 clamp-3 fw-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            deleniti eius at suscipit unde ipsam ad non fugiat ullam, tempore
            incidunt iste eum, aut ea.
          </p>
          <Link
            href="/package"
            className="btn btn-xs btn-outline-primary rounded-8 w-100 mx-auto  stretched-link  text-center"
          >
            View Details
          </Link>
        </div>
      </div>
    </>
  );
};

export default PopularPackageCard;
