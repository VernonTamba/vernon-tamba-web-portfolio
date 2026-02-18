import Image from "next/image";
import { PinContainer } from "./ui/3d-pin";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { PROJECTS } from "@/constants/projects";

const Projects = () => {
  return (
    <div
      id="projects"
      className="py-20 w-full flex flex-col items-center justify-center gap-10"
    >
      <h1 className="text-5xl font-bold text-left md:text-center px-4 mr-auto md:mr-0">
        Projects
      </h1>

      <h3 className="text-lg px-4 mr-auto md:mr-0">
        Here are the projects I have been involved in
      </h3>

      <p className="text-left md:text-justify max-w-4xl px-4 text-neutral-600 dark:text-neutral-400">
        Throughout my journey as a front end developer, I have worked on various
        projects that showcase my skills and expertise in web development. Here
        are some of the notable projects I have contributed to, demonstrating my
        ability to create dynamic and responsive web applications:
      </p>

      {/* Grid Wrapper */}
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
