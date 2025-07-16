import { useState } from "react";
import { useCart } from "react-use-cart";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Nav from "../components/Nav";

const Checkout = () => {
  const { items, cartTotal, isEmpty } = useCart();
  const [showConfirm, setShowConfirm] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    payment: "cod", // default
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateData = () => {
    const { name, phone, email, address, payment } = formData;

    if (!name || !phone || !email || !address || !payment)
      return "Please fill in all fields.";

    if (name.length < 5 || name.length > 30)
      return "Full name must be between 5 and 30 characters.";

    if (!email.includes("@") || !email.endsWith(".com"))
      return "Please enter a valid Email.";

    if (!/^\d{10,15}$/.test(phone))
      return "Phone number must be between 10 to 15 digits.";

    if (address.length < 10)
      return "Shipping address is too short.";

    if (!["cod", "credit", "paypal"].includes(payment))
      return "Please select a valid payment method.";

    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationMessage = validateData();
    if (validationMessage) {
      setError(validationMessage);
      return;
    }

    setError("");
    setShowConfirm(true);
  };

  if (isEmpty)
    return (
      <>
        <Nav />
        <div className="padding text-center !pt-24">
          <h2 className="text-3xl font-bold font-palanquin mb-4">
            Your Cart is Empty 🛒
          </h2>
          <p className="text-slate-gray font-montserrat">
            Please add items to your cart before proceeding to checkout.
          </p>
        </div>
      </>
    );

  return (
    <>
      <Nav />
      <section className="padding max-container !pt-24">
        <h2 className="text-4xl font-bold font-palanquin mb-10 text-center">
          Checkout
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Order Summary */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="text-2xl font-semibold mb-6 border-b pb-2">
              🧾 Order Summary
            </h3>
            <ul className="space-y-4">
              {items.map((item) => (
                <li key={item.id} className="flex justify-between items-center">
                  <span>
                    {item.name} × {item.quantity}
                  </span>
                  <span className="font-semibold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-4 border-t flex justify-between items-center text-xl font-bold">
              <span>Total</span>
              <span className="text-coral-red">${cartTotal.toFixed(2)}</span>
            </div>
          </div>

          {/* Shipping Form */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="text-2xl font-semibold mb-6 border-b pb-2">
              📦 Shipping Info
            </h3>
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="input border border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-coral-red"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="input border border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-coral-red"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="input border border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-coral-red"
              />
              <textarea
                name="address"
                placeholder="Shipping Address"
                value={formData.address}
                onChange={handleChange}
                rows={3}
                className="input border border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-coral-red resize-none"
              />

              {error && (
                <div className="flex items-center gap-3 text-red-700 bg-red-100 border border-red-300 px-5 py-3 rounded-lg shadow-sm mt-4 font-montserrat text-sm sm:text-base">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v2m0 4h.01M4.93 4.93l14.14 14.14M4.93 19.07L19.07 4.93"
                    />
                  </svg>
                  <span>{error}</span>
                </div>
              )}

              <div className="col-span-full">
                <label className="block mb-2 font-semibold">
                  Payment Method
                </label>
                <div className="flex gap-4 flex-wrap">
                  {["cod", "credit", "paypal"].map((method) => (
                    <label key={method} className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="payment"
                        value={method}
                        checked={formData.payment === method}
                        onChange={handleChange}
                      />
                      <span className="font-montserrat capitalize">
                        {method === "cod"
                          ? "Cash on Delivery"
                          : method === "credit"
                          ? "Credit Card"
                          : "PayPal"}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mt-4">
                <Button label="Confirm Order" type="submit" fullWidth />
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Confirm Modal */}
      {showConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 max-w-md text-center shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-coral-red">
              Confirm Your Order
            </h2>
            <p className="text-slate-gray font-montserrat mb-6">
              Are you sure you want to place this order?
            </p>
            <div className="flex justify-center gap-4">
              <Button
                label="Yes, Confirm"
                onClick={() => {
                  setShowConfirm(false);
                  navigate("/order-confirmation");
                }}
              />
              <Button
                label="Cancel"
                backgroundColor="bg-white"
                textColor="text-coral-red"
                borderColor="border-coral-red"
                onClick={() => setShowConfirm(false)}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Checkout;
