import React from "react";
import { FaStar } from "react-icons/fa";

const TestimonialCardNew = (props) => {
  const stars = Array.from({ length: props.rating }, (_, index) => (
    <FaStar key={index} />
  ));
  return (
    <div className="card-new-testimonial p-24 shadow  bg-gray50 rounded-12 ">
      <div className="d-flex gap-16 align-items-center">
        <div className="img-wrapper rounded-100 overflow-hidden  ">
          <img src={props.image} alt="" />
        </div>
        <div className="flex-column ">
          <h5 className="fw-medium">{props.name}</h5>
          <p className="small text-secondary">{props.designation}</p>
          <div className="d-flex gap-4 text-yellow500 mt-4">{stars}</div>
        </div>
      </div>
      <div
        className="content p clamp-5 text-justify text-cGray500 fw-light mt-16"
        dangerouslySetInnerHTML={{ __html: props.desc }}
        style={{ minHeight: "100px" }}
      ></div>
    </div>
  );
};

export default TestimonialCardNew;
