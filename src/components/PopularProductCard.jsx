import { motion } from "framer-motion";
import { star } from "../assets/icons";
import { fadeIn } from "../utils/motion";

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <motion.div 
      className="flex flex-1 flex-col w-full max-sm:w-full"
      variants={fadeIn('up', 'spring', 0.7, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
        <motion.img 
          src={imgURL} 
          alt={name}  
          className="w-[280px] h-[280px]" 
          variants={fadeIn('up', 'spring', 0.5, 1)}
        />
        <div className="mt-8 flex justify-start gap-2.5 ">
            <img src={star} alt="rating"  width={24} height={24}/>
            <p className="font-montserrat text-xl leading-normal text-slate-gray">(4.5)</p>
        </div>
            <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">{name}</h3>
            <p className="mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal">{price}</p>
    </motion.div>
  );
}

export default PopularProductCard;
