import { services } from "../constants"
import { motion } from "framer-motion";
import {  staggerContainer } from "../utils/motion"; // Import animation functions
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  return (
    <motion.section 
      className="max-container flex justify-center flex-wrap gap-9"
      variants={staggerContainer(0.3, 0.1)} // Stagger animation for child elements
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }} // Trigger animations when in view
    >
      {services.map((service, index) => (
        <ServiceCard key={service.label} {...service} index={index} />
      ))}
    </motion.section>
  );
};

export default Services