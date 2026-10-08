import type { StaticImageData } from "next/image";

import AdidataLogo from "@/public/images/adidata.svg";
import BRILogo from "@/public/images/bank-bri.svg";
import BankMandiriLogo from "@/public/images/bank-mandiri.svg";
import LawenconLogo from "@/public/images/lawencon.svg";
import SatkomLogo from "@/public/images/satkom.svg";

import {
  ADIDATA_URL,
  BANK_MANDIRI_URL,
  BRI_URL,
  LAWENCON_URL,
  SATKOM_URL,
} from "./urls";

export interface WorkExperienceCompanyLink {
  name: string;
  url: string;
  logo: StaticImageData;
}

export interface WorkExperienceItem {
  id: string;
  period: string;
  role: string;
  company: string;
  client?: string;
  projectContext?: string;
  location: string;
  employmentType: string;
  summary: string;
  responsibilities: string[];
  technologies: string[];
  companies: WorkExperienceCompanyLink[];
}

export const WORK_EXPERIENCE_INTRO = {
  title: "Work Experience",
  subtitle: "A look at my professional journey so far",
  description:
    "Frontend Developer with 2+ years of experience building web interfaces for corporate banking and enterprise applications using React, Next.js, TypeScript, and Angular. Worked on micro-frontend architectures for Qlola by BRI and Kopra by Mandiri, with extensive experience implementing Figma designs, integrating REST APIs, writing unit tests, and resolving production defects in Agile teams.",
};

export const WORK_EXPERIENCES: WorkExperienceItem[] = [
  {
    id: "satkomindo-bri",
    period: "Sep 2025 - Present",
    role: "Frontend Developer",
    company: "Satkomindo Mediyasa",
    client: "Bank Rakyat Indonesia (BRI) | Qlola by BRI",
    location: "Jakarta, Indonesia",
    employmentType: "Contract (Insourced)",
    summary:
      "Developing and maintaining mission-critical corporate banking modules for Qlola by BRI within a modern micro-frontend architecture.",
    responsibilities: [
      "Develop and maintain Online User Registration, Multi-Factor Authentication (MFA) login, and Merchant Registration modules as part of a micro-frontend architecture using Next.js, TypeScript, and Module Federation.",
      "Implement responsive UI components and integrate backend APIs to support registration and login MFA workflows.",
      "Implement validated multi-step forms with React Hook Form and Yup, and manage application state with Zustand.",
      "Write unit tests with Jest, improving test coverage to 80%.",
      "Collaborate with backend developers, QA testers, UI/UX designers, and the product owner within Agile sprints, using Jira and Confluence for task tracking and documentation.",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Micro-Frontend",
      "Module Federation",
      "Zustand",
      "React Hook Form",
      "Yup",
      "Jest",
      "Tailwind CSS",
      "REST APIs",
      "Jira",
      "Confluence",
    ],
    companies: [
      {
        name: "Bank Rakyat Indonesia",
        url: BRI_URL,
        logo: BRILogo,
      },
      {
        name: "Satkomindo Mediyasa",
        url: SATKOM_URL,
        logo: SatkomLogo,
      },
    ],
  },
  {
    id: "adidata",
    period: "Feb 2025 - Aug 2025",
    role: "Frontend Developer",
    company: "Adi Data Informatika",
    projectContext: "Internal HRM & AI Interview Applications",
    location: "Jakarta, Indonesia",
    employmentType: "Contract",
    summary:
      "Built and enhanced frontend architectures for an internal Human Resource Management (HRM) platform and an AI Interview web application.",
    responsibilities: [
      "Built and enhanced features for an internal Human Resource Management (HRM) application using React and Next.js.",
      "Refactored frontend code and resolved application defects in development and production environments.",
      "Built the frontend of an AI Interview application from Figma designs using React and Next.js.",
      "Implemented Framer Motion animations, integrated MediaStream and SpeechRecognition browser APIs, and deployed the application to a server.",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Framer Motion",
      "MediaStream API",
      "SpeechRecognition API",
      "Tailwind CSS",
      "REST APIs",
    ],
    companies: [
      {
        name: "Adi Data Informatika",
        url: ADIDATA_URL,
        logo: AdidataLogo,
      },
    ],
  },
  {
    id: "lawencon-mandiri",
    period: "May 2024 - Dec 2024",
    role: "Frontend Developer",
    company: "Lawencon International",
    client: "Bank Mandiri | Kopra by Mandiri",
    location: "Jakarta, Indonesia",
    employmentType: "Contract (Outsourced)",
    summary:
      "Engineered high-volume enterprise web features for Kopra by Mandiri corporate digital wholesale banking portal.",
    responsibilities: [
      "Developed frontend features for the cash management and trade guarantee channels of Kopra by Mandiri, within a micro-frontend architecture.",
      "Implemented interactive, API-integrated interfaces from Figma designs using Angular.",
      "Conducted unit testing with Karma and checked code quality using SonarQube.",
    ],
    technologies: [
      "Angular",
      "TypeScript",
      "Micro-Frontend",
      "Karma",
      "SonarQube",
      "Figma",
      "REST APIs",
    ],
    companies: [
      {
        name: "Bank Mandiri",
        url: BANK_MANDIRI_URL,
        logo: BankMandiriLogo,
      },
      {
        name: "Lawencon International",
        url: LAWENCON_URL,
        logo: LawenconLogo,
      },
    ],
  },
  {
    id: "lawencon-linovhr",
    period: "Feb 2024 - Apr 2024",
    role: "Frontend Developer",
    company: "Lawencon International (Linov Roket Prestasi)",
    projectContext: "LinovHR & Patra Jasa Projects",
    location: "Jakarta, Indonesia",
    employmentType: "Contract",
    summary:
      "Developed user-facing modules for LinovHR Human Resource Management and Patra Jasa's Document Management System.",
    responsibilities: [
      "Developed the Donation Request feature in the LinovHR KRM module using Angular, PrimeNG, and PrimeFlex.",
      "Built responsive, API-integrated interfaces for Patra Jasa's Document Management System using Angular.",
      "Collaborated with product managers and backend developers to translate UI designs into interactive web features.",
    ],
    technologies: [
      "Angular",
      "TypeScript",
      "PrimeNG",
      "PrimeFlex",
      "REST APIs",
      "Figma",
    ],
    companies: [
      {
        name: "Lawencon International",
        url: LAWENCON_URL,
        logo: LawenconLogo,
      },
    ],
  },
];

