"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

import Container from "@/components/Container";
import {
  type TeamMemberId,
  useTeamSelection,
} from "@/components/TeamSelectionProvider";

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
    <section className="relative flex min-h-150 items-center overflow-hidden md:min-h-175 lg:min-h-200">
      {selectedMemberId && (
        <div
          className="pointer-events-none absolute right-[-8%] bottom-[4%] z-0 h-[38%] w-[72%] opacity-30 md:right-0 md:bottom-[8%] md:h-[42%] md:w-[52%] md:opacity-35 lg:h-[48%] lg:w-[48%]"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, black 25%, black 85%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 25%, black 85%, transparent 100%)",
          }}
          aria-hidden="true"
        >
          <Image
            key={selectedMemberId}
            src={casualImages[selectedMemberId]}
            alt=""
            fill
            sizes="(min-width: 1024px) 48vw, (min-width: 768px) 52vw, 72vw"
            className="object-cover object-center"
            priority
          />
        </div>
      )}

      <Container className="relative z-10 flex h-full items-center">
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
    </section>
  );
}
