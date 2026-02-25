import Hero from "@/components/Hero";
import SmoothScrolling from "@/components/smooth-scrolling/SmoothScrolling";
import { FLOATING_DOCKS_ITEMS } from "@/constants/navigations";
import dynamic from "next/dynamic";

const AboutMe = dynamic(() => import("@/components/AboutMe"));
const WorkExperience = dynamic(() => import("@/components/WorkExperience"));
const Education = dynamic(() => import("@/components/Education"));
const Skills = dynamic(() => import("@/components/Skills"));
const Projects = dynamic(() => import("@/components/Projects"));
const GetInTouch = dynamic(() => import("@/components/GetInTouch"));
const Footer = dynamic(() => import("@/components/Footer"));
const FloatingDock = dynamic(() =>
  import("@/components/ui/floating-dock").then((mod) => mod.FloatingDock),
);

export default function Home() {
  return (
    <SmoothScrolling>
      <div className="max-w-7xl w-full">
        <Hero />
        <AboutMe />
        <WorkExperience />
        <Education />
        <Skills />
        <Projects />
        <GetInTouch />
        <Footer />
        <FloatingDock
          mobileClassName="fixed bottom-6 right-6 z-50"
          desktopClassName="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
          items={FLOATING_DOCKS_ITEMS}
        />
      </div>
    </SmoothScrolling>
  );
}
