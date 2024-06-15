import React, { useRef } from 'react'
import { CONTACT } from '../constants'
import {motion} from "framer-motion"
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiLeetcode } from "react-icons/si";
import emailjs from '@emailjs/browser';
import toast from "react-hot-toast"

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5tt7r7l', 'template_2pkgtkc', form.current, {
        publicKey: 'iwUd_v1tlx_6leUNs',
      })
      .then(
        () => {
          toast.success('Message Sent Successfully!');
        },
        (error) => {
          toast.error('Some Error Occured : ' + error.text);
        },
      );
      e.target.reset();
  };

  return (
    <div className="border-b border-neutral-900 p-0" id="contactSection">
        <motion.h2 initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.5,delay:0.2}} className="my-10 text-center text-5xl">
            Contact <span className="text-pink-500">Me</span>
        </motion.h2>
        <div className="flex justify-center items-center text-center tracking-tighter">
          <motion.form ref={form} onSubmit={sendEmail} className="flex items-start flex-col w-full lg:w-1/2 gap-2 text-1xl lg:text-2xl bg-gray-800 px-10 py-8 rounded-2xl" initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.7,delay:0.7}}>
            <label>Name</label>
            <input type="text" name="user_name" placeholder="Your Name Here" required className="w-full p-1 text-pink-800 mb-5"/>
            <label>Your Email</label>
            <input type="email" name="user_email" placeholder="example@abc.com" required className="w-full p-1 text-pink-800 mb-5"/>
            <label>Message</label>
            <textarea name="message" required className="w-full p-1 text-pink-800 mb-5" />
            <input type="submit" value="Send" className="m-auto bg-pink-600 py-2 px-5 text-white rounded-2xl cursor-pointer hover:bg-pink-800"/>
          </motion.form>
        </div>
        <div className="text-center tracking-tighter">
            <motion.p initial={{y:-100,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:1,delay:0.2}} className="my-4">{CONTACT.address}</motion.p>
            <motion.p initial={{y:-100,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:1,delay:0.5}} className="my-4">{CONTACT.phoneNo}</motion.p>
            <motion.a initial={{y:-100,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:1,delay:0.7}} href="#" className="my-4 border-b">{CONTACT.email}</motion.a>
            <div className="m-4 flex items-center justify-center gap-4 text-2xl">
              <a href='https://www.linkedin.com/in/harmanpreet-singh-ba33b4229'><FaLinkedin /></a>
              <a href='https://github.com/HP-Singh007'><FaGithub /></a>
              <a href='https://leetcode.com/u/Harman_preet_Singh/'><SiLeetcode /></a>
            </div>
        </div>
    </div>
  )
}

export default Contact
