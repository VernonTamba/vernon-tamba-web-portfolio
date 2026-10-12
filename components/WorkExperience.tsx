import {
  WORK_EXPERIENCE_INTRO,
  WORK_EXPERIENCES,
} from "@/constants/work-experience";
import { Timeline } from "./ui/timeline";
import { WorkExperienceCard } from "./WorkExperienceCard";

const WorkExperience = () => {
  const timelineData = WORK_EXPERIENCES.map((item) => ({
    id: item.id,
    title: item.period,
    content: <WorkExperienceCard experience={item} />,
  }));

  return (
    <div
      id="work-experience"
      className="relative flex w-full flex-col items-center justify-center gap-6 py-20 md:gap-8 md:py-24"
    >
      <h1 className="mr-auto px-4 text-left text-3xl font-bold sm:text-4xl md:mr-0 md:text-center md:text-5xl">
        {WORK_EXPERIENCE_INTRO.title}
      </h1>

      <h3 className="mr-auto px-4 text-base text-neutral-600 dark:text-neutral-400 sm:text-lg md:mr-0">
        {WORK_EXPERIENCE_INTRO.subtitle}
      </h3>

      <p className="max-w-4xl px-4 text-left text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-base md:text-left">
        {WORK_EXPERIENCE_INTRO.description}
      </p>

      <div className="relative w-full">
        <Timeline data={timelineData} />
      </div>
    </div>
  );
};

export default WorkExperience;
