import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import pawImg from "../assets/paw.png";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-sky-400 via-blue-200 to-indigo-100 text-gray-900 mt-10 border-t border-gray-200">
      {/* SAME CONTAINER AS NAVBAR */}
      <div className="container mx-auto px-4">
        {/* Grid Section */}
        <div className="py-10 grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-25">
          {/* Logo */}
          <div>
            <img className="w-28 mb-3" src={pawImg} alt="logo" />
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
                <Link to="/" className="hover:text-indigo-600">
                  Home Page
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-indigo-600">
                  All Services
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-indigo-600">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-indigo-600">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-indigo-600">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-lg font-semibold text-indigo-600 mb-3">
              Contact Us
            </h2>
            <p className="text-sm leading-6">
              PawCare Office <br />
              Barisal, Bangladesh <br />
              <span className="font-medium">Email:</span> skarmoker44@.com{" "}
              <br />
              <span className="font-medium">Phone:</span> +880 1768225209
            </p>
          </div>

          {/* Social */}
          <div>
            <h2 className="text-lg font-semibold text-indigo-600 mb-3">
              Connect With Us
            </h2>
            <div className="flex flex-col gap-2 text-sm font-medium">
              <a
                href="https://facebook.com"
                target="_blank"
                className="flex items-center gap-2 hover:text-blue-600"
              >
                <FaFacebook /> Facebook
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                className="flex items-center gap-2 hover:text-pink-600"
              >
                <FaInstagram /> Instagram
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                className="flex items-center gap-2 hover:text-red-600"
              >
                <FaYoutube /> Youtube
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-300 text-center py-4 text-sm text-gray-600">
          © {new Date().getFullYear()} PawCare Studio — All Rights Reserved 🐶
        </div>
      </div>
    </footer>
  );
};

export default Footer;
