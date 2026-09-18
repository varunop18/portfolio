"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ScrollReveal = ({
  children,
  direction = "up",
  distance = 60,
  duration = 1,
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
    target: ref,
    offset: ["start 0.9", "start 0.3"],
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
          scale: useTransform(scrollYProgress, [0, 1], [0.9, 1]),
          opacity: useTransform(scrollYProgress, [0, 1], [0, 1]),
        };
      default:
        return {
          y: useTransform(scrollYProgress, [0, 1], [distance, 0]),
          opacity: useTransform(scrollYProgress, [0, 1], [0, 1]),
        };
    }
  })();

  return (
    <motion.div
      ref={ref}
      style={isMobile ? {} : transforms}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
