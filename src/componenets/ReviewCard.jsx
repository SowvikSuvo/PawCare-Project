import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const ReviewCard = ({ review }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white/80 backdrop-blur-xl shadow-xl rounded-2xl p-6 w-80 mx-4 flex-shrink-0
      border border-gray-200 hover:shadow-2xl transition-all"
    >
      <div className="flex items-center gap-4">
        <img
          src={review.image}
          alt={review.name}
          className="w-16 h-16 rounded-full object-cover shadow-md"
        />
        <div>
          <h3 className="text-lg font-bold text-blue-500">{review.name}</h3>
          <p className="text-sm text-gray-500">{review.location}</p>
        </div>
      </div>

      <p className="text-gray-700 mt-4">{review.comment}</p>

      <div className="flex mt-4">
        {[...Array(review.rating)].map((_, i) => (
          <FaStar key={i} className="text-yellow-400" />
        ))}
      </div>
    </motion.div>
  );
};

export default ReviewCard;
