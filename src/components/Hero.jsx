import React from "react";
import profile from "../assets/profile-1.jpg";
import { HERO_CONTENT } from "../constants/index.jsx";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { Typewriter } from 'react-simple-typewriter'

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-2/3">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="pb-5 text-3xl font-mono font-thick tracking-tight pt-45 lg:mt-10 lg:text-7xl"
            >
              Hello I'm
              <p className="text-orange-400 ">Harmanpreet Singh</p>
            </motion.h1>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 1 }}
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl lg:text-3xl tracking-tight text-transparent"
            >
              <Typewriter words={['Full Stack Developer - MERN', 'Identity and Access Management','CyberSecurity']}
              loop={15}
              cursor
              cursorStyle='|'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
              />
            </motion.span>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 1.2 }}
              className=" text-1xl lg:text-2xl my-5 max-w-xl lg:py-2 font-extralight tracking-tight font-sans italic"
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.div
              className="mx-32 flex items-center justify-center gap-10 text-3xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 1.2 }}
            >
              <a
                target="_blank"
                href="https://www.linkedin.com/in/harmanpreet-singh-ba33b4229"
              >
                <FaLinkedin className="hover:text-blue-400" />
              </a>
              <a target="_blank" href="https://github.com/HP-Singh007">
                <FaGithub className="hover:text-red-400" />
              </a>
              <a
                target="_blank"
                href="https://leetcode.com/u/Harman_preet_Singh/"
              >
                <SiLeetcode className="hover:text-orange-400" />
              </a>
            </motion.div>
          </div>
        </div>
        <div className="w-full p-50 lg:w-1/3 lg:p-10">
          <div className="flex justify-center;">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="p-8 lg:p-0 rounded-full lg:border-8 lg:border-orange-300 lg:border-style: double"
              src={profile}
              alt="profile"
              id="profileImg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
