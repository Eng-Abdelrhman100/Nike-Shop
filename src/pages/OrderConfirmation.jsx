import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "react-use-cart";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const OrderConfirmation = () => {
  const navigate = useNavigate();
  const { emptyCart } = useCart();

  useEffect(() => {
    emptyCart();
    const timeout = setTimeout(() => {
      navigate("/");
    }, 4000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="padding max-container flex flex-col justify-center items-center text-center min-h-[70vh]">
      <motion.div
        variants={fadeIn("up", "spring", 0.3, 1)}
        initial="hidden"
        animate="show"
        className="bg-[#fff4f3] border border-coral-red rounded-xl p-10 shadow-lg max-w-xl"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/845/845646.png"
          alt="Order Confirmed"
          className="w-28 h-28 mx-auto mb-6"
        />
        <h2 className="text-4xl font-bold font-palanquin text-coral-red mb-4">
          Thank you for your order! 🎉
        </h2>
        <p className="text-lg text-slate-gray font-montserrat">
          Your order has been placed successfully. You'll be redirected to the
          homepage shortly...
        </p>
      </motion.div>
    </section>
  );
};

export default OrderConfirmation;
