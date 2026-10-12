import {
  IconAppWindow,
  IconBible,
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandGmail,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTelegram,
  IconBrandWhatsapp,
  IconBriefcase,
  IconCode,
  IconCodeCircle2,
  IconCoffee,
  IconLanguage,
  IconMapPin,
  IconMoodHappyFilled,
  IconRocket,
  IconSchool,
} from "@tabler/icons-react";
import CountUp from "@/components/component/countup";
import SmoothScrolling from "@/components/smooth-scrolling/SmoothScrolling";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { MobileWorkCarousel } from "@/components/ui/mobile-work-carousel";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import {
  FACEBOOK_URL,
  GITHUB_URL,
  GMAIL_URL,
  INSTAGRAM_URL,
  LINKEDIN_URL,
  TELEGRAM_URL,
  WHATSAPP_URL,
} from "@/constants/urls";
import { WORK_EXPERIENCE_LIFE } from "@/constants/work-experience";

export default function AboutMe() {
  const words = [
    {
      text: "This",
    },
    {
      text: "is",
    },
    {
      text: "my",
    },
    {
      text: "story.",
    },
    {
      text: "I",
    },
    {
      text: "hope",
    },
    {
      text: "we",
    },
    {
      text: "can",
    },
    {
      text: "connect!",
    },
  ];

  const socialLinks = [
    {
      name: "Gmail",
      icon: IconBrandGmail,
      url: GMAIL_URL,
    },
    {
      name: "Facebook",
      icon: IconBrandFacebook,
      url: FACEBOOK_URL,
    },
    {
      name: "Instagram",
      icon: IconBrandInstagram,
      url: INSTAGRAM_URL,
    },
    {
      name: "LinkedIn",
      icon: IconBrandLinkedin,
      url: LINKEDIN_URL,
    },
    {
      name: "GitHub",
      icon: IconBrandGithub,
      url: GITHUB_URL,
    },
    {
      name: "WhatsApp",
      icon: IconBrandWhatsapp,
      url: WHATSAPP_URL,
    },
    {
      name: "Telegram",
      icon: IconBrandTelegram,
      url: TELEGRAM_URL,
    },
  ];

  return (
    <SmoothScrolling>
      <div className="max-w-7xl w-full min-h-dvh pt-28 sm:pt-36 md:pt-40 space-y-12 sm:space-y-15">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl md:text-7xl font-bold text-center">
            ABOUT ME
          </h1>
          <p className="text-neutral-400 my-4 text-xl font-light">
            A simple introduction about me
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          <CardSpotlight className="h-full w-full col-start-1">
            <div className="flex items-center gap-2">
              <IconBible className="w-6 h-6 text-white" />
              <p className="text-xl font-bold relative z-20 text-white">
                Religion
              </p>
            </div>
            <p className="text-neutral-300 mt-4 relative z-20 text-sm">
              Seventh-Day Adventist
            </p>
          </CardSpotlight>

          <CardSpotlight className="h-full w-full">
            <div className="flex items-center gap-2">
              <IconMapPin className="w-6 h-6 text-white" />
              <p className="text-xl font-bold relative z-20 text-white">
                Location
              </p>
            </div>
            <p className="text-neutral-300 mt-4 relative z-20 text-sm">
              Bekasi, Indonesia
            </p>
          </CardSpotlight>

          <CardSpotlight className="h-full w-full">
            <div className="flex items-center gap-2">
              <IconBriefcase className="w-6 h-6 text-white" />
              <p className="text-xl font-bold relative z-20 text-white">
                Profession
              </p>
            </div>
            <p className="text-neutral-300 mt-4 relative z-20 text-sm">
              Frontend Developer
            </p>
          </CardSpotlight>

          <CardSpotlight className="h-full w-full">
            <div className="flex items-center gap-2">
              <IconSchool className="w-6 h-6 text-white" />
              <p className="text-xl font-bold relative z-20 text-white">
                Education
              </p>
            </div>
            <p className="text-neutral-300 mt-4 relative z-20 text-sm">
              BS in Information Technology
            </p>
          </CardSpotlight>

          <CardSpotlight className="h-full w-full">
            <div className="flex items-center gap-2">
              <IconMoodHappyFilled className="w-6 h-6 text-white" />
              <p className="text-xl font-bold relative z-20 text-white">
                Hobbies
              </p>
            </div>
            <div className="text-neutral-300 mt-4 relative z-20 text-sm">
              <ul className="list-none">
                <Step title="Badminton" />
                <Step title="Swimming" />
                <Step title="Football" />
                <Step title="Music" />
                <Step title="Movies & Games" />
              </ul>
            </div>
          </CardSpotlight>

          <CardSpotlight className="h-full w-full">
            <div className="flex items-center gap-2">
              <IconLanguage className="w-6 h-6 text-white" />
              <p className="text-xl font-bold relative z-20 text-white">
                Languages
              </p>
            </div>
            <div className="text-neutral-300 mt-4 relative z-20 text-sm">
              <ul className="list-none">
                <Step title="Bahasa Indonesia" />
                <Step title="English" />
              </ul>
            </div>
          </CardSpotlight>

          <CardSpotlight className="h-full w-full">
            <div className="flex items-center gap-2">
              <IconCode className="w-6 h-6 text-white" />
              <p className="text-xl font-bold relative z-20 text-white">
                Tech Stack
              </p>
            </div>
            <div className="text-neutral-300 mt-4 relative z-20 text-sm">
              <ul className="list-none">
                <Step title="React.js" />
                <Step title="Next.js" />
                <Step title="Angular" />
                <Step title="WordPress" />
              </ul>
            </div>
          </CardSpotlight>

          <CardSpotlight className="h-full w-full">
            <div className="flex items-center gap-2">
              <IconRocket className="w-6 h-6 text-white" />
              <p className="text-xl font-bold relative z-20 text-white">
                Status
              </p>
            </div>
            <div className="text-neutral-300 mt-4 relative z-20 text-sm">
              <ul className="list-none">
                <Step title="Open to Work" />
                <Step title="Open to Connect" />
                <Step title="Open to Opportunities" />
                <Step title="Open to Grow" />
              </ul>
            </div>
          </CardSpotlight>
        </div>

        <div className="flex flex-col md:flex-row justify-around items-center md:gap-4 mt-16 md:mt-24 py-14 sm:py-16 md:py-0 md:h-[30dvh] border-t border-b border-white/10 gap-10 md:gap-0">
          <div className="space-y-2 flex flex-col justify-center items-center gap-2">
            <CountUp
              value={2}
              duration={5}
              decimals={0}
              suffix="+"
              icon={<IconCodeCircle2 className="w-8 h-8 mb-2" />}
              iconPosition="top"
              className="text-5xl sm:text-6xl font-bold text-white"
            />
            <p className="text-sm sm:text-base text-neutral-300">
              Years of Experience
            </p>
          </div>
          <div className="space-y-2 flex flex-col justify-center items-center gap-2">
            <CountUp
              value={6}
              duration={5}
              decimals={0}
              suffix="+"
              icon={<IconAppWindow className="w-8 h-8 mb-2" />}
              iconPosition="top"
              className="text-5xl sm:text-6xl font-bold text-white"
            />
            <p className="text-sm sm:text-base text-neutral-300">
              Number of Projects
            </p>
          </div>
          <div className="space-y-2 flex flex-col justify-center items-center gap-2">
            <CountUp
              value={0}
              duration={5}
              decimals={0}
              suffix=""
              icon={<IconCoffee className="w-8 h-8 mb-2" />}
              iconPosition="top"
              className="text-5xl sm:text-6xl font-bold text-white"
            />
            <p className="text-sm sm:text-base text-neutral-300">
              Number of Coffees
            </p>
          </div>
        </div>

        <div className="hidden md:block">
          <HeroParallax products={WORK_EXPERIENCE_LIFE} />
        </div>
        <div className="block md:hidden">
          <MobileWorkCarousel products={WORK_EXPERIENCE_LIFE} />
        </div>

        <div className="min-h-[50vh] md:min-h-screen mt-16 md:mt-32 flex flex-col justify-center items-center">
          <TypewriterEffectSmooth className="justify-center" words={words} />

          <footer className="w-full py-12 border-t border-white/10 md:mt-10">
            <div className="flex flex-col items-center gap-8">
              <div className="flex justify-center items-center flex-wrap gap-6 md:gap-20">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative"
                    aria-label={social.name}
                  >
                    <div className="relative p-3 rounded-full transition-all duration-300 ease-out group-hover:scale-110 group-hover:bg-white/5">
                      <social.icon
                        className="w-6 h-6 md:w-10 md:h-10 text-white/70 transition-all duration-300 group-hover:text-white group-hover:scale-110"
                        strokeWidth={1.5}
                      />
                    </div>
                    {/* Tooltip o n hover */}
                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-white text-black text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </footer>
        </div>
      </div>
    </SmoothScrolling>
  );
}

const Step = ({ title }: { title: string }) => {
  return (
    <li className="flex gap-2 items-start">
      <CheckIcon />
      <p className="text-white mt-0.5">{title}</p>
    </li>
  );
};

const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 text-blue-500 mt-1 shrink-0"
    >
      <title>Check</title>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
        fill="currentColor"
        strokeWidth="0"
      />
    </svg>
  );
};
