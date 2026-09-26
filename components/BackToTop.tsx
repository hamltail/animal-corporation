"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

import { shouldShowBackToTop } from "../lib/scroll";

export default function BackToTop() {
  const t = useTranslations("BackToTop");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(shouldShowBackToTop(window.scrollY));
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`back-to-top bg-primary text-primary-foreground hover:bg-primary-hover fixed right-8 bottom-8 z-40 inline-flex size-16 cursor-pointer items-center justify-center rounded-full transition-[opacity,transform,visibility,background-color,box-shadow] duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary motion-reduce:transition-none ${
        isVisible
          ? "visible translate-y-0 opacity-100 hover:-translate-y-0.5"
          : "invisible translate-y-2 opacity-0"
      }`}
      aria-label={t("label")}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="size-5"
      >
        <path d="m6 15 6-6 6 6" />
      </svg>
    </button>
  );
}
