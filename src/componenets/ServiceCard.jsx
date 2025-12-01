import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";
import { motion } from "framer-motion";

const ServiceCard = ({ service }) => {
  const { image, rating, serviceName, price, id } = service;

  // Motion variants for hover and initial load
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    hover: { scale: 1.05, y: -5, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      className="w-full h-full"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true }}
    >
      <div className="card bg-base-100 shadow-md rounded-2xl border border-gray-200 overflow-hidden h-full flex flex-col">
        {/* Image */}
        <figure className="relative h-48 md:h-56 lg:h-64 w-full overflow-hidden">
          <img
            src={image}
            alt={"serviceImage"}
            className="w-full h-full object-cover rounded-t-2xl transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute top-3 right-3 bg-white/80 px-3 py-1 rounded-full flex gap-1 items-center">
            <FaStar className="text-yellow-500" />
            <span className="font-semibold text-sm">{rating}</span>
          </div>
        </figure>

        {/* Content */}
        <div className="card-body flex-1 flex flex-col justify-between px-4 py-3">
          <h2 className="card-title text-lg md:text-xl font-bold text-gray-800 mb-2">
            {serviceName}
          </h2>

          <div className="flex justify-between items-center mt-4">
            <p className="text-base md:text-lg font-semibold text-primary">
              ${price} <span className="text-gray-500 text-sm">/session</span>
            </p>
            <Link
              to={`/view-details/${id}`}
              className="btn btn-sm bg-secondary text-white hover:bg-pink-800 rounded-full px-4"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
