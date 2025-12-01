import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaUserAlt, FaCalendarAlt } from "react-icons/fa";

// Sample blog data
const blogs = [
  {
    id: 1,
    title: "Winter Care Tips for Your Furry Friends",
    snippet:
      "Keep your pets safe and warm this winter! From cozy outfits to paw care, ensure a happy season for your furry companions.",
    FullContent:
      "Winter can be harsh on our beloved pets, but with the right care, they can enjoy the season just like us. Make sure to provide them with warm outfits, such as sweaters or coats, especially for small or short-haired breeds. Paw care is also essential — use pet-safe balms to protect their pads from frostbite and ice-melting chemicals. Regular grooming helps maintain their coat’s insulation, and never forget to monitor their water intake and diet to keep them healthy. Indoor playtime and cozy resting areas will keep them active and happy throughout the chilly months.",
    image: "https://images.pexels.com/photos/7123276/pexels-photo-7123276.jpeg",
    author: "Dr. Emily Pawson",
    date: "Nov 25, 2025",
  },
  {
    id: 2,
    title: "Healthy Diet for Your Pets in Cold Seasons",
    snippet:
      "Discover the best foods to boost your pet's immunity during winter. Nutritious meals to keep them active and joyful.",
    FullContent:
      "During colder months, pets require extra nutrition to maintain energy and warmth. High-quality proteins and healthy fats are crucial for sustaining body heat. Include seasonal vegetables like carrots and pumpkin for vitamins and fiber, and consider supplements like omega-3 fatty acids to support their coat and immune system. Hydration remains vital, so ensure fresh water is always available. A well-balanced diet helps prevent winter-related illnesses and keeps your furry companions energetic and playful.",
    image:
      "https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=800&q=80",
    author: "John Barker",
    date: "Nov 20, 2025",
  },
  {
    id: 3,
    title: "Grooming and Winter Bathing Guide",
    snippet:
      "Learn how to keep your pets clean and healthy without compromising their warmth. Grooming tips for every breed.",
    FullContent:
      "Grooming is essential even in winter, but bathing too frequently can strip natural oils from your pet’s skin. Use lukewarm water and gentle, moisturizing shampoos to maintain their coat’s softness and protect the skin. Brush your pet regularly to prevent tangles and matting, which can trap moisture and cold. After walks, clean their paws from snow, ice, and salt to avoid irritation. Grooming not only keeps your pets healthy but also strengthens the bond between you and your furry friend.",
    image:
      "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=800&q=80",
    author: "Sophia Meow",
    date: "Nov 15, 2025",
  },
];

const BlogsPage = () => {
  const [expanded, setExpanded] = useState({}); // track which blog is expanded

  const toggleExpand = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="flex flex-col min-h-screen rounded-2xl bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50 px-4 py-10">
      {/* Page Header */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-4xl md:text-5xl font-extrabold text-teal-500 mb-4"
      >
        PawCare Blog
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="text-center text-gray-700 mb-12 max-w-3xl mx-auto text-lg md:text-xl"
      >
        Stay updated with the latest tips, guides, and news for your furry
        friends. Our experts share professional advice to keep your pets happy,
        healthy, and safe all year round.
      </motion.p>

      {/* Blog Posts */}
      <div className="space-y-20 max-w-6xl mx-auto">
        {blogs.map((blog, index) => (
          <motion.div
            key={blog.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
            className="flex flex-col md:flex-row bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200 hover:shadow-3xl transition-all duration-500"
          >
            {/* Blog Image */}
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full md:w-1/3 h-80 md:h-auto object-cover"
            />
            {/* Blog Content */}
            <div className="p-8 flex flex-col justify-between md:w-2/3">
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="text-3xl md:text-4xl font-bold text-teal-500 mb-4"
              >
                {blog.title}
              </motion.h2>

              {/* Snippet */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-gray-700 text-lg md:text-xl leading-relaxed mb-4"
              >
                {blog.snippet}
              </motion.p>

              {/* Full Content (expandable) */}
              {expanded[blog.id] && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.7 }}
                  className="text-gray-600 text-lg md:text-xl leading-relaxed mb-4"
                >
                  {blog.FullContent}
                </motion.p>
              )}

              {/* Toggle Button */}
              <button
                onClick={() => toggleExpand(blog.id)}
                className="text-teal-500 font-semibold mt-2 self-start hover:underline transition-all"
              >
                {expanded[blog.id] ? "Show Less ▲" : "Read More ▼"}
              </button>

              {/* Author & Date */}
              <div className="flex justify-between items-center text-gray-500 text-sm md:text-base mt-4">
                <div className="flex items-center gap-2">
                  <FaUserAlt /> <span>{blog.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCalendarAlt /> <span>{blog.date}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
export default BlogsPage;
