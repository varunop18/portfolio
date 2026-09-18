"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const SceneTransition = ({ children, className = "" }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.3, 0.5, 0.7, 1], [0.96, 1, 1, 1, 0.98]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8, 1], [0, 1, 1, 1, 0.95]);
  const blur = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    ["blur(2px)", "blur(0px)", "blur(0px)", "blur(2px)"]
  );

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity, filter: blur }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default SceneTransition;
