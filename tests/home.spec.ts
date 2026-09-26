import { expect, test } from "@playwright/test";

test("Animal Corporationの主要コンテンツが正しく表示される", async ({
  page,
}) => {
  await page.goto("/");

  // Hero
  const hero = page.locator("main").first();
  const heroHeading = page.getByRole("heading", { level: 1 });
  const heroLead = hero.getByText("デザインとテクノロジーで、").first();

  await expect(heroHeading).toBeVisible();
  await expect(heroHeading).toContainText("Design");
  await expect(heroHeading).toContainText("Technology");

  await expect(heroLead).toHaveCSS("opacity", "1");
  await expect(heroLead).toBeVisible();

  await expect(
    hero.getByText("より良い体験と未来を作る。").first(),
  ).toBeVisible();

  // Header
  const globalNav = page.getByRole("navigation", {
    name: "グローバルナビゲーション",
  });

  await expect(
    globalNav.getByRole("link", { name: "私たちについて" }),
  ).toHaveAttribute("href", "#about");

  await expect(
    globalNav.getByRole("link", { name: "お知らせ" }),
  ).toHaveAttribute("href", "#news");

  await expect(
    globalNav.getByRole("link", { name: "お問い合わせ" }),
  ).toHaveAttribute("href", "#contact");

  await expect(
    globalNav.getByRole("link", { name: "採用情報" }),
  ).toHaveAttribute("href", "#recruit");

  // About
  const about = page.locator("#about");

  await about.scrollIntoViewIfNeeded();

  await expect(
    about.getByRole("heading", {
      level: 2,
      name: "About",
    }),
  ).toBeVisible();

  await expect(
    about.getByText("私たちについて", { exact: true }),
  ).toBeVisible();

  await expect(
    about.getByText(
      "Animal Corporationは、デザインとテクノロジーを使って、WebサイトやWebサービスをつくる小さな工房です。目的や運用に合わせて適切な技術を選び、実際に使いながら、品質とユーザー体験を継続的に改善していきます。",
      { exact: true },
    ),
  ).toBeVisible();

  const aboutItems = [
    {
      title: "Human Centered",
      text: "人を中心に考え、共感を軸に体験を設計します。",
    },
    {
      title: "Thoughtful",
      text: "目的や使う人に向き合い、丁寧につくります。",
    },
    {
      title: "Right Technology",
      text: "目的や運用に合わせて、最適なテクノロジーを選択します。",
    },
    {
      title: "Simple & Beautiful",
      text: "シンプルで美しく、使いやすい体験を追求します。",
    },
  ];

  for (const item of aboutItems) {
    await expect(
      about.getByRole("heading", {
        level: 3,
        name: item.title,
      }),
    ).toBeVisible();

    await expect(about.getByText(item.text, { exact: true })).toBeVisible();
  }

  // Service
  const service = page.locator("#service");

  await service.scrollIntoViewIfNeeded();

  await expect(
    service.getByRole("heading", {
      level: 2,
      name: "Service",
    }),
  ).toBeVisible();

  await expect(service.getByText("事業内容", { exact: true })).toBeVisible();

  const serviceDescription = service.locator("p").first();

  await expect(serviceDescription).toHaveText(
    "デザインから開発、品質改善まで。ユーザー体験を重視したWebサイト・Webサービスを提供しています。",
  );

  const services = [
    {
      title: "Web Design",
      text: "ブランドや目的に合わせて、伝わりやすく魅力的なWebデザインをつくります。",
    },
    {
      title: "UI / UX Design",
      text: "情報設計や導線を整え、わかりやすく使いやすい体験を設計します。",
    },
    {
      title: "Web Development",
      text: "目的や運用に合わせて技術を選び、WebサイトやWebサービスを開発します。",
    },
    {
      title: "Quality & Improvement",
      text: "実際に使い、試しながら課題を見つけ、品質とユーザー体験を継続的に改善します。",
    },
  ];

  for (const item of services) {
    await expect(
      service.getByRole("heading", {
        level: 3,
        name: item.title,
      }),
    ).toBeVisible();

    await expect(service.getByText(item.text, { exact: true })).toBeVisible();
  }

  // Projects
  const projects = page.locator("#projects");

  await projects.scrollIntoViewIfNeeded();

  await expect(
    projects.getByRole("heading", {
      level: 2,
      name: "Projects",
    }),
  ).toBeVisible();

  await expect(projects.getByText("制作実績", { exact: true })).toBeVisible();

  const projectsDescription = projects.locator("p").first();

  await expect(projectsDescription).toHaveText(
    "デザイン・開発・品質改善を通して取り組んだWebサイトやWebサービスをご紹介します。",
  );

  await expect(
    projects.getByRole("heading", {
      level: 3,
      name: "Pawth",
    }),
  ).toBeVisible();

  await expect(
    projects.getByText("日々の足あとを描く。小さな日記アプリ", {
      exact: true,
    }),
  ).toBeVisible();

  await expect(
    projects.getByText("企画 / UI・UX / 開発 / 運用", {
      exact: true,
    }),
  ).toBeVisible();

  await expect(
    projects.getByRole("link", {
      name: "パウスのプロジェクトを開く",
    }),
  ).toHaveAttribute("href", "https://pawth-lp.hamltail.dev/");

  await expect(
    projects.getByRole("heading", {
      level: 3,
      name: "Animal Corporation",
    }),
  ).toBeVisible();

  await expect(
    projects.getByText("コーポレートサイト制作（架空プロジェクト）", {
      exact: true,
    }),
  ).toBeVisible();

  await expect(
    projects.getByText("情報設計 / UI・UX / 開発 / 品質改善", {
      exact: true,
    }),
  ).toBeVisible();

  await expect(
    projects.getByRole("heading", {
      level: 3,
      name: "Animal Caffee",
    }),
  ).toBeVisible();

  await expect(projects.getByText("準備中", { exact: true })).toBeVisible();

  await expect(
    projects.getByText("アニマルカフェのサイトリニューアル（架空）", {
      exact: true,
    }),
  ).toBeVisible();

  await expect(
    projects.getByText("情報設計 / Webデザイン / 写真・素材選定", {
      exact: true,
    }),
  ).toBeVisible();

  // Team
  const team = page.locator("#team");

  await team.scrollIntoViewIfNeeded();

  await expect(
    team.getByRole("heading", {
      level: 2,
      name: "Team",
    }),
  ).toBeVisible();

  await expect(team.getByText("メンバー", { exact: true })).toBeVisible();

  await expect(
    team.getByText("それぞれの専門性を持つアニマルメンバーをご紹介します。", {
      exact: true,
    }),
  ).toBeVisible();

  const members = [
    {
      name: "黒森 ゴロウ",
      role: "代表取締役社長 / CEO",
      message: "力は仲間のために使う。それが私の信念です。",
    },
    {
      name: "南 考",
      role: "取締役副社長 / COO",
      message: "仲間が高く跳べるように。私はその助走を支えます。",
    },
    {
      name: "白雪 ミウ",
      role: "取締役 / CDO",
      message: "美しさは思いやりから生まれる。心に残る体験を届けたい。",
    },
    {
      name: "柴田 ケン",
      role: "Design Technologist",
      message: "心を動かす体験を、テクノロジーの力で届けます。",
    },
  ];

  for (const member of members) {
    await expect(
      team.getByRole("heading", {
        level: 3,
        name: member.name,
      }),
    ).toBeVisible();

    await expect(team.getByText(member.role, { exact: true })).toBeVisible();

    await expect(team.getByText(member.message, { exact: true })).toBeVisible();
  }

  // News
  const news = page.locator("#news");

  await news.scrollIntoViewIfNeeded();

  await expect(
    news.getByRole("heading", {
      level: 2,
      name: "News",
    }),
  ).toBeVisible();

  await expect(news.getByText("お知らせ", { exact: true })).toBeVisible();

  const newsArticles = news.locator("article");

  await expect(newsArticles).toHaveCount(3);

  const firstNews = newsArticles.nth(0);

  await expect(firstNews.locator("time")).toHaveText("2026.07.01");
  await expect(firstNews.locator("time")).toHaveAttribute(
    "datetime",
    "2026-07-01",
  );

  await expect(firstNews.locator("p").nth(0)).toContainText(
    "Animal Caffee をオープンしました。",
  );

  await expect(firstNews.locator("p").nth(1)).toHaveText(
    "動物たちが集う新しいコミュニティスペースとして、Animal Caffee を公開しました。",
  );

  const secondNews = newsArticles.nth(1);

  await expect(secondNews.locator("time")).toHaveText("2026.06.01");
  await expect(secondNews.locator("time")).toHaveAttribute(
    "datetime",
    "2026-06-01",
  );

  await expect(secondNews.locator("p").nth(0)).toHaveText(
    "新メンバーが参加しました。",
  );

  await expect(secondNews.locator("p").nth(1)).toHaveText(
    "Design Technologist として柴田ケンが加わりました。",
  );

  const thirdNews = newsArticles.nth(2);

  await expect(thirdNews.locator("time")).toHaveText("2026.04.01");
  await expect(thirdNews.locator("time")).toHaveAttribute(
    "datetime",
    "2026-04-01",
  );

  await expect(thirdNews.locator("p").nth(0)).toHaveText(
    "Animal Corporation を設立しました。",
  );

  await expect(thirdNews.locator("p").nth(1)).toHaveText(
    "デザインとテクノロジーで、より良い体験を届けるために設立しました。",
  );

  // Contact
  const contact = page.locator("#contact");

  await contact.scrollIntoViewIfNeeded();

  await expect(
    contact.getByRole("heading", {
      level: 2,
      name: "Contact",
    }),
  ).toBeVisible();

  await expect(
    contact.getByText("お問い合わせ", { exact: true }).first(),
  ).toBeVisible();

  await expect(
    contact.getByRole("heading", {
      level: 3,
      name: "新しい体験を、一緒につくりませんか？",
    }),
  ).toBeVisible();

  await expect(
    contact.getByText(
      "WebサイトやWebサービスの制作・改善について、お気軽にご相談ください。",
      { exact: true },
    ),
  ).toBeVisible();

  await expect(
    contact.getByRole("link", {
      name: "メールでお問い合わせ",
    }),
  ).toHaveAttribute("href", "mailto:info@example.com");

  // Recruit
  const recruit = page.locator("#recruit");

  await recruit.scrollIntoViewIfNeeded();

  await expect(
    recruit.getByRole("heading", {
      level: 2,
      name: "Recruit",
    }),
  ).toBeVisible();

  await expect(recruit.getByText("採用情報", { exact: true })).toBeVisible();

  await expect(
    recruit.getByRole("heading", {
      level: 3,
      name: "個性は、才能だ。",
    }),
  ).toBeVisible();

  const recruitMessage = recruit.locator("p").first();

  await expect(recruitMessage).toHaveText(
    "強いゴリラも跳べるカンガルーも繊細なネコもまっすぐな犬も",
  );

  await expect(
    recruit.getByText("Animal Corporationでは、新しい仲間を募集しています。", {
      exact: true,
    }),
  ).toBeVisible();

  await expect(
    recruit.getByRole("link", {
      name: "採用エントリーのメールを送る",
    }),
  ).toHaveAttribute("href", "mailto:recruit@example.com");

  // Footer
  const footer = page.locator("footer");

  await footer.scrollIntoViewIfNeeded();
  await expect(footer).toBeVisible();

  await expect(
    footer.getByText("Animal Corporation", {
      exact: true,
    }),
  ).toBeVisible();

  await expect(
    footer.getByText("© 2026 Animal Corporation", {
      exact: true,
    }),
  ).toBeVisible();

  const footerNav = footer.getByRole("navigation", {
    name: "フッターナビゲーション",
  });

  await expect(
    footerNav.getByRole("link", {
      name: "私たちについて",
    }),
  ).toHaveAttribute("href", "#about");

  await expect(
    footerNav.getByRole("link", {
      name: "お知らせ",
    }),
  ).toHaveAttribute("href", "#news");

  await expect(
    footerNav.getByRole("link", {
      name: "お問い合わせ",
    }),
  ).toHaveAttribute("href", "#contact");
});

