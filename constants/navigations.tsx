import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBriefcase2,
  IconFolderCode,
  IconHome,
  IconMail,
  IconMessage,
  IconSchool,
  IconShieldCheck,
  IconUser,
} from "@tabler/icons-react";
import { GITHUB_URL, LINKEDIN_URL } from "./urls";

export const FLOATING_NAV_ITEMS = [
  {
    name: "Home",
    link: "/",
    icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "About Me",
    link: "/about-me",
    icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
];

export const FLOATING_DOCKS_ITEMS = [
  {
    title: "Home",
    icon: (
      <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#home",
  },
  {
    title: "Education",
    icon: (
      <IconSchool className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#education",
  },
  {
    title: "Work Experience",
    icon: (
      <IconBriefcase2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#work-experience",
  },
  {
    title: "Skills & Tools",
    icon: (
      <IconShieldCheck className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#skills",
  },
  {
    title: "Projects",
    icon: (
      <IconFolderCode className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#projects",
  },
  {
    title: "Contact",
    icon: (
      <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#get-in-touch",
  },
  {
    title: "LinkedIn",
    icon: (
      <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: LINKEDIN_URL,
  },
  {
    title: "GitHub",
    icon: (
      <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: GITHUB_URL,
  },
];
