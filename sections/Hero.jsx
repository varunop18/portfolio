"use client";

import { useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";

import styles from "../styles";
import { profile } from "../constants";

const CodeTerminal = () => (
  <div className="w-full z-10 relative flex justify-center px-4">
    <div className="w-full max-w-[650px] bg-[rgba(12,17,27,0.9)] rounded-xl border border-[rgba(255,255,255,0.07)] shadow-[0_8px_40px_rgba(0,0,0,0.4)] overflow-hidden backdrop-blur-md">
      <div className="flex items-center gap-2 px-4 py-2 bg-[rgba(255,255,255,0.03)] border-b border-[rgba(255,255,255,0.06)]">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 text-[11px] text-[rgba(255,255,255,0.25)] font-mono">varun@dev ~ </span>
      </div>
      <div className="p-4 sm:p-5 font-mono text-[11px] sm:text-[12px] leading-[20px] sm:leading-[22px]">
        <p><span className="text-[#c792ea]">const</span> <span className="text-[#82aaff]">developer</span> <span className="text-[#89ddff]">=</span> <span className="text-[#89ddff]">{"{"}</span></p>
        <p className="pl-4"><span className="text-[#c3e88d]">name</span><span className="text-[#89ddff]">:</span> <span className="text-[#c3e88d]">"Varun Rathod"</span><span className="text-[#89ddff]">,</span></p>
        <p className="pl-4"><span className="text-[#c3e88d]">role</span><span className="text-[#89ddff]">:</span> <span className="text-[#c3e88d]">"Full-Stack Developer"</span><span className="text-[#89ddff]">,</span></p>
        <p className="pl-4"><span className="text-[#c3e88d]">stack</span><span className="text-[#89ddff]">:</span> <span className="text-[#89ddff]">[</span></p>
        <p className="pl-8"><span className="text-[#c3e88d]">"React"</span><span className="text-[#89ddff]">,</span> <span className="text-[#c3e88d]">"Node.js"</span><span className="text-[#89ddff]">,</span> <span className="text-[#c3e88d]">"Python"</span><span className="text-[#89ddff]">,</span></p>
        <p className="pl-8"><span className="text-[#c3e88d]">"Java"</span><span className="text-[#89ddff]">,</span> <span className="text-[#c3e88d]">"Django"</span><span className="text-[#89ddff]">,</span> <span className="text-[#c3e88d]">"PostgreSQL"</span></p>
        <p className="pl-4"><span className="text-[#89ddff]">]</span><span className="text-[#89ddff]">,</span></p>
        <p className="pl-4"><span className="text-[#c3e88d]">status</span><span className="text-[#89ddff]">:</span> <span className="text-[#ffcb6b]">"Open to opportunities"</span></p>
        <p><span className="text-[#89ddff]">{"}"}</span><span className="text-[#89ddff]">;</span></p>
        <p className="mt-2"><span className="text-[#546e7a]">{"// Let's build something great together"}</span></p>
        <p className="mt-1"><span className="text-[#c792ea]">export default</span> <span className="text-[#82aaff]">developer</span><span className="text-[#89ddff]">;</span><span className="inline-block w-[6px] h-[14px] bg-[#82aaff] ml-1 animate-pulse" /></p>
      </div>
    </div>
  </div>
);

const HeroButtons = () => (
  <div className="mt-8 flex gap-3 sm:gap-4 flex-wrap justify-center px-4 relative z-10">
    <a
      href="#projects"
      className="glossy-btn py-3 sm:py-4 px-6 sm:px-8 bg-[#25618b] rounded-[32px] font-normal text-[14px] sm:text-[16px] text-white hover:bg-[#2d73a3] hover:shadow-[0_0_20px_rgba(37,97,139,0.4)] transition-all duration-400"
    >
      View My Work
    </a>
    <a
      href="/Varun_Rathod_Resume.pdf"
      target="_blank"
      rel="noreferrer noopener"
      className="glossy-btn py-3 sm:py-4 px-6 sm:px-8 border border-white rounded-[32px] font-normal text-[14px] sm:text-[16px] text-white hover:bg-[rgba(255,255,255,0.1)] hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-400"
    >
      Download Résumé
    </a>
  </div>
);

const StaticHero = ({ roleIndex }) => (
  <section className="min-h-[90dvh] flex flex-col justify-center pt-24 pb-12 px-5" id="hero" aria-label="Hero">
    <div className={`${styles.innerWidth} mx-auto flex flex-col items-center text-center`}>
      <h1 className={styles.heroHeading}>VARUN</h1>
      <h1 className={styles.heroHeading}>RATHOD</h1>
      <div className="mt-6 h-[40px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.p
            key={roleIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="font-normal text-[18px] text-secondary-white text-center"
          >
            {profile.rotatingRoles[roleIndex]}
          </motion.p>
        </AnimatePresence>
      </div>
      <p className="mt-4 font-normal text-[14px] text-secondary-white max-w-[600px] px-4">
        {profile.summary}
      </p>
      <HeroButtons />
      <div className="relative w-full mt-8">
        <div className="absolute w-[80%] h-[200px] hero-gradient rounded-full z-0 -top-[40px] left-[10%] blur-[60px] opacity-50" />
        <CodeTerminal />
      </div>
    </div>
  </section>
);

const DesktopHero = ({ roleIndex }) => {
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end start"],
  });

  const nameY = useTransform(scrollYProgress, [0, 0.5], [0, -80]);
  const nameScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.85]);
  const nameOpacity = useTransform(scrollYProgress, [0.3, 0.55], [1, 0]);
  const roleOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const roleY = useTransform(scrollYProgress, [0, 0.3], [0, -30]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.25], [0, -20]);
  const visualY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const visualScale = useTransform(scrollYProgress, [0, 0.6], [1, 1.1]);
  const visualOpacity = useTransform(scrollYProgress, [0.4, 0.7], [1, 0]);

  return (
    <section className="relative min-h-screen" id="hero" aria-label="Hero">
      <div className="pt-28 pb-8 sm:pl-16 pl-6 flex flex-col justify-center min-h-screen">
        <div className={`${styles.innerWidth} mx-auto flex flex-col relative`}>
          <motion.div
            style={{ y: nameY, scale: nameScale, opacity: nameOpacity, willChange: "transform, opacity" }}
            className="flex justify-center items-center flex-col relative z-10"
          >
            <h1 className={styles.heroHeading}>VARUN</h1>
            <h1 className={styles.heroHeading}>RATHOD</h1>
          </motion.div>

          <motion.div style={{ opacity: roleOpacity, y: roleY }} className="mt-6 h-[40px] flex items-center justify-center relative z-10">
            <AnimatePresence mode="wait">
              <motion.p
                key={roleIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="font-normal sm:text-[24px] text-[18px] text-secondary-white text-center"
              >
                {profile.rotatingRoles[roleIndex]}
              </motion.p>
            </AnimatePresence>
          </motion.div>

          <motion.p
            style={{ opacity: contentOpacity, y: contentY }}
            className="mt-4 font-normal sm:text-[18px] text-[14px] text-secondary-white text-center max-w-[600px] px-4 relative z-10 mx-auto"
          >
            {profile.summary}
          </motion.p>

          <motion.div style={{ opacity: contentOpacity, y: contentY }} className="mt-8 flex gap-4 flex-wrap justify-center px-4 relative z-10">
            <HeroButtons />
          </motion.div>

          <motion.div
            style={{ y: visualY, scale: visualScale, opacity: visualOpacity, willChange: "transform, opacity" }}
            className="relative w-full mt-6"
          >
            <div className="absolute w-[80%] h-[200px] hero-gradient rounded-full z-0 -top-[40px] left-[10%] blur-[60px] opacity-60" />
            <CodeTerminal />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [mode, setMode] = useState("static");

  useEffect(() => {
    const mqDesktop = window.matchMedia("(min-width: 1024px)");
    const update = () => setMode(mqDesktop.matches ? "desktop" : "static");
    update();
    mqDesktop.addEventListener("change", update);
    return () => mqDesktop.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % profile.rotatingRoles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  if (mode === "desktop") {
    return <DesktopHero roleIndex={roleIndex} />;
  }

  return <StaticHero roleIndex={roleIndex} />;
};

export default Hero;
