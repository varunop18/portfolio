"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import styles from "../styles";
import { navVariants } from "../utils/motion";
import { profile } from "../constants";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef(null);
  const previousActiveElement = useRef(null);

  const handleNavClick = (e, href) => {
    // Only prevent default for same-page anchors, let browser handle smooth scroll
    if (href.startsWith("#")) {
      e.preventDefault();
      setMobileOpen(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape" && mobileOpen) {
      setMobileOpen(false);
      previousActiveElement.current?.focus();
    }
  };

  const trapFocus = (e) => {
    if (!mobileOpen || e.key !== "Tab") return;

    const focusableElements = menuRef.current?.querySelectorAll(
      'a[href], button, [tabindex]:not([tabindex="-1"])'
    );

    if (!focusableElements || focusableElements.length === 0) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (e.shiftKey && document.activeElement === firstElement) {
      e.preventDefault();
      lastElement.focus();
    } else if (!e.shiftKey && document.activeElement === lastElement) {
      e.preventDefault();
      firstElement.focus();
    }
  };

  useEffect(() => {
    if (mobileOpen) {
      previousActiveElement.current = document.activeElement;
      document.addEventListener("keydown", handleKeyDown);
      document.addEventListener("keydown", trapFocus);
      menuRef.current?.focus();
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keydown", trapFocus);
    };
  }, [mobileOpen]);

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-6 relative z-50`}
    >
      <div className="absolute w-[50%] inset-0 gradient-01 pointer-events-none" />
      <div
        className={`${styles.innerWidth} mx-auto flex justify-between items-center gap-8 relative z-10`}
      >
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, "#hero")}
          className="font-extrabold text-[28px] text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-black rounded"
        >
          VR.
        </a>

        <ul className="hidden md:flex list-none gap-8 justify-center items-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-normal text-[16px] text-secondary-white hover:text-white transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-black rounded px-2 py-1"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer noopener"
            title="GitHub"
            className="hidden sm:block hover:opacity-80 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-black rounded p-1"
            aria-label="GitHub"
          >
            <img
              src="/github.svg"
              alt=""
              className="w-[24px] h-[24px] object-contain"
            />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            title="LinkedIn"
            className="hidden sm:block hover:opacity-80 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-black rounded p-1"
            aria-label="LinkedIn"
          >
            <img
              src="/linkedin.svg"
              alt=""
              className="w-[24px] h-[24px] object-contain"
            />
          </a>
          <a
            href="/Varun_Rathod_Resume.pdf"
            target="_blank"
            rel="noreferrer noopener"
            title="Download Résumé"
            className="hidden sm:flex items-center gap-2 py-2 px-4 bg-[#323f5d] rounded-[16px] hover:bg-[#3d4f73] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-black"
          >
            <span className="font-normal text-[14px] text-white">Résumé</span>
          </a>

          <button
            type="button"
            className="md:hidden flex flex-col gap-[5px] cursor-pointer p-3 min-w-[44px] min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-black rounded"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            <span
              className={`w-[24px] h-[2px] bg-white transition-transform ${
                mobileOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`w-[24px] h-[2px] bg-white transition-opacity ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-[24px] h-[2px] bg-white transition-transform ${
                mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="md:hidden fixed inset-0 bg-black/50 z-40"
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              ref={menuRef}
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="md:hidden fixed top-0 right-0 w-[75%] max-w-[300px] h-dvh bg-[#1a232e] border-l border-[rgba(255,255,255,0.1)] z-50 flex flex-col p-8 gap-6 safe-area-top safe-area-bottom"
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
              tabIndex={-1}
            >
              <button
                type="button"
                className="self-end text-white text-[28px] cursor-pointer p-2 min-w-[44px] min-h-[44px] flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-black rounded"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                &times;
              </button>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="font-normal text-[18px] text-secondary-white hover:text-white transition-colors py-3 px-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-black rounded min-h-[44px] flex items-center"
                >
                  {link.name}
                </a>
              ))}
              <div className="mt-4 flex flex-col gap-4">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center gap-3 text-secondary-white hover:text-white transition-colors py-3 px-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-black rounded min-h-[44px]"
                >
                  <img
                    src="/github.svg"
                    alt=""
                    className="w-[20px] h-[20px] object-contain"
                  />
                  GitHub
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center gap-3 text-secondary-white hover:text-white transition-colors py-3 px-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-black rounded min-h-[44px]"
                >
                  <img
                    src="/linkedin.svg"
                    alt=""
                    className="w-[20px] h-[20px] object-contain"
                  />
                  LinkedIn
                </a>
                <a
                  href="/Varun_Rathod_Resume.pdf"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="py-3 px-6 bg-[#323f5d] rounded-[16px] text-white text-center font-normal text-[16px] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-black min-h-[44px] flex items-center justify-center"
                >
                  Download Résumé
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;