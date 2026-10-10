import { expect, test } from "@playwright/test";

const SITE_URL = "https://animal.hamltail.dev";

const japaneseTitle =
  "Animal Corporation | デザインとテクノロジーでWebのUIと体験をつくる";

const japaneseDescription =
  "デザインとテクノロジーを使い、目的や運用に合わせてWebサイトやWebアプリのUIを設計・実装する小さな工房。ユーザー体験を大切に、デザインから品質改善まで取り組んでいます。";

const englishTitle = "Animal Corporation | Web UI & Experience Design";

const englishDescription =
  "A small design and technology studio creating web interfaces and experiences. We design, develop, and refine user-focused websites and web app interfaces.";

test("日本語のSEOメタデータが正しく設定される", async ({ page }) => {
  await page.context().addCookies([
    {
      name: "NEXT_LOCALE",
      value: "ja",
      url: "http://localhost:3000",
    },
  ]);

  await page.goto("/");

  await expect(page.locator("html")).toHaveAttribute("lang", "ja");

  await expect(page).toHaveTitle(japaneseTitle);

  await expect(page.locator('meta[name="description"]')).toHaveAttribute(
    "content",
    japaneseDescription,
  );

  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    SITE_URL,
  );

  await expect(page.locator('meta[property="og:type"]')).toHaveAttribute(
    "content",
    "website",
  );

  await expect(page.locator('meta[property="og:title"]')).toHaveAttribute(
    "content",
    japaneseTitle,
  );

  await expect(page.locator('meta[property="og:description"]')).toHaveAttribute(
    "content",
    japaneseDescription,
  );

  await expect(page.locator('meta[property="og:locale"]')).toHaveAttribute(
    "content",
    "ja_JP",
  );

  const ogImageUrl = await page
    .locator('meta[property="og:image"]')
    .getAttribute("content");

  expect(ogImageUrl).not.toBeNull();
  expect(new URL(ogImageUrl!).pathname).toBe("/opengraph-image");

  await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute(
    "content",
    "summary_large_image",
  );

  await expect(page.locator('meta[name="twitter:title"]')).toHaveAttribute(
    "content",
    japaneseTitle,
  );

  const twitterImageUrl = await page
    .locator('meta[name="twitter:image"]')
    .getAttribute("content");

  expect(twitterImageUrl).not.toBeNull();
  expect(new URL(twitterImageUrl!).pathname).toBe("/opengraph-image");
});

test("英語のSEOメタデータが正しく設定される", async ({ page }) => {
  await page.context().addCookies([
    {
      name: "NEXT_LOCALE",
      value: "en",
      url: "http://localhost:3000",
    },
  ]);

  await page.goto("/");

  await expect(page.locator("html")).toHaveAttribute("lang", "en");

  await expect(page).toHaveTitle(englishTitle);

  await expect(page.locator('meta[name="description"]')).toHaveAttribute(
    "content",
    englishDescription,
  );

  await expect(page.locator('meta[property="og:title"]')).toHaveAttribute(
    "content",
    englishTitle,
  );

  await expect(page.locator('meta[property="og:description"]')).toHaveAttribute(
    "content",
    englishDescription,
  );

  await expect(page.locator('meta[property="og:locale"]')).toHaveAttribute(
    "content",
    "en_US",
  );

  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    SITE_URL,
  );
});

test("robots.txtとsitemap.xmlが正しく配信される", async ({ request }) => {
  const robots = await request.get("/robots.txt");

  expect(robots.ok()).toBeTruthy();
  expect(await robots.text()).toContain(`Sitemap: ${SITE_URL}/sitemap.xml`);

  const sitemap = await request.get("/sitemap.xml");

  expect(sitemap.ok()).toBeTruthy();
  expect(await sitemap.text()).toContain(`${SITE_URL}/`);
});

test("OGP画像が正しく配信される", async ({ request }) => {
  const ogImage = await request.get("/opengraph-image");

  expect(ogImage.ok()).toBeTruthy();
  expect(ogImage.headers()["content-type"]).toContain("image/png");
});
