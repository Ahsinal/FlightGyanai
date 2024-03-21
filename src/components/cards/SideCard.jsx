import Link from "next/link";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
const SideCardPackage = (props) => {
  return (
    <div className="card-side d-flex flex-columnm  ">
      <div className="d-flex align-items-center gap-12 py-12 text-primary package-info position-relative">
        <FaRegArrowAltCircleRight />
        <span className="">{props.title}</span>
        <Link href={`/package/${props.slug}`} className="stretched-link"></Link>
      </div>
    </div>
  );
};
export default SideCardPackage;
