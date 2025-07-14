import Fuse from "fuse.js";
import { useState } from "react";
import Nav from "../components/Nav";
import { motion } from "framer-motion";
import { products } from "../constants";
import { fadeIn, staggerContainer } from "../utils/motion";
import PopularProductCard from "../components/PopularProductCard";

const options = {
  keys: ["name"],
  threshold: 0.3,
};

const fuse = new Fuse(products, options);

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts =
    searchTerm.trim() === ""
      ? products
      : fuse.search(searchTerm).map((res) => res.item);

  return (
    <>
      <Nav />

      <motion.section
        className="padding max-container"
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
          className="text-center text-slate-gray font-montserrat max-w-xl m-auto mb-12"
          variants={fadeIn("up", "tween", 0.4, 1)}
        >
          Browse our premium selection of Nike shoes designed for performance,
          comfort, and style.
        </motion.p>

        {/* Search Input */}
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

        {/* Filtered Product Grid */}
        <div
          className={`grid gap-12 
          ${
            filteredProducts.length === 0
              ? "grid-cols-1"
              : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          } 
          justify-center place-items-center`}
        >
          {filteredProducts.length === 0 ? (
            <p className="text-center text-xl font-montserrat text-slate-gray bg-[#fff4f3] border border-coral-red rounded-xl px-6 py-4 shadow-sm col-span-full">
              No products match your search. Try a different keyword!
            </p>
          ) : (
            filteredProducts.map((product) => (
              <div key={product.id || product.name}>
                <PopularProductCard {...product} showAddToCart />
              </div>
            ))
          )}
        </div>
      </motion.section>
    </>
  );
};

export default Products;
