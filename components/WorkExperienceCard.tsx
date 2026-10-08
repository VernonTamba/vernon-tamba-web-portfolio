"use client";

import {
  IconBriefcase,
  IconBuildingBank,
  IconCode,
  IconExternalLink,
  IconMapPin,
} from "@tabler/icons-react";
import Image from "next/image";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import type { WorkExperienceItem } from "@/constants/work-experience";

interface WorkExperienceCardProps {
  experience: WorkExperienceItem;
}

export const WorkExperienceCard = ({ experience }: WorkExperienceCardProps) => {
  return (
    <div className="flex flex-col text-left">
      {/* Role Title */}
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-900 dark:text-neutral-50 tracking-tight">
        {experience.role}
      </h2>

      {/* Badges / Meta Info */}
      <div className="mt-3 flex flex-wrap items-center gap-2">
        {experience.client && (
          <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs font-semibold text-sky-700 dark:text-sky-300">
            <IconBuildingBank className="h-3.5 w-3.5" />
            Client: {experience.client}
          </span>
        )}

        {experience.projectContext && (
          <span className="inline-flex items-center gap-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-xs font-semibold text-purple-700 dark:text-purple-300">
            <IconCode className="h-3.5 w-3.5" />
            {experience.projectContext}
          </span>
        )}

        <span className="inline-flex items-center gap-1.5 rounded-full border border-neutral-300 dark:border-neutral-800 bg-neutral-200/50 dark:bg-neutral-950/60 px-3 py-1 text-xs font-medium text-neutral-700 dark:text-neutral-300">
          <IconBriefcase className="h-3.5 w-3.5 text-neutral-500" />
          {experience.company} · {experience.employmentType}
        </span>

        <span className="inline-flex items-center gap-1.5 rounded-full border border-neutral-300 dark:border-neutral-800 bg-neutral-200/50 dark:bg-neutral-950/60 px-3 py-1 text-xs font-medium text-neutral-700 dark:text-neutral-300">
          <IconMapPin className="h-3.5 w-3.5 text-neutral-500" />
          {experience.location}
        </span>
      </div>

      {/* Summary */}
      <p className="mt-4 text-sm sm:text-base font-normal text-neutral-700 dark:text-neutral-300 leading-relaxed">
        {experience.summary}
      </p>

      {/* Key Responsibilities & Achievements */}
      <ul className="mt-4 space-y-2.5">
        {experience.responsibilities.map((resp) => (
          <li
            key={resp}
            className="flex items-start gap-2.5 text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed"
          >
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500 dark:bg-sky-400" />
            <span>{resp}</span>
          </li>
        ))}
      </ul>

      {/* Technologies Used Pills */}
      <div className="mt-6 pt-5 border-t border-neutral-300/40 dark:border-neutral-800/80">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-600 dark:text-neutral-400 mb-3">
          Technologies Used
        </h3>
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center rounded-md border border-neutral-300/80 dark:border-neutral-800 bg-neutral-200/50 dark:bg-neutral-950/80 px-2.5 py-1 text-xs font-medium text-neutral-800 dark:text-neutral-300 shadow-2xs hover:border-neutral-400 dark:hover:border-neutral-700 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Company Verification Links */}
      {experience.companies.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-3">
          {experience.companies.map((company) => (
            <HoverBorderGradient
              key={company.name}
              containerClassName="rounded-full"
              as="a"
              href={company.url}
              target="_blank"
              rel="noopener noreferrer"
              className="dark:bg-black bg-white text-neutral-900 dark:text-white flex items-center space-x-2.5 px-4 py-2 text-xs md:text-sm font-semibold cursor-pointer shadow-sm hover:opacity-90 transition-opacity"
            >
              <Image
                src={company.logo}
                alt={`${company.name} logo`}
                width={32}
                height={32}
                className="h-5 w-auto object-contain"
              />
              <span>{company.name}</span>
              <IconExternalLink className="h-3.5 w-3.5 text-neutral-400" />
            </HoverBorderGradient>
          ))}
        </div>
      )}
    </div>
  );
};

