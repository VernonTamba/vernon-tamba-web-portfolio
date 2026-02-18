import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { PERSONALITY_TRAITS } from "@/constants/about-me";

const AboutMe = () => {
  return (
    <div
      id="#about-me"
      className="min-h-screen md:h-screen w-full flex flex-col items-center justify-center gap-8 relative"
    >
      <h1 className="text-5xl font-bold px-4 mr-auto md:mr-0">About Me</h1>

      <h3 className="text-lg px-4 mr-auto md:mr-0">
        Here is a little bit about me
      </h3>

      <p className="text-left md:text-justify max-w-4xl px-4 text-neutral-600 dark:text-neutral-400">
        I'm a frontend developer with expertise in creating modern web
        applications using React, Next.js, and TypeScript. I enjoy solving
        complex problems and building intuitive user experiences. I'm always
        eager to learn and stay up-to-date with the latest trends and
        technologies in the industry.
      </p>

      <p className="text-left md:text-justify max-w-4xl px-4 text-neutral-600 dark:text-neutral-400">
        Throughout my journey as a developer, I've had the opportunity to work
        on diverse projects that have challenged and honed my skills. From
        building responsive websites to developing interactive web applications,
        I've gained valuable experience in delivering high-quality solutions
        that meet client needs.
      </p>

      <InfiniteMovingCards
        items={PERSONALITY_TRAITS}
        direction="right"
        speed="slow"
        pauseOnHover
      />
    </div>
  );
};

export default AboutMe;
