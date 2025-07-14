import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
import { IoMdClose } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { navVariants } from "../utils/motion";
import { slideIn } from "../utils/motion";
import { useCart } from "react-use-cart";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { totalItems } = useCart();

  return (
    <motion.header
      className="padding-x py-8 absolute z-50 w-full"
      variants={navVariants}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true, amount: 0.25 }}
    >
      <nav className="flex justify-between items-center max-container">
        <Link to="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </Link>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((link) => (
            <li key={link.label} className="relative">
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `font-montserrat leading-normal text-lg cursor-pointer transition-colors duration-200 ${
                    isActive
                      ? "text-coral-red font-semibold"
                      : "text-slate-grey"
                  }`
                }
              >
                {link.label}
              </NavLink>

              {link.label === "Cart" && totalItems > 0 && (
                <span className="absolute -top-2 -right-3 bg-coral-red text-white text-xs w-5 h-5 flex items-center justify-center rounded-full transition-all duration-300">
                  {totalItems}
                </span>
              )}
            </li>
          ))}
        </ul>
        <p className="font-montserrat leading-3 text-xl max-lg:hidden">
          Signin / Signup
        </p>
        <FaBars
          className={`cursor-pointer block lg:hidden ${
            isOpen ? "hidden" : "block"
          } hover:text-coral-red transition-colors duration-200`}
          size={30}
          onClick={() => setIsOpen(true)}
        />
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="absolute top-0 right-0 py-8 z-100 w-[300px] bg-gradient-to-r from-white via-lightgray to-white shadow-lg rounded-l-lg"
              variants={slideIn("right", "tween", 0.2, 0.5)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              <div className="flex justify-between px-[2.5rem] items-center">
                <h1 className="text-2xl font-bold leading-3">Menu</h1>
                <IoMdClose
                  onClick={() => setIsOpen(false)}
                  className="cursor-pointer  text-4xl text-gray-700 transition-colors duration-200 hover:text-red-600"
                />
              </div>
              <ul className="flex flex-col justify-center items-center py-14 gap-16">
                {navLinks.map((link) => (
                  <li key={link.label} className="relative">
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        `font-montserrat leading-normal text-lg cursor-pointer transition-colors duration-200 ${
                          isActive
                            ? "text-coral-red font-semibold"
                            : "text-slate-grey"
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>

                    {link.label === "Cart" && totalItems > 0 && (
                      <span className="absolute -top-2 -right-3 bg-coral-red text-white text-xs w-5 h-5 flex items-center justify-center rounded-full transition-all duration-300">
                        {totalItems}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Nav;
