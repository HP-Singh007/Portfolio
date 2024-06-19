import React from "react";
import aboutImg from "../assets/profile-4.png";
import { ABOUT_TEXT } from "../constants/index";
import { motion } from "framer-motion";
import resume from "../assets/Harmanpreet Singh.pdf"
import { IoMdDownload } from "react-icons/io";

const About = () => {
  return (
    <div className="border-b border-neutral-900 py-4" id="aboutSection">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="my-10 lg:my-20 text-center text-5xl"
      >
        About <span className="text-pink-500">Me</span>
      </motion.h2>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex items-center justify-center">
            <motion.img initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.7, delay:0.2}}
              className="h-full opacity-80 rounded-2xl"
              src={aboutImg}
              alt="About me"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <motion.p initial={{x:100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:0.7, delay:0.5}} className="my-2 maxw-xl text-1xl lg:text-2xl py-6 font-sans font-extralight">{ABOUT_TEXT}</motion.p>
          </div>
          <div className="flex justify-center py-5 lg:py-8">
            <motion.a initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.5,delay:0.8}} className="p-2 text-white-100 bg-pink-800 rounded-full text-2xl flex justify-center items-center gap-3" href={resume} download="Resume-Harman">Resume <IoMdDownload/></motion.a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
