"use client";

import { motion } from "motion/react";
import Image from "next/image";
import CheckmarkIcon from "@/public/icons/accept.png";
import GmailIcon from "@/public/icons/gmail.png";
import LocationIcon from "@/public/icons/pin.png";
import ProfilePicture from "@/public/images/Vernon Profile Picture.webp";
import { BackgroundGradient } from "./ui/background-gradient";
import { LayoutTextFlip } from "./ui/layout-text-flip";
import MagicButton from "./ui/magic-button";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const Hero = () => {
  return (
    <div
      id="home"
      className="relative flex min-h-screen w-full flex-col-reverse items-center justify-center gap-8 py-24 md:py-28 lg:flex-row lg:gap-12"
    >
      <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-start justify-center px-1 sm:px-4">
        <TextGenerateEffect words={"Vernon Tamba"} />

        <motion.div className="relative my-4 flex items-center gap-4 sm:mx-0 sm:mb-0">
          <LayoutTextFlip
            text="I build with"
            words={["Next.js", "React", "Angular", "WordPress"]}
          />
        </motion.div>
        <p className="mt-4 text-base leading-relaxed text-neutral-600 dark:text-neutral-400 md:text-left">
          A{" "}
          <span className="font-semibold text-neutral-900 dark:text-neutral-100">
            Frontend Developer
          </span>{" "}
          who enjoys turning ideas into clean, responsive, and user-friendly
          websites. I am still growing in my career, and I stay excited to keep
          learning, building, and improving step by step.
        </p>

        <MagicButton className="my-8 w-full sm:w-fit" href="#projects" />

        <div className="flex w-full flex-col gap-3 text-sm sm:text-base md:flex-row md:flex-wrap md:items-center md:gap-x-8 md:gap-y-3">
          <div>
            <p className="flex gap-1 break-all font-light text-[#e0e0e0] sm:break-normal">
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
        containerClassName="m-4 hidden sm:block sm:m-6 md:m-8 lg:m-10 shrink-0 self-center"
        className="rounded-[24px] bg-black p-1.5"
      >
        <div className="relative overflow-hidden rounded-[20px] w-[220px] h-[300px] sm:w-[260px] sm:h-[360px] md:w-[300px] md:h-[420px] lg:w-[340px] lg:h-[460px] xl:w-[360px] xl:h-[480px]">
          <Image
            src={ProfilePicture}
            alt="Vernon Tamba"
            fill
            sizes="(max-width: 640px) 220px, (max-width: 768px) 260px, (max-width: 1024px) 300px, (max-width: 1280px) 340px, 360px"
            className="object-cover object-center"
            priority
          />
        </div>
      </BackgroundGradient>
    </div>
  );
};

export default Hero;
