import { motion } from "framer-motion";
import Button from "../components/Button";
import { fadeIn} from "../utils/motion";

const Subscribe = () => {
  return (
    <section
      id='contact-us'
      className='max-container flex justify-between items-center max-lg:flex-col gap-10'
    >
      {/* Animated Header */}
      <motion.h3
        className='text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold max-lg:text-center'
        variants={fadeIn('right', 'tween', 0.2, 1)}
        initial="hidden"
        whileInView="show"
      >
        Sign Up for
        <span className='text-coral-red'> Updates </span>& Newsletter
      </motion.h3>

      {/* Animated Form */}
      <motion.div
        className='lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full'
        variants={fadeIn('left', 'tween', 0.4, 1)}
        initial="hidden"
        whileInView="show"
      >
        <input type='text' placeholder='subscribe@nike.com' className='input' />
        <div className='flex max-sm:justify-end items-center max-sm:w-full'>
          <Button label='Sign Up' fullWidth />
        </div>
      </motion.div>
    </section>
  );
};

export default Subscribe;
