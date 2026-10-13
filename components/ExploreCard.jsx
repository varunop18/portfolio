"use client";

import { motion } from "framer-motion";

import { fadeIn } from "../utils/motion";

const ExploreCard = ({ title, items, index }) => (
  <motion.div
    variants={fadeIn("up", "tween", index * 0.15, 0.8)}
    whileHover={{ scale: 1.03, y: -4, transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] } }}
    className="card-glow relative flex flex-col p-5 sm:p-6 rounded-[24px] bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.07)] transition-all duration-500 cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-black"
    tabIndex={0}
    role="region"
    aria-label={title}
  >
    <h3 className="font-bold text-[18px] sm:text-[22px] text-white mb-4">
      {title}
    </h3>
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className="px-3 py-1.5 rounded-full bg-[#323f5d] font-normal text-[12px] sm:text-[14px] text-secondary-white hover:bg-[#3d4f73] hover:text-white transition-all duration-300 min-h-[44px] flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-black rounded-full"
        >
          {item}
        </span>
      ))}
    </div>
  </motion.div>
);

export default ExploreCard;