import { motion } from "framer-motion";
import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";
import { fadeIn, textVariant, textVariant2 } from "../utils/motion";
import { Link } from "react-router-dom";

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1 ">
        <img
          src={offer}
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <motion.div
        className="flex flex-1 flex-col"
        variants={fadeIn("left", "tween", 0.2, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.h2
          className="font-palanquin text-4xl font-bold capitalize lg:max-w-lg"
          variants={textVariant(0.2)}
        >
          <span className="text-coral-red inline-block mt-3">Special</span>{" "}
          Offer
        </motion.h2>

        <motion.p
          className="mt-4 lg:max-w-lg info-text"
          variants={textVariant2}
        >
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </motion.p>

        <motion.p
          className="mt-6 lg:max-w-lg info-text"
          variants={fadeIn("up", "tween", 0.4, 1)}
        >
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </motion.p>

        {/* Button Animation */}
        <motion.div
          className="mt-11 flex flex-wrap gap-4"
          variants={fadeIn("right", "tween", 0.6, 1)}
        >
          <Link to="/products">
            <Button label="Shop now" iconURL={arrowRight} />
          </Link>
          <Button
            label="Learn more"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SpecialOffer;
