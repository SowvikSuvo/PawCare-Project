import React from "react";
import { motion } from "framer-motion";
import { FaPaw } from "react-icons/fa";
import Swal from "sweetalert2";

const Newsletter = () => {
  const handleSubscribe = () => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your Subscribe has been Successfully",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  return (
    <section className="w-full py-16 px-6 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-100 rounded-2xl mt-5">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-600"
        >
          Join the PawCare Newsletter
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.9 }}
          className="text-gray-700 max-w-2xl mx-auto mt-4 text-lg md:text-xl"
        >
          Stay updated with pet care tips, seasonal grooming guides, diet plans,
          and special PawCare discounts — delivered right to your inbox.
        </motion.p>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          whileHover={{ scale: 1.02, rotateY: 5 }}
          className="mt-10 bg-white shadow-2xl border border-gray-200 rounded-3xl p-8 md:p-12 max-w-5xl mx-auto relative overflow-hidden"
        >
          {/* Background Paw Icons */}
          <FaPaw className="absolute text-pink-200 text-7xl top-6 left-6 opacity-40 rotate-12" />
          <FaPaw className="absolute text-blue-200 text-6xl bottom-6 right-6 opacity-30 -rotate-12" />

          {/* Input Section */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            <motion.input
              type="email"
              placeholder="Enter your email address"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="w-full px-5 py-4 rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-pink-400 focus:outline-none text-gray-700 text-lg"
            />

            <motion.button
              onClick={handleSubscribe}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 150 }}
              className="bg-gradient-to-r from-pink-500 to-blue-500 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-pink-300 text-lg"
            >
              Subscribe
            </motion.button>
          </div>

          {/* Text */}
          <p className="text-gray-600 mt-4 text-sm">
            We care about your privacy — no spam, just love for your pets. 🐾
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
