import { useState } from "react";
import { useCart } from "react-use-cart";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Nav from "../components/Nav";

const Checkout = () => {
  const { items, cartTotal, isEmpty, emptyCart } = useCart();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const validateData = () => {
    const { name, phone, email, address } = formData;

    if (!name || !phone || !email || !address) return "Please fill in all fields.";
    if (name.length < 5 || name.length > 30) return "Full name must be between 5 and 30 characters.";
    if (!email.includes("@") || !email.endsWith(".com")) return "Please enter a valid Email.";
    if (!/^\d{10,15}$/.test(phone)) return "Phone number must be between 10 to 15 digits.";
    if (address.length < 10) return "Shipping address is too short.";

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
    navigate("/order-confirmation");
  };

  if (isEmpty)
    return (
      <>
        <Nav />
        <div className="padding text-center">
          <h2 className="text-3xl font-bold font-palanquin mb-4">Your Cart is Empty 🛒</h2>
          <p className="text-slate-gray font-montserrat">Please add items to your cart before proceeding to checkout.</p>
        </div>
      </>
    );

  return (
    <>
      <Nav />
      <section className="padding max-container">
        <h2 className="text-4xl font-bold font-palanquin mb-10 text-center">
          Checkout
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Order Summary */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="text-2xl font-semibold mb-6 border-b pb-2">🧾 Order Summary</h3>
            <ul className="space-y-4">
              {items.map((item) => (
                <li key={item.id} className="flex justify-between items-center">
                  <span>{item.name} × {item.quantity}</span>
                  <span className="font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
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
            <h3 className="text-2xl font-semibold mb-6 border-b pb-2">📦 Shipping Info</h3>
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
                <div className="text-red-600 font-medium text-center mt-2 bg-red-50 border border-red-300 px-4 py-2 rounded">
                  {error}
                </div>
              )}

              <div className="mt-4">
                <Button label="Confirm Order" type="submit" fullWidth />
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Checkout;
