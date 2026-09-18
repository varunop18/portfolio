"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";
import { TitleText, TypingText, StartSteps } from "../components";
import { profile } from "../constants";

const contactSteps = [
  {
    number: 1,
    text: `Send me an email at ${profile.email}`,
    href: `mailto:${profile.email}`,
  },
  {
    number: 2,
    text: `Call me at ${profile.phone}`,
    href: `tel:${profile.phone.replace(/\s/g, "")}`,
  },
  {
    number: 3,
    text: "Connect with me on LinkedIn",
    href: profile.linkedin,
  },
  {
    number: 4,
    text: "Check out my work on GitHub",
    href: profile.github,
  },
];

const Contact = () => (
  <section className={`${styles.paddings} relative z-10`} id="contact" aria-label="Contact">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| Get In Touch" textStyles="text-center" />
      <TitleText
        title={<>Let&apos;s Build Something Great Together</>}
        textStyles="text-center"
      />
      <div className="mt-[50px] flex flex-col max-w-[600px] mx-auto gap-[24px] w-full px-4">
        {contactSteps.map((step) => (
          <a
            key={step.number}
            href={step.href}
            target={step.number > 1 ? "_blank" : undefined}
            rel={step.number > 1 ? "noreferrer noopener" : undefined}
            className="block hover:opacity-80 transition-opacity"
          >
            <StartSteps number={step.number} text={step.text} />
          </a>
        ))}
      </div>
    </motion.div>
  </section>
);

export default Contact;
