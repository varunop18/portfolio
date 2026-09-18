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
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| Skills Universe" textStyles="text-center" />
      <TitleText
        title={<>Technologies & Tools I Work With</>}
        textStyles="text-center"
      />
      <div className="mt-[50px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {skillGroups.map((group, i) => (
          <ExploreCard
            key={group.title}
            title={group.title}
            items={group.items}
            index={i}
          />
        ))}
      </div>
    </motion.div>
  </section>
);

export default Skills;
