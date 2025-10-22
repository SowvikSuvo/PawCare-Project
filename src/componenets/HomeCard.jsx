import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

const HomeCard = ({ data }) => {
  const { serviceName, image, rating, price, id } = data;

  return (
    <div className=" card bg-base-100 shadow-xl mx-auto rounded-2xl border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-full ">
      <figure className="relative">
        <img
          src={image}
          alt={"serviceImage"}
          className="h-50 w-full object-cover  rounded-t-xl"
        />
        <div className="absolute top-3 right-3 bg-white/80 px-3 py-1 rounded-full flex  gap-1">
          <FaStar className="text-yellow-500 " />
          <span className="font-semibold text-sm">{rating}</span>
        </div>
      </figure>

      <div className="card-body">
        <h2 className="card-title text-lg font-bold text-gray-800">
          {serviceName}
        </h2>

        <div className="flex justify-between items-center mt-3">
          <p className="text-base font-semibold text-primary">
            ${price} <span className="text-gray-500 text-sm">/session</span>
          </p>
          <Link
            to={`/view-details/${id}`}
            className="btn btn-sm bg-secondary text-white hover:bg-primary/80 rounded-full"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
