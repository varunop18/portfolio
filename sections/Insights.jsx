"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { staggerContainer } from "../utils/motion";
import { TitleText, TypingText } from "../components";
import ExperienceCard from "../components/InsightCard";
import { experience } from "../constants";

const Experience = () => (
  <section className={`${styles.paddings} relative z-10`} id="experience" aria-label="Experience">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| Experience" textStyles="text-center" />
      <TitleText title="Work History" textStyles="text-center" />
      <div className="mt-[50px] flex flex-col gap-[30px]">
        {experience.map((exp, i) => (
          <ExperienceCard key={`exp-${i}`} {...exp} index={i + 1} />
        ))}
      </div>
    </motion.div>
  </section>
);

export default Experience;
