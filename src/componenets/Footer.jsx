import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-sky-400 via-blue-200 to-indigo-100 text-gray-900 mt-10 border-t border-gray-200">
      <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* --- logo --- */}
        <div>
          <h2 className="text-lg font-semibold text-indigo-600 mb-3">
            🐾 PawCare
          </h2>
          <p className="text-sm">
            Caring Beyond Seasons — Always for Your Pets
          </p>
        </div>

        {/* --- Policy Section --- */}
        <div>
          <h2 className="text-lg font-semibold text-indigo-600 mb-3">
            Quick Links
          </h2>
          <ul className="text-sm space-y-2">
            <li>
              <a
                href="/privacy-policy"
                className="hover:text-indigo-600 transition-colors"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/terms"
                className="hover:text-indigo-600 transition-colors"
              >
                Terms & Conditions
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:text-indigo-600 transition-colors"
              >
                About Us
              </a>
            </li>
          </ul>
        </div>
        {/* --- Contact Info --- */}
        <div>
          <h2 className="text-lg font-semibold text-indigo-600 mb-3">
            Contact Us
          </h2>
          <p className="text-sm">
            PawCare <br />
            Barisal, Bangladesh <br />
            <span className="font-medium">Email:</span> support@pawcare.com{" "}
            <br />
            <span className="font-medium">Phone:</span> +880 1768225209
          </p>
        </div>

        {/* --- Social Links --- */}
        <div className="">
          <h2 className="text-lg font-semibold text-indigo-600 mb-3">
            🌐 Connect With Us
          </h2>
          <div className="text-center  text-xl">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-600 transition-colors"
            >
              <span className="flex items-center gap-1">
                <FaFacebook></FaFacebook>Facebook
              </span>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-sky-500 transition-colors"
            >
              <i className="fa-brands fa-x-twitter"></i>
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-pink-600 transition-colors"
            >
              <span className="flex items-center gap-1">
                <FaInstagram></FaInstagram>Instagram
              </span>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-red-600 transition-colors"
            >
              <span className="flex items-center gap-1">
                <FaYoutube></FaYoutube>Youtube
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* --- Bottom Line --- */}
      <div className="border-t border-gray-300 text-center py-4 text-sm text-gray-600">
        © {new Date().getFullYear()} PawCare Studio — All Rights Reserved 🐶
      </div>
    </footer>
  );
};

export default Footer;
