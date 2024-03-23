import Link from "next/link";
export const BlogCardlg = (props) => {
  return (
    <div className="card-blog-lg position-relative px-8">
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
        className="stretched-link btn btn-xs btn-primary mt-16"
      >
        Read More
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
