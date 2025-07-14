import { useParams, useNavigate } from "react-router-dom";
import { products } from "../constants";
import { useCart } from "react-use-cart";
import Nav from "../components/Nav";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";
import { star } from "../assets/icons";

const ProductDetails = () => {
  const { name } = useParams();
  const product = products.find((item) => item.name === name);
  const { addItem } = useCart();
  const navigate = useNavigate();

  if (!product)
    return (
      <>
        <Nav />
        <section className="min-h-[60vh] flex flex-col justify-center items-center gap-6 padding text-center">
          <motion.h2
            className="text-3xl font-bold text-coral-red font-palanquin"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Oops! Product Not Found 😢
          </motion.h2>
          <p className="text-slate-gray font-montserrat text-lg">
            The product you’re looking for doesn’t exist or has been removed.
          </p>
          <button
            className="mt-2 bg-coral-red text-white px-6 py-3 rounded-full font-montserrat hover:bg-red-500 transition"
            onClick={() => navigate("/products")}
          >
            Go Back to Products
          </button>
        </section>
      </>
    );

  return (
    <>
      <Nav />
      <motion.section
        className="padding-x pt-32 pb-20 max-container flex flex-col lg:flex-row gap-16"
        variants={staggerContainer(0.2, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        {/* Product Image */}
        <motion.div
          className="flex-1 flex justify-center items-center"
          variants={fadeIn("left", "spring", 0.3, 1)}
        >
          <img src={product.imgURL} alt={product.name} className="w-[400px]" />
        </motion.div>

        {/* Product Info */}
        <motion.div
          className="flex-1 flex flex-col justify-center"
          variants={fadeIn("right", "spring", 0.5, 1)}
        >
          <h1 className="text-4xl font-bold font-palanquin">{product.name}</h1>
          <p className="text-xl text-slate-gray font-montserrat mt-4">
            This is a detailed view for the selected Nike product.
          </p>
          <p className="text-3xl text-coral-red font-bold mt-6">
            {product.price}
          </p>
          <div className="mt-4 flex items-center gap-2">
            <img src={star} alt="rating" width={24} height={24} />
            <span className="text-lg font-montserrat text-slate-gray">
              {product.rating} / 5
            </span>
          </div>

          <button
            className="mt-8 bg-coral-red text-white px-6 py-3 rounded-full font-montserrat hover:bg-red-500 transition"
            onClick={() => {
              addItem({
                id: product.name,
                name: product.name,
                price: parseFloat(product.price.replace("$", "")),
                imgURL: product.imgURL,
                quantity: 1,
              });
              toast.success("Product added to cart!");
            }}
          >
            Add to Cart
          </button>
        </motion.div>
      </motion.section>
    </>
  );
};

export default ProductDetails;
