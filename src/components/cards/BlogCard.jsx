import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
export const BlogCardlg = (props) => {
  return (
    <div className="card-blog-lg position-relative px-8 ">
      <div className="img-landscape rounded-12 position-relative">
        <img src={props.img} alt="blog-img" />
      </div>
      <div className="content mt-12 ">
        <p className="xx-small text-cGray500">{props.date}</p>
        <p className="mt-8 fw-medium ">{props.title}</p>
        <p className="mt-8 clamp-4   text-justify fw-light">{props.desc}</p>
      </div>
      <Link
        href={`/blog/${props.slug}`}
        className="stretched-link d-flex align-items-center  mt-16"
      >
        <p> Read More </p>
        <IoIosArrowForward />
      </Link>
    </div>
  );
};

export const BlogCardsm = (props) => {
  return (
    <div className="card-blog-sm d-flex gap-24 shadow-1 p-16 rounded-8 position-relative">
      <div className="image rounded-12 overflow-hidden">
        <img src={props.img} alt="image" />
      </div>
      <div className="content">
        <p className="xx-small text-cGray500"> {props.date}</p>
        <p className="text-cGray800 fw-medium mt-8">{props.title}</p>
        <p className="clamp-2 fw-light text-justify mt-8">{props.desc}</p>
      </div>
      <Link href={`/blog/${props.slug}`} className="stretched-link"></Link>
    </div>
  );
};

export const BlogCard = (props) => {
  return (
    <div className="card-blog-lg position-relative  shadow-sm rounded-8 overflow-hidden">
      <div className=" position-relative">
        <div className="img-landscape ">
          <img src={props.img} alt="blog-img" />
        </div>
        <div className="position-absolute bottom-0  bg-secondary text-white p-8 rounded-4" style={{right:"0",marginRight:"1rem",marginBottom:"-1rem"}}>{props.date}</div>
      </div>
      <div className="content  p-16 ">
        <h6 className="mt-8 fw-medium ">{props.title}</h6>
        <p className="mt-8 clamp-4   text-justify fw-light">{props.desc}</p>
        <Link
          href={`/blog/${props.slug}`}
          className="stretched-link mt-16 d-flex align-items-center"
        >
          <p> Read More </p>
          <IoIosArrowForward />
        </Link>
      </div>
    </div>
  );
};
