"use client";

import Image from "next/image";

import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

import BRILogo from "@/public/images/bank-bri.svg";
import SatkomLogo from "@/public/images/satkom.svg";
import AdidataLogo from "@/public/images/adidata.svg";
import BankMandiriLogo from "@/public/images/bank-mandiri.svg";
import LawenconLogo from "@/public/images/lawencon.svg";

import {
  ADIDATA_URL,
  BANK_MANDIRI_URL,
  BRI_URL,
  LAWENCON_URL,
  SATKOM_URL,
} from "./urls";

export const WORK_EXPERIENCE = [
  {
    title: "Sep 2025 - Present",
    content: (
      <div>
        <h1 className="mb-1 text-xl md:text-4xl font-bold">
          Frontend Developer
        </h1>
        <p className="mb-2 text-base md:text-lg font-normal text-neutral-800 dark:text-neutral-200">
          Bank Rakyat Indonesia (BRI)
        </p>
        <p className="mb-0 text-sm md:text-lg font-light text-neutral-800 dark:text-neutral-200">
          Jakarta, Indonesia
        </p>
        <p className="mb-4 text-sm md:text-lg font-light italic text-neutral-800 dark:text-neutral-200">
          Contract
        </p>
        <p className="mb-8 text-sm md:text-base font-normal text-neutral-800 dark:text-neutral-200">
          As a Frontend Developer at BRI, I help build and maintain
          user-friendly features for Qlola by BRI. Our team is currently
          developing improvements for the banking experience, and I focus on
          the Online Registration module.
        </p>

        <ul className="list-disc list-inside space-y-2 text-sm md:text-base font-normal text-neutral-800 dark:text-neutral-200">
          <li className="pl-6 -indent-6">
            Insourced from Satkomindo Mediyasa to Bank Rakyat Indonesia (BRI)
          </li>
          <li className="pl-6 -indent-6">
            Convert Figma designs into responsive and interactive web pages
            using React and Next.js.
          </li>
          <li className="pl-6 -indent-6">
            Implement responsive design to ensure optimal user experience across
            different devices and screen sizes.
          </li>
          <li className="pl-6 -indent-6">
            Participate in code reviews and provide constructive feedback to
            fellow developers to improve code quality and maintainability.
          </li>
          <li className="pl-6 -indent-6">
            Collaborate with cross-functional teams, including fellow frontend
            developers, designers, backend developers, quality assurance and
            product managers to deliver high-quality products and features.
          </li>
        </ul>

        <div className="mt-10 flex flex-col md:flex-row justify-start text-center gap-4">
          <HoverBorderGradient
            onClick={() => window.open(BRI_URL, "_blank", "noreferrer")}
            containerClassName="rounded-full"
            as="button"
            className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 cursor-pointer"
          >
            <Image src={BRILogo} alt="BRI Logo" width={50} height={50} />
            <span className="font-bold text-xs md:text-base">
              Bank Rakyat Indonesia
            </span>
          </HoverBorderGradient>
          <HoverBorderGradient
            onClick={() => window.open(SATKOM_URL, "_blank", "noreferrer")}
            containerClassName="rounded-full"
            as="button"
            className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 cursor-pointer"
          >
            <Image
              src={SatkomLogo}
              alt="Satkomindo Mediyasa Logo"
              width={50}
              height={50}
            />
            <span className="font-bold text-xs md:text-base">
              Satkomindo Mediyasa
            </span>
          </HoverBorderGradient>
        </div>
      </div>
    ),
  },
  {
    title: "Feb 2025 - Aug 2025",
    content: (
      <div>
        <h1 className="mb-1 text-xl md:text-4xl font-bold">
          Frontend Developer
        </h1>
        <p className="mb-2 text-base md:text-lg font-normal text-neutral-800 dark:text-neutral-200">
          Adi Data Informatika
        </p>
        <p className="mb-0 text-sm md:text-lg font-light text-neutral-800 dark:text-neutral-200">
          Jakarta, Indonesia
        </p>
        <p className="mb-4 text-sm md:text-lg font-light italic text-neutral-800 dark:text-neutral-200">
          Contract
        </p>
        <p className="mb-8 text-sm md:text-base font-normal text-neutral-800 dark:text-neutral-200">
          As a Frontend Developer at Adi Data Informatika, I worked on
          user-friendly features for the company's Human Resource Management
          (HRM) and AI Interview web applications.
        </p>

        <ul className="list-disc list-inside space-y-2 text-sm md:text-base font-normal text-neutral-800 dark:text-neutral-200">
          <li className="pl-6 -indent-6">
            Converted Figma designs into responsive and interactive web pages
            using React and Next.js.
          </li>
          <li className="pl-6 -indent-6">
            Implemented responsive design to ensure optimal user experience
            across
            different devices and screen sizes.
          </li>
          <li className="pl-6 -indent-6">
            Collaborated with cross-functional teams, including fellow frontend
            developers, designers, backend developers, quality assurance and
            product managers to deliver high-quality products and features.
          </li>
        </ul>

        <div className="mt-10 flex flex-col md:flex-row justify-start text-center gap-4">
          <HoverBorderGradient
            onClick={() => window.open(ADIDATA_URL, "_blank", "noreferrer")}
            containerClassName="rounded-full"
            as="button"
            className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 cursor-pointer"
          >
            <Image
              src={AdidataLogo}
              alt="Adidata Logo"
              width={50}
              height={50}
            />
            <span className="font-bold text-xs md:text-base">
              Adi Data Informatika
            </span>
          </HoverBorderGradient>
        </div>
      </div>
    ),
  },
  {
    title: "May 2024 - Dec 2024",
    content: (
      <div>
        <h1 className="mb-1 text-xl md:text-4xl font-bold">
          Frontend Developer
        </h1>
        <p className="mb-2 text-base md:text-lg font-normal text-neutral-800 dark:text-neutral-200">
          Bank Mandiri
        </p>
        <p className="mb-0 text-sm md:text-lg font-light text-neutral-800 dark:text-neutral-200">
          Jakarta, Indonesia
        </p>
        <p className="mb-4 text-sm md:text-lg font-light italic text-neutral-800 dark:text-neutral-200">
          Contract
        </p>
        <p className="mb-8 text-sm md:text-base font-normal text-neutral-800 dark:text-neutral-200">
          As a Frontend Developer at Bank Mandiri, I helped build and maintain
          user-friendly features for Kopra by Mandiri. My team delivered
          general banking features such as Pending Task, User Management, and
          Bank Admin modules to support daily operations.
        </p>

        <ul className="list-disc list-inside space-y-2 text-sm md:text-base font-normal text-neutral-800 dark:text-neutral-200">
          <li className="pl-6 -indent-6">
            Outsourced from Lawencon International to Bank Mandiri
          </li>
          <li className="pl-6 -indent-6">
            Converted Figma designs into responsive and interactive web pages
            using Angular.
          </li>
          <li className="pl-6 -indent-6">
            Participated in code reviews and provided constructive feedback to
            fellow developers to improve code quality and maintainability.
          </li>
          <li className="pl-6 -indent-6">
            Collaborated with cross-functional teams, including fellow frontend
            developers, designers, backend developers, quality assurance and
            product managers to deliver high-quality products and features.
          </li>
        </ul>

        <div className="mt-10 flex flex-col md:flex-row justify-start text-center gap-4">
          <HoverBorderGradient
            onClick={() =>
              window.open(BANK_MANDIRI_URL, "_blank", "noreferrer")
            }
            containerClassName="rounded-full"
            as="button"
            className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 cursor-pointer"
          >
            <Image
              src={BankMandiriLogo}
              alt="Bank Mandiri Logo"
              width={50}
              height={50}
            />
            <span className="font-bold text-xs md:text-base">Bank Mandiri</span>
          </HoverBorderGradient>
          <HoverBorderGradient
            onClick={() => window.open(LAWENCON_URL, "_blank", "noreferrer")}
            containerClassName="rounded-full"
            as="button"
            className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 cursor-pointer"
          >
            <Image
              src={LawenconLogo}
              alt="Lawencon Logo"
              width={25}
              height={25}
            />
            <span className="font-bold text-xs md:text-base">
              Lawencon International
            </span>
          </HoverBorderGradient>
        </div>
      </div>
    ),
  },
  {
    title: "Feb 2024 - Apr 2024",
    content: (
      <div>
        <h1 className="mb-1 text-xl md:text-4xl font-bold">
          Frontend Developer
        </h1>
        <p className="mb-2 text-base md:text-lg font-normal text-neutral-800 dark:text-neutral-200">
          Lawencon International
        </p>
        <p className="mb-0 text-sm md:text-lg font-light text-neutral-800 dark:text-neutral-200">
          Jakarta, Indonesia
        </p>
        <p className="mb-4 text-sm md:text-lg font-light italic text-neutral-800 dark:text-neutral-200">
          Contract
        </p>
        <p className="mb-8 text-sm md:text-base font-normal text-neutral-800 dark:text-neutral-200">
          As a Frontend Developer at Lawencon International, I worked on
          user-friendly features for LinovHR and an internal Document
          Management System. I contributed to a Donation Request sub-module in
          LinovHR and developed key features for the DMS, including dashboard
          pages, document upload, and document viewer pages.
        </p>

        <ul className="list-disc list-inside space-y-2 text-sm md:text-base font-normal text-neutral-800 dark:text-neutral-200">
          <li className="pl-6 -indent-6">
            Converted Figma designs into responsive and interactive web pages
            using Angular.
          </li>
          <li className="pl-6 -indent-6">
            Collaborated with cross-functional teams, including fellow frontend
            developers, designers, backend developers, quality assurance and
            product managers to deliver high-quality products and features.
          </li>
        </ul>

        <div className="mt-10 flex flex-col md:flex-row justify-start text-center gap-4">
          <HoverBorderGradient
            onClick={() => window.open(LAWENCON_URL, "_blank", "noreferrer")}
            containerClassName="rounded-full"
            as="button"
            className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 cursor-pointer"
          >
            <Image
              src={LawenconLogo}
              alt="Lawencon Logo"
              width={25}
              height={25}
            />
            <span className="font-bold text-xs md:text-base">
              Lawencon International
            </span>
          </HoverBorderGradient>
        </div>
      </div>
    ),
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
