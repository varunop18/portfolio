"use client";

import { motion } from "framer-motion";

import { fadeIn } from "../utils/motion";

const ExploreCard = ({ title, items, index }) => (
  <motion.div
    variants={fadeIn("up", "tween", index * 0.15, 0.8)}
    whileHover={{ scale: 1.03, y: -4, transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] } }}
    className="card-glow relative flex flex-col p-5 sm:p-6 rounded-[24px] bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.07)] transition-all duration-500 cursor-default"
  >
    <h3 className="font-bold text-[18px] sm:text-[22px] text-white mb-4">
      {title}
    </h3>
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className="px-3 py-1 rounded-full bg-[#323f5d] font-normal text-[12px] sm:text-[14px] text-secondary-white hover:bg-[#3d4f73] hover:text-white transition-all duration-300"
        >
          {item}
        </span>
      ))}
    </div>
  </motion.div>
);

export default ExploreCard;
