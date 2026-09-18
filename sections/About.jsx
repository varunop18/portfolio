"use client";

import { motion } from "framer-motion";
import { TypingText } from "../components";

import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";
import { profile, education } from "../constants";

const About = () => (
  <section className={`${styles.paddings} relative z-10`} id="about" aria-label="About Me">
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Me" textStyles="text-center" />

      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal text-[16px] sm:text-[20px] md:text-[24px] text-center text-secondary-white max-w-[800px] px-4"
      >
        <span className="font-extrabold text-white">{profile.name}</span> is a{" "}
        <span className="font-extrabold text-white">
          Computer Programming & Analysis
        </span>{" "}
        student at{" "}
        <span className="font-extrabold text-white">Algonquin College</span>{" "}
        with hands-on experience building full-stack, database-driven, and
        desktop applications in Python, Java, and the MERN stack.
      </motion.p>

      <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="mt-12 w-full max-w-[800px] px-4"
      >
        <h3 className="font-bold text-[20px] sm:text-[24px] text-white mb-6 text-center">
          Education
        </h3>
        <div className="flex flex-col gap-6">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              variants={fadeIn("up", "tween", 0.3 + i * 0.1, 1)}
              className="flex flex-col sm:flex-row sm:items-center justify-between p-5 sm:p-6 rounded-[24px] bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.08)] gap-4 hover:border-[rgba(255,255,255,0.15)] hover:bg-[rgba(255,255,255,0.07)] transition-all duration-500"
            >
              <div>
                <h4 className="font-bold text-[16px] sm:text-[18px] text-white">
                  {edu.degree}
                </h4>
                <p className="font-normal text-[14px] sm:text-[16px] text-secondary-white">
                  {edu.school} — {edu.location}
                </p>
                {edu.detail && (
                  <p className="font-normal text-[13px] sm:text-[14px] text-secondary-white mt-1">
                    {edu.detail}
                  </p>
                )}
              </div>
              <p className="font-normal text-[13px] sm:text-[14px] text-secondary-white shrink-0">
                {edu.date}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={fadeIn("up", "tween", 0.5, 1)}
        className="mt-12 flex gap-6 sm:gap-8 flex-wrap justify-center"
      >
        {[
          { label: "Languages", value: "7+" },
          { label: "Projects", value: "4+" },
          { label: "Years Coding", value: "3+" },
        ].map((stat) => (
          <div key={stat.label} className="flex flex-col items-center">
            <span className="font-bold text-[28px] sm:text-[36px] text-white">
              {stat.value}
            </span>
            <span className="font-normal text-[12px] sm:text-[14px] text-secondary-white">
              {stat.label}
            </span>
          </div>
        ))}
      </motion.div>

      <motion.img
        variants={fadeIn("up", "tween", 0.6, 1)}
        src="/arrow-down.svg"
        alt="Arrow Down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
