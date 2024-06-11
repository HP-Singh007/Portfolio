import React from "react";
import Carousel from "react-material-ui-carousel";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="my-20 text-center text-5xl text-pink-400"
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="mb-40 my-10 flex flex-wrap lg:justify-around"
          >
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="w-full lg:w-1/3"
            >
              <Carousel indicators={false}>
                {project.images.map((img, index) => (
                  <img
                    src={img}
                    alt={project.title}
                    className="w-full lg:mb-6 rounded"
                  />
                ))}
              </Carousel>
            </motion.div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="w-full mt-10 lg:mt-0 max-w-xl lg:w-2/3"
            >
              <a href={project.link} target="_blank"  className="mb-2 border-b border-orange-400 font-semibold text-2xl text-orange-400">{project.title}</a>
              <p className="mb-4 mt-4 text-neutral-400">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 rounded bg-neutral-900 px-2 py-1 text-small font-medium text-pink-900"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
