import type { MicroCMSListContent } from "microcms-js-sdk";
import { useTranslations } from "next-intl";

import type { News as NewsContent } from "@/lib/news/news.types";

import Container from "@/components/Container";

type NewsProps = {
  newsList: (NewsContent & MicroCMSListContent)[];
};

function formatPublishedDate(publishedAt: string) {
  const date = publishedAt.slice(0, 10);

  return {
    dateTime: date,
    label: date.replaceAll("-", "."),
  };
}

export default function News({ newsList }: NewsProps) {
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
          {newsList.map((news, index) => {
            const publishedDate = news.publishedAt
              ? formatPublishedDate(news.publishedAt)
              : null;

            const isLatest = index === 0;
            const isLast = index === newsList.length - 1;

            return (
              <article
                key={news.id}
                className={`news-item flex flex-col gap-3 md:flex-row md:gap-8 ${
                  isLast ? "" : "border-border mb-8 border-b pb-8"
                }`}
              >
                <div className="md:min-w-25">
                  {publishedDate && (
                    <time
                      dateTime={publishedDate.dateTime}
                      className="text-muted text-sm"
                    >
                      {publishedDate.label}
                    </time>
                  )}
                </div>

                <div className="flex-1">
                  <p className="news-item-title text-lg font-bold">
                    <span className="news-item-title-text">{news.title}</span>

                    {isLatest && (
                      <span className="bg-primary text-primary-foreground ml-3 inline-block rounded-full px-3 py-1 text-xs">
                        New
                      </span>
                    )}
                  </p>

                  <p className="text-muted mt-3 text-base leading-[1.8]">
                    {news.content}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
