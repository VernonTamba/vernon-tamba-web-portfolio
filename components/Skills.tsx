"use client";

import { useRef, useState } from "react";
import { SKILLS } from "@/constants/skills";
import { DottedGlowBackground } from "./ui/dotted-glow-background";

const Skills = () => {
  return (
    <div
      id="skills"
      className="relative flex min-h-screen w-full flex-col items-center justify-center gap-6 py-20 md:gap-8 md:py-24"
    >
      <h1 className="mr-auto px-4 text-left text-3xl font-bold sm:text-4xl md:mr-0 md:text-center md:text-5xl">
        Skills & Tools
      </h1>

      <h3 className="mr-auto px-4 text-base sm:text-lg md:mr-0">
        Skills and tools I use in my work
      </h3>

      <p className="max-w-4xl px-4 text-left text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-base md:text-left">
        These are the skills and tools I use when building web applications and
        collaborating with teams. I keep learning and improving them through
        day-to-day work and personal projects.
      </p>

      <div className="grid w-full max-w-7xl grid-cols-2 gap-4 px-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        {SKILLS.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  );
};

const SkillCard = ({ skill }: { skill: (typeof SKILLS)[0] }) => {
  const iconRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
    if (iconRef.current) {
      const svgElement = iconRef.current.querySelector("svg");
      if (svgElement) {
        svgElement.style.color = skill.color;
      }
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    if (iconRef.current) {
      const svgElement = iconRef.current.querySelector("svg");
      if (svgElement) {
        svgElement.style.color = "";
      }
    }
  };

  return (
    <div
      className="group relative flex h-36 w-full flex-col items-end justify-end overflow-hidden rounded-md rounded-tl-3xl rounded-br-3xl rounded-bl-3xl border border-transparent px-4 shadow ring-1 shadow-black/10 ring-black/5 transition-transform duration-300 hover:scale-105 dark:shadow-white/10 dark:ring-white/5 sm:h-40"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={iconRef}
        className="absolute inset-0 z-20 m-auto flex items-center justify-center pointer-events-none"
      >
        <skill.icon className="h-12 w-12 text-neutral-600 dark:text-neutral-200 transition-all duration-300 group-hover:scale-110" />
      </div>

      <div className="relative z-20 flex w-full justify-between px-2 py-3 backdrop-blur-[2px]">
        <p className="text-xs font-medium text-neutral-600 dark:text-neutral-400 group-hover:text-sm group-hover:font-bold group-hover:text-black dark:group-hover:text-white transition-all duration-300">
          {skill.name}
        </p>
      </div>

      {isHovering ? (
        <DottedGlowBackground
          className="pointer-events-none mask-radial-to-90% mask-radial-at-center"
          opacity={1}
          gap={8}
          radius={1.4}
          colorLightVar="--color-neutral-500"
          glowColorLightVar="--color-neutral-600"
          colorDarkVar="--color-neutral-500"
          glowColorDarkVar="--color-sky-800"
          backgroundOpacity={0}
          speedMin={0.2}
          speedMax={0.7}
        />
      ) : null}
    </div>
  );
};

export default Skills;
