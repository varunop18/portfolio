"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";
import { TitleText, TypingText, StartSteps } from "../components";
import { profile } from "../constants";

const contactSteps = [
  {
    number: "01",
    label: "Send me an Email",
    detail: profile.email,
    href: `mailto:${profile.email}`,
    external: false,
  },
  {
    number: "02",
    label: "Call me directly",
    detail: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, "")}`,
    external: false,
  },
  {
    number: "03",
    label: "Connect on LinkedIn",
    detail: "linkedin.com/in/varun-rathod-va",
    href: profile.linkedin,
    external: true,
  },
  {
    number: "04",
    label: "Check out my GitHub",
    detail: "github.com/varunop18",
    href: profile.github,
    external: true,
  },
];

const Contact = () => (
  <section className={`${styles.paddings} relative z-10`} id="contact" aria-label="Contact">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| Get In Touch" textStyles="text-center" />
      <TitleText
        title={<>Let&apos;s Build Something Great Together</>}
        textStyles="text-center"
      />
      <div className="relative mx-auto mt-[50px] w-full max-w-[920px] px-4">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#34acc7] opacity-[0.07] blur-[120px]"
        />
        <motion.div
          variants={fadeIn("up", "tween", 0.05)}
          className="relative grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5"
        >
          {contactSteps.map((step) => (
            <a
              key={step.number}
              href={step.href}
              target={step.external ? "_blank" : undefined}
              rel={step.external ? "noreferrer noopener" : undefined}
              aria-label={`${step.label}: ${step.detail}`}
              className="block rounded-[24px]"
            >
              <StartSteps number={step.number} label={step.label} detail={step.detail} />
            </a>
          ))}
        </motion.div>
      </div>
    </motion.div>
  </section>
);

export default Contact;
