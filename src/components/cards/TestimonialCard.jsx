import React from "react";
import { FaStar } from "react-icons/fa";

const TestimonialCard = (props) => {
  const stars = Array.from({ length: props.rating }, (_, index) => (
    <FaStar key={index} />
  ));
  return (
    <div className="card-testimonial p-24 flex-column flex-center-center shadow-1 rounded-8 bg-white">
      <div className="image">
        <img src={props.img} alt="image" height={80} width={80} />
      </div>

      <div className="d-flex gap-4 text-warning mt-8">{stars}</div>
      <p className="clamp-5 mt-12 small fw-light text-justify">{props.desc}</p>
      <h6 className=" fw-medium mt-12 bitter">{props.name}</h6>
      {/* <p className="x-small text-cGray400 mt-4 ">{props.org}</p> */}
      <p className="fw-normal text-secondary small ">Customer</p>
    </div>
  );
};

export default TestimonialCard;
