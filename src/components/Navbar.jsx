import logo from "../assets/logo2.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Navbar = () => {
  return (
    <nav className="mb-15 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10 lg:w-20 rounded-full" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a target='_blank' href='https://www.linkedin.com/in/harmanpreet-singh-ba33b4229'><FaLinkedin /></a>
        <a target='_blank' href='https://github.com/HP-Singh007'><FaGithub /></a>
        <a target='_blank' href='https://leetcode.com/u/Harman_preet_Singh/'><SiLeetcode /></a>
      </div>
    </nav>
  );
};

export default Navbar;