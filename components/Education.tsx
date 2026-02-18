"use client";

import { TracingBeam } from "./ui/tracing-beam";
import { EDUCATION } from "@/constants/education";

const Education = () => {
  return (
    <div
      id="education"
      className="min-h-screen w-full flex flex-col items-center justify-center gap-8 relative mt-30 md:mt-40"
    >
      <h1 className="text-5xl font-bold text-center px-4 mr-auto md:mr-0">
        Education
      </h1>

      <h3 className="text-lg px-4 mr-auto md:mr-0">
        Here is my educational background so far
      </h3>

      <p className="text-left md:text-justify max-w-4xl px-4 text-neutral-600 dark:text-neutral-400">
        I completed my education at Adventist International Institute of
        Advanced Studies (AIIAS) Academy graduated on 2019. Following that, I
        pursued a Bachelor's degree in Information Technology at the same
        institution, where I graduated in 2023 with honors at Adventist
        University of the Philippines (AUP) . After earning my degree, I
        continued to enhance my skills by enrolling in a Full-Stack Web
        Development bootcamp program at Lawencon International, which I
        completed in the start of 2024. These educational experiences have
        equipped me with a solid foundation in IT and web development.
        Nonetheless, I am committed to continuous learning and growth in my
        field.
      </p>

      <TracingBeam>
        <div className="max-w-4xl mx-auto antialiased pt-4 relative">
          {EDUCATION.map((item, index) => (
            <div key={`content-${index}`} className="mb-10">
              <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4 ml-auto md:ml-0">
                {item.badge}
              </h2>

              <p className="text-base md:text-xl mb-4 font-bold text-right md:text-left">
                {item.title}
              </p>

              <div className="text-sm prose prose-sm dark:prose-invert relative text-right md:text-left">
                {item?.image && (
                  <img
                    src={item.image}
                    alt="blog thumbnail"
                    height="1000"
                    width="1000"
                    className="rounded-lg mb-10 object-cover"
                  />
                )}
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </TracingBeam>
    </div>
  );
};

export default Education;
