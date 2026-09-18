"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import styles from "../styles";
import { staggerContainer } from "../utils/motion";
import { TitleText, TypingText } from "../components";
import { projects } from "../constants";

const cardStyles = [
  {
    bg: "linear-gradient(180deg, #0d0b1a 0%, #2d1b69 35%, #6b21a8 65%, #a855f7 100%)",
    overlay: "linear-gradient(0deg, rgba(13,11,26,0.95) 0%, rgba(45,27,105,0.3) 40%, transparent 70%)",
    glow: "#a855f7",
    particles: true,
  },
  {
    bg: "linear-gradient(180deg, #0a1628 0%, #0c4a5e 35%, #0891b2 65%, #22d3ee 100%)",
    overlay: "linear-gradient(0deg, rgba(10,22,40,0.95) 0%, rgba(12,74,94,0.3) 40%, transparent 70%)",
    glow: "#22d3ee",
    particles: true,
  },
  {
    bg: "linear-gradient(180deg, #0d0b1a 0%, #312e81 35%, #6366f1 65%, #a5b4fc 100%)",
    overlay: "linear-gradient(0deg, rgba(13,11,26,0.95) 0%, rgba(49,46,129,0.3) 40%, transparent 70%)",
    glow: "#6366f1",
    particles: false,
  },
  {
    bg: "linear-gradient(180deg, #0a1628 0%, #1e3a5f 35%, #2563eb 65%, #60a5fa 100%)",
    overlay: "linear-gradient(0deg, rgba(10,22,40,0.95) 0%, rgba(30,58,95,0.3) 40%, transparent 70%)",
    glow: "#2563eb",
    particles: true,
  },
];

const particleData = [
  { w: 2.1, h: 1.8, t: 12, l: 15, dur: 3.2, del: 0.5 },
  { w: 1.5, h: 2.4, t: 28, l: 42, dur: 2.8, del: 1.2 },
  { w: 2.8, h: 1.2, t: 55, l: 78, dur: 3.8, del: 0.3 },
  { w: 1.8, h: 2.0, t: 38, l: 62, dur: 4.1, del: 1.8 },
  { w: 2.3, h: 1.6, t: 68, l: 25, dur: 2.5, del: 0.9 },
  { w: 1.2, h: 2.6, t: 18, l: 85, dur: 3.5, del: 1.5 },
  { w: 2.6, h: 1.4, t: 45, l: 10, dur: 4.3, del: 0.7 },
  { w: 1.9, h: 2.2, t: 72, l: 55, dur: 2.9, del: 1.1 },
  { w: 2.4, h: 1.7, t: 32, l: 90, dur: 3.6, del: 0.2 },
  { w: 1.4, h: 2.8, t: 82, l: 35, dur: 4.0, del: 1.6 },
  { w: 2.7, h: 1.3, t: 22, l: 68, dur: 3.1, del: 0.8 },
  { w: 1.6, h: 2.1, t: 58, l: 48, dur: 2.7, del: 1.3 },
];

const Particles = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {particleData.map((p, i) => (
      <span
        key={i}
        className="absolute rounded-full bg-white/30"
        style={{
          width: `${p.w}px`,
          height: `${p.h}px`,
          top: `${p.t}%`,
          left: `${p.l}%`,
          animation: `pulse ${p.dur}s ease-in-out infinite`,
          animationDelay: `${p.del}s`,
        }}
      />
    ))}
  </div>
);

const LightBeam = ({ glow }) => (
  <div
    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-[180px] pointer-events-none z-0"
    style={{
      background: `radial-gradient(ellipse at center bottom, ${glow}55 0%, ${glow}20 30%, transparent 70%)`,
    }}
  />
);

const DesktopCard = ({ project, index, isActive, onHover }) => {
  const style = cardStyles[index % cardStyles.length];

  return (
    <motion.div
      layout
      onHoverStart={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
      animate={{
        flex: isActive ? "1 1 420px" : "1 1 80px",
      }}
      transition={{ type: "spring", stiffness: 180, damping: 22 }}
      className={`relative rounded-[20px] overflow-hidden cursor-pointer ${
        isActive ? "min-w-[340px]" : "min-w-[80px]"
      }`}
      style={{ minHeight: "440px" }}
    >
      <div className="absolute inset-0" style={{ background: style.bg }} />
      <div className="absolute inset-0" style={{ background: style.overlay }} />

      {style.particles && <Particles />}
      {isActive && <LightBeam glow={style.glow} />}

      <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 80%, ${style.glow}30 0%, transparent 60%)`,
        }}
      />

      <div className="relative h-full flex flex-col justify-end p-5 sm:p-6 z-10">
        <AnimatePresence mode="wait">
          {isActive ? (
            <motion.div
              key="expanded"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="flex flex-col gap-3"
            >
              <p className="font-normal text-[11px] uppercase tracking-[2px] text-white/50">
                {project.date || "Project"}
              </p>
              <h3 className="font-bold text-[20px] sm:text-[24px] text-white leading-tight">
                {project.title.split("—")[0].split("–")[0].trim()}
              </h3>
              {project.client && (
                <p className="font-normal text-[12px] text-white/50 italic">{project.client}</p>
              )}
              <div className="flex flex-wrap gap-1.5 mt-1">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-full bg-white/10 text-white text-[11px] font-medium backdrop-blur-sm border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <ul className="flex flex-col gap-2 mt-2">
                {project.bullets.map((bullet, j) => (
                  <li
                    key={j}
                    className="font-normal text-[12px] sm:text-[13px] text-white/75 leading-[18px] flex gap-2"
                  >
                    <span className="text-white/40 shrink-0 mt-0.5">▸</span>
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
              className="flex flex-col items-center pb-4"
            >
              <span
                className="font-bold text-[14px] sm:text-[15px] text-white/90 whitespace-nowrap"
                style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
              >
                {project.title.split("—")[0].split("–")[0].trim()}
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {isActive && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 rounded-[20px] border-2 pointer-events-none z-20"
          style={{ borderColor: `${style.glow}40` }}
        />
      )}
    </motion.div>
  );
};

const MobileCard = ({ project, index }) => {
  const [expanded, setExpanded] = useState(false);
  const style = cardStyles[index % cardStyles.length];

  return (
    <motion.div
      variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { delay: index * 0.1, duration: 0.6 } } }}
      layout
      onClick={() => setExpanded(!expanded)}
      className="relative rounded-[20px] overflow-hidden"
      style={{ minHeight: expanded ? "auto" : "240px" }}
    >
      <div className="absolute inset-0" style={{ background: style.bg }} />
      <div className="absolute inset-0" style={{ background: style.overlay }} />
      {style.particles && <Particles />}
      {expanded && <LightBeam glow={style.glow} />}

      <motion.div layout="position" className="relative z-10 p-5 flex flex-col gap-2">
        <p className="font-normal text-[10px] uppercase tracking-[2px] text-white/50">
          {project.date || "Project"}
        </p>
        <h3 className="font-bold text-[16px] text-white leading-tight">
          {project.title.split("—")[0].split("–")[0].trim()}
        </h3>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="overflow-hidden flex flex-col gap-2"
            >
              {project.client && (
                <p className="font-normal text-[11px] text-white/50 italic">{project.client}</p>
              )}
              <div className="flex flex-wrap gap-1.5 mt-1">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-full bg-white/10 text-white text-[10px] font-medium backdrop-blur-sm border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <ul className="flex flex-col gap-1.5 mt-1">
                {project.bullets.map((bullet, j) => (
                  <li
                    key={j}
                    className="font-normal text-[11px] text-white/75 leading-[16px] flex gap-1.5"
                  >
                    <span className="text-white/40 shrink-0">▸</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        {!expanded && (
          <div className="flex flex-wrap gap-1.5 mt-1">
            {project.stack.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded-full bg-white/10 text-white text-[10px] font-medium backdrop-blur-sm border border-white/10"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        <p className="text-[10px] text-white/30 mt-2">
          {expanded ? "Tap to collapse" : "Tap to expand"}
        </p>
      </motion.div>
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

        <div className="mt-[50px] hidden md:flex gap-3 justify-center px-2">
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

        <div className="mt-[30px] grid grid-cols-1 sm:grid-cols-2 gap-3 px-2 md:hidden">
          {projects.map((project, i) => (
            <MobileCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
