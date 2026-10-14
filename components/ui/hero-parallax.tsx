"use client";
import {
  type MotionValue,
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import Image from "next/image";
import React from "react";
import LottiePlayer from "./lottie-player";

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig,
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig,
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig,
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig,
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig,
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-600, 200]),
    springConfig,
  );
  return (
    <div
      ref={ref}
      className="h-[320vh] min-h-[2600px] lg:min-h-[2850px] pt-16 md:pt-24 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-12 md:space-x-16 lg:space-x-20 mb-12 md:mb-16 lg:mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.thumbnail}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-12 md:mb-16 lg:mb-20 space-x-12 md:space-x-16 lg:space-x-20">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.thumbnail}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-12 md:space-x-16 lg:space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.thumbnail}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-10 md:py-20 lg:py-24 px-4 w-full left-0 top-0 flex flex-col md:flex-row items-center justify-between gap-8">
      <div>
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold dark:text-white">
          About my <br /> work experience
        </h1>
        <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
          I have been working as a frontend developer for more than 2 years. I
          have met a lot of people, and I have learned a lot from them. I have
          also had the opportunity to work on a lot of projects, and I have
          learned a lot from them. <br /> <br /> These experiences have allowed
          me to contribute to impactful projects, collaborate with talented
          teams, and further refine my skills in building exceptional web
          applications.
        </p>
      </div>
      <LottiePlayer
        animationPath="programming.json"
        className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 shrink-0 mx-auto hidden md:block"
      />
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  const thumbnailSrc = product.thumbnail.startsWith("/")
    ? product.thumbnail
    : `/${product.thumbnail}`;

  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-72 md:h-80 lg:h-96 w-[22rem] md:w-[26rem] lg:w-[30rem] relative shrink-0"
    >
      <a
        href={product.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block group-hover/product:shadow-2xl "
      >
        <Image
          src={thumbnailSrc}
          alt={product.title}
          fill
          loading="lazy"
          sizes="(max-width: 768px) 100vw, 480px"
          className="object-cover object-center absolute h-full w-full inset-0"
        />
      </a>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};
