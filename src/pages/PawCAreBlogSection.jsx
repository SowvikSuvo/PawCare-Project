import React from "react";
import { motion } from "framer-motion";
import { FaUserAlt, FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router";

const blogPosts = [
  {
    id: 1,
    title: "Winter Care Tips for Your Furry Friends",
    snippet:
      "Keep your pets safe and warm this winter! Explore cozy winter outfits, paw protection techniques, food suggestions, and expert advice to ensure a joyful season for your furry companions.",
    image: "https://images.pexels.com/photos/7123276/pexels-photo-7123276.jpeg",
    author: "Dr. Emily Pawson",
    date: "Nov 25, 2025",
  },
  {
    id: 2,
    title: "Healthy Diet for Pets During Cold Seasons",
    snippet:
      "Feed your pets smarter this winter! Discover immunity-boosting foods, essential nutrients, and vet-approved diet plans for more energetic and happier pets in the cold months.",
    image:
      "https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=800&q=80",
    author: "John Barker",
    date: "Nov 20, 2025",
  },
  {
    id: 3,
    title: "Grooming & Winter Bathing Guide",
    snippet:
      "Learn how to groom your pets without risking their warmth. Simple and effective winter grooming hacks for every breed to keep them clean, healthy, and protected.",
    image:
      "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=800&q=80",
    author: "Sophia Meow",
    date: "Nov 15, 2025",
  },
];

const PawCareBlogSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50 mt-10 rounded-2xl">
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center text-4xl md:text-5xl font-extrabold text-blue-500"
      >
        PawCare Articles & Tips
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-center text-gray-700 max-w-2xl mx-auto mt-4 mb-12"
      >
        Stay updated with our expert pet-care guides, seasonal tips, and
        verified articles created to ensure your furry companions stay happy,
        healthy, and protected.
      </motion.p>

      {/* Blog Cards Grid */}
      <div className="container mx-auto px-4 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            whileHover={{ scale: 1.05, rotate: 1 }}
            className="bg-white/80 backdrop-blur-xl shadow-lg rounded-2xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-52 object-cover"
            />

            <div className="p-6">
              <h3 className="text-2xl font-bold text-blue-400 mb-3">
                {post.title}
              </h3>

              <p className="text-gray-700 mb-4">{post.snippet}</p>

              {/* Author & Date */}
              <div className="flex justify-between text-gray-500 text-sm mb-4">
                <span className="flex items-center gap-1">
                  <FaUserAlt />

                  {post.author}
                </span>
                <span className="flex items-center gap-1">
                  <FaCalendarAlt />
                  {post.date}
                </span>
              </div>

              {/* Read More Button */}
              <Link
                to="/Blogs"
                className="w-full py-2 px-2 mt-2 bg-pink-500 text-white font-semibold rounded-xl shadow hover:bg-blue-400 transition"
              >
                Read More
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PawCareBlogSection;
