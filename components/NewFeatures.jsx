"use client";

import { motion } from "framer-motion";

import { fadeIn } from "../utils/motion";

const ProjectCard = ({
  title,
  date,
  client,
  stack,
  bullets,
  index,
}) => (
  <motion.div
    variants={fadeIn("up", "tween", index * 0.15, 0.8)}
    whileHover={{ y: -4, transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] } }}
    className="card-glow flex flex-col p-5 sm:p-6 rounded-[24px] bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.08)] gap-4 hover:border-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.07)] transition-all duration-500"
  >
    <div>
      <h3 className="font-bold text-[18px] sm:text-[22px] text-white leading-tight">
        {title}
      </h3>
      {date && (
        <p className="mt-1 font-normal text-[13px] sm:text-[14px] text-secondary-white">
          {date}
        </p>
      )}
      {client && (
        <p className="mt-1 font-normal text-[13px] sm:text-[14px] text-secondary-white italic">
          {client}
        </p>
      )}
    </div>

    <div className="flex flex-wrap gap-2">
      {stack.map((tech) => (
        <span
          key={tech}
          className="px-3 py-1 rounded-full bg-[#323f5d] font-normal text-[12px] sm:text-[13px] text-secondary-white hover:bg-[#3d4f73] hover:text-white transition-all duration-300"
        >
          {tech}
        </span>
      ))}
    </div>

    <ul className="flex flex-col gap-2">
      {bullets.map((bullet, i) => (
        <li
          key={i}
          className="font-normal text-[14px] sm:text-[15px] text-secondary-white leading-[22px] sm:leading-[24px] flex gap-2"
        >
          <span className="text-white mt-1 shrink-0">▸</span>
          {bullet}
        </li>
      ))}
    </ul>
  </motion.div>
);

export default ProjectCard;
