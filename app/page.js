"use client";

import { useState, useEffect, Suspense } from "react";
import dynamic from "next/dynamic";
import { Navbar } from "../components";
import ScrollProgress from "../components/ScrollProgress";
import SceneTransition from "../components/SceneTransition";
import Parallax from "../components/Parallax";
import Hero from "../sections/Hero";

const About = dynamic(() => import("../sections/About").then((mod) => mod.default), {
  loading: () => <div className="h-64" aria-hidden="true" />,
});
const Explore = dynamic(() => import("../sections/Explore").then((mod) => mod.default), {
  loading: () => <div className="h-64" aria-hidden="true" />,
});
const WhatsNew = dynamic(() => import("../sections/WhatsNew").then((mod) => mod.default), {
  loading: () => <div className="h-64" aria-hidden="true" />,
});
const World = dynamic(() => import("../sections/World").then((mod) => mod.default), {
  loading: () => <div className="h-64" aria-hidden="true" />,
});
const GetStarted = dynamic(() => import("../sections/GetStarted").then((mod) => mod.default), {
  loading: () => <div className="h-64" aria-hidden="true" />,
});
const Footer = dynamic(() => import("../components/Footer").then((mod) => mod.default), {
  loading: () => <div className="h-32" aria-hidden="true" />,
});

const Page = () => {
  const [showBelowFold, setShowBelowFold] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowBelowFold(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-primary-black overflow-x-hidden" suppressHydrationWarning>
      <ScrollProgress />
      <Navbar />
      <Hero />
      {showBelowFold && (
        <>
          <SceneTransition>
            <div className="relative">
              <Suspense fallback={<div className="h-64" aria-hidden="true" />}>
                <About />
              </Suspense>
              <Parallax speed={0.3} className="pointer-events-none">
                <div className="gradient-03 z-0" />
              </Parallax>
              <Suspense fallback={<div className="h-64" aria-hidden="true" />}>
                <Explore />
              </Suspense>
            </div>
          </SceneTransition>
          <SceneTransition>
            <div className="relative">
              <Suspense fallback={<div className="h-64" aria-hidden="true" />}>
                <WhatsNew />
              </Suspense>
              <Parallax speed={0.25} className="pointer-events-none">
                <div className="gradient-04 z-0" />
              </Parallax>
              <Suspense fallback={<div className="h-64" aria-hidden="true" />}>
                <World />
              </Suspense>
            </div>
          </SceneTransition>
          <SceneTransition>
            <Suspense fallback={<div className="h-64" aria-hidden="true" />}>
              <GetStarted />
            </Suspense>
          </SceneTransition>
          <Suspense fallback={<div className="h-32" aria-hidden="true" />}>
            <Footer />
          </Suspense>
        </>
      )}
    </div>
  );
};

export default Page;