import Image from "next/image";
import { useTranslations } from "next-intl";

import Container from "@/components/Container";

export default function About() {
  const t = useTranslations("About");

  return (
    <section id="about" className="py-32">
      <Container className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        <div className="w-full md:max-w-140">
          <div className="flex flex-col gap-2 lg:flex-row lg:items-baseline lg:gap-8">
            <h2
              id="about-title"
              className="font-english text-[64px] leading-[1.2] font-bold tracking-widest"
            >
              About
            </h2>

            <span className="font-japanese text-primary text-2xl font-bold">
              {t("label")}
            </span>
          </div>

          <p className="text-foreground mt-16 text-2xl leading-[1.6] font-medium">
            {t("leadFirst")}
            <br />
            {t("leadSecond")}
          </p>

          <p className="text-muted mt-16 text-base leading-[1.8]">
            {t("description")}
          </p>
        </div>

        <div className="pt-0 md:pt-37.5">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <article className="bg-surface flex h-30 w-full items-center gap-6 rounded-lg px-6">
              <Image
                src="/images/about-human-centered.png"
                alt="Human Centered icon"
                width={48}
                height={48}
                className="size-12 object-cover"
              />

              <div>
                <h3 className="font-english text-sm font-bold tracking-widest">
                  Human Centered
                </h3>

                <p className="text-muted mt-2 text-sm leading-[1.8]">
                  {t("humanCentered")}
                </p>
              </div>
            </article>

            <article className="bg-surface flex h-30 w-full items-center gap-6 rounded-lg px-6">
              <Image
                src="/images/about-impactful.png"
                alt="Thoughtful icon"
                width={48}
                height={48}
                className="size-12 object-cover"
              />

              <div>
                <h3 className="font-english text-sm font-bold tracking-widest">
                  Thoughtful
                </h3>

                <p className="text-muted mt-2 text-sm leading-[1.8]">
                  {t("thoughtful")}
                </p>
              </div>
            </article>

            <article className="bg-surface flex h-30 w-full items-center gap-6 rounded-lg px-6">
              <Image
                src="/images/about-technology-driven.png"
                alt="Right Technology icon"
                width={48}
                height={48}
                className="size-12 object-cover"
              />

              <div>
                <h3 className="font-english text-sm font-bold tracking-widest">
                  Right Technology
                </h3>

                <p className="text-muted mt-2 text-sm leading-[1.8]">
                  {t("rightTechnology")}
                </p>
              </div>
            </article>

            <article className="bg-surface flex h-30 w-full items-center gap-6 rounded-lg px-6">
              <Image
                src="/images/about-simple-beautiful.png"
                alt="Simple & Beautiful icon"
                width={48}
                height={48}
                className="size-12 object-cover"
              />

              <div>
                <h3 className="font-english text-sm font-bold tracking-widest">
                  Simple &amp; Beautiful
                </h3>

                <p className="text-muted mt-2 text-sm leading-[1.8]">
                  {t("simpleBeautiful")}
                </p>
              </div>
            </article>
          </div>
        </div>
      </Container>
    </section>
  );
}
