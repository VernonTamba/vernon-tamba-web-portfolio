"use client";

import Lottie from "lottie-react";

interface LottiePlayerProps {
  animationPath: string;
  loop?: boolean;
  autoplay?: boolean;
  className?: string;
}

export default function LottiePlayer({
  animationPath,
  loop = true,
  autoplay = true,
  className,
}: LottiePlayerProps) {
  return (
    <Lottie
      animationData={require(`@/public/lottie/${animationPath}`)}
      loop={loop}
      autoplay={autoplay}
      className={className}
    />
  );
}
