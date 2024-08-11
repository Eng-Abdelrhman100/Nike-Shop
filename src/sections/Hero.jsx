import { arrowRight } from "../assets/icons";
import Button from "../components/Button";
import { shoes, statistics } from "../constants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";
import { useState } from "react";
import { motion } from "framer-motion";
import { staggerContainer, slideIn, textVariant, textVariant2, fadeIn, zoomIn } from '../utils/motion';

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <section id="home" className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container">
      {/* Left Side Content */}
      <motion.div 
        className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28"
        variants={staggerContainer(0.1, 0.2)} // Add a slight stagger effect
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        {/* Text Animations */}
        <motion.p 
          className="text-xl font-montserrat text-coral-red"
          variants={fadeIn('left', 'tween', 1, 1)}
        >
          Our Summer Collection
        </motion.p>
        
        <motion.h1 
          className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold"
          variants={textVariant(2.4)}
        >
          <span className="xl:bg-white xl:whitespace-nowrap relative lg:z-10 z-0 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </motion.h1>
        
        <motion.p 
          className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm"
          variants={textVariant2}
        >
          Discover stylish Nike arrivals, quality comfort, and innovation for your active life.
        </motion.p>
        
        {/* Button Animation */}
        <motion.div variants={fadeIn('right', 'tween', 1.1, 1)}>
          <Button label="Shop now" iconURL={arrowRight} />
        </motion.div>

        {/* Statistics Animation */}
        <motion.div 
          className="flex justify-start items-start flex-wrap w-full mt-20 gap-16" 
          variants={staggerContainer(0.3, 0.4)}
        >
          {statistics.map((stat, index) => (
            <motion.div key={stat.label} variants={fadeIn('up', 'tween', index * 0.5, 1.2)}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      
      {/* Right Side Image and Shoe Cards */}
      <motion.div 
        className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center"
        variants={staggerContainer(0.1, 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        {/* Big Shoe Image */}
        <motion.img
          src={bigShoeImg}
          alt="shoe collection"
          width={610}
          height={500}
          className="object-contain relative z-10"
          variants={slideIn('right','tween',0.2, 1)} // Zoom in effect for the big shoe image
        />

        {/* Smaller Shoe Cards */}
        <motion.div 
          className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6" 
          variants={staggerContainer(0.2, 0.3)}
        >
          {shoes.map((shoe, index) => (
            <ShoeCard
              key={shoe.bigShoe}
              imgURL={shoe}
              index={index}
              changeBigShoeImg={setBigShoeImg}
              bigShoeImg={bigShoeImg}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
