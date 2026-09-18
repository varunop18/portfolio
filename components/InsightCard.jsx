"use client";

import { motion } from "framer-motion";

import { fadeIn } from "../utils/motion";

const ExperienceCard = ({ role, company, location, date, bullets, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.3, 1)}
    className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-5 sm:p-6 rounded-[32px] bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)]"
  >
    <div className="sm:flex-1">
      <h4 className="font-bold text-[20px] sm:text-[22px] lg:text-[28px] text-white">
        {role}
      </h4>
      <p className="mt-1 font-normal text-[16px] sm:text-[18px] text-secondary-white">
        {company}
      </p>
      <p className="mt-1 font-normal text-[13px] sm:text-[14px] text-secondary-white">
        {location}
      </p>
      <p className="mt-1 font-normal text-[13px] sm:text-[14px] text-secondary-white">
        {date}
      </p>
    </div>
    <div className="sm:flex-[2] flex flex-col gap-3">
      {bullets.map((bullet, i) => (
        <p
          key={i}
          className="font-normal text-[14px] sm:text-[16px] text-secondary-white leading-[24px] sm:leading-[28px] flex gap-2"
        >
          <span className="text-white mt-1 shrink-0">▸</span>
          {bullet}
        </p>
      ))}
    </div>
  </motion.div>
);

export default ExperienceCard;
