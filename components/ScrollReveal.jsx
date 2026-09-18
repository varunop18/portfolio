"use client";

import { useRef } from "react";
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
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.3"],
  });

  const getTransforms = () => {
    switch (direction) {
      case "up":
        return {
          y: useTransform(scrollYProgress, [0, 1], [distance, 0]),
          opacity: useTransform(scrollYProgress, [0, 1], [0, 1]),
          filter: useTransform(
            scrollYProgress,
            [0, 1],
            ["blur(4px)", "blur(0px)"]
          ),
        };
      case "down":
        return {
          y: useTransform(scrollYProgress, [0, 1], [-distance, 0]),
          opacity: useTransform(scrollYProgress, [0, 1], [0, 1]),
          filter: useTransform(
            scrollYProgress,
            [0, 1],
            ["blur(4px)", "blur(0px)"]
          ),
        };
      case "left":
        return {
          x: useTransform(scrollYProgress, [0, 1], [distance, 0]),
          opacity: useTransform(scrollYProgress, [0, 1], [0, 1]),
          filter: useTransform(
            scrollYProgress,
            [0, 1],
            ["blur(4px)", "blur(0px)"]
          ),
        };
      case "right":
        return {
          x: useTransform(scrollYProgress, [0, 1], [-distance, 0]),
          opacity: useTransform(scrollYProgress, [0, 1], [0, 1]),
          filter: useTransform(
            scrollYProgress,
            [0, 1],
            ["blur(4px)", "blur(0px)"]
          ),
        };
      case "scale":
        return {
          scale: useTransform(scrollYProgress, [0, 1], [0.9, 1]),
          opacity: useTransform(scrollYProgress, [0, 1], [0, 1]),
          filter: useTransform(
            scrollYProgress,
            [0, 1],
            ["blur(4px)", "blur(0px)"]
          ),
        };
      default:
        return {
          y: useTransform(scrollYProgress, [0, 1], [distance, 0]),
          opacity: useTransform(scrollYProgress, [0, 1], [0, 1]),
        };
    }
  };

  const transforms = getTransforms();

  return (
    <motion.div
      ref={ref}
      style={transforms}
      transition={{ delay, duration }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
