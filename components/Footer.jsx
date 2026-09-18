"use client";

import { motion } from "framer-motion";

import { socials, profile } from "../constants";
import styles from "../styles";
import { footerVariants } from "../utils/motion";

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.paddings} py-8 relative`}
    aria-label="Footer"
  >
    <div className="footer-gradient" />

    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <div>
          <h4 className="font-bold text-[32px] sm:text-[40px] md:text-[48px] text-white">
            Let&apos;s Talk
          </h4>
          <p className="mt-2 font-normal text-[14px] sm:text-[16px] text-secondary-white">
            <a href={`mailto:${profile.email}`} className="hover:text-white transition-colors">{profile.email}</a>
          </p>
          <p className="mt-1 font-normal text-[14px] sm:text-[16px] text-secondary-white">
            <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="hover:text-white transition-colors">{profile.phone}</a> · {profile.location}
          </p>
        </div>

        <a
          href={`mailto:${profile.email}`}
          className="glossy-btn flex items-center h-fit py-3 sm:py-4 px-5 sm:px-6 bg-[#25618b] rounded-[32px] gap-[12px] hover:bg-[#2d73a3] hover:shadow-[0_0_20px_rgba(37,97,139,0.4)] transition-all duration-400"
        >
          <span className="font-normal text-[14px] sm:text-[16px] text-white">
            Send Email
          </span>
        </a>
      </div>

      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[20px] sm:text-[24px] text-white">
            {profile.name}
          </h4>
          <p className="font-normal text-[12px] sm:text-[14px] text-white opacity-50">
            &copy; {new Date().getFullYear()} {profile.name}. All Rights
            Reserved.
          </p>

          <div className="flex gap-4">
            {socials.map((social) => (
              <a
                key={social.url}
                href={social.url}
                target="_blank"
                rel="noreferrer noopener"
                className="hover:opacity-80 transition-opacity"
              >
                <img
                  src={social.icon}
                  alt={social.name}
                  title={social.name}
                  className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] object-contain cursor-pointer"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