test("テーマを切り替えられる", async ({ page }) => {
  await page.goto("/");

  const lightButton = page.getByRole("button", {
    name: "ライトテーマ",
  });

  const darkButton = page.getByRole("button", {
    name: "ダークテーマ",
  });

  const systemButton = page.getByRole("button", {
    name: "システムテーマ",
  });

  await darkButton.click();

  await expect(darkButton).toHaveAttribute("aria-pressed", "true");
  await expect(lightButton).toHaveAttribute("aria-pressed", "false");
  await expect(systemButton).toHaveAttribute("aria-pressed", "false");
  await expect(page.locator("html")).toHaveClass(/dark/);

  await lightButton.click();

  await expect(lightButton).toHaveAttribute("aria-pressed", "true");
  await expect(darkButton).toHaveAttribute("aria-pressed", "false");
  await expect(systemButton).toHaveAttribute("aria-pressed", "false");
  await expect(page.locator("html")).not.toHaveClass(/dark/);

  await systemButton.click();

  await expect(systemButton).toHaveAttribute("aria-pressed", "true");
});

test("テーマ設定がリロード後も保持される", async ({ page }) => {
  await page.goto("/");

  const darkButton = page.getByRole("button", {
    name: "ダークテーマ",
  });

  await darkButton.click();

  await expect(page.locator("html")).toHaveClass(/dark/);

  await page.reload();

  await expect(
    page.getByRole("button", {
      name: "ダークテーマ",
    }),
  ).toHaveAttribute("aria-pressed", "true");

  await expect(page.locator("html")).toHaveClass(/dark/);
});

