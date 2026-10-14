"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { staggerContainer } from "../utils/motion";
import { TitleText, TypingText } from "../components";
import { projects } from "../constants";

const featuredStyles = [
  {
    gradient: "linear-gradient(135deg, #0d0b1a 0%, #2d1b69 40%, #7c3aed 100%)",
    glow: "#a855f7",
    accent: "#c084fc",
  },
  {
    gradient: "linear-gradient(135deg, #0a1628 0%, #0c4a5e 40%, #0891b2 100%)",
    glow: "#22d3ee",
    accent: "#67e8f9",
  },
];

const ProjectCard = ({ project, index }) => {
  const style = featuredStyles[index % featuredStyles.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{
        y: -8,
        transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] },
      }}
      className="relative rounded-[28px] overflow-hidden group"
    >
      <div className="absolute inset-0" style={{ background: style.gradient }} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 100%, ${style.glow}40 0%, transparent 60%)`,
        }}
      />

      <div className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `linear-gradient(90deg, transparent, ${style.accent}, transparent)` }}
      />

      <div className="relative flex flex-col p-6 sm:p-8 gap-5 z-10">
        <div className="flex items-center gap-3">
          <div
            className="w-2.5 h-2.5 rounded-full"
            style={{ background: style.accent, boxShadow: `0 0 12px ${style.glow}` }}
          />
          <p className="font-normal text-[12px] uppercase tracking-[3px] text-white/50">
            Featured Project
          </p>
        </div>

        <div>
          <h3 className="font-bold text-[22px] sm:text-[28px] text-white leading-tight">
            {project.title.split("—")[0].split("–")[0].trim()}
          </h3>
          {project.date && (
            <p className="mt-2 font-normal text-[13px] text-white/50">{project.date}</p>
          )}
          {project.client && (
            <p className="mt-1 font-normal text-[13px] text-white/40 italic">{project.client}</p>
          )}
        </div>

        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 rounded-full text-[12px] font-medium backdrop-blur-sm border transition-all duration-300"
              style={{
                background: `${style.glow}15`,
                borderColor: `${style.glow}25`,
                color: style.accent,
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="w-full h-[1px] bg-white/10" />

        <ul className="flex flex-col gap-3">
          {project.bullets.map((bullet, j) => (
            <li
              key={j}
              className="font-normal text-[13px] sm:text-[14px] text-white/70 leading-[22px] flex gap-2.5"
            >
              <span className="shrink-0 mt-1 w-1.5 h-1.5 rounded-full" style={{ background: style.accent }} />
              {bullet}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 mt-1 text-white/40 group-hover:text-white/70 transition-colors duration-300">
          <span className="text-[13px] font-medium">Explore project</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="group-hover:translate-x-1 transition-transform duration-300">
            <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </motion.div>
  );
};

const FeaturedProjects = () => {
  const featured = projects.filter((p) => p.featured);

  return (
    <section className={`${styles.paddings} relative z-10`} id="projects" aria-label="Featured Projects">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={staggerContainer}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| Featured Projects" textStyles="text-center" />
        <TitleText title={<>Projects I&apos;m Proud Of</>} textStyles="text-center" />
        <div className="mt-[50px] grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {featured.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default FeaturedProjects;
