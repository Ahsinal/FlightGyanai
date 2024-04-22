import React from "react";
import { FaStar } from "react-icons/fa";

const TestimonialCard = (props) => {
  const stars = Array.from({ length: props.rating }, (_, index) => (
    <FaStar key={index} />
  ));
  return (
    <div className="card-testimonial p-24 flex-column flex-center-center shadow-sm rounded-12 overflow-hidden bg-transparent">
      <div className="image border border-2 border-primary" style={{marginTop:"-10%"}}>
        <img src={props.img} alt="image" height={80} width={80} />
      </div>
      <div className="d-flex gap-4 text-yellow500 mt-8">{stars}</div>
      <div
        className=" mt-12 p clamp-5 small fw-light text-justify d-flex align-items-center "
        dangerouslySetInnerHTML={{ __html: props.desc }}
      ></div>
      <h6 className=" fw-medium mt-12 bitter">{props.name}</h6>
      <p className="fw-normal text-secondary small ">Customer</p>
    </div>
  );
};

export default TestimonialCard;
