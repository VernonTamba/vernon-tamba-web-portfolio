"use client";

import SmoothScrolling from "@/components/smooth-scrolling/SmoothScrolling";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import LottiePlayer from "@/components/ui/lottie-player";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import Image from "next/image";

export default function Credits() {
  return (
    <SmoothScrolling>
      <div className="max-w-7xl w-full min-h-dvh pt-40 pb-20 space-y-15">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl md:text-7xl font-bold text-center">
            CREDITS
          </h1>
          <p className="text-neutral-400 my-4 text-xl font-light text-center">
            The people and resources behind this portfolio
          </p>
        </div>

        <p className="text-neutral-400 my-4 text-4xl md:text-5xl text-center border-b border-white/10 pb-10 mt-30 font-extralight tracking-widest">
          FRAMEWORKS & LIBRARIES
        </p>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
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
                The React framework I used to build and structure this
                portfolio.
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src="/images/nextjs.png"
                  alt="Next.js logo"
                  width={1000}
                  height={1000}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 480px"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
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
                  Learn more
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
                A UI component library that helped me build interactions and
                visuals faster.
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src="/images/aceternityui.png"
                  alt="Aceternity UI logo"
                  width={1000}
                  height={1000}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 480px"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
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
                  Explore
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

        <p className="text-neutral-400 my-4 text-4xl md:text-5xl text-center border-b border-white/10 pb-10 -mb-35 mt-30 font-extralight tracking-widest">
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
                <h1 className="text-2xl md:text-4xl font-semibold text-white dark:text-white">
                  Developer Portfolio with Next.js and Framer Motion <br />
                  <span className="text-2xl md:text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                    JavaScript Mastery
                  </span>
                </h1>
              </>
            }
          >
            <iframe
              src="https://www.youtube.com/embed/FTH6Dn3AyIQ"
              loading="lazy"
              className="mx-auto rounded-2xl object-cover h-full object-left-top w-full"
              height={720}
              width={1400}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </ContainerScroll>
        </div>

        <p className="text-neutral-400 my-4 text-lg md:text-4xl text-center mt-20 font-extralight tracking-widest">
          Big thanks to these creators for the inspiration and guidance.
          <br />
          And to you, thank you for visiting my portfolio.
          <br />
          <br />
          Don't have a good day. Have a great day!
        </p>
        <LottiePlayer
          animationPath="fist-bump.json"
          className="md:w-100 md:h-100 mx-auto mb-8"
        />
      </div>
    </SmoothScrolling>
  );
}
