"use client";

import { motion, useMotionValueEvent, useScroll } from "motion/react";
import Link from "next/link";
import { useTransitionRouter } from "next-view-transitions";
import type React from "react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: React.JSX.Element;
  }[];
  className?: string;
}) => {
  const router = useTransitionRouter();
  const { scrollYProgress } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      setScrolled(current > 0.02);
    }
  });

  const slideInOut = () => {
    document.documentElement.animate(
      [
        {
          opacity: 1,
          transform: "translateY(0)",
        },
        {
          opacity: 0.2,
          transform: "translateY(-35%)",
        },
      ],
      {
        duration: 1500,
        easing: "cubic-bezier(0.87, 0, 0.13, 1)",
        fill: "forwards",
        pseudoElement: "::view-transition-old(root)",
      },
    );

    document.documentElement.animate(
      [
        {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        },
        {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        },
      ],
      {
        duration: 1500,
        easing: "cubic-bezier(0.87, 0, 0.13, 1)",
        fill: "forwards",
        pseudoElement: "::view-transition-new(root)",
      },
    );
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.3,
        ease: "easeOut",
      }}
      className={cn(
        "flex max-w-fit fixed top-6 inset-x-0 mx-auto border border-white/[0.15] rounded-full backdrop-blur-md bg-black/75 shadow-[0px_4px_24px_rgba(0,0,0,0.4)] z-[5000] pr-2 pl-6 py-2 items-center justify-center space-x-4 transition-all duration-300",
        scrolled &&
          "border-white/[0.25] bg-black/85 shadow-[0px_8px_32px_rgba(0,0,0,0.6)]",
        className,
      )}
    >
      {navItems.map((navItem: any) => (
        <Link
          key={navItem.link}
          onClick={(e) => {
            e.preventDefault();
            router.push(navItem.link, {
              onTransitionReady: slideInOut,
            });
          }}
          href={navItem.link}
          className={cn(
            "relative dark:text-neutral-200 items-center flex space-x-1 text-neutral-300 hover:text-white transition-colors duration-200",
          )}
        >
          <span className="block sm:hidden">{navItem.icon}</span>
          <span className="hidden sm:block text-sm font-medium">
            {navItem.name}
          </span>
        </Link>
      ))}
      <Link
        href="/credits"
        onClick={(e) => {
          e.preventDefault();
          router.push("/credits", {
            onTransitionReady: slideInOut,
          });
        }}
        className="border text-xs sm:text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full hover:bg-white/10 transition-colors inline-flex items-center justify-center"
      >
        <span>Credits</span>
        <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
      </Link>
    </motion.div>
  );
};
