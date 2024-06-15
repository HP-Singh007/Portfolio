import logo from "../assets/logo2.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="mb-15 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10 lg:w-20 rounded-full" src={logo} alt="logo" />
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
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/harmanpreet-singh-ba33b4229"
        >
          <FaLinkedin />
        </a>
        <a target="_blank" href="https://github.com/HP-Singh007">
          <FaGithub />
        </a>
        <a target="_blank" href="https://leetcode.com/u/Harman_preet_Singh/">
          <SiLeetcode />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
