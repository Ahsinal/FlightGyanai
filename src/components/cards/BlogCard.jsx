import Link from "next/link";
export const BlogCardlg = () => {
  return (
    <div className="card-blog-lg">
      <div className="img-landscape rounded-12 position-relative">
        <img
          src="https://img.freepik.com/free-photo/family-with-little-son-autumn-park_1303-17588.jpg?t=st=1709720034~exp=1709723634~hmac=11488e57896d66d9bed4ffaf0166718d1a1740d017e4108e37482f7fe5305e8e&w=1480"
          alt="blog-img"
        />
      </div>
      <div className="content mt-12">
        <p className="x-small text-cGray700">August 7,2023</p>
        <h5 className="mt-8 fw-semibold text-cGray800">
          Plan the Perfect Vacation
        </h5>
        <p className="mt-8 clamp-4 fw-light">
          Planning a vacation can be overwhelming, but this post offers a
          step-by-step guide to help readers create a comprehensive travel
          itinerary. From choosing a destination to booking accommodations and
          activities, readers will learn how to plan a stress-free and enjoyable
          trip.
        </p>
      </div>
      <Link
        href="/blogs"
        className="stretched-link btn btn-xs btn-primary mt-16"
      >
        Read More
      </Link>
    </div>
  );
};

export const BlogCardsm = () => {
  return (
    <div className="card-blog-sm d-flex gap-24 shadow-1 p-16 rounded-8 position-relative">
      <div className="img w-100 rounded-12">
        <img
          src="https://img.freepik.com/free-photo/lumbini-nepal-birthplace-buddha-siddhartha-gautama_554837-476.jpg?t=st=1709722719~exp=1709726319~hmac=50fea9c45d6972404d5cd600d938dc26ec558423f5233e76caa22aa282b2a5e5&w=1480"
          alt="image"
        />
      </div>
      <div className="">
        <p className="xx-small text-cGray700"> September 20,2022</p>
        <h6 className="text-cGray800 mt-8">Discover the Hidden Gems</h6>
        <p className="clamp-2 text-cGray-800 fw-light mt-8">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam illo
          blanditiis dignissimos quos quisquam neque qui unde reprehenderit
          voluptatem rerum!
        </p>
      </div>
      <Link href="/blogs" className="stretched-link"></Link>
    </div>
  );
};
