"use client";

import { useLenis } from "lenis/react";
import { Code } from "lucide-react";
import { cn } from "@/lib/utils";

const MagicButton = ({
  className,
  href,
}: {
  className?: string;
  href?: string;
}) => {
  const lenis = useLenis();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href?.startsWith("#")) {
      e.preventDefault();
      lenis?.scrollTo(href);
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={cn(
        "relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none md:w-50 md:mt-10",
        className,
      )}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl">
        See my work <Code className="ml-2" />
      </span>
    </a>
  );
};

export default MagicButton;
