import { createClient } from "microcms-js-sdk";
import { connection } from "next/server";

import type { NewsFetcher } from "@/lib/news/news";
import type { News } from "@/lib/news/news.types";

export const getNewsFromMicroCMS: NewsFetcher = async ({ limit, offset }) => {
  await connection();

  const serviceDomain = process.env.MICROCMS_SERVICE_DOMAIN;
  const apiKey = process.env.MICROCMS_API_KEY;

  if (!serviceDomain) {
    throw new Error("MICROCMS_SERVICE_DOMAIN is not defined");
  }

  if (!apiKey) {
    throw new Error("MICROCMS_API_KEY is not defined");
  }

  const microcmsClient = createClient({
    serviceDomain,
    apiKey,
  });

  return microcmsClient.getList<News>({
    endpoint: "news",
    queries: {
      limit,
      offset,
      orders: "-publishedDate",
    },
  });
};
