"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import Container from "@/components/Container";

const members = [
  {
    id: "goro",
    image: "/images/team-goro.webp",
    casualImage: "/images/team-goro-casual.webp",
  },
  {
    id: "ko",
    image: "/images/team-ko.webp",
  },
  {
    id: "miu",
    image: "/images/team-miu.webp",
  },
  {
    id: "ken",
    image: "/images/team-ken.webp",
  },
] as const;

type MemberId = (typeof members)[number]["id"];

export default function Team() {
  const t = useTranslations("Team");
  const [selectedMemberId, setSelectedMemberId] = useState<MemberId | null>(
    null,
  );

  const selectedMember = members.find(
    (member) => member.id === selectedMemberId && "casualImage" in member,
  );

  useEffect(() => {
    if (!selectedMember) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedMemberId(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedMember]);

  const modal =
    selectedMember &&
    "casualImage" in selectedMember &&
    createPortal(
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm md:p-8"
        role="dialog"
        aria-modal="true"
        aria-label={t(`${selectedMember.id}.name`)}
        onClick={() => setSelectedMemberId(null)}
      >
        <div
          className="relative w-full max-w-5xl overflow-hidden rounded-2xl bg-black shadow-2xl"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="relative aspect-video w-full">
            <Image
              src={selectedMember.casualImage}
              alt={t(`${selectedMember.id}.name`)}
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              className="object-contain"
              priority
            />
          </div>

          <button
            type="button"
            onClick={() => setSelectedMemberId(null)}
            className="absolute top-3 right-3 z-10 flex size-10 cursor-pointer items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:top-4 md:right-4"
            aria-label="閉じる"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
              className="size-5"
            >
              <path d="M6 6l12 12" />
              <path d="M18 6L6 18" />
            </svg>
          </button>
        </div>
      </div>,
      document.body,
    );

  return (
    <>
      <section id="team" className="py-32">
        <Container>
          <div className="flex flex-col gap-2 lg:flex-row lg:items-baseline lg:gap-8">
            <h2
              id="team-title"
              className="font-english text-[64px] leading-[1.2] font-bold tracking-widest"
            >
              Team
            </h2>

            <span className="font-japanese text-primary text-2xl font-bold">
              {t("label")}
            </span>
          </div>

          <p className="text-muted mt-10 max-w-170 text-base leading-[1.8]">
            {t("intro")}
          </p>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {members.map((member) => {
              const hasCasualImage = "casualImage" in member;

              return (
                <article
                  key={member.id}
                  className={`team-card project-shadow bg-surface-soft flex flex-col overflow-hidden rounded-2xl ${
                    hasCasualImage ? "cursor-pointer" : ""
                  }`}
                  onClick={() => {
                    if (hasCasualImage) {
                      setSelectedMemberId(member.id);
                    }
                  }}
                  onKeyDown={(event) => {
                    if (
                      hasCasualImage &&
                      (event.key === "Enter" || event.key === " ")
                    ) {
                      event.preventDefault();
                      setSelectedMemberId(member.id);
                    }
                  }}
                  role={hasCasualImage ? "button" : undefined}
                  tabIndex={hasCasualImage ? 0 : undefined}
                >
                  <div className="bg-surface-soft relative aspect-square w-full overflow-hidden">
                    <Image
                      src={member.image}
                      alt={t(`${member.id}.name`)}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                      draggable={false}
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-5 md:p-6">
                    <p className="text-subtle text-xs font-medium">
                      {t(`${member.id}.role`)}
                    </p>

                    <h3 className="font-english mt-2 text-base font-bold">
                      {t(`${member.id}.name`)}
                    </h3>

                    <p className="text-muted mt-2 text-sm leading-[1.8]">
                      {t(`${member.id}.message`)}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      {modal}
    </>
  );
}
