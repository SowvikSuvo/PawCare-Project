import { FaFacebook, FaInstagram, FaYoutube, FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router";
import pawImg from "../assets/paw.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-sky-400 via-blue-200 to-indigo-100 text-gray-900 mt-10 border-t border-gray-200 relative rounded-t-2xl">
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-20">
        {/* Logo */}
        <div>
          <img className="w-50 mb-3" src={pawImg} alt="logo" />
          <p className="text-sm leading-6">
            Caring Beyond Seasons — Always for Your Pets
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold text-indigo-600 mb-3">
            Quick Links
          </h2>
          <ul className="text-sm space-y-2">
            <li>
              <Link to="/" className="hover:text-pink-600 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-pink-600 transition">
                All Services
              </Link>
            </li>
            <li>
              <Link to="/blogs" className="hover:text-pink-600 transition">
                Blogs
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-pink-600 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-pink-600 transition">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact & Map */}
        <div>
          <h2 className="text-lg font-semibold text-indigo-600 mb-3">
            Contact Us
          </h2>
          <ul>
            <li>
              <Link
                to="/contact"
                className="text-paw-pink font-semibold animate-bounce-infinite hover:text-pink-600 transition-all duration-300"
              >
                Emergency Contact
              </Link>
            </li>
          </ul>

          <p className="text-sm leading-6 mb-4">
            PawCare Office <br />
            Barisal, Bangladesh <br />
            <span className="font-medium">Email:</span> skarmoker44@.com <br />
            <span className="font-medium">Phone:</span> +880 1768225209
          </p>
          <div className="rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.123456!2d90.35216!3d22.7019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd9b123456789%3A0x1234567890abcdef!2sBarisal!5e0!3m2!1sen!2sbd!4v1234567890"
              className="w-full h-32 md:h-36 border-0 rounded-lg"
              allowFullScreen=""
              loading="lazy"
              title="PawCare Location"
            ></iframe>
          </div>
        </div>

        {/* Social & Newsletter */}
        <div>
          <h2 className="text-lg font-semibold text-indigo-600 mb-3">
            Connect & Subscribe
          </h2>

          {/* Social Links */}
          <div className="flex flex-col gap-2 mb-6 text-sm font-medium">
            <motion.a
              whileHover={{ scale: 1.2, rotate: 10 }}
              href="https://facebook.com"
              target="_blank"
              className="flex items-center gap-2 hover:text-blue-600 transition"
            >
              <FaFacebook /> Facebook
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, rotate: 10 }}
              href="https://instagram.com"
              target="_blank"
              className="flex items-center gap-2 hover:text-pink-600 transition"
            >
              <FaInstagram /> Instagram
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, rotate: 10 }}
              href="https://youtube.com"
              target="_blank"
              className="flex items-center gap-2 hover:text-red-600 transition"
            >
              <FaYoutube /> Youtube
            </motion.a>
          </div>

          {/* Newsletter */}
          <h3 className="text-md font-semibold text-indigo-600 mb-2">
            Newsletter
          </h3>
          <p className="text-sm mb-2">
            Get latest news and tips for your furry friends
          </p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full sm:w-auto flex-1 rounded-2xl"
            />
            <button className="btn bg-blue-500 hover:bg-pink-600 text-white rounded-full px-4">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom & Back-to-top */}
      <div className="border-t border-gray-300 text-center py-4 text-sm text-gray-600 relative">
        © {new Date().getFullYear()} PawCare Studio — All Rights Reserved 🐶
      </div>

      {/* Back to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 p-3 bg-blue-500 hover:bg-pink-600 text-white rounded-full shadow-lg z-50"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
};

export default Footer;
