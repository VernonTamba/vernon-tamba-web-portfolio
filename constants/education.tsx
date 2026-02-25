import Image from "next/image";

import LawenconLogo from "@/public/images/lawencon.svg";
import AUPLogo from "@/public/images/aup.svg";
import AIIASLogo from "@/public/images/aiias.svg";

export const EDUCATION = [
  {
    title: "Lawencon International",
    description: (
      <div className="flex flex-col gap-2">
        <p className="md:text-lg font-semibold">
          Full-Stack Developer Bootcamp
        </p>
        <p>Passed</p>

        <Image
          className="absolute top-3 right-3 lg:top-50 lg:-right-35 w-10 h-10 md:w-25 md:h-25"
          src={LawenconLogo}
          alt="Lawencon Logo"
        />
      </div>
    ),
    badge: "2023 - 2024",
    image: "/images/lawencon.jpg",
  },
  {
    title: "Adventist University of the Philippines (AUP)",
    description: (
      <div className="flex flex-col gap-2">
        <p className="md:text-lg font-semibold">
          Bachelor of Science in Information Technology
        </p>
        <p>Summa Cum Laude</p>

        <Image
          className="absolute top-3 right-3 lg:top-40 lg:-right-35 w-10 h-10 md:w-25 md:h-25"
          src={AUPLogo}
          alt="AUP Logo"
        />
      </div>
    ),
    badge: "2019 - 2023",
    image: "/images/aup.jpg",
  },
  {
    title:
      "Adventist International Institute of Advanced Studies Academy (AIIAS)",
    description: (
      <div className="flex flex-col gap-2">
        <p className="md:text-lg font-semibold">Senior High School</p>
        <p>Academic Excellence Award</p>

        <Image
          className="absolute top-3 right-3 lg:top-40 lg:-right-35 w-10 h-10 md:w-25 md:h-25"
          src={AIIASLogo}
          alt="AIIAS Logo"
        />
      </div>
    ),
    badge: "2016 - 2019",
    image: "/images/aiias.jpeg",
  },
];
