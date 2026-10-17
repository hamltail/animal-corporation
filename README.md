# Animal Corporation

架空のデザイン・テクノロジー企業「Animal Corporation」をテーマに制作した、コーポレートサイトのデモプロジェクトです。

UI・UXや品質改善、Web開発の技術検証を目的に制作しています。

## Latest Release

### 2026-10-17

- Pawthのプロジェクト画像を最新の画面に更新しました。
- 開発環境の管理負担を軽減するため、Visual Regression Testを廃止しました。
- CodeQLの運用終了に合わせて、READMEの技術スタックを整理しました。

## Live Demo

🌐 [Webサイトを見る](https://animal.hamltail.dev/)

Alternative: [Vercel Deployment](https://corporate-site-demo-dun.vercel.app/)

## Design

🎨 [Figmaデザインを見る](https://www.figma.com/design/aiLzbeBUsuAQrv9Da9ldEb/ポートフォリオ?node-id=2003-267&t=vLoYEO8nfKudoHhh-1)

## Tech Stack

| Category       | Technologies                                             |
| -------------- | -------------------------------------------------------- |
| Design         | Figma, Krita                                             |
| Frontend       | TypeScript, React, Next.js, Tailwind CSS, next-intl      |
| CMS            | microCMS                                                 |
| Testing        | Playwright, axe-core, Lighthouse CI, k6, Vitest, Stryker |
| Security       | OWASP ZAP                                                |
| Infrastructure | Docker, Vercel, GitHub Actions                           |

## Technical Decisions

当初は HTML・JavaScript・Vite を用いた静的サイトとして制作していましたが、機能拡張や継続的な改善を行いやすくするため、Next.js へ移行しました。

アクセシビリティやE2Eテストなどを取り入れ、実装後も継続的に品質を確認・改善できる構成にしています。

## Development

- **開発期間：** 2026年6月〜10月（以降も継続改善）
- **ソースコード公開期間：** 2026年6月〜10月

2026年6月にHTML・JavaScriptを用いて制作を開始し、ワイヤーフレーム・モックアップの作成、Viteによる実装を経て、7月にNext.jsへ移行しました。

その後、UI・UX、アクセシビリティ、テスト、セキュリティなどの改善を継続しています。

ソースコードは2026年6月から10月までGitHub上で公開していましたが、現在は非公開としています。

本リポジトリでは、制作実績としてプロジェクトの概要および技術構成を公開しています。

## License

本プロジェクトはポートフォリオ目的で公開しています。

本プロジェクトの独自のソースコード、デザインおよびコンテンツに関する著作権は作者に帰属します。

無断転載・複製・再配布・商用利用は許可していません。

本プロジェクトの独自の制作物について、オープンソースライセンスによる利用許諾は行っていません。使用している第三者のライブラリ等には、それぞれのライセンスが適用されます。

This repository is published for portfolio purposes only.

All rights to the original source code, design, and content belong to the author.

Unauthorized reproduction, redistribution, or commercial use is not permitted.

No open-source license is granted for the original project materials. Third-party components remain subject to their respective licenses.

## Author

- h-waji (hamltail)
