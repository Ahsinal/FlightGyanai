import React from "react";
import Link from "next/link";
const SideCardBlog = (props) => {
  return (
    <div className="card-side-card  p-16  d-flex  align-items-center shadow-1 rounded-8 position-relative gap-12 mb-12">
      <div className="img image w-25">
        <img src={props.img} alt="side image" />
      </div>
      <div className="flex-column w-75">
        <h6 className="mb-8 fw-medium">{props.title}</h6>
        <p className="xx-small text-cGray600">{props.date}</p>
      </div>
      <Link href={`/blog/${props.slug}`} className="stretched-link"></Link>
    </div>
  );
};

export default SideCardBlog;
