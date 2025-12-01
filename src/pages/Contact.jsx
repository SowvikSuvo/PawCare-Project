import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50 px-4 py-10 rounded-2xl">
      {/* Page Header */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-4xl md:text-5xl font-extrabold text-pink-500 mb-6"
      >
        Contact <span className="text-blue-600">PawCare</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="text-center text-gray-700 max-w-3xl mx-auto mb-12 text-lg md:text-xl"
      >
        Have questions or want to book a service? Reach out to us. Our team is
        ready to provide the best care for your furry friends.
      </motion.p>

      {/* Contact Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
        <motion.div
          whileHover={{ scale: 1.05, rotateY: 5 }}
          className="bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center text-center border border-gray-200 transition-all"
        >
          <FaMapMarkerAlt className="text-orange-500 text-5xl mb-4" />
          <h3 className="text-2xl font-bold text-orange-500 mb-2">Location</h3>
          <p className="text-gray-700 text-lg">
            123 Paw Street, Pet City, Bangladesh
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05, rotateY: 5 }}
          className="bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center text-center border border-gray-200 transition-all"
        >
          <FaPhoneAlt className="text-blue-500 text-5xl mb-4" />
          <h3 className="text-2xl font-bold text-blue-500 mb-2">Call Us</h3>
          <p className="text-gray-700 text-lg">+880 123 456 789</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05, rotateY: 5 }}
          className="bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center text-center border border-gray-200 transition-all"
        >
          <FaEnvelope className="text-pink-500 text-5xl mb-4" />
          <h3 className="text-2xl font-bold text-pink-500 mb-2">Email</h3>
          <p className="text-gray-700 text-lg">contact@pawcare.com</p>
        </motion.div>
      </div>

      {/* Contact Form + Map */}
      <div className="gap-8 max-w-6xl mx-auto space-y-8">
        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-200"
        >
          <h2 className="text-3xl font-bold text-blue-500 mb-6 text-center">
            Get in Touch
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full rounded-xl border-gray-300 focus:ring-blue-400 focus:border-blue-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full rounded-xl border-gray-300 focus:ring-blue-400 focus:border-blue-400"
            />
            <textarea
              placeholder="Your Message"
              className="textarea textarea-bordered w-full rounded-xl border-gray-300 focus:ring-blue-400 focus:border-blue-400"
              rows={5}
            />
            <button
              type="submit"
              className="btn w-full bg-blue-500 hover:bg-blue-600 text-white rounded-full text-lg font-bold transition-all"
            >
              Send Message
            </button>
          </form>
        </motion.div>

        {/* Map */}

        <h2 className="text-2xl font-bold text-center text-pink-500">
          Our Location
        </h2>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="overflow-hidden rounded-3xl shadow-2xl border border-gray-200"
        >
          <iframe
            title="PawCare Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.235654863737!2d90.41751541543206!3d23.18935539455019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c66d7c7c0cbd%3A0x6398393a5ab7bcef!2sBarisal%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1701427200000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            className="min-h-[400px] md:min-h-[500px] w-full"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