export const WORK_EXPERIENCE_LIFE = [
  {
    title: "At Bank Rakyat Indonesia",
    link: "https://qlola.bri.co.id/",
    thumbnail: "images/work-exp/card-3.jpg",
  },
  {
    title: "At Bank Rakyat Indonesia",
    link: "https://qlola.bri.co.id/",
    thumbnail: "images/work-exp/bri-5.jpg",
  },
  {
    title: "At Bank Rakyat Indonesia",
    link: "https://qlola.bri.co.id/",
    thumbnail: "images/work-exp/bri-1.jpg",
  },

  {
    title: "At Lawencon International",
    link: "https://www.lawencon.com/",
    thumbnail: "images/work-exp/lawen-1.jpg",
  },
  {
    title: "At Lawencon International",
    link: "https://www.lawencon.com/",
    thumbnail: "images/work-exp/lawen-2.jpg",
  },
  {
    title: "At Lawencon International",
    link: "https://www.lawencon.com/",
    thumbnail: "images/work-exp/lawen-3.jpg",
  },

  {
    title: "At Bank Mandiri",
    link: "https://koprabymandiri.com/",
    thumbnail: "images/work-exp/mandiri-1.jpg",
  },
  {
    title: "At Bank Mandiri",
    link: "https://koprabymandiri.com/",
    thumbnail: "images/work-exp/mandiri-2.jpg",
  },
  {
    title: "At Adi Data Informatika",
    link: "https://adidata.co.id/",
    thumbnail: "images/work-exp/adidata-1.jpg",
  },
  {
    title: "At Adi Data Informatika",
    link: "https://adidata.co.id/",
    thumbnail: "images/work-exp/adidata-2.jpg",
  },
  {
    title: "At Bank Mandiri",
    link: "https://koprabymandiri.com/",
    thumbnail: "images/work-exp/card-1.jpg",
  },

  {
    title: "At Bank Rakyat Indonesia",
    link: "https://qlola.bri.co.id/",
    thumbnail: "images/work-exp/bri-2.jpg",
  },
  {
    title: "At Bank Rakyat Indonesia",
    link: "https://qlola.bri.co.id/",
    thumbnail: "images/work-exp/bri-3.jpg",
  },
  {
    title: "At Bank Rakyat Indonesia",
    link: "https://qlola.bri.co.id/",
    thumbnail: "images/work-exp/bri-4.jpg",
  },
  {
    title: "At Adi Data Informatika",
    link: "https://adidata.co.id/",
    thumbnail: "images/work-exp/card-2.jpg",
  },
];
