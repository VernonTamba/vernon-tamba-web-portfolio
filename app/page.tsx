import AboutMe from "@/components/AboutMe";
import Education from "@/components/Education";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import { FloatingDock } from "@/components/ui/floating-dock";
import Projects from "@/components/Projects";
import WorkExperience from "@/components/WorkExperience";
import GetInTouch from "@/components/GetInTouch";
import Footer from "@/components/Footer";

import { FLOATING_DOCKS_ITEMS } from "@/constants/navigations";

export default function Home() {
  return (
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
        desktopClassName="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 backdrop-blur-md"
        items={FLOATING_DOCKS_ITEMS}
      />
    </div>
  );
}
