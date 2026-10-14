"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { staggerContainer } from "../utils/motion";
import { ExploreCard, TitleText, TypingText } from "../components";
import { skillGroups } from "../constants";

const Skills = () => (
  <section className={`${styles.paddings}`} id="skills" aria-label="Skills">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| Skills Universe" textStyles="text-center" />
      <TitleText
        title={<>Technologies & Tools I Work With</>}
        textStyles="text-center"
      />
      <div className="relative mt-[50px]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#a509ff] opacity-[0.06] blur-[120px]"
        />
        <div className="relative grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, i) => (
            <ExploreCard
              key={group.title}
              title={group.title}
              items={group.items}
              index={i}
            />
          ))}
        </div>
      </div>
    </motion.div>
  </section>
);

export default Skills;
