import logo from "../assets/logo.png";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="mb-15 flex items-center justify-between py-6">
      <div className="m-auto lg:m-0 flex flex-shrink-0 items-center">
        <img className="lg:mx-2 w-20 lg:w-32 rounded-full" src={logo} alt="logo" />
      </div>
      <motion.div
        className="m-8 hidden lg:flex items-center justify-center gap-20 text-2xl"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 1 }}
      >
        <a href="#aboutSection" className="hover:text-pink-600">
          About Me
        </a>
        <a href="#projectSection" className="hover:text-pink-600">
          Projects
        </a>
        <a href="#contactSection" className="hover:text-pink-600">
          Contact Us
        </a>
      </motion.div>
    </nav>
  );
};

export default Navbar;
