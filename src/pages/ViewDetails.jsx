import React, { useEffect, useState } from "react";
import Navbar from "../componenets/Navbar";
import Footer from "../componenets/Footer";
import ViewDetailsCard from "../componenets/ViewDetailsCard";
import { Link, useLoaderData, useParams } from "react-router";
import { motion } from "framer-motion";

const ViewDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [views, setViews] = useState({});

  useEffect(() => {
    const viewDetails = data.find((singleViews) => singleViews.id == id);
    setViews(viewDetails);
  }, [data, id]);

  // Framer Motion Variants
  const headingVariant = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const cardVariant = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  const buttonVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3 } },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Sticky Navbar */}
      <header className="sticky top-0 z-50">
        <Navbar />
      </header>

      <main className="flex-1 container mx-auto px-4 md:px-8 lg:px-16 space-y-8 mt-5">
        {/* Animated Heading */}
        <motion.h2
          className="text-center font-bold text-3xl sm:text-4xl md:text-5xl mb-4"
          variants={headingVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Our <span className="text-secondary">Service</span>{" "}
          <span className="text-blue-600">Details</span> here
        </motion.h2>

        {/* Animated Service Card */}
        <motion.div
          variants={cardVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <ViewDetailsCard views={views} />
        </motion.div>

        {/* Animated Button */}
        <motion.div
          className="flex justify-center"
          variants={buttonVariant}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          viewport={{ once: true }}
        >
          <Link
            to={"/services"}
            className="btn mt-5 text-white rounded-xl px-6 py-3 font-semibold
              bg-gradient-to-r from-orange-600 via-pink-600 to-sky-500
              hover:scale-105 transition-transform duration-300"
          >
            Back to Services
          </Link>
        </motion.div>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default ViewDetails;
