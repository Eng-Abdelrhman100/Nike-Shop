import { motion } from "framer-motion";
import ReviewCard from "../components/ReviewCard";
import { reviews } from "../constants";
import { fadeIn, staggerContainer } from "../utils/motion";

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <motion.h3 
        className="font-palanquin text-center text-4xl font-bold"
        variants={fadeIn('up', 'tween', 0.6, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true , amount: 0.25}}
      >
        What Our <span className="text-coral-red">Customers</span> Say?
      </motion.h3>
      <motion.p 
        className="iinfo-text m-auto mt-4 max-w-lg text-center"
        variants={fadeIn('up', 'tween', 0.8, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true , amount: 0.25}}
      >
        Hear genuine stories from our satisfied customers about their exceptional experiences with us.
      </motion.p>
      <motion.div
        className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14"
        variants={staggerContainer(0.2, 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true , amount: 0.25}}
      >
        {reviews.map((review, index) => (
          <motion.div 
            key={review.customerName}
            variants={fadeIn('up', 'tween', index * 0.2, 0.6)}
          >
            <ReviewCard 
              imgURL={review.imgURL} 
              customerName={review.customerName} 
              rating={review.rating} 
              feedback={review.feedback} 
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default CustomerReviews