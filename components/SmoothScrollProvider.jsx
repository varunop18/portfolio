"use client";

import { createContext, useContext, useEffect, useRef } from "react";

const LenisContext = createContext(null);

export const useLenis = () => useContext(LenisContext);

const SmoothScrollProvider = ({ children }) => {
  // Native smooth scroll for anchor links only
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleAnchorClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const y = target.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);

  return <LenisContext.Provider value={null}>{children}</LenisContext.Provider>;
};

export default SmoothScrollProvider;