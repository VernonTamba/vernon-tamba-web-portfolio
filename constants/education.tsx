import type { StaticImageData } from "next/image";
import AIIASLogo from "@/public/images/aiias.svg";
import AUPLogo from "@/public/images/aup.svg";
import LawenconLogo from "@/public/images/lawencon.svg";

export interface EducationItem {
  title: string;
  degree: string;
  honor: string;
  badge: string;
  logo: StaticImageData;
  image: string;
}

export const EDUCATION: EducationItem[] = [
  {
    title: "Lawencon International",
    degree: "Full-Stack Developer Bootcamp",
    honor: "Completed & Passed",
    badge: "2023 - 2024",
    logo: LawenconLogo,
    image: "/images/lawencon.jpg",
  },
  {
    title: "Adventist University of the Philippines (AUP)",
    degree: "Bachelor of Science in Information Technology",
    honor: "Summa Cum Laude",
    badge: "2019 - 2023",
    logo: AUPLogo,
    image: "/images/aup.jpg",
  },
  {
    title:
      "Adventist International Institute of Advanced Studies Academy (AIIAS)",
    degree: "Senior High School",
    honor: "Academic Excellence Award",
    badge: "2016 - 2019",
    logo: AIIASLogo,
    image: "/images/aiias.jpeg",
  },
];