test("グローバルナビゲーションから各セクションへ移動できる", async ({
  page,
}) => {
  await page.goto("/");

  const globalNav = page.getByRole("navigation", {
    name: "グローバルナビゲーション",
  });

  const links = [
    {
      name: "私たちについて",
      hash: "#about",
    },
    {
      name: "お知らせ",
      hash: "#news",
    },
    {
      name: "お問い合わせ",
      hash: "#contact",
    },
    {
      name: "採用情報",
      hash: "#recruit",
    },
  ];

  for (const link of links) {
    await globalNav.getByRole("link", { name: link.name }).click();

    await expect(page).toHaveURL(new RegExp(`${link.hash}$`));
    await expect(page.locator(link.hash)).toBeVisible();
  }
});

test("スクロールするとページ上部へ戻るボタンが表示される", async ({ page }) => {
  await page.goto("/");

  const backToTopButton = page.getByRole("button", {
    name: "トップへ戻る",
  });

  await expect(backToTopButton).not.toBeVisible();

  await page.evaluate(() => {
    window.scrollTo(0, 1000);
  });

  await expect(backToTopButton).toBeVisible();

  await backToTopButton.click();

  await expect
    .poll(async () => page.evaluate(() => Math.round(window.scrollY)))
    .toBe(0);
});

