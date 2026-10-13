"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ScrollReveal = ({
  children,
  direction = "up",
  distance = 40,
  duration = 0.7,
  delay = 0,
  className = "",
}) => {
  const ref = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const { scrollYProgress } = useScroll({
    target: isMobile ? null : ref,
    offset: ["start 0.85", "start 0.35"],
  });

  const transforms = (() => {
    switch (direction) {
      case "up":
        return {
          y: useTransform(scrollYProgress, [0, 1], [distance, 0]),
          opacity: useTransform(scrollYProgress, [0, 1], [0, 1]),
        };
      case "down":
        return {
          y: useTransform(scrollYProgress, [0, 1], [-distance, 0]),
          opacity: useTransform(scrollYProgress, [0, 1], [0, 1]),
        };
      case "left":
        return {
          x: useTransform(scrollYProgress, [0, 1], [distance, 0]),
          opacity: useTransform(scrollYProgress, [0, 1], [0, 1]),
        };
      case "right":
        return {
          x: useTransform(scrollYProgress, [0, 1], [-distance, 0]),
          opacity: useTransform(scrollYProgress, [0, 1], [0, 1]),
        };
      case "scale":
        return {
          scale: useTransform(scrollYProgress, [0, 1], [0.95, 1]),
          opacity: useTransform(scrollYProgress, [0, 1], [0, 1]),
        };
      default:
        return {
          y: useTransform(scrollYProgress, [0, 1], [distance, 0]),
          opacity: useTransform(scrollYProgress, [0, 1], [0, 1]),
        };
    }
  })();

  if (isMobile) {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      style={transforms}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;