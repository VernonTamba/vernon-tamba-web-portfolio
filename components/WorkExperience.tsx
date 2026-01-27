import { WORK_EXPERIENCE } from "@/constants/work-experience";
import { Timeline } from "./ui/timeline";

const WorkExperience = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-8 relative">
      <h1 className="text-5xl font-bold text-center">Work Experience</h1>

      <h3 className="text-lg">Here is my professional journey so far</h3>

      <p className="text-justify max-w-4xl px-4 text-neutral-600 dark:text-neutral-400">
        Throughout my ongoing journey as a frontend developer for almost two
        years, I have had the privilege of working with esteemed organizations
        and teams. Starting from Human Resource and Banking industries. I am
        excited by the opportunities and challenges that lie ahead in other
        industries. I am personally aiming and interested in Oil and Gas
        industry if I can get the chance🤞😁. Nevertheless, these experiences
        have allowed me to contribute to impactful projects, collaborate with
        talented teams, and further refine my skills in building exceptional web
        applications.
      </p>

      <div className="relative w-full">
        <Timeline data={WORK_EXPERIENCE} />
      </div>
    </div>
  );
};

export default WorkExperience;
