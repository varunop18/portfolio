"use client";

import { motion } from "framer-motion";
import { TypingText } from "../components";

import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";
import { education, skillGroups, projects } from "../constants";

const languageCount = skillGroups.find((g) => g.title === "Languages").items.length;

const stats = [
  { label: "Languages", value: `${languageCount}+` },
  { label: "Projects", value: `${projects.length}+` },
  { label: "Years Coding", value: "3+" },
];

const About = () => (
  <section className={`${styles.paddings} relative z-10`} id="about" aria-label="About Me">
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="About Me" textStyles="text-center" />

      <motion.div
        variants={fadeIn("up", "tween", 0.1)}
        className="mt-14 w-full max-w-[800px] px-4"
      >
        <div className="mb-6 flex flex-col items-center">
          <h3 className="font-bold text-[20px] text-white sm:text-[24px]">
            Education
          </h3>
          <div
            aria-hidden="true"
            className="mt-2 h-[3px] w-14 rounded-full bg-gradient-to-r from-[#a509ff] to-[#34acc7]"
          />
        </div>
        <div className="flex flex-col gap-5">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              variants={fadeIn("up", "tween", i * 0.05)}
              className="group relative flex flex-col justify-between gap-4 rounded-[24px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#34acc7]/40 hover:bg-white/[0.07] hover:shadow-[0_12px_40px_rgba(52,172,199,0.12)] sm:flex-row sm:items-center sm:p-6"
            >
              <div
                aria-hidden="true"
                className="absolute left-0 top-1/2 h-0 w-[3px] -translate-y-1/2 rounded-full bg-gradient-to-b from-[#a509ff] to-[#34acc7] transition-all duration-500 group-hover:h-[55%]"
              />
              <div>
                <h4 className="font-bold text-[16px] text-white sm:text-[18px]">
                  {edu.degree}
                </h4>
                <p className="mt-1 font-normal text-[14px] text-secondary-white sm:text-[16px]">
                  {edu.school} — {edu.location}
                </p>
                {edu.detail && (
                  <p className="mt-1 font-normal text-[13px] text-secondary-white sm:text-[14px]">
                    {edu.detail}
                  </p>
                )}
              </div>
              <span className="shrink-0 self-start rounded-full border border-white/10 bg-[#0c111b] px-3.5 py-1.5 text-[12px] font-semibold tracking-wide text-white/80 transition-colors duration-500 group-hover:border-[#34acc7]/50 group-hover:text-white sm:self-center sm:text-[13px]">
                {edu.date}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="mt-14 grid w-full max-w-[560px] grid-cols-3 gap-3 px-4 sm:gap-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            variants={fadeIn("up", "tween", 0.15 + i * 0.05)}
            className="group flex flex-col items-center rounded-[20px] border border-white/10 bg-white/[0.04] px-2 py-5 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#34acc7]/40 hover:shadow-[0_8px_30px_rgba(52,172,199,0.12)] sm:px-4 sm:py-6"
          >
            <span className="font-extrabold text-[28px] leading-none text-white sm:text-[36px]">
              {stat.value}
            </span>
            <span className="mt-2 text-center text-[11px] font-medium text-secondary-white sm:text-[13px]">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>

      <motion.img
        variants={fadeIn("up", "tween", 0.25)}
        src="/arrow-down.svg"
        alt="Arrow Down"
        className="mt-[28px] h-[28px] w-[18px] object-contain opacity-70 transition-opacity hover:opacity-100"
      />
    </motion.div>
  </section>
);

export default About;
