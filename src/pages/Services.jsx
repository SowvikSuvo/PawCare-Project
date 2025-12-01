import React from "react";
import { useLoaderData } from "react-router";
import ServiceCard from "../componenets/ServiceCard";
import { motion } from "framer-motion";

const Services = () => {
  const data = useLoaderData();

  // Framer Motion variants for animations
  const titleVariant = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const paragraphVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 0.3, ease: "easeOut" },
    },
  };

  const cardVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className="mt-10 px-4 md:px-8 lg:px-16">
      {/* ---- Animated Title ---- */}
      <motion.h2
        className="text-center text-3xl md:text-4xl font-bold text-indigo-600 mb-4"
        variants={titleVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Our Winter Care Services
      </motion.h2>

      {/* ---- Animated Paragraph ---- */}
      <motion.p
        className="text-center text-gray-700 mb-10 text-md md:text-lg max-w-3xl mx-auto"
        variants={paragraphVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Keep your pets cozy and healthy this winter! From warm outfits to paw
        care, we ensure your furry friends enjoy the season safely and happily.
        Our expert team is here to provide gentle, loving care every step of the
        way.
      </motion.p>

      {/* ---- Services Grid ---- */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
        {data.map((service) => (
          <motion.div
            key={service.id}
            className="hover:scale-105 transition-transform duration-500"
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <ServiceCard service={service} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
