import Button from "../components/Button";
import { motion } from "framer-motion";
import { fadeIn, textVariant, textVariant2, slideIn } from "../utils/motion";
import { shoe8 } from "../assets/images";

const SuperQuality = () => {
  return (
    <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <motion.div 
        className="flex flex-1 flex-col"
        variants={fadeIn('left', 'tween', 0.2, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.h2 
          className="font-palanquin text-4xl font-bold capitalize lg:max-w-lg" 
          variants={textVariant(0.2)}
        >
          We Provide you <span className="text-coral-red inline-block mt-3">Super</span> 
          <span className="text-coral-red inline-block mt-3">Quality</span> Shoes
        </motion.h2>
        
        <motion.p 
          className="mt-4 lg:max-w-lg info-text"
          variants={textVariant2}
        >
          Ensuring premium comfort and
          style, our meticulously crafted
          footwear is designed to elevate
          your experience, providing you
          with unmatched quality,
          innovation, and a touch of
          elegance.
        </motion.p>

        <motion.p 
          className="mt-6 lg:max-w-lg info-text"
          variants={fadeIn('up', 'tween', 0.4, 1)}
        >
          Our dedication to detail and excellence ensures your satisfaction
        </motion.p>
        
        {/* Button Animation */}
        <motion.div 
          className="mt-11"
          variants={fadeIn('right', 'tween', 0.6, 1)}
          initial="hidden"
          whileInView="show"
          
        >
          <Button label="View details"  />
        </motion.div>
      </motion.div>

      <motion.div className="flex-1 flex justify-center items-center"
        variants={slideIn('right','150', 'tween', 0.3, 1)}
      >
        <img src={shoe8} alt="shoe8" width={570} height={522} className="object-contain" />
      </motion.div>
    </section>
  );
};

export default SuperQuality;
