import Link from "next/link";
export const BlogCardlg = (props) => {
  return (
    <div className="card-blog-lg position-relative">
      <div className="img-landscape rounded-12 position-relative">
        <img src={props.img} alt="blog-img" />
      </div>
      <div className="content mt-12">
        <p className="x-small text-cGray700">{props.date}</p>
        <h5 className="mt-8 fw-semibold text-cGray800">{props.title}</h5>
        <p className="mt-8 clamp-4 fw-light">{props.desc}</p>
      </div>
      <Link
        href="/blog"
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
      <div className="img w-25 rounded-12">
        <img src={props.img} alt="image" />
      </div>
      <div className="w-75">
        <p className="xx-small text-cGray700"> {props.date}</p>
        <h6 className="text-cGray800 mt-8">{props.title}</h6>
        <p className="clamp-2 text-cGray-800 fw-light mt-8">{props.desc}</p>
      </div>
      <Link href="/blog" className="stretched-link"></Link>
    </div>
  );
};
