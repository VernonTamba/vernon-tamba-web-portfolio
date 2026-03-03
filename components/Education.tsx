"use client";

import { TracingBeam } from "./ui/tracing-beam";
import { EDUCATION } from "@/constants/education";
import Image from "next/image";

const Education = () => {
  return (
    <div
      id="education"
      className="relative mt-16 flex min-h-screen w-full flex-col items-center justify-center gap-6 py-20 md:mt-24 md:gap-8 md:py-24"
    >
      <h1 className="mr-auto px-4 text-left text-3xl font-bold sm:text-4xl md:mr-0 md:text-center md:text-5xl">
        Education
      </h1>

      <h3 className="mr-auto px-4 text-base sm:text-lg md:mr-0">
        My learning journey so far
      </h3>

      <p className="max-w-4xl px-4 text-left text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-base md:text-justify">
        I completed senior high school at Adventist International Institute of
        Advanced Studies (AIIAS) Academy in 2019. I then earned my Bachelor's
        degree in Information Technology from Adventist University of the
        Philippines (AUP) in 2023, graduating with honors. In early 2024, I
        completed a Full-Stack Web Development bootcamp at Lawencon
        International. These experiences gave me a strong foundation and
        strengthened my commitment to continuous learning.
      </p>

      <TracingBeam>
        <div className="relative mx-auto max-w-4xl px-4 pt-4 antialiased sm:px-6">
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
                  <Image
                    src={item.image}
                    alt={`${item.title} image`}
                    width={1000}
                    height={560}
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 896px"
                    className="rounded-lg mb-10 object-cover w-full h-auto"
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
