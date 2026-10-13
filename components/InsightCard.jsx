"use client";

import { motion } from "framer-motion";

import { fadeIn } from "../utils/motion";

const ExperienceCard = ({ role, company, location, date, bullets, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.3, 1)}
    className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-5 sm:p-6 rounded-[32px] bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-black"
    tabIndex={0}
    role="region"
    aria-label={`${role} at ${company}`}
  >
    <div className="sm:flex-1 min-w-0">
      <h4 className="font-bold text-[clamp(18px,2.5vw,28px)] text-white">
        {role}
      </h4>
      <p className="mt-1 font-normal text-[clamp(14px,2vw,18px)] text-secondary-white">
        {company}
      </p>
      <p className="mt-1 font-normal text-[clamp(12px,1.5vw,14px)] text-secondary-white">
        {location}
      </p>
      <p className="mt-1 font-normal text-[clamp(12px,1.5vw,14px)] text-secondary-white">
        {date}
      </p>
    </div>
    <div className="sm:flex-[2] flex flex-col gap-3 min-w-0">
      {bullets.map((bullet, i) => (
        <p
          key={i}
          className="font-normal text-[clamp(13px,1.8vw,16px)] text-secondary-white leading-[clamp(22px,3vw,28px)] flex gap-2 min-w-0"
        >
          <span className="text-white mt-1 shrink-0">▸</span>
          <span className="break-words">{bullet}</span>
        </p>
      ))}
    </div>
  </motion.div>
);

export default ExperienceCard;