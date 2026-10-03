"use client";

import { useTranslations } from "next-intl";
import { Children, type ReactNode, useRef, useState } from "react";

type ProjectCarouselProps = {
  children: ReactNode;
};

const SWIPE_THRESHOLD = 50;

export default function ProjectCarousel({ children }: ProjectCarouselProps) {
  const t = useTranslations("Projects");
  const projects = Children.toArray(children);
  const [activeIndex, setActiveIndex] = useState(0);
  const pointerStartX = useRef<number | null>(null);

  const showPrevious = () => {
    setActiveIndex(
      (currentIndex) => (currentIndex - 1 + projects.length) % projects.length,
    );
  };

  const showNext = () => {
    setActiveIndex((currentIndex) => (currentIndex + 1) % projects.length);
  };

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement;

    if (target.closest("button, a")) {
      return;
    }

    pointerStartX.current = event.clientX;
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    if (pointerStartX.current === null) {
      return;
    }

    const swipeDistance = event.clientX - pointerStartX.current;

    if (swipeDistance > SWIPE_THRESHOLD) {
      showPrevious();
    }

    if (swipeDistance < -SWIPE_THRESHOLD) {
      showNext();
    }

    pointerStartX.current = null;
  };

  const handlePointerCancel = () => {
    pointerStartX.current = null;
  };

  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    if (event.target instanceof HTMLImageElement) {
      event.preventDefault();
    }
  };

  return (
    <div className="mt-12 overflow-x-clip">
      <div
        className="relative mx-auto h-130 w-full max-w-7xl touch-pan-y perspective-distant select-none sm:h-140"
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerCancel}
        onDragStart={handleDragStart}
      >
        {projects.map((project, index) => {
          const relativeIndex =
            (index - activeIndex + projects.length) % projects.length;

          const position =
            relativeIndex === 0
              ? "z-20 translate-z-0"
              : relativeIndex === 1
                ? "z-10 translate-x-60 -translate-z-160 -rotate-y-30 sm:translate-x-70 md:translate-x-80"
                : "z-10 -translate-x-150 -translate-z-160 rotate-y-15 sm:-translate-x-175 md:-translate-x-200";

          return (
            <div
              key={index}
              className={`absolute top-1/2 left-1/2 w-[calc(100%-2rem)] max-w-90 -translate-x-1/2 -translate-y-1/2 transform-3d transition-transform duration-700 ease-in-out sm:w-105 sm:max-w-none md:w-120 ${position}`}
            >
              {project}
            </div>
          );
        })}

        <button
          type="button"
          onClick={showPrevious}
          className="bg-surface/80 text-foreground absolute top-1/2 left-2 z-30 flex size-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full backdrop-blur-sm transition-all hover:scale-110 hover:bg-surface sm:left-4 sm:size-12"
          aria-label={t("previousProject")}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <button
          type="button"
          onClick={showNext}
          className="bg-surface/80 text-foreground absolute top-1/2 right-2 z-30 flex size-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full backdrop-blur-sm transition-all hover:scale-110 hover:bg-surface sm:right-4 sm:size-12"
          aria-label={t("nextProject")}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>
  );
}
