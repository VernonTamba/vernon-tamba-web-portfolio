"use client";

import { IconAward, IconCalendar } from "@tabler/icons-react";
import Image from "next/image";
import { EDUCATION } from "@/constants/education";
import { TracingBeam } from "./ui/tracing-beam";

const Education = () => {
  return (
    <div
      id="education"
      className="relative mt-16 flex min-h-screen w-full flex-col items-center justify-center gap-6 py-20 md:mt-24 md:gap-8 md:py-24"
    >
      <h1 className="mr-auto px-4 text-left text-3xl font-bold sm:text-4xl md:mr-0 md:text-center md:text-5xl">
        Education
      </h1>

      <h3 className="mr-auto px-4 text-base text-neutral-400 sm:text-lg md:mr-0">
        My learning journey so far
      </h3>

      <p className="max-w-4xl px-4 text-left text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-base md:text-justify">
        I completed senior high school at Adventist International Institute of
        Advanced Studies (AIIAS) Academy in 2019. I then earned my
        Bachelor&apos;s degree in Information Technology from Adventist
        University of the Philippines (AUP) in 2023, graduating with honors. In
        early 2024, I completed a Full-Stack Web Development bootcamp at
        Lawencon International. These experiences gave me a strong foundation
        and strengthened my commitment to continuous learning.
      </p>

      <TracingBeam>
        <div className="relative mx-auto max-w-4xl px-4 pt-4 antialiased sm:px-6">
          {EDUCATION.map((item) => (
            <div
              key={item.title}
              className="mb-12 rounded-2xl border border-neutral-200/20 bg-neutral-900/40 p-5 backdrop-blur-sm shadow-lg transition-all duration-300 hover:border-neutral-700/60 md:p-7"
            >
              {/* Header row: Logo, Titles, Badge */}
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-black/60 p-2 shadow-inner">
                    <Image
                      src={item.logo}
                      alt={`${item.title} logo`}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-lg font-bold text-neutral-100 sm:text-xl">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-neutral-300 sm:text-base">
                      {item.degree}
                    </p>
                  </div>
                </div>

                <div className="flex shrink-0 items-center gap-1.5 self-start rounded-full border border-neutral-800 bg-neutral-950 px-3.5 py-1 text-xs font-medium text-neutral-400">
                  <IconCalendar className="h-3.5 w-3.5 text-neutral-400" />
                  <span>{item.badge}</span>
                </div>
              </div>

              {/* Honor / Achievement Tag */}
              {item.honor && (
                <div className="mt-4 flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-xs font-semibold text-emerald-400">
                    <IconAward className="h-3.5 w-3.5" />
                    {item.honor}
                  </span>
                </div>
              )}

              {/* Compact Sleek Campus Photo Banner */}
              {item.image && (
                <div className="relative mt-5 h-44 w-full overflow-hidden rounded-xl border border-white/10 sm:h-52 md:h-56">
                  <Image
                    src={item.image}
                    alt={`${item.title} campus`}
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 896px"
                    className="object-cover object-center transition-transform duration-500 hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
              )}
            </div>
          ))}
        </div>
      </TracingBeam>
    </div>
  );
};

export default Education;
