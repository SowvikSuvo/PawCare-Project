import React, { useState } from "react";
import { Link } from "react-router";
import { toast } from "react-toastify";

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
  return (
    <div className="max-w-md mx-auto bg-base-100 h-full shadow-xl rounded-2xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300">
      {/* Image Section */}
      <figure className="relative">
        <img
          src={image}
          alt="Paws & Pad Moisturizing Treatment"
          className="w-full h-60 object-cover"
        />
        <span className="absolute top-3 right-3 bg-pink-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
          {category}
        </span>
      </figure>

      {/* Details Section */}
      <div className="p-6 space-y-3">
        <h2 className="text-2xl font-bold text-gray-800">{serviceName}</h2>
        <p className="text-sm text-gray-600">
          <span className="font-semibold text-gray-700">Provider: </span>{" "}
          {providerName}
        </p>
        <p className="text-sm text-gray-600">
          <span className="font-semibold text-gray-700">Email: </span>{" "}
          {providerEmail}
        </p>

        {/* Rating & Price */}
        <div className="flex justify-between items-center mt-2">
          <div className="flex text-yellow-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-5 h-5"
            >
              <path d="M12 .587l3.668 7.431L24 9.587l-6 5.847 1.417 8.252L12 18.902 4.583 23.686 6 15.434 0 9.587l8.332-1.569z" />
            </svg>
            <span className="ml-1 text-gray-700 font-medium">{rating} / 5</span>
          </div>
          <p className="text-pink-600 text-lg font-semibold">${price}</p>
        </div>

        {/* Description */}
        <p className="text-gray-700 leading-relaxed">{description}</p>

        {/* Slots */}
        <p className="text-sm text-gray-500">
          <span className="font-semibold">Available Slots: </span>
          {slotsAvailable}
        </p>

        {/* Button */}
        <div className="pt-4">
          <Link
            onClick={() => setShowModal(true)}
            className="btn w-full bg-pink-600 hover:bg-pink-700 text-white text-sm font-semibold rounded-xl"
          >
            Book Now
          </Link>
        </div>
      </div>

      {/* DaisyUI Modal */}
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
    </div>
  );
};

export default ViewDetailsCard;
