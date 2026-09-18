"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import styles from "../styles";
import { staggerContainer, fadeIn } from "../utils/motion";
import { TitleText, TypingText } from "../components";
import { projects } from "../constants";

const cardGradients = [
  "from-[#6b21a8] via-[#7c3aed] to-[#2563eb]",
  "from-[#0e7490] via-[#06b6d4] to-[#2dd4bf]",
  "from-[#b91c1c] via-[#dc2626] to-[#f97316]",
  "from-[#1d4ed8] via-[#3b82f6] to-[#8b5cf6]",
];

const MobileCard = ({ project, index }) => {
  const gradient = cardGradients[index % cardGradients.length];

  return (
    <motion.div
      variants={fadeIn("up", "tween", index * 0.15, 0.8)}
      whileHover={{ y: -4, transition: { duration: 0.3 } }}
      className="relative rounded-2xl overflow-hidden min-h-[280px] flex flex-col justify-end"
    >
      <div className={`absolute inset-0 bg-gradient-to-b ${gradient}`} />
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.75)] via-[rgba(0,0,0,0.2)] to-transparent" />
      <div className="relative z-10 p-5 flex flex-col gap-2">
        <h3 className="font-bold text-[16px] sm:text-[18px] text-white leading-tight">
          {project.title}
        </h3>
        {project.date && (
          <p className="font-normal text-[11px] text-white/60">{project.date}</p>
        )}
        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded-full bg-white/15 text-white text-[10px] font-normal backdrop-blur-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        <p className="font-normal text-[11px] text-white/70 leading-[16px] mt-1 line-clamp-2">
          {project.bullets[0]}
        </p>
      </div>
    </motion.div>
  );
};

const DesktopCard = ({ project, index, isActive, onHover }) => {
  const gradient = cardGradients[index % cardGradients.length];

  return (
    <motion.div
      layout
      onHoverStart={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
      animate={{
        flex: isActive ? "1 1 400px" : "1 1 60px",
      }}
      transition={{ type: "spring", stiffness: 200, damping: 25 }}
      className={`relative rounded-2xl overflow-hidden cursor-pointer ${
        isActive ? "min-w-[300px]" : "min-w-[60px]"
      }`}
      style={{ minHeight: "420px" }}
    >
      <div className={`absolute inset-0 bg-gradient-to-b ${gradient}`} />
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.7)] via-transparent to-transparent" />

      <div className="relative h-full flex flex-col justify-end p-5 sm:p-6 z-10">
        <AnimatePresence mode="wait">
          {isActive ? (
            <motion.div
              key="expanded"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-3"
            >
              <h3 className="font-bold text-[18px] sm:text-[22px] text-white leading-tight">
                {project.title}
              </h3>
              {project.date && (
                <p className="font-normal text-[12px] text-white/70">{project.date}</p>
              )}
              {project.client && (
                <p className="font-normal text-[12px] text-white/60 italic">{project.client}</p>
              )}
              <div className="flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded-full bg-white/15 text-white text-[11px] font-normal backdrop-blur-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <ul className="flex flex-col gap-1.5 mt-1">
                {project.bullets.map((bullet, j) => (
                  <li
                    key={j}
                    className="font-normal text-[12px] sm:text-[13px] text-white/80 leading-[18px] flex gap-1.5"
                  >
                    <span className="text-white shrink-0">▸</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </motion.div>
          ) : (
            <motion.div
              key="collapsed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center"
            >
              <span
                className="font-bold text-[14px] sm:text-[16px] text-white whitespace-nowrap"
                style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
              >
                {project.title.split("—")[0].split("–")[0].trim()}
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <section className={`${styles.paddings} relative z-10`} aria-label="All Projects">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| All Projects" textStyles="text-center" />
        <TitleText
          title={<>Projects I&apos;ve Built</>}
          textStyles="text-center"
        />

        <div className="mt-[50px] hidden md:flex gap-3 sm:gap-4 justify-center px-2">
          {projects.map((project, i) => (
            <DesktopCard
              key={project.id}
              project={project}
              index={i}
              isActive={activeIndex === i}
              onHover={setActiveIndex}
            />
          ))}
        </div>

        <div className="mt-[50px] grid grid-cols-2 gap-3 px-2 md:hidden">
          {projects.map((project, i) => (
            <MobileCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
