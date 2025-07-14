import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "react-use-cart";

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
    <section className="padding max-container text-center">
      <h2 className="text-4xl font-bold font-palanquin text-coral-red mb-6">Thank you for your order! 🎉</h2>
      <p className="text-xl font-montserrat text-slate-gray">
        Your order has been successfully placed. Redirecting you to the home page...
      </p>
    </section>
  );
};

export default OrderConfirmation;
