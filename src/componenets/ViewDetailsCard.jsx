import React, { useState } from "react";
import { Link } from "react-router";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const ViewDetailsCard = ({ views }) => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("🎉 Booking Successful!");
    setFormData({ name: "", email: "" });
    setShowModal(false);
  };

  const {
    serviceName,
    providerName,
    providerEmail,
    price,
    rating,
    slotsAvailable,
    description,
    image,
    category,
  } = views;

  const cardVariant = {
    hidden: { opacity: 0, y: 50, rotateY: -10 },
    visible: {
      opacity: 1,
      y: 0,
      rotateY: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageVariant = {
    hover: { scale: 1.05, rotateY: 5, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      variants={cardVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="max-w-5xl h-150 mx-auto bg-base-100 shadow-xl rounded-2xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300 flex flex-col md:flex-row"
    >
      {/* Image Section */}
      <motion.figure
        className="md:w-1/2 h-64 md:h-auto relative overflow-hidden"
        whileHover="hover"
        variants={imageVariant}
      >
        <img
          src={image}
          loading="lazy"
          alt={serviceName}
          className="w-full h-full object-cover rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none"
        />
        <span className="absolute top-3 right-3 bg-pink-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
          {category}
        </span>
      </motion.figure>

      {/* Details Section */}
      <div className="md:w-1/2 p-6 flex flex-col justify-between space-y-3">
        <div>
          <h2 className="text-3xl font-bold text-orange-500 mb-2">
            {serviceName}
          </h2>
          <p className="text-gray-700 text-sm">
            <span className="font-semibold text-gray-800">Provider: </span>{" "}
            {providerName}
          </p>
          <p className="text-gray-700 text-sm mb-2">
            <span className="font-semibold text-gray-800">Email:</span>{" "}
            {providerEmail}
          </p>

          {/* Rating & Price */}
          <div className="flex justify-between items-center mt-5">
            <div className="flex text-yellow-500 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path d="M12 .587l3.668 7.431L24 9.587l-6 5.847 1.417 8.252L12 18.902 4.583 23.686 6 15.434 0 9.587l8.332-1.569z" />
              </svg>
              <span className="ml-1 text-gray-700 font-medium">
                {rating} / 5
              </span>
            </div>
            <p className="text-pink-600 text-lg font-semibold">${price}</p>
          </div>

          <p className="text-gray-700 leading-relaxed mt-2 md:mt-15">
            {description}
          </p>
          <p className="text-sm text-gray-500 mt-15">
            <span className="font-semibold">Available Slots:</span>{" "}
            {slotsAvailable}
          </p>
        </div>

        {/* Sticky Booking Button */}
        <div className="pt-4 md:sticky md:bottom-4">
          <Link
            onClick={() => setShowModal(true)}
            className="btn w-full bg-pink-600 hover:bg-pink-700 text-white text-sm font-semibold rounded-xl transform transition-transform duration-300 hover:scale-105"
          >
            Book Now
          </Link>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <dialog open className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <h3 className="font-bold text-lg text-center text-pink-600 mb-4">
              Book Service
            </h3>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                placeholder="Your Name"
                required
                className="input input-bordered w-full"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                className="input input-bordered w-full"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
              <button
                type="submit"
                className="btn bg-pink-600 hover:bg-pink-700 text-white w-full"
              >
                Submit
              </button>
            </form>
            <div className="modal-action">
              <button
                onClick={() => setShowModal(false)}
                className="btn btn-outline btn-sm"
              >
                Close
              </button>
            </div>
          </div>
        </dialog>
      )}
    </motion.div>
  );
};

export default ViewDetailsCard;
