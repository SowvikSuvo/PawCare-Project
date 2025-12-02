import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import ReviewCard from "../componenets/ReviewCard";

const reviews = [
  {
    id: 1,
    name: "Emily Watson",
    location: "New York, USA",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    comment:
      "PawCare saved my dog’s winter! Their grooming service and quick support were amazing. Highly recommended!",
  },
  {
    id: 2,
    name: "Michael Brown",
    location: "London, UK",
    image: "https://randomuser.me/api/portraits/men/36.jpg",
    rating: 4,
    comment:
      "Very friendly team and great pet services. My cat loved the experience and felt super comfortable.",
  },
  {
    id: 3,
    name: "Sophia Johnson",
    location: "Sydney, Australia",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
    comment:
      "PawCare is the best! Fast appointments, lovely staff, and top-quality pet treatment. I will visit again.",
  },
  {
    id: 4,
    name: "David Miller",
    location: "Toronto, Canada",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    rating: 5,
    comment:
      "Amazing environment for pets! My puppy enjoyed the whole care session. Perfect place for every pet lover.",
  },
  {
    id: 5,
    name: "Olivia Smith",
    location: "Los Angeles, USA",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    rating: 4,
    comment:
      "PawCare took such good care of my kitten during the winter. Their grooming and warmth check made me feel safe. Will definitely return!",
  },
  {
    id: 6,
    name: "Liam Johnson",
    location: "London, UK",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    rating: 5,
    comment:
      "Excellent service! Very professional staff and my dog looks happier and healthier. Highly recommended to all pet owners.",
  },
  {
    id: 7,
    name: "Emma Williams",
    location: "Sydney, Australia",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
    rating: 5,
    comment:
      "Such a caring team. They handled my older cat with so much love and patience. Great winter pack and cozy grooming — top notch.",
  },
  {
    id: 8,
    name: "Noah Brown",
    location: "Toronto, Canada",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
    rating: 4,
    comment:
      "Affordable and high‑quality pet care. My puppy enjoyed the session and looked much happier afterward. Thumbs up for PawCare!",
  },
  {
    id: 9,
    name: "Sophia Davis",
    location: "Berlin, Germany",
    image: "https://randomuser.me/api/portraits/women/29.jpg",
    rating: 5,
    comment:
      "I trust PawCare with all my pets' needs. Their winter care tips and friendly service have made a big difference. Super satisfied!",
  },
  {
    id: 10,
    name: "Mason Wilson",
    location: "Paris, France",
    image: "https://randomuser.me/api/portraits/men/60.jpg",
    rating: 5,
    comment:
      "Very reliable and caring service. My cat feels cozy all winter, and the staff always responds quickly. Would recommend to anyone.",
  },
];

const CustomerReviews = () => {
  return (
    <div className="py-20 rounded-2xl bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden mt-10">
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center text-4xl md:text-5xl font-extrabold text-pink-500 mb-6"
      >
        What Our Customers Say
      </motion.h2>

      <p className="text-center text-gray-700 max-w-2xl mx-auto mb-12">
        Real experiences from loving pet owners who trust{" "}
        <span className="font-semibold text-teal-600">PawCare</span> with their
        furry friends.
      </p>

      {/* Infinite Sliding Track */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            ease: "linear",
            duration: 30,
            repeat: Infinity,
          }}
        >
          {[...reviews, ...reviews].map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default CustomerReviews;
