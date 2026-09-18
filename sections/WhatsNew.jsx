"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import styles from "../styles";
import { TitleText, TypingText } from "../components";
import { projects } from "../constants";

const ProjectCard = ({ project, index }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.95", "start 0.4"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [80, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);
  const blur = useTransform(scrollYProgress, [0, 1], ["blur(4px)", "blur(0px)"]);

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity, scale, filter: blur }}
      whileHover={{
        y: -6,
        transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] },
      }}
      className="card-glow flex flex-col p-6 sm:p-8 rounded-[32px] bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.08)] gap-4 hover:border-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.07)] transition-all duration-500"
      willChange="transform"
    >
      <div>
        <h3 className="font-bold text-[22px] sm:text-[28px] text-white leading-tight">
          {project.title}
        </h3>
        {project.date && (
          <p className="mt-2 font-normal text-[14px] text-secondary-white">
            {project.date}
          </p>
        )}
        {project.client && (
          <p className="mt-1 font-normal text-[14px] text-secondary-white italic">
            {project.client}
          </p>
        )}
      </div>

      <div className="flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 rounded-full bg-[#323f5d] font-normal text-[13px] text-secondary-white hover:bg-[#3d4f73] hover:text-white transition-all duration-300"
          >
            {tech}
          </span>
        ))}
      </div>

      <ul className="flex flex-col gap-2">
        {project.bullets.slice(0, 2).map((bullet, j) => (
          <li
            key={j}
            className="font-normal text-[14px] sm:text-[15px] text-secondary-white leading-[24px] flex gap-2"
          >
            <span className="text-white mt-1 shrink-0">▸</span>
            {bullet}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const FeaturedProjects = () => {
  const featured = projects.filter((p) => p.featured);
  const sectionRef = useRef(null);
  const { scrollYProgress: titleProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.8", "start 0.4"],
  });
  const titleY = useTransform(titleProgress, [0, 1], [40, 0]);
  const titleOpacity = useTransform(titleProgress, [0, 1], [0, 1]);

  return (
    <section
      ref={sectionRef}
      className={`${styles.paddings} relative z-10`}
      id="projects"
      aria-label="Featured Projects"
    >
      <motion.div
        style={{ y: titleY, opacity: titleOpacity }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| Featured Projects" textStyles="text-center" />
        <TitleText
          title={<>Projects I&apos;m Proud Of</>}
          textStyles="text-center"
        />
        <div className="mt-[50px] grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featured.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default FeaturedProjects;
