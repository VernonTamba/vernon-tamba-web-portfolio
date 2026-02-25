import { WORK_EXPERIENCE } from "@/constants/work-experience";
import { Timeline } from "./ui/timeline";

const WorkExperience = () => {
  return (
    <div
      id="work-experience"
      className="relative flex w-full flex-col items-center justify-center gap-6 py-20 md:gap-8 md:py-24"
    >
      <h1 className="mr-auto px-4 text-left text-3xl font-bold sm:text-4xl md:mr-0 md:text-center md:text-5xl">
        Work Experience
      </h1>

      <h3 className="mr-auto px-4 text-base sm:text-lg md:mr-0">
        Here is my professional journey so far
      </h3>

      <p className="max-w-4xl px-4 text-left text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-base md:text-justify">
        Throughout my ongoing journey as a frontend developer for almost two
        years, I have had the privilege of working with esteemed organizations
        and teams. Starting from Human Resource and Banking industries. I am
        excited by the opportunities and challenges that lie ahead in other
        industries. I am personally aiming and interested in Oil and Gas
        industry if I can get the chance &#129310;&#128513;. Nevertheless, these
        experiences have allowed me to contribute to impactful projects,
        collaborate with talented teams, and further refine my skills in
        building exceptional web applications.
      </p>

      <div className="relative w-full">
        <Timeline data={WORK_EXPERIENCE} />
      </div>
    </div>
  );
};

export default WorkExperience;
