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
        A look at my professional journey so far
      </h3>

      <p className="max-w-4xl px-4 text-left text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-base md:text-justify">
        Over the past 1.5+ years, I have worked with teams in the HR and banking
        industries. Actually, I have set my eyes to Oil and Gas industry.
        Hopefully, in the near future, I will have that opportunity.
        Nonetheless, I am excited for other industries within which I can
        explore and learn from. These experiences helped me build practical web
        features, collaborate with cross-functional teams, and continue growing
        as a frontend developer.
      </p>

      <div className="relative w-full">
        <Timeline data={WORK_EXPERIENCE} />
      </div>
    </div>
  );
};

export default WorkExperience;
