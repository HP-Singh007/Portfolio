import React from "react";
import profile from "../assets/profile.jpg";
import { HERO_CONTENT } from "../constants/index";
import { motion } from "framer-motion";

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
              className="pb-5 text-6xl font-thin tracking-tight lg:mt-16 lg:text-7xl"
            >
              Harmanpreet Singh
            </motion.h1>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 1 }}
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 1.2 }}
              className=" text-2xl my-10 max-w-xl py-10 font-light tracking-tighter font-lucid"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full p-50 lg:w-1/3 lg:p-10">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="rounded-full"
              src={profile}
              alt="profile"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
