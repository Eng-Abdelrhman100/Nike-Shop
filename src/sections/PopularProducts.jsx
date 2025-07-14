import { motion } from "framer-motion";
import PopularProductCard from "../components/PopularProductCard";
import { products } from "../constants";
import { fadeIn, staggerContainer } from "../utils/motion";

const PopularProducts = () => {
  return (
    <motion.section 
      id="products" 
      className="max-container max-sm:mt-12"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
         <motion.div 
        className="flex flex-col justify-start gap-5"
        variants={fadeIn('up', 'tween', 0.2, 1)}
      >
        <h2 className="text-4xl font-palanquin font-bold">Our <span className="text-coral-red">Popular</span> Products</h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design, and value</p>
      </motion.div>
        
        <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm::grid-cols-2 grid-cols-1 sm:gap-4 gap-14 ">
          {products.slice(0, 4).map((product, index) => (
            <PopularProductCard key={product.name} {...product} />
          ))}
        </div>
    </motion.section>
  )
}

export default PopularProducts;