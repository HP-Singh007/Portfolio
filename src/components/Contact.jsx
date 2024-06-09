import React from 'react'
import { CONTACT } from '../constants'
import {motion} from "framer-motion"
import { duration } from '@mui/material'

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
        <motion.h2 initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.5,delay:0.5}} className="my-10 text-center text-5xl">
            Contact <span className="text-pink-500">Me</span>
        </motion.h2>
        <div className="text-center tracking-tighter">
            <motion.p initial={{y:-100,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:1,delay:0.5}} className="my-4">{CONTACT.address}</motion.p>
            <motion.p initial={{y:-100,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:1,delay:0.7}} className="my-4">{CONTACT.phoneNo}</motion.p>
            <motion.a initial={{y:-100,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:1,delay:0.9}} href="#" className="my-4 border-b">{CONTACT.email}</motion.a>
        </div>
    </div>
  )
}

export default Contact