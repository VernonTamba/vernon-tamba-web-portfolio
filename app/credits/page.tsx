"use client";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import LottiePlayer from "@/components/ui/lottie-player";
import { MacbookScroll } from "@/components/ui/macbook-scroll";

export default function Credits() {
  return (
    <div className="max-w-7xl w-full min-h-dvh py-40 space-y-15">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl md:text-7xl font-bold text-center">CREDITS</h1>
        <p className="text-neutral-400 my-4 text-xl font-light">
          The reason why this portfolio exists
        </p>
      </div>

      <p className="text-neutral-400 my-4 text-5xl text-center border-b border-white/10 pb-10 mt-30 font-extralight tracking-widest">
        FRAMEWORKS & LIBRARIES
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Next.js
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              The React Framework for the Web. Used by some of the world's
              largest companies.
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <img
                src="/images/nextjs.png"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="Next.js logo"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              <CardItem
                translateZ={20}
                as="a"
                href="https://nextjs.org"
                target="_blank"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                Learn more →
              </CardItem>
              <CardItem
                translateZ={20}
                as="a"
                href="https://nextjs.org/docs"
                target="_blank"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                Documentation
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>

        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-purple-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Aceternity UI
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Beautiful Tailwind CSS and Framer Motion components for modern web
              applications.
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <img
                src="/images/aceternityui.png"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="Next.js logo"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              <CardItem
                translateZ={20}
                as="a"
                href="https://ui.aceternity.com"
                target="_blank"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                Explore →
              </CardItem>
              <CardItem
                translateZ={20}
                as="a"
                href="https://ui.aceternity.com/components"
                target="_blank"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                Components
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </div>

      <p className="text-neutral-400 my-4 text-5xl text-center border-b border-white/10 pb-10 -mb-35 mt-30 font-extralight tracking-widest">
        INSPIRATIONS
      </p>

      <div className="w-full overflow-hidden">
        <MacbookScroll
          title={
            <span className="text-6xl text-white dark:text-white">
              Sonny Sangha <br /> Next-Gen AI Portfolio with Next.js
            </span>
          }
          src={`https://www.youtube.com/embed/HtUaDmMEnFY`}
          showGradient={false}
        />
      </div>

      {/* JAVASCRIPT MASTERY USE CONTAINER SCROLL ANIMATION */}
      <div className="flex flex-col overflow-hidden">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl font-semibold text-white dark:text-white">
                Developer Portfolio with Next.js and Framer Motion <br />
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                  JavaScript Mastery
                </span>
              </h1>
            </>
          }
        >
          <iframe
            src="https://www.youtube.com/embed/FTH6Dn3AyIQ"
            className="mx-auto rounded-2xl object-cover h-full object-left-top w-full"
            height={720}
            width={1400}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </ContainerScroll>
      </div>

      <p className="text-neutral-400 my-4 text-4xl text-center mt-20 font-extralight tracking-widest">
        FOR THEM, BIG THANK YOU FOR THE INSPIRATION AND HELP! <br /> FOR YOU,
        DON'T HAVE A GOOD DAY. HAVE A GREAT DAY!
      </p>
      <LottiePlayer
        animationPath="fist-bump.json"
        className="w-100 h-100 mx-auto mb-8"
      />
    </div>
  );
}
