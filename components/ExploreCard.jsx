"use client";

import { motion } from "framer-motion";

import { fadeIn } from "../utils/motion";

const ExploreCard = ({ title, items, index }) => (
  <motion.div
    variants={fadeIn("up", "tween", 0, 0.45)}
    whileHover={{ scale: 1.03, y: -4, transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] } }}
    className="group relative flex cursor-default flex-col overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm transition-all duration-500 hover:border-[#34acc7]/40 hover:bg-white/[0.07] hover:shadow-[0_12px_40px_rgba(52,172,199,0.12)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-black sm:p-6"
    tabIndex={0}
    role="region"
    aria-label={title}
  >
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#a509ff] opacity-[0.08] blur-[50px] transition-opacity duration-500 group-hover:opacity-[0.14]"
    />
    <div
      aria-hidden="true"
      className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#34acc7] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-70"
    />

    <div className="relative mb-1 flex items-center justify-between gap-3">
      <h3 className="font-bold text-[18px] text-white sm:text-[20px]">{title}</h3>
      <span className="shrink-0 rounded-full border border-white/10 bg-[#0c111b] px-2.5 py-1 text-[11px] font-bold tracking-wide text-white/70 transition-colors duration-500 group-hover:border-[#34acc7]/50 group-hover:text-white">
        {items.length}
      </span>
    </div>
    <div
      aria-hidden="true"
      className="relative mb-4 mt-2 h-[2px] w-10 rounded-full bg-gradient-to-r from-[#a509ff] to-[#34acc7]"
    />

    <div className="relative flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className="flex min-h-[40px] items-center rounded-full border border-white/10 bg-white/[0.06] px-3.5 text-[12px] font-medium text-white/70 backdrop-blur-sm transition-all duration-300 hover:border-[#34acc7]/40 hover:bg-white/[0.1] hover:text-white sm:text-[13px]"
        >
          {item}
        </span>
      ))}
    </div>
  </motion.div>
);

export default ExploreCard;
