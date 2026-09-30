# Animal Corporation

架空のデザイン・テクノロジー企業「Animal Corporation」をテーマに制作した、コーポレートサイトのデモプロジェクトです。

デザインとテクノロジーを使って、分かりやすく使いやすいWebサイトを目指して制作しています。
実際にサイトを使いながら、UI・UX、品質の改善を継続しています。

また、Web開発における技術検証にも取り組んでいます。

## Live Demo

🌐 [Webサイトを見る](https://animal.hamltail.dev/)

## Design

🎨 [Figmaデザインを見る](https://www.figma.com/design/aiLzbeBUsuAQrv9Da9ldEb/ポートフォリオ?node-id=2003-267&t=vLoYEO8nfKudoHhh-1)

## Tech Stack

| Category       | Technologies                                             |
| -------------- | -------------------------------------------------------- |
| Design         | Figma                                                    |
| Frontend       | Next.js, React, TypeScript, Tailwind CSS, next-intl      |
| CMS            | microCMS                                                 |
| Testing        | Playwright, axe-core, Lighthouse CI, k6, Vitest, Stryker |
| Security       | OWASP ZAP, CodeQL                                        |
| Infrastructure | Docker, Vercel, GitHub Actions                           |

## Technical Decisions

当初は HTML・JavaScript・Vite を用いた静的サイトとして制作していましたが、機能拡張や継続的な改善を行いやすくするため、Next.js へ移行しました。

アクセシビリティやE2Eテスト、Visual Regression Testなどを取り入れ、実装後も継続的に品質を確認・改善できる構成にしています。

## Docker

### Build

```bash
docker build -t corporate-site-demo .
```

### Start

```bash
docker run --rm --name corporate-site-demo -p 3000:3000 corporate-site-demo
```

### Check

```bash
docker ps
```

### Stop

```bash
docker stop corporate-site-demo
```

`--rm` を指定しているため、停止したコンテナは自動的に削除されます。

## License

このリポジトリはポートフォリオ目的で公開しています。

著作権は作者に帰属します。
無断転載・再配布・商用利用はご遠慮ください。

This repository is published for portfolio purposes only.

All rights to the content belong to the author.

Please do not reproduce, redistribute, or use any part of this project for commercial purposes without permission.

## Author

- h-waji (hamltail)
