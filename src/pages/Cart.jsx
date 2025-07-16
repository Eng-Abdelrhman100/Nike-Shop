import { useCart } from "react-use-cart";
import Button from "../components/Button";
import Nav from "../components/Nav";
import { Link } from "react-router-dom";
import { Footer } from "../sections";
import  CartIcon  from "../assets/images/cart.png";

const Cart = () => {
  const { isEmpty, items, cartTotal, updateItemQuantity, removeItem } =
    useCart();

  if (isEmpty)
    return (
      <>
        <Nav />
        <section className="padding max-container text-center flex flex-col items-center justify-center gap-6 min-h-screen">
          <img
            src={CartIcon}
            alt="empty cart"
            className="w-52 h-52 object-contain"
          />
          <h2 className="text-3xl font-palanquin font-bold text-slate-700 text-center">
            Your cart is empty 🛒
          </h2>
          <p className="text-slate-gray font-montserrat text-center">
            Looks like you haven't added anything to your cart yet.
          </p>
          <Link to="/products">
            <Button label="Start Shopping" />
          </Link>
        </section>
        <section className="padding bg-black padding-x padding-t pb-8">
          <Footer />
        </section>
      </>
    );

  return (
    <>
      <Nav />

      <section className="padding max-container !pt-24">
        <h2 className="text-4xl font-bold font-palanquin mb-10">
          Your <span className="text-coral-red">Cart</span>
        </h2>

        <div className="flex flex-col gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row justify-between items-center gap-6 p-4 border rounded-xl shadow-sm"
            >
              <div className="flex items-center gap-6">
                <img
                  src={item.imgURL}
                  alt={item.name}
                  className="w-24 h-24 object-contain"
                />
                <div>
                  <h4 className="text-xl font-semibold font-palanquin">
                    {item.name}
                  </h4>
                  <p className="text-coral-red font-bold font-montserrat mt-1">
                    ${item.price}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <button
                  onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                  className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 transition"
                >
                  −
                </button>
                <span className="font-semibold">{item.quantity}</span>
                <button
                  onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                  className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 transition"
                >
                  +
                </button>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-600 hover:underline text-sm"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Total Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center mt-12 border-t pt-8 lg:gap-6">
          <p className="text-2xl font-bold font-montserrat lg:mt-14">
            Total:{" "}
            <span className="text-coral-red">${cartTotal.toFixed(2)}</span>
          </p>
          <div className="flex flex-col md:flex-row justify-between items-center mt-12 lg:border-t    gap-4 ">
            <Link to="/products">
              <Button
                label="Continue Shopping"
                backgroundColor="bg-white"
                textColor="text-coral-red"
                borderColor="border-coral-red"
              />
            </Link>

            <Link to="/checkout">
              <Button label="Proceed to Checkout" />
            </Link>
          </div>
        </div>
      </section>
      <section className="padding bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </>
  );
};

export default Cart;
