import LottiePlayer from "@/components/ui/lottie-player";
import { IconInfoTriangleFilled } from "@tabler/icons-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maintenance | Vernon's Portfolio",
  description:
    "Vernon's portfolio is temporarily under maintenance and will be back soon.",
};

export default function MaintenancePage() {
  return (
    <section className="flex min-h-dvh w-full items-center justify-center py-20">
      <div className="mx-auto w-full max-w-2xl rounded-2xl border border-white/15 bg-black/50 px-6 py-10 text-center backdrop-blur-sm sm:px-10">
        <div className="flex items-center justify-center gap-2 mb-8 text-cyan-300">
          <p className="text-sm uppercase tracking-[0.3em]">Temporary Notice</p>
          <IconInfoTriangleFilled />
        </div>

        <h1 className="text-3xl font-bold text-white sm:text-4xl">
          Website Under Maintenance
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-neutral-300 sm:text-base">
          I'm currently improving and fixing parts of this portfolio. Thank you
          for your patience and understanding! I apologize for any inconvenience
          this may cause. Please check back soon!
        </p>

        <p className="mt-4 text-sm leading-relaxed text-neutral-300 sm:text-base">
          With love, Vernon Tamba
        </p>

        <LottiePlayer
          animationPath="maintenance.json"
          className="mr-12 md:mr-24"
        />
      </div>
    </section>
  );
}