test("モバイルメニューを開閉できる", async ({ page }) => {
  await page.setViewportSize({
    width: 390,
    height: 844,
  });

  await page.goto("/");

  const menuButton = page.getByRole("button", {
    name: "メニューを開閉",
  });

  const mobileNav = page.locator("#mobile-menu");

  await expect(menuButton).toHaveAttribute("aria-expanded", "false");
  await expect(mobileNav).toHaveAttribute("aria-hidden", "true");
  await expect(mobileNav).toHaveClass(/opacity-0/);
  await expect(mobileNav).toHaveClass(/pointer-events-none/);

  await menuButton.click();

  await expect(menuButton).toHaveAttribute("aria-expanded", "true");
  await expect(mobileNav).toHaveAttribute("aria-hidden", "false");
  await expect(mobileNav).toHaveClass(/opacity-100/);
  await expect(mobileNav).not.toHaveClass(/pointer-events-none/);

  await menuButton.click();

  await expect(menuButton).toHaveAttribute("aria-expanded", "false");
  await expect(mobileNav).toHaveAttribute("aria-hidden", "true");
  await expect(mobileNav).toHaveClass(/opacity-0/);
  await expect(mobileNav).toHaveClass(/pointer-events-none/);
});

test("モバイルメニューのリンクを選択するとメニューが閉じる", async ({
  page,
}) => {
  await page.setViewportSize({
    width: 390,
    height: 844,
  });

  await page.goto("/");

  const menuButton = page.getByRole("button", {
    name: "メニューを開閉",
  });

  const mobileNav = page.locator("#mobile-menu");

  await menuButton.click();

  await expect(menuButton).toHaveAttribute("aria-expanded", "true");
  await expect(mobileNav).toHaveAttribute("aria-hidden", "false");
  await expect(mobileNav).toHaveClass(/opacity-100/);

  await mobileNav
    .getByRole("link", {
      name: "私たちについて",
    })
    .click();

  await expect(page).toHaveURL(/#about$/);

  await expect(menuButton).toHaveAttribute("aria-expanded", "false");
  await expect(mobileNav).toHaveAttribute("aria-hidden", "true");
  await expect(mobileNav).toHaveClass(/opacity-0/);
  await expect(mobileNav).toHaveClass(/pointer-events-none/);

  await expect(page.locator("#about")).toBeVisible();
});
