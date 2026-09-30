import type { NewsFetcher } from "@/lib/news/news";

const news = [
  {
    id: "animal-caffee-open",
    createdAt: "2026-07-01T00:00:00.000Z",
    updatedAt: "2026-07-01T00:00:00.000Z",
    publishedAt: "2026-07-01T00:00:00.000Z",
    revisedAt: "2026-07-01T00:00:00.000Z",
    title: "Animal Caffee をオープンしました。",
    content:
      "動物たちが集う新しいコミュニティスペースとして、Animal Caffee を公開しました。",
    category: {
      name: "お知らせ",
    },
  },
  {
    id: "new-member",
    createdAt: "2026-06-01T00:00:00.000Z",
    updatedAt: "2026-06-01T00:00:00.000Z",
    publishedAt: "2026-06-01T00:00:00.000Z",
    revisedAt: "2026-06-01T00:00:00.000Z",
    title: "新メンバーが参加しました。",
    content: "Design Technologist として柴田ケンが加わりました。",
    category: {
      name: "お知らせ",
    },
  },
  {
    id: "company-established",
    createdAt: "2026-04-01T00:00:00.000Z",
    updatedAt: "2026-04-01T00:00:00.000Z",
    publishedAt: "2026-04-01T00:00:00.000Z",
    revisedAt: "2026-04-01T00:00:00.000Z",
    title: "Animal Corporation を設立しました。",
    content:
      "デザインとテクノロジーで、より良い体験を届けるために設立しました。",
    category: {
      name: "お知らせ",
    },
  },
];

export const getNewsStub: NewsFetcher = async ({ limit, offset }) => {
  return {
    contents: news.slice(offset, offset + limit),
    totalCount: news.length,
    offset,
    limit,
  };
};
