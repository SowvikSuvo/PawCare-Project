import React from "react";
import { motion } from "framer-motion";
import { FaPaw, FaBath, FaUtensils, FaHeartbeat } from "react-icons/fa";

// Sample services data
const services = [
  {
    id: 1,
    title: "Grooming & Spa",
    description:
      "Professional grooming to keep your pets clean, healthy, and happy with luxurious spa treatments.",
    icon: <FaBath className="text-white text-4xl" />,
    bgColor: "bg-teal-500",
  },
  {
    id: 2,
    title: "Nutrition & Diet",
    description:
      "Customized diet plans to boost your pet’s immunity and maintain optimal health.",
    icon: <FaUtensils className="text-white text-4xl" />,
    bgColor: "bg-pink-500",
  },
  {
    id: 3,
    title: "Health Checkups",
    description:
      "Regular veterinary checkups to ensure your furry friends are healthy and active.",
    icon: <FaHeartbeat className="text-white text-4xl" />,
    bgColor: "bg-blue-500",
  },
  {
    id: 4,
    title: "Play & Exercise",
    description:
      "Fun and engaging activities to keep your pets energetic, happy, and entertained throughout the day.",
    icon: <FaPaw className="text-white text-4xl" />,
    bgColor: "bg-purple-500",
  },
];

const PawCareServicesOffer = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50 mt-10 rounded-2xl">
      {/* Section Header */}
      <div className="container mx-auto px-4 text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-blue-500 mb-4"
        >
          Our PawCare <span className="text-pink-500">offer</span> Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-gray-700 max-w-3xl mx-auto text-lg md:text-xl"
        >
          PawCare offers a wide range of professional services to ensure your
          pets are healthy, happy, and fully cared for. Explore our top-notch
          offerings designed with love and expertise.
        </motion.p>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            whileHover={{ scale: 1.05, rotateY: 3 }}
            className="rounded-3xl shadow-2xl overflow-hidden cursor-pointer transition-all"
          >
            <div
              className={`${service.bgColor} p-8 flex flex-col items-center justify-center`}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-white text-2xl font-bold mb-2 text-center">
                {service.title}
              </h3>
              <p className="text-white text-center leading-relaxed">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PawCareServicesOffer;
