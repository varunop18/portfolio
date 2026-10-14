"use client";

import { Navbar } from "../components";
import ScrollProgress from "../components/ScrollProgress";
import SceneTransition from "../components/SceneTransition";
import Parallax from "../components/Parallax";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Explore from "../sections/Explore";
import WhatsNew from "../sections/WhatsNew";
import World from "../sections/World";
import GetStarted from "../sections/GetStarted";
import Footer from "../components/Footer";

const Page = () => (
  <div className="bg-primary-black" suppressHydrationWarning>
    <ScrollProgress />
    <Navbar />
    <Hero />
    <SceneTransition>
      <div className="relative overflow-x-clip">
        <About />
        <Parallax speed={0.3} className="pointer-events-none">
          <div className="gradient-03 z-0" />
        </Parallax>
        <Explore />
      </div>
    </SceneTransition>
    <SceneTransition>
      <div className="relative overflow-x-clip">
        <WhatsNew />
        <Parallax speed={0.25} className="pointer-events-none">
          <div className="gradient-04 z-0" />
        </Parallax>
        <World />
      </div>
    </SceneTransition>
    <SceneTransition>
      <GetStarted />
    </SceneTransition>
    <Footer />
  </div>
);

export default Page;
