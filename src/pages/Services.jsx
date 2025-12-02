import { useEffect, useState } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  const [services, setServices] = useState([]);
  const [displayServices, setDisplayServices] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState("asc");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    setLoading(true);
    fetch("/pet.json")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setDisplayServices(data);
        const uniqueCategories = [
          "All",
          ...new Set(data.map((s) => s.category)),
        ];
        setCategories(uniqueCategories);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  useEffect(() => {
    let filtered = services;
    if (selectedCategory !== "All")
      filtered = filtered.filter((s) => s.category === selectedCategory);
    if (searchText.trim()) {
      const q = searchText.trim().toLowerCase();
      filtered = filtered.filter((s) =>
        s.serviceName.toLowerCase().includes(q)
      );
    }
    const sorted = [...filtered].sort((a, b) =>
      sortOrder === "asc" ? a.price - b.price : b.price - a.price
    );
    setDisplayServices(sorted);
  }, [searchText, services, sortOrder, selectedCategory]);

  if (loading)
    return (
      <div className="text-center my-20">
        <span className="loading loading-lg loading-spinner text-indigo-600"></span>
      </div>
    );

  return (
    <div className="container mx-auto px-4 my-12 flex flex-col lg:flex-row gap-8">
      <aside
        className="lg:w-1/4 bg-white rounded-2xl shadow-lg p-6 sticky top-18 h-fit w-full lg:block"
        data-aos="fade-right"
      >
        <h3 className="text-xl font-bold mb-4">Filter by Category</h3>
        <ul className="space-y-2">
          {categories.map((cat) => (
            <li key={cat}>
              <button
                onClick={() => setSelectedCategory(cat)}
                className={`w-full text-left px-4 py-2 rounded-lg transition ${
                  selectedCategory === cat
                    ? "bg-indigo-600 text-white"
                    : "hover:bg-indigo-50 text-gray-700"
                }`}
              >
                {cat}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      <main className="flex-1 bg-white" data-aos="fade-left">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12">
          All <span className="text-indigo-600">Services</span> Collection
        </h2>

        <div
          className="bg-white shadow-lg rounded-2xl p-4 sm:p-6 md:p-8 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 border border-indigo-100 mb-8"
          data-aos="fade-up"
        >
          <div className="w-full sm:w-1/2 relative">
            <input
              type="text"
              placeholder="Search services..."
              className="input input-bordered w-full pl-10 sm:pl-12 h-10 sm:h-12 rounded-xl focus:outline-indigo-500 shadow-sm"
              onChange={(e) => setSearchText(e.target.value)}
              value={searchText}
            />
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 absolute left-3 sm:left-4 top-2.5 sm:top-3 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35m2.1-5.4a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
              />
            </svg>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
            <span className="font-semibold text-sm sm:text-base">
              Sort by Price:
            </span>
            <select
              className="select select-bordered rounded-xl focus:outline-indigo-500 h-10 sm:h-12 w-full sm:w-auto"
              onChange={(e) => setSortOrder(e.target.value)}
              value={sortOrder}
            >
              <option value="asc">Low → High</option>
              <option value="desc">High → Low</option>
            </select>
          </div>
        </div>

        {displayServices.length === 0 ? (
          <div
            className="text-center text-gray-500 text-lg sm:text-xl py-16"
            data-aos="fade-up"
          >
            No services found.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {displayServices.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                whileHover={{ scale: 1.05, rotateY: 2 }}
                className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col"
              >
                <img
                  src={service.image}
                  alt={service.serviceName}
                  className="w-full h-52 sm:h-60 md:h-64 object-cover"
                />
                <div className="p-4 sm:p-6 flex flex-col flex-1">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2">
                    {service.serviceName}
                  </h3>
                  <p className="text-gray-600 mb-2 sm:mb-4 line-clamp-3 text-sm sm:text-base">
                    {service.description}
                  </p>
                  <div className="mt-auto flex justify-between items-center text-sm sm:text-base">
                    <span className="font-semibold text-indigo-600">
                      ${service.price}
                    </span>
                    <span className="text-yellow-500 font-semibold">
                      {service.rating} ★
                    </span>
                  </div>
                  <Link
                    to={`/view-details/${service.id}`}
                    className="mt-3 sm:mt-4 btn bg-pink-600 w-full py-2 sm:py-3 text-sm text-white sm:text-base rounded-2xl hover:bg-pink-800"
                  >
                    See More
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Services;
