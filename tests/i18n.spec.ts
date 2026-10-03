import { expect, test } from "@playwright/test";

const currentYear = new Date().getFullYear();

test.describe("English locale", () => {
  test("ブラウザ言語が英語の場合は主要コンテンツを英語で表示する", async ({
    page,
  }) => {
    await page.goto("/");

    await expect(page.locator("html")).toHaveAttribute("lang", "en");

    // Hero
    await expect(
      page.getByRole("heading", {
        level: 1,
        name: /Design\s*×\s*Technology/,
      }),
    ).toBeVisible();

    await expect(page.locator("#hero-title + p")).toHaveText(
      /^Through design and technology,\s*we create better experiences and a better future\.$/,
    );

    // Sections
    await expect(page.locator("#about")).toContainText("About Us");
    await expect(page.locator("#service")).toContainText("Services");
    await expect(page.locator("#projects")).toContainText("Projects");
    await expect(page.locator("#team")).toContainText("Team");
    await expect(page.locator("#news")).toContainText("News");
    await expect(page.locator("#contact")).toContainText("Contact");
    await expect(page.locator("#recruit")).toContainText("Careers");

    // Contact
    await expect(
      page.getByRole("link", {
        name: "Contact us by email",
      }),
    ).toHaveAttribute("href", "mailto:info@example.com");

    // Recruit
    await expect(
      page.getByRole("link", {
        name: "Send a recruitment application email",
      }),
    ).toHaveAttribute("href", "mailto:recruit@example.com");

    // Footer
    const footer = page.locator("footer");

    await expect(
      footer.getByText(`© ${currentYear} Animal Corporation`, {
        exact: true,
      }),
    ).toBeVisible();

    await expect(
      footer.getByRole("button", {
        name: "English",
      }),
    ).toHaveAttribute("aria-pressed", "true");
  });

  test("Footerから日本語へ切り替えられる", async ({ page }) => {
    await page.goto("/");

    await expect(page.locator("html")).toHaveAttribute("lang", "en");

    await page
      .locator("footer")
      .getByRole("button", {
        name: "日本語",
      })
      .click();

    await expect(page.locator("html")).toHaveAttribute("lang", "ja");

    await expect(page.locator("#about")).toContainText("私たちについて");

    await expect(
      page.locator("footer").getByRole("button", {
        name: "日本語",
      }),
    ).toHaveAttribute("aria-pressed", "true");
  });
});
