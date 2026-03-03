import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { PERSONALITY_TRAITS } from "@/constants/about-me";

const AboutMe = () => {
  return (
    <div
      id="about-me"
      className="relative flex min-h-screen w-full flex-col items-center justify-center gap-6 py-20 md:gap-8 md:py-24"
    >
      <h1 className="mr-auto px-4 text-left text-3xl font-bold sm:text-4xl md:mr-0 md:text-center md:text-5xl">
        About Me
      </h1>

      <h3 className="mr-auto px-4 text-base sm:text-lg md:mr-0">
        A little introduction about who I am
      </h3>

      <p className="max-w-4xl px-4 text-left text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-base md:text-justify">
        I am a frontend developer who enjoys building modern web interfaces
        using React, Next.js, Angular, and WordPress. I focus on creating
        websites that are clean, responsive, and easy to use. I enjoy solving
        problems and building intuitive user experiences. I'm always eager to
        learn and stay up-to-date with the latest trends and technologies in the
        industry.
      </p>

      <p className="max-w-4xl px-4 text-left text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-base md:text-justify">
        My journey so far has given me opportunities to work on different
        projects and collaborate with different teams. Each project helps me
        improve my communication, technical skills, and attention to detail.
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
