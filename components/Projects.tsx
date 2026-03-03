import Image from "next/image";
import { PinContainer } from "./ui/3d-pin";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { PROJECTS } from "@/constants/projects";

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex w-full flex-col items-center justify-center gap-8 py-20 md:gap-10 md:py-24"
    >
      <h1 className="mr-auto px-4 text-left text-3xl font-bold sm:text-4xl md:mr-0 md:text-center md:text-5xl">
        Projects
      </h1>

      <h3 className="mr-auto px-4 text-base sm:text-lg md:mr-0">
        Projects I have worked on
      </h3>

      <p className="max-w-4xl px-4 text-left text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-base md:text-justify">
        Here are some projects I have contributed to during my frontend
        journey. Each one helped me practice building responsive,
        user-friendly interfaces in real-world environments.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-y-10 gap-x-2 px-4">
        {PROJECTS.map((project) => (
          <div key={project.title} className="flex flex-col items-center">
            {/* 3D Pin Container (The Card) */}
            <div className="h-[21rem] w-full flex items-center justify-center sm:w-96">
              <PinContainer
                title={
                  project.link.startsWith("http")
                    ? project.link.replace(/^https?:\/\//, "")
                    : "Internal Project"
                }
                href={project.link.startsWith("http") ? project.link : "#"}
              >
                <div className="flex flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
                  <h3 className="max-w-xs !m-0 font-bold text-base md:text-lg text-slate-100">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 text-xs line-clamp-4 pb-4 italic">
                    {project.company}
                  </p>
                  <div className="text-base !m-0 !p-0 font-normal">
                    <span className="text-slate-500 text-sm line-clamp-4">
                      {project.description}
                    </span>
                  </div>

                  {/* Project Image */}
                  <div className="flex flex-1 w-full rounded-lg mt-4 overflow-hidden relative">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </div>
              </PinContainer>
            </div>

            {/* Tooltip Section - Placed Outside & Scaled Down */}
            <div className="flex flex-row items-center justify-center mt-10 w-full transform scale-75 origin-top z-50">
              <AnimatedTooltip items={project.technologies} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
