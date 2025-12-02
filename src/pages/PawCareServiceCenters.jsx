import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router";

// Sample data for service centers
const serviceCenters = [
  {
    id: 1,
    country: "Bangladesh",
    city: "Dhaka",
    address: "123 Pet Street, Dhaka 1207",
    phone: "+880 1234 567890",
    email: "dhaka@pawcare.com",
    image:
      "https://images.unsplash.com/photo-1750064639026-7e0178241b2b?q=80&w=1640&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    country: "India",
    city: "Mumbai",
    address: "456 Pet Lane, Mumbai 400001",
    phone: "+91 98765 43210",
    email: "mumbai@pawcare.com",
    image:
      "https://images.unsplash.com/photo-1737985287377-4855f129fae9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    country: "USA",
    city: "New York",
    address: "789 Pet Avenue, New York, NY 10001",
    phone: "+1 555 123 4567",
    email: "ny@pawcare.com",
    image:
      "https://images.unsplash.com/photo-1585753021499-019aa157b675?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const PawCareServiceCenters = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50 mt-10 rounded-2xl">
      {/* Section Header */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center text-4xl md:text-5xl font-extrabold text-teal-500 mb-6"
      >
        Our PawCare Service Centers
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-center text-gray-700 max-w-3xl mx-auto mb-12 text-lg md:text-xl"
      >
        We are committed to delivering top-notch pet care across multiple
        countries. Find our service centers near you and experience the best
        care for your furry friends.
      </motion.p>

      {/* Service Centers Grid */}
      <div className="container mx-auto px-4 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {serviceCenters.map((center, index) => (
          <motion.div
            key={center.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            whileHover={{ scale: 1.05, rotateY: 2 }}
            className="bg-white/90 backdrop-blur-xl shadow-lg rounded-2xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all"
          >
            <img
              src={center.image}
              alt={center.country}
              className="w-full h-52 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-teal-500 mb-2">
                {center.country} - {center.city}
              </h3>
              <p className="text-gray-700 mb-2 flex items-center gap-2">
                <FaMapMarkerAlt className="text-red-500" /> {center.address}
              </p>
              <p className="text-gray-700 mb-2">
                <span className="font-semibold">Phone:</span> {center.phone}
              </p>
              <p className="text-gray-700 mb-4">
                <span className="font-semibold">Email:</span> {center.email}
              </p>
              <Link
                to="https://www.google.com/maps/@22.7088348,90.3618995,7677m/data=!3m1!1e3?entry=ttu&g_ep=EgoyMDI1MTEyMy4xIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                className="w-full py-2 px-3 mt-2 bg-blue-500 text-white font-semibold rounded-xl shadow hover:bg-pink-600 transition"
              >
                Visit Center
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PawCareServiceCenters;
