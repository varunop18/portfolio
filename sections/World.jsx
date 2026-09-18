"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";
import { TitleText, TypingText } from "../components";
import ProjectCard from "../components/NewFeatures";
import { projects } from "../constants";

const Projects = () => (
  <section className={`${styles.paddings} relative z-10`} aria-label="All Projects">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| All Projects" textStyles="text-center" />
      <TitleText title="Full Project Grid" textStyles="text-center" />

      <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="mt-[50px] grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {projects.map((project, i) => (
          <ProjectCard key={project.id} {...project} index={i} />
        ))}
      </motion.div>
    </motion.div>
  </section>
);

export default Projects;
