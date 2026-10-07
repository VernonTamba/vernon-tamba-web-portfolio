import { motion } from "motion/react";
import type React from "react";
import { cn } from "@/lib/utils";

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
}) => {
  const variants = {
    initial: {
      backgroundPosition: "0% 50%",
    },
    animate: {
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    },
  };

  return (
    <div
      className={cn("relative p-[2px] rounded-3xl group", containerClassName)}
    >
      {/* Soft glow */}
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 6,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "400% 400%" : undefined,
        }}
        className={cn(
          "absolute inset-0 rounded-3xl z-[1] blur-xl opacity-40 group-hover:opacity-70 transition-opacity duration-500",
          "bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.35),transparent)]",
        )}
      />

      {/* Border */}
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 6,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "400% 400%" : undefined,
        }}
        className={cn(
          "absolute inset-0 rounded-3xl z-[2]",
          "bg-[linear-gradient(135deg,rgba(255,255,255,0.6),rgba(180,180,180,0.4),rgba(255,255,255,0.6))]",
        )}
      />

      {/* Content */}
      <div className={cn("relative z-10 rounded-3xl bg-black", className)}>
        {children}
      </div>
    </div>
  );
};
