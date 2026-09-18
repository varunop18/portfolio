"use client";

import { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";

import styles from "../styles";
import { profile } from "../constants";

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const containerRef = useRef(null);
  const prefersReduced =
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false;

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % profile.rotatingRoles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const nameY = useTransform(scrollYProgress, [0, 0.5], [0, -120]);
  const nameScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.75]);
  const nameOpacity = useTransform(scrollYProgress, [0.3, 0.55], [1, 0]);

  const roleOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const roleY = useTransform(scrollYProgress, [0, 0.3], [0, -40]);

  const summaryOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const summaryY = useTransform(scrollYProgress, [0, 0.25], [0, -30]);

  const buttonsOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const buttonsY = useTransform(scrollYProgress, [0, 0.2], [0, -20]);

  const visualY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const visualScale = useTransform(scrollYProgress, [0, 0.6], [1, 1.15]);
  const visualOpacity = useTransform(scrollYProgress, [0.4, 0.7], [1, 0]);

  const gradientOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7], [0.6, 1, 0.3]);
  const gradientX = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const gradientY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  if (prefersReduced) {
    return (
      <section
        className="sm:pl-16 pl-6 pt-28 pb-12"
        id="hero"
        aria-label="Hero"
      >
        <div className={`${styles.innerWidth} mx-auto flex flex-col`}>
          <div className="flex justify-center items-center flex-col relative z-10">
            <h1 className={styles.heroHeading}>VARUN</h1>
            <h1 className={styles.heroHeading}>RATHOD</h1>
            <p className="mt-6 font-normal sm:text-[24px] text-[18px] text-secondary-white text-center">
              {profile.rotatingRoles[0]}
            </p>
            <p className="mt-4 font-normal sm:text-[18px] text-[14px] text-secondary-white text-center max-w-[600px] px-4">
              {profile.summary}
            </p>
            <div className="mt-8 flex gap-4 flex-wrap justify-center px-4">
              <a
                href="#projects"
                onClick={(e) => handleNavClick(e, "#projects")}
                className="py-4 px-8 bg-[#25618b] rounded-[32px] font-normal text-[16px] text-white hover:bg-[#2d73a3] transition-all duration-400"
              >
                View My Work
              </a>
              <a
                href="/Varun_Rathod_Resume.pdf"
                target="_blank"
                rel="noreferrer noopener"
                className="py-4 px-8 border border-white rounded-[32px] font-normal text-[16px] text-white hover:bg-[rgba(255,255,255,0.1)] transition-all duration-400"
              >
                Download Résumé
              </a>
            </div>
          </div>
          <div className="relative w-full md:-mt-[20px] -mt-[12px]">
            <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-0 -top-[30px]" />
            <div className="w-full sm:h-[400px] h-[280px] rounded-tl-[140px] z-10 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[rgba(165,9,255,0.12)] via-[rgba(52,172,199,0.08)] to-[rgba(26,35,46,0.95)]" />
              <div className="absolute inset-0 flex items-center justify-center p-6 sm:p-10">
                <div className="w-full max-w-[700px] bg-[rgba(15,20,30,0.85)] rounded-xl border border-[rgba(255,255,255,0.08)] shadow-2xl overflow-hidden backdrop-blur-sm">
                  <div className="flex items-center gap-2 px-4 py-2.5 bg-[rgba(255,255,255,0.04)] border-b border-[rgba(255,255,255,0.06)]">
                    <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                    <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                    <span className="w-3 h-3 rounded-full bg-[#28c840]" />
                    <span className="ml-3 text-[11px] text-[rgba(255,255,255,0.3)] font-mono">varun@dev ~ </span>
                  </div>
                  <div className="p-4 sm:p-5 font-mono text-[12px] sm:text-[13px] leading-[22px] sm:leading-[24px]">
                    <p><span className="text-[#c792ea]">const</span> <span className="text-[#82aaff]">developer</span> <span className="text-[#89ddff]">=</span> <span className="text-[#89ddff]">{`{`}</span></p>
                    <p className="pl-4"><span className="text-[#c3e88d]">name</span><span className="text-[#89ddff]">:</span> <span className="text-[#c3e88d]">&quot;Varun Rathod&quot;</span><span className="text-[#89ddff]">,</span></p>
                    <p className="pl-4"><span className="text-[#c3e88d]">role</span><span className="text-[#89ddff]">:</span> <span className="text-[#c3e88d]">&quot;Full-Stack Developer&quot;</span><span className="text-[#89ddff]">,</span></p>
                    <p className="pl-4"><span className="text-[#c3e88d]">stack</span><span className="text-[#89ddff]">:</span> <span className="text-[#89ddff]">[</span></p>
                    <p className="pl-8"><span className="text-[#c3e88d]">&quot;React&quot;</span><span className="text-[#89ddff]">,</span> <span className="text-[#c3e88d]">&quot;Node.js&quot;</span><span className="text-[#89ddff]">,</span> <span className="text-[#c3e88d]">&quot;Python&quot;</span><span className="text-[#89ddff]">,</span></p>
                    <p className="pl-8"><span className="text-[#c3e88d]">&quot;Java&quot;</span><span className="text-[#89ddff]">,</span> <span className="text-[#c3e88d]">&quot;Django&quot;</span><span className="text-[#89ddff]">,</span> <span className="text-[#c3e88d]">&quot;PostgreSQL&quot;</span></p>
                    <p className="pl-4"><span className="text-[#89ddff]">]</span><span className="text-[#89ddff]">,</span></p>
                    <p className="pl-4"><span className="text-[#c3e88d]">status</span><span className="text-[#89ddff]">:</span> <span className="text-[#ffcb6b]">&quot;Open to opportunities&quot;</span></p>
                    <p><span className="text-[#89ddff]">{`}`}</span><span className="text-[#89ddff]">;</span></p>
                    <p className="mt-2"><span className="text-[#546e7a]">{"// Let's build something great together"}</span></p>
                    <p className="mt-1"><span className="text-[#c792ea]">export default</span> <span className="text-[#82aaff]">developer</span><span className="text-[#89ddff]">;</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={containerRef}
      className="relative h-[180vh]"
      id="hero"
      aria-label="Hero"
    >
      <div className="sticky top-0 h-screen">
        <div
          className="pt-28 pb-8 sm:pl-16 pl-6 h-full flex flex-col justify-center"
        >
          <div
            className={`${styles.innerWidth} mx-auto flex flex-col relative`}
          >
            <motion.div
              style={{
                y: nameY,
                scale: nameScale,
                opacity: nameOpacity,
              }}
              className="flex justify-center items-center flex-col relative z-10"
              willChange="transform"
            >
              <h1 className={styles.heroHeading}>VARUN</h1>
              <h1 className={styles.heroHeading}>RATHOD</h1>
            </motion.div>

            <motion.div
              style={{ opacity: roleOpacity, y: roleY }}
              className="mt-6 h-[40px] flex items-center justify-center relative z-10"
            >
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
              style={{ opacity: summaryOpacity, y: summaryY }}
              className="mt-4 font-normal sm:text-[18px] text-[14px] text-secondary-white text-center max-w-[600px] px-4 relative z-10 mx-auto"
            >
              {profile.summary}
            </motion.p>

            <motion.div
              style={{ opacity: buttonsOpacity, y: buttonsY }}
              className="mt-8 flex gap-4 flex-wrap justify-center px-4 relative z-10"
            >
              <a
                href="#projects"
                onClick={(e) => handleNavClick(e, "#projects")}
                className="glossy-btn py-4 px-8 bg-[#25618b] rounded-[32px] font-normal text-[16px] text-white hover:bg-[#2d73a3] hover:shadow-[0_0_20px_rgba(37,97,139,0.4)] transition-all duration-400"
              >
                View My Work
              </a>
              <a
                href="/Varun_Rathod_Resume.pdf"
                target="_blank"
                rel="noreferrer noopener"
                className="glossy-btn py-4 px-8 border border-white rounded-[32px] font-normal text-[16px] text-white hover:bg-[rgba(255,255,255,0.1)] hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-400"
              >
                Download Résumé
              </a>
            </motion.div>

            <motion.div
              style={{
                y: visualY,
                scale: visualScale,
                opacity: visualOpacity,
              }}
              className="relative w-full md:-mt-[20px] -mt-[12px]"
              willChange="transform"
            >
              <motion.div
                style={{
                  opacity: gradientOpacity,
                  x: gradientX,
                  y: gradientY,
                }}
                className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-0 -top-[30px]"
                willChange="transform"
              />
              <div className="w-full sm:h-[400px] h-[280px] rounded-tl-[140px] z-10 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[rgba(165,9,255,0.12)] via-[rgba(52,172,199,0.08)] to-[rgba(26,35,46,0.95)]" />
                <div className="absolute inset-0 flex items-center justify-center p-6 sm:p-10">
                  <div className="w-full max-w-[700px] bg-[rgba(15,20,30,0.85)] rounded-xl border border-[rgba(255,255,255,0.08)] shadow-2xl overflow-hidden backdrop-blur-sm">
                    <div className="flex items-center gap-2 px-4 py-2.5 bg-[rgba(255,255,255,0.04)] border-b border-[rgba(255,255,255,0.06)]">
                      <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                      <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                      <span className="w-3 h-3 rounded-full bg-[#28c840]" />
                      <span className="ml-3 text-[11px] text-[rgba(255,255,255,0.3)] font-mono">varun@dev ~ </span>
                    </div>
                    <div className="p-4 sm:p-5 font-mono text-[12px] sm:text-[13px] leading-[22px] sm:leading-[24px]">
                      <p><span className="text-[#c792ea]">const</span> <span className="text-[#82aaff]">developer</span> <span className="text-[#89ddff]">=</span> <span className="text-[#89ddff]">{`{`}</span></p>
                      <p className="pl-4"><span className="text-[#c3e88d]">name</span><span className="text-[#89ddff]">:</span> <span className="text-[#c3e88d]">&quot;Varun Rathod&quot;</span><span className="text-[#89ddff]">,</span></p>
                      <p className="pl-4"><span className="text-[#c3e88d]">role</span><span className="text-[#89ddff]">:</span> <span className="text-[#c3e88d]">&quot;Full-Stack Developer&quot;</span><span className="text-[#89ddff]">,</span></p>
                      <p className="pl-4"><span className="text-[#c3e88d]">stack</span><span className="text-[#89ddff]">:</span> <span className="text-[#89ddff]">[</span></p>
                      <p className="pl-8"><span className="text-[#c3e88d]">&quot;React&quot;</span><span className="text-[#89ddff]">,</span> <span className="text-[#c3e88d]">&quot;Node.js&quot;</span><span className="text-[#89ddff]">,</span> <span className="text-[#c3e88d]">&quot;Python&quot;</span><span className="text-[#89ddff]">,</span></p>
                      <p className="pl-8"><span className="text-[#c3e88d]">&quot;Java&quot;</span><span className="text-[#89ddff]">,</span> <span className="text-[#c3e88d]">&quot;Django&quot;</span><span className="text-[#89ddff]">,</span> <span className="text-[#c3e88d]">&quot;PostgreSQL&quot;</span></p>
                      <p className="pl-4"><span className="text-[#89ddff]">]</span><span className="text-[#89ddff]">,</span></p>
                      <p className="pl-4"><span className="text-[#c3e88d]">status</span><span className="text-[#89ddff]">:</span> <span className="text-[#ffcb6b]">&quot;Open to opportunities&quot;</span></p>
                      <p><span className="text-[#89ddff]">{`}`}</span><span className="text-[#89ddff]">;</span></p>
                      <p className="mt-2"><span className="text-[#546e7a]">// Let&apos;s build something great together</span></p>
                      <p className="mt-1"><span className="text-[#c792ea]">export default</span> <span className="text-[#82aaff]">developer</span><span className="text-[#89ddff]">;</span><span className="inline-block w-[7px] h-[15px] bg-[#82aaff] ml-1 animate-pulse" /></p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
