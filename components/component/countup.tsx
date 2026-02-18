"use client";

import { useEffect, useRef } from "react";
import { motion, useSpring, useTransform, useInView } from "framer-motion";

interface CountUpProps {
  value: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right" | "top" | "bottom";
  className?: string;
  startOnView?: boolean;
  separator?: string;
}

export default function CountUp({
  value,
  duration = 2,
  decimals = 0,
  prefix = "",
  suffix = "",
  icon,
  iconPosition = "left",
  className = "",
  startOnView = true,
  separator = ",",
}: CountUpProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const spring = useSpring(0, {
    duration: duration * 1000,
    bounce: 0,
  });

  const display = useTransform(spring, (current) => {
    const formatted = current.toFixed(decimals);
    const [integer, decimal] = formatted.split(".");

    // Add thousand separators
    const withSeparator = integer.replace(/\B(?=(\d{3})+(?!\d))/g, separator);

    return decimals > 0 ? `${withSeparator}.${decimal}` : withSeparator;
  });

  useEffect(() => {
    if (startOnView) {
      if (isInView) {
        spring.set(value);
      }
    } else {
      spring.set(value);
    }
  }, [spring, value, isInView, startOnView]);

  const iconElement = icon && (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: duration * 0.3, duration: 0.4, type: "spring" }}
      className="flex-shrink-0"
    >
      {icon}
    </motion.div>
  );

  const numberElement = (
    <div className="flex items-baseline">
      {prefix && <span className="mr-1">{prefix}</span>}
      <motion.span>{display}</motion.span>
      {suffix && <span className="ml-1">{suffix}</span>}
    </div>
  );

  const layouts = {
    left: "flex-row",
    right: "flex-row-reverse",
    top: "flex-col",
    bottom: "flex-col-reverse",
  };

  const spacing = {
    left: "gap-3",
    right: "gap-3",
    top: "gap-2",
    bottom: "gap-2",
  };

  return (
    <div
      ref={ref}
      className={`flex items-center ${layouts[iconPosition]} ${spacing[iconPosition]} ${className}`}
    >
      {iconElement}
      {numberElement}
    </div>
  );
}
