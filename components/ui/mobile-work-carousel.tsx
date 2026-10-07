"use client";

import {
  IconChevronLeft,
  IconChevronRight,
  IconExternalLink,
} from "@tabler/icons-react";
import Image from "next/image";
import { useRef, useState } from "react";
import { Header } from "./hero-parallax";

interface Product {
  title: string;
  link: string;
  thumbnail: string;
}

export const MobileWorkCarousel = ({ products }: { products: Product[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const scrollLeft = container.scrollLeft;
    const itemWidth = container.firstElementChild
      ? (container.firstElementChild as HTMLElement).clientWidth + 16
      : 300;
    const index = Math.round(scrollLeft / itemWidth);
    setActiveIndex(Math.min(Math.max(index, 0), products.length - 1));
  };

  const scrollToIndex = (index: number) => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const itemWidth = container.firstElementChild
      ? (container.firstElementChild as HTMLElement).clientWidth + 16
      : 300;
    container.scrollTo({
      left: index * itemWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full py-8">
      <Header />

      <div className="mt-4 px-4">
        {/* Navigation Controls and Counter */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-medium text-neutral-400">
            {activeIndex + 1} of {products.length} photos
          </span>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => scrollToIndex(activeIndex - 1)}
              disabled={activeIndex === 0}
              aria-label="Previous slide"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-neutral-900/80 text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed hover:bg-neutral-800"
            >
              <IconChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => scrollToIndex(activeIndex + 1)}
              disabled={activeIndex === products.length - 1}
              aria-label="Next slide"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-neutral-900/80 text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed hover:bg-neutral-800"
            >
              <IconChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Swipeable Scroll Container */}
        <div
          ref={containerRef}
          onScroll={handleScroll}
          className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {products.map((product, idx) => {
            const thumbnailSrc = product.thumbnail.startsWith("/")
              ? product.thumbnail
              : `/${product.thumbnail}`;

            return (
              <div
                key={`${product.title}-${idx}`}
                className="relative h-72 w-[85vw] max-w-[340px] shrink-0 snap-center overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 shadow-xl"
              >
                <Image
                  src={thumbnailSrc}
                  alt={product.title}
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 85vw, 340px"
                  className="object-cover object-center"
                />

                {/* Dark Gradient Overlay for Legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                {/* Title and Link Badge */}
                <div className="absolute bottom-0 inset-x-0 p-4 flex items-center justify-between gap-2">
                  <p className="text-sm font-semibold text-white drop-shadow-md">
                    {product.title}
                  </p>
                  <a
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white transition-transform hover:scale-110"
                    aria-label={`Visit ${product.title}`}
                  >
                    <IconExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Hint text */}
        <p className="mt-2 text-center text-xs text-neutral-500">
          ← Swipe horizontally to see more photos →
        </p>
      </div>
    </div>
  );
};
