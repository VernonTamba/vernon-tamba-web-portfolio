"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full bg-white dark:bg-neutral-950" ref={containerRef}>
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-20 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.7)] backdrop-blur-sm">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-2xl font-bold text-neutral-500 dark:text-neutral-500 ">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full mb-8">
              <h3 className="md:hidden block text-2xl mb-6 text-left font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
              <div className="rounded-xl p-6 md:p-8 bg-white/20 dark:bg-neutral-900/20 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(31,38,135,0.25)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] border border-white/30 dark:border-neutral-700/30">
                {item.content}
              </div>
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

// Demo component
const TimelineDemo = () => {
  const data = [
    {
      title: "2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-4">
            Started working on amazing projects with cutting-edge technologies.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&h=500&fit=crop"
              alt="startup"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
            />
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=500&fit=crop"
              alt="team"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-4">
            Expanded the team and launched multiple successful products.
          </p>
          <img
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=400&fit=crop"
            alt="collaboration"
            className="rounded-lg object-cover h-44 lg:h-60 w-full"
          />
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal">
            The beginning of an incredible journey with innovative ideas and
            passionate people.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
};

export default TimelineDemo;
