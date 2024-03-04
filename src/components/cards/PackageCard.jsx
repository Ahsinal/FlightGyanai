import Link from "next/link";
import { FaStar } from "react-icons/fa";
const PackageCard = (props) => {
  const stars = Array.from({ length: props.rating }, (_, index) => (
    <FaStar key={index} />
  ));
  return (
    <div className="card-package position-relative overflow-hidden rounded-12">
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
      <Link
        href="/package"
        className="btn btn-xs btn-outline-primary rounded-24  stretched-link mx-16 my-16 flex-center"
      >
        View Detail
      </Link>
    </div>
  );
};

export default PackageCard;
