import { motion } from "framer-motion";
import { star } from "../assets/icons";
import { fadeIn } from "../utils/motion";
import Button from "./Button";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import { toast } from "react-hot-toast";

const PopularProductCard = ({ id, imgURL, name, price, rating, showAddToCart = false }) => {
  const { addItem } = useCart();

  return (
    <motion.div
      className="flex flex-1 flex-col w-full max-sm:w-full"
      variants={fadeIn("up", "spring", 0.7, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <Link to={`/product/${name}`}>
        <motion.img
          src={imgURL}
          alt={name}
          className="w-[280px] h-[280px] cursor-pointer"
          variants={fadeIn("up", "spring", 0.5, 1)}
        />
      </Link>

      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          ({rating})
        </p>
      </div>

      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
        {name}
      </h3>
      <p className="mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal">
        {price}
      </p>

      {showAddToCart && (
        <div className="mt-4">
          <Button
            label="Add to Cart"
            onClick={() => {
              const newItem = {
                id, 
                name,
                price: parseFloat(price.replace("$", "")),
                imgURL,
                quantity: 1,
              };
              console.log("Adding to cart:", newItem);
              addItem(newItem);
              toast.success("Product added to cart!");
            }}
          />
        </div>
      )}
    </motion.div>
  );
};

export default PopularProductCard;
