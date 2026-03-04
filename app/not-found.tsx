import {
  IconBriefcase2,
  IconHome,
  IconMessage,
  IconUser,
} from "@tabler/icons-react";
import Link from "next/link";
import type { ComponentType } from "react";
import LottiePlayer from "@/components/ui/lottie-player";
import { GMAIL_URL } from "@/constants/urls";

const helpfulLinks: {
  href: string;
  label: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
}[] = [
  {
    href: "/",
    label: "Home",
    description: "Start again from the main portfolio page.",
    icon: IconHome,
  },
  {
    href: "/about-me",
    label: "About Me",
    description: "Learn more about my background and journey.",
    icon: IconUser,
  },
  {
    href: "/#projects",
    label: "Projects",
    description: "Browse selected work and case studies.",
    icon: IconBriefcase2,
  },
  {
    href: "/#get-in-touch",
    label: "Get in Touch",
    description: "Reach out for collaboration or opportunities.",
    icon: IconMessage,
  },
];

export default function NotFound() {
  return (
    <section className="flex min-h-dvh w-full items-center justify-center py-20">
      <div className="mx-auto w-full max-w-3xl rounded-2xl border border-white/15 bg-black/50 px-6 py-10 text-left backdrop-blur-sm sm:px-10">
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="flex-1">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
              404 Error
            </p>

            <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
              Page not found.
            </h1>

            <p className="mt-4 text-sm leading-relaxed text-neutral-300 sm:text-base">
              The page you requested does not exist or may have moved. Use one
              of these links to continue browsing the portfolio.
            </p>
          </div>
          <LottiePlayer animationPath="not-found.json" className="flex-1" />
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {helpfulLinks.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className="group rounded-xl border border-white/15 bg-black/40 p-4 transition duration-300 hover:border-cyan-400/50 hover:bg-black/60"
              >
                <div className="flex items-center gap-2 text-cyan-300">
                  <Icon className="h-4 w-4" />
                  <span className="text-sm font-semibold tracking-wide">
                    {item.label}
                  </span>
                </div>
                <p className="mt-2 text-sm text-neutral-300">
                  {item.description}
                </p>
              </Link>
            );
          })}
        </div>

        <p className="mt-8 text-sm leading-relaxed text-neutral-300 sm:text-base">
          If you got here from a broken link, please{" "}
          <a
            href={GMAIL_URL}
            className="font-medium text-cyan-300 underline underline-offset-4 transition hover:text-cyan-200"
          >
            email me
          </a>{" "}
          and I will fix it.
        </p>
      </div>
    </section>
  );
}
