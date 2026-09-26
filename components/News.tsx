import { useTranslations } from "next-intl";

import Container from "@/components/Container";

export default function News() {
  const t = useTranslations("News");

  return (
    <section id="news" className="py-32">
      <Container>
        <div className="flex flex-col gap-2 lg:flex-row lg:items-baseline lg:gap-8">
          <h2
            id="news-title"
            className="font-english text-[64px] leading-[1.2] font-bold tracking-widest"
          >
            News
          </h2>

          <span className="font-japanese text-primary text-2xl font-bold">
            {t("label")}
          </span>
        </div>

        <div className="mt-12 px-0 lg:px-16">
          <article className="news-item border-border mb-8 flex flex-col gap-3 border-b pb-8 md:flex-row md:gap-8">
            <div className="md:min-w-25">
              <time dateTime="2026-07-01" className="text-muted text-sm">
                2026.07.01
              </time>
            </div>

            <div className="flex-1">
              <p className="news-item-title text-lg font-bold">
                <span className="news-item-title-text">
                  {t("caffee.title")}
                </span>

                <span className="bg-primary text-primary-foreground ml-3 inline-block rounded-full px-3 py-1 text-xs">
                  New
                </span>
              </p>

              <p className="text-muted mt-3 text-base leading-[1.8]">
                {t("caffee.description")}
              </p>
            </div>
          </article>

          <article className="news-item border-border mb-8 flex flex-col gap-3 border-b pb-8 md:flex-row md:gap-8">
            <div className="md:min-w-25">
              <time dateTime="2026-06-01" className="text-muted text-sm">
                2026.06.01
              </time>
            </div>

            <div className="flex-1">
              <p className="news-item-title text-lg font-bold">
                <span className="news-item-title-text">
                  {t("member.title")}
                </span>
              </p>

              <p className="text-muted mt-3 text-base leading-[1.8]">
                {t("member.description")}
              </p>
            </div>
          </article>

          <article className="news-item flex flex-col gap-3 md:flex-row md:gap-8">
            <div className="md:min-w-25">
              <time dateTime="2026-04-01" className="text-muted text-sm">
                2026.04.01
              </time>
            </div>

            <div className="flex-1">
              <p className="news-item-title text-lg font-bold">
                <span className="news-item-title-text">
                  {t("company.title")}
                </span>
              </p>

              <p className="text-muted mt-3 text-base leading-[1.8]">
                {t("company.description")}
              </p>
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
}
