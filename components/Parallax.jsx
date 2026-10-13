"use client";

import { useRef, useEffect, useState } from "react";

const Parallax = ({ children, speed = 0.3, className = "" }) => {
  const ref = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Desktop: use a simple scroll-based transform via requestAnimationFrame
  useEffect(() => {
    if (isMobile || !ref.current) return;
    
    let ticking = false;
    const element = ref.current;
    
    const updatePosition = () => {
      const rect = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const elementHeight = rect.height;
      
      // Calculate how far the element has scrolled into/out of view
      const progress = Math.max(0, Math.min(1, 1 - rect.top / (viewportHeight + elementHeight)));
      
      // Apply transform
      const offset = speed * 50 * (progress * 2 - 1); // -50 to 50 * speed
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
    updatePosition(); // Initial position
    
    return () => {
      window.removeEventListener("scroll", onScroll);
      element.style.transform = "";
    };
  }, [speed, isMobile]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

export default Parallax;