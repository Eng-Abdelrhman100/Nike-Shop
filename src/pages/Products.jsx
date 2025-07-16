import Fuse from "fuse.js";
import { useState } from "react";
import Nav from "../components/Nav";
import { motion } from "framer-motion";
import { products } from "../constants";
import { fadeIn, staggerContainer } from "../utils/motion";
import PopularProductCard from "../components/PopularProductCard";
import Footer from "../sections/Footer";

const options = {
  keys: ["name"],
  threshold: 0.5,
};

const fuse = new Fuse(products, options);

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showAll, setShowAll] = useState(false);
  const [priceFilter, setPriceFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState("");

  // Search
  let filteredProducts =
    searchTerm.trim() === ""
      ? products
      : fuse.search(searchTerm).map((res) => res.item);

  // Apply price filter
  filteredProducts = filteredProducts.filter((product) => {
    const price = parseFloat(product.price.replace("$", ""));
    if (priceFilter === "lt150") return price < 150;
    if (priceFilter === "150to200") return price >= 150 && price <= 200;
    if (priceFilter === "gt200") return price > 200;
    return true;
  });

  // Apply rating filter
  filteredProducts = filteredProducts.filter((product) => {
    const rating = parseFloat(product.rating);
    if (ratingFilter === "4") return rating >= 4;
    if (ratingFilter === "4.5") return rating >= 4.5;
    if (ratingFilter === "5") return rating === 5;
    return true;
  });

  // Handle screen size for number of products
  const screenWidth = window.innerWidth;
  let visibleCount = 4;
  if (screenWidth >= 1024) visibleCount = 8;
  else if (screenWidth >= 768) visibleCount = 4;
  else visibleCount = 2;

  const visibleProducts = showAll
    ? filteredProducts
    : filteredProducts.slice(0, visibleCount);

  return (
    <>
      <Nav />

      <motion.section
        className="padding max-container !pt-24"
        variants={staggerContainer(0.2, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        {/* Title */}
        <motion.h2
          className="text-4xl font-palanquin font-bold text-center mb-6"
          variants={fadeIn("up", "tween", 0.2, 1)}
        >
          All <span className="text-coral-red">Nike</span> Products
        </motion.h2>

        <motion.p
          className="text-center text-slate-gray font-montserrat max-w-xl m-auto mb-6"
          variants={fadeIn("up", "tween", 0.3, 1)}
        >
          Browse our premium selection of Nike shoes designed for performance,
          comfort, and style.
        </motion.p>

        {/* Filters */}
        {/* Filters with animation */}
        <motion.div
          className="flex flex-wrap gap-6 justify-center mb-12"
          variants={fadeIn("up", "tween", 0.4, 1)}
        >
          {/* Price Filter */}
          <div className="relative w-60">
            <label className="block mb-2 font-semibold text-slate-700 font-montserrat">
              Price
            </label>
            <select
              value={priceFilter}
              onChange={(e) => setPriceFilter(e.target.value)}
              className="w-full appearance-none px-5 py-3 rounded-full border border-gray-300 text-slate-600 font-montserrat shadow-sm focus:outline-none focus:ring-2 focus:ring-coral-red bg-white transition-all duration-300 ease-in-out"
            >
              <option value="">All</option>
              <option value="lt150">Less than $150</option>
              <option value="150to200">$150 - $200</option>
              <option value="gt200">More than $200</option>
            </select>

            {/* السهم */}
            <div className="absolute right-4 top-[69%] transform -translate-y-1/2 pointer-events-none transition-all duration-300">
              <svg
                className="w-4 h-4 text-slate-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          {/* Rating Filter */}
          <div className="relative w-60">
            <label className="block mb-2 font-semibold text-slate-700 font-montserrat">
              Rating
            </label>
            <select
              value={ratingFilter}
              onChange={(e) => setRatingFilter(e.target.value)}
              className="w-full appearance-none px-5 py-3 rounded-full border border-gray-300 text-slate-600 font-montserrat shadow-sm focus:outline-none focus:ring-2 focus:ring-coral-red bg-white transition-all duration-300 ease-in-out"
            >
              <option value="">All</option>
              <option value="4">4 ★ & above</option>
              <option value="4.5">4.5 ★ & above</option>
              <option value="5">5 ★ only</option>
            </select>

            {/* السهم */}
            <div className="absolute right-4 top-[69%] transform -translate-y-1/2 pointer-events-none transition-all duration-300">
              <svg
                className="w-4 h-4 text-slate-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </motion.div>

        {/* Search */}
        <motion.div
          className="mb-12 flex justify-center"
          variants={fadeIn("up", "tween", 0.5, 1)}
        >
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full max-w-md px-5 py-3 rounded-full border-2 border-gray-200 focus:border-coral-red focus:ring-2 focus:ring-coral-red outline-none transition-all duration-300 text-slate-gray placeholder:text-slate-400 font-montserrat shadow-sm"
          />
        </motion.div>

        {/* Product Grid */}
        <div className="grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center place-items-center">
          {visibleProducts.length === 0 ? (
            <div className="col-span-full flex flex-col items-center justify-center text-center bg-[#fff4f3] border border-coral-red rounded-2xl px-6 py-8 shadow-md transition-all duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-coral-red mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-xl font-montserrat text-slate-700 font-semibold">
                No matching products found
              </p>
              <p className="text-sm text-slate-gray mt-2 font-montserrat">
                Try searching with a different keyword or check your filters.
              </p>
            </div>
          ) : (
            visibleProducts.map((product) => (
              <div key={product.id || product.name}>
                <PopularProductCard {...product} showAddToCart />
              </div>
            ))
          )}
        </div>

        {/* Show All Button */}
        {!showAll && filteredProducts.length > visibleCount && (
          <div className="mt-20 flex justify-center">
            <button
              onClick={() => setShowAll(true)}
              className="bg-coral-red text-white px-6 py-3 rounded-full font-montserrat hover:bg-coral-red/90 transition-all"
            >
              Show All
            </button>
          </div>
        )}
      </motion.section>

      <section className="padding bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </>
  );
};

export default Products;
