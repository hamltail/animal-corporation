"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

import Container from "@/components/Container";
import {
  type TeamMemberId,
  useTeamSelection,
} from "@/components/TeamSelectionProvider";

import styles from "./HeroScroll.module.css";

const casualImages: Record<TeamMemberId, string> = {
  goro: "/images/team-goro-casual.webp",
  ko: "/images/team-ko-casual.webp",
  miu: "/images/team-miu-casual.webp",
  ken: "/images/team-ken-casual.webp",
};

export default function Hero() {
  const t = useTranslations("Hero");
  const { selectedMemberId } = useTeamSelection();

  return (
    <section className="relative isolate flex min-h-[calc(100svh-5rem)] items-center overflow-hidden">
      {selectedMemberId && (
        <div className="pointer-events-none absolute inset-0 z-0 2xl:left-1/2 2xl:w-full 2xl:max-w-[1600px] 2xl:-translate-x-1/2">
          <div
            className="absolute right-0 bottom-16 aspect-video w-[min(100%,55svh)] opacity-30 md:bottom-20 md:w-[min(75%,55svh)] md:opacity-35 lg:bottom-[8%] lg:w-[48%] 2xl:w-3xl"
            style={{
              maskImage:
                "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
            }}
            aria-hidden="true"
          >
            <Image
              key={selectedMemberId}
              src={casualImages[selectedMemberId]}
              alt=""
              fill
              sizes="(min-width: 1536px) 768px, (min-width: 1024px) 48vw, (min-width: 768px) 75vw, 100vw"
              className="object-contain object-center"
              priority
            />
          </div>
        </div>
      )}

      <Container className="relative z-10">
        <div className="max-w-full md:max-w-160">
          <h1
            id="hero-title"
            className="hero-title font-english text-foreground text-[80px] leading-[1.1] font-normal tracking-widest md:text-[100px] lg:text-[120px]"
          >
            <span className="inline-flex items-center gap-6 md:gap-8 lg:gap-10">
              <span className="hero-design opacity-0">Design</span>

              <span className="hero-cross text-primary opacity-0">×</span>
            </span>

            <br />

            <span className="hero-technology inline-block opacity-0">
              Technology
            </span>
          </h1>

          <p className="hero-lead text-muted mt-8 text-base leading-[1.6] font-medium opacity-0 md:mt-16 md:text-xl lg:mt-24 lg:text-2xl">
            {t("leadFirst")}
            <br />
            {t("leadSecond")}
          </p>
        </div>
      </Container>

      <a
        href="#about"
        className={`text-muted absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-3 text-[10px] font-medium tracking-[0.3em] md:bottom-8 ${styles.scrollLink}`}
      >
        SCROLL
        <span className={styles.scrollLine} aria-hidden="true" />
      </a>
    </section>
  );
}
