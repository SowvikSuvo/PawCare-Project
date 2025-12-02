import React from "react";
import { motion } from "framer-motion";
import { FaPaw, FaHeart, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

// Sample team data
const team = [
  {
    id: 1,
    name: "Dr. Emily Pawson",
    role: "Veterinarian",
    image:
      "https://plus.unsplash.com/premium_photo-1661578535048-7a30e3a71d25?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "John Barker",
    role: "Pet Nutritionist",
    image:
      "https://images.unsplash.com/photo-1659353888323-1f5c85ea3952?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Sophia Meow",
    role: "Pet Grooming Expert",
    image:
      "https://plus.unsplash.com/premium_photo-1663040617958-4cba2ab2e496?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const handleJoin = () => {
  Swal.fire({
    title: "Joined Successful!",
    text: "Welcome to Our PawCare Family.",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1681881867376-269e59b7b3a6?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: "Custom image",
  });
};

const AboutUs = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50 px-4 py-10 rounded-2xl ">
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-4xl md:text-5xl font-extrabold text-pink-500 mb-6"
      >
        About <span className="text-blue-600">PawCare</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="text-center text-gray-700 max-w-3xl mx-auto mb-12 text-lg md:text-xl"
      >
        PawCare is dedicated to the health, happiness, and well-being of your
        furry friends. Our team of experts provides comprehensive care, from
        grooming and nutrition to winter protection and preventive guidance.
      </motion.p>

      {/* Hero Section */}
      <motion.div
        className="relative mb-12 rounded-3xl overflow-hidden shadow-2xl max-w-6xl mx-auto"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src="https://plus.unsplash.com/premium_photo-1661389541526-e791e83bd3f7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="PawCare Hero"
          className="w-full h-80 md:h-150 object-cover"
        />
        <motion.div
          className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Caring for Every Paw, Every Day
          </h2>
          <p className="text-white text-lg md:text-xl max-w-2xl">
            We believe every pet deserves love, care, and attention. PawCare is
            here to ensure they get just that.
          </p>
        </motion.div>
      </motion.div>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-6xl mx-auto">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center text-center border border-gray-200"
        >
          <FaPaw className="text-orange-500 text-5xl mb-4" />
          <h3 className="text-2xl font-bold text-orange-500 mb-2">
            Our Mission
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            To provide exceptional care for pets, ensuring their health,
            happiness, and overall well-being through our expert services.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center text-center border border-gray-200"
        >
          <FaHeart className="text-red-500 text-5xl mb-4" />
          <h3 className="text-2xl font-bold text-red-500 mb-2">Our Vision</h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            To be the most trusted and innovative pet care provider, ensuring
            every paw experiences love, care, and comfort.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center text-center border border-gray-200"
        >
          <FaUsers className="text-blue-500 text-5xl mb-4" />
          <h3 className="text-2xl font-bold text-blue-500 mb-2">Our Team</h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            A passionate team of veterinarians, nutritionists, and pet experts
            committed to providing the best care for your furry companions.
          </p>
        </motion.div>
      </div>

      {/* Team Section */}
      <div className="max-w-6xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-8 text-center">
          Meet Our Experts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl md:text-2xl font-bold text-blue-600">
                  {member.name}
                </h3>
                <p className="text-gray-700 text-lg">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer CTA */}
      <motion.div
        className="text-center py-12 px-20 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 rounded-3xl max-w-6xl mx-auto shadow-2xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Join Our PawCare Family
        </h2>
        <p className="text-white text-lg md:text-xl mb-6">
          Experience the best care for your pets with our expert team and
          premium services.
        </p>
        <button
          onClick={handleJoin}
          className="btn bg-white text-orange-500 font-bold hover:bg-gray-100 transition-all rounded-full px-6 py-3 text-lg hover:scale-105"
        >
          Get in Touch
        </button>
      </motion.div>
    </div>
  );
};

export default AboutUs;
