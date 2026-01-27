import { DottedGlowBackground } from "./ui/dotted-glow-background";
import { SKILLS } from "@/constants/skills";

const Skills = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center gap-8 relative py-12">
      <h1 className="text-5xl font-bold text-center">Skills & Tools</h1>

      <h3 className="text-lg">Here are the skills and tools I have utilized</h3>

      <p className="text-justify max-w-4xl px-4 text-neutral-600 dark:text-neutral-400">
        Throughout my journey as a front end developer, I have utilized and
        acquired a diverse set of technical skills and tools that enable me to
        create dynamic and responsive web applications, and collaborate with
        other co-workers. These skills and tools include:
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 px-4 max-w-7xl w-full">
        {SKILLS.map((skill) => (
          <div
            key={skill.name}
            className="relative flex h-40 w-full flex-col items-end justify-end overflow-hidden rounded-md rounded-tl-3xl rounded-br-3xl rounded-bl-3xl border border-transparent px-4 shadow ring-1 shadow-black/10 ring-black/5 dark:shadow-white/10 dark:ring-white/5"
          >
            <div className="absolute inset-0 z-20 m-auto flex items-center justify-center pointer-events-none">
              <skill.icon className="h-12 w-12 text-neutral-600 dark:text-neutral-200 transition-transform duration-300 hover:scale-110" />
            </div>

            <div className="relative z-20 flex w-full justify-between px-2 py-3 backdrop-blur-[2px]">
              <p className="text-xs font-medium text-neutral-600 dark:text-neutral-400">
                {skill.name}
              </p>
            </div>

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
              speedMin={0.3}
              speedMax={1.6}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
