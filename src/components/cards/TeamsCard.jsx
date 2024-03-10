import Link from "next/link";
import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const TeamsCard = (props) => {
  return (
    <div className="card-teams p-24  shadow rounded-8 flex-center-center flex-column">
      <div className="image ">
        <img src={props.img} alt="teams img" />
      </div>
      <h6 className="mt-12">{props.name}</h6>
      <p className="small fw-semi-bold text-cGray600 mt-4">
        {props.designation}
      </p>
      <div className="flex-center-center gap-8 text-cGray600 mt-8">
        <Link href="/" className="social-icon btn-circle-xs btn-outline-gray">
          <FaFacebook />
        </Link>
        <Link href="/" className="social-icon btn-circle-xs btn-outline-gray">
          <FaTwitter />
        </Link>
        <Link href="/" className="social-icon btn-circle-xs btn-outline-gray">
          <FaLinkedin />
        </Link>
      </div>
    </div>
  );
};

export default TeamsCard;
