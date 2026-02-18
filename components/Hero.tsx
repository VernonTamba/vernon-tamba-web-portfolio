"use client";

import Image from "next/image";
import { motion } from "motion/react";

import { TextGenerateEffect } from "./ui/text-generate-effect";
import { BackgroundGradient } from "./ui/background-gradient";
import { LayoutTextFlip } from "./ui/layout-text-flip";
import MagicButton from "./ui/magic-button";

import ProfilePicture from "@/public/images/profile-picture-2.png";
import GmailIcon from "@/public/icons/gmail.png";
import LocationIcon from "@/public/icons/pin.png";
import CheckmarkIcon from "@/public/icons/accept.png";

const Hero = () => {
  return (
    <div
      id="home"
      className="min-h-screen md:h-screen w-full flex flex-col-reverse md:flex-row items-center justify-center gap-8 relative"
    >
      <div className="mx-auto relative z-10 w-full flex flex-col items-start justify-center px-4">
        <TextGenerateEffect words={"Vernon Tamba"} />

        <motion.div className="relative my-4 flex items-center gap-4 sm:mx-0 sm:mb-0">
          <LayoutTextFlip
            text="I build with"
            words={["Next.js", "React", "Angular", "WordPress"]}
          />
        </motion.div>
        <p className="mt-4 text-justify md:text-left text-base text-neutral-600 dark:text-neutral-400">
          A{" "}
          <span className="font-semibold text-neutral-900 dark:text-neutral-100">
            Frontend Developer
          </span>{" "}
          who enjoys turning ideas into clean, responsive, and user-focused web
          experiences. While my professional journey is still growing, I’m
          continuously learning, building projects, and refining my skills to
          become a better developer every day.
        </p>

        {/* Updated MagicButton with href */}
        <MagicButton className="my-8 w-full" href="#projects" />

        <div className="flex flex-col md:flex-row items-start md:gap-10 text-sm md:text-base">
          <div>
            <p className="text-[#e0e0e0] flex gap-1 font-light">
              vernon.tamba777@gmail.com{" "}
              <Image
                src={GmailIcon}
                alt="Gmail"
                className="ml-2 w-4 h-4 mt-1"
              />
            </p>
          </div>
          <div>
            <p className="text-[#e0e0e0] flex gap-1 font-light">
              Bekasi, Indonesia{" "}
              <Image
                src={LocationIcon}
                alt="Location"
                className="ml-2 w-4 h-4 mt-1"
              />
            </p>
          </div>
          <div>
            <p className="text-[#e0e0e0] flex gap-1 font-light">
              Open to Work{" "}
              <Image
                src={CheckmarkIcon}
                alt="Checkmark"
                className="ml-2 w-4 h-4 mt-1"
              />{" "}
            </p>
          </div>
        </div>
      </div>

      <BackgroundGradient
        containerClassName="hidden md:block m-4 sm:m-6 md:m-10"
        className="rounded-[22px] p-2 bg-black"
      >
        <Image
          src={ProfilePicture}
          alt="Vernon Tamba"
          sizes="(max-width: 640px) 160px, (max-width: 768px) 200px, (max-width: 1024px) 380px, 440px"
          className="w-[160px] sm:w-[200px] md:w-[380px] lg:w-[440px] h-auto object-contain rounded-[22px]"
          priority
        />
      </BackgroundGradient>
    </div>
  );
};

export default Hero;
