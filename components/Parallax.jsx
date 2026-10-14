"use client";

import { useRef, useEffect, useState } from "react";

const Parallax = ({ children, speed = 0.3, className = "" }) => {
  const ref = useRef(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    setEnabled(mq.matches);
    const handler = (e) => setEnabled(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (!enabled || !ref.current) return;

    let ticking = false;
    const element = ref.current;

    const updatePosition = () => {
      const rect = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const elementHeight = rect.height;
      const progress = Math.max(0, Math.min(1, 1 - rect.top / (viewportHeight + elementHeight)));
      const offset = speed * 50 * (progress * 2 - 1);
      element.style.transform = `translateY(${offset}px)`;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updatePosition);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    updatePosition();

    return () => {
      window.removeEventListener("scroll", onScroll);
      element.style.transform = "";
    };
  }, [speed, enabled]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

export default Parallax;
