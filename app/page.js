"use client";

import { Footer, Navbar } from "../components";
import ScrollProgress from "../components/ScrollProgress";
import SceneTransition from "../components/SceneTransition";
import Parallax from "../components/Parallax";
import {
  About,
  Explore,
  GetStarted,
  Hero,
  WhatsNew,
  World,
} from "../sections";

const Page = () => (
  <div className="bg-primary-black overflow-x-hidden">
    <ScrollProgress />
    <Navbar />
    <Hero />
    <SceneTransition>
      <div className="relative">
        <About />
        <Parallax speed={0.3} className="pointer-events-none">
          <div className="gradient-03 z-0" />
        </Parallax>
        <Explore />
      </div>
    </SceneTransition>
    <SceneTransition>
      <div className="relative">
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
