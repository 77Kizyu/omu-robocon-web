# 大阪公立大学ロボットコンテストクラブ 公式サイト

[Astro](https://astro.build/) 製の静的サイトです。Vercel にデプロイします。

## 開発

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # dist/ に静的ファイルを出力
```

Node.js 22.12 以上が必要です。

## VSCode で編集する

1. このフォルダ（`omu-robocon-web`）を VSCode で開く。
2. 右下に出る「おすすめの拡張機能をインストールしますか」で **インストール**（`Astro`・`Prettier`・`EditorConfig` の3つ）。
   - 後から入れる場合は、左side barの拡張機能アイコン → 検索欄に `@recommended` → それぞれ Install。
3. ターミナルを開いて `npm install` → `npm run dev`。`http://localhost:4321` をブラウザで開くと、保存するたびに自動で反映される。
4. ファイルを保存すると Prettier が自動整形する（`.vscode/settings.json` で設定済み）。手動で全体を整形したいときは `npm run format`。

編集対象は基本的に `src/data/site.ts`（文章・連絡先など）と `src/content/news/`（記事）。デザインを直す場合は `src/styles/global.css`。

## 内容の更新方法

| やりたいこと | 編集する場所 |
| --- | --- |
| 連絡先（メール・X など）を入れる | `src/data/site.ts` の `contact` |
| 入部届フォームのURLを入れる | `src/data/site.ts` の `joinFormUrl` |
| 活動成績を追加する | `src/data/site.ts` の `results`（空だと「まとめています」表示） |
| スポンサーを追加する | `src/data/site.ts` の `sponsors`（ロゴは `public/sponsors/` に置く） |
| FAQ・入部の流れ・分野の説明を直す | `src/data/site.ts` |
| 活動記事を書く | `src/content/news/` に Markdown を追加（下記） |
| 紙の入部届を差し替える | `public/downloads/nyubu-todoke.pdf` |

空の項目（`''` や `[]`）は、ページ上では自動的に非表示になります。

### 活動記事の書き方

`src/content/news/2026-10-example.md` のようにファイルを作ります。ファイル名がそのまま URL（`/news/2026-10-example`）になります。

```md
---
title: 記事のタイトル
date: 2026-10-01
category: 活動報告   # 活動報告 / 大会 / 新歓 / お知らせ / 技術メモ
summary: 一覧に出る一行の説明（省略可）
draft: false          # true にすると公開されない
---

本文を Markdown で書く。画像は public/images/ に置いて ![説明](/images/xxx.jpg) で貼る。
```

## デプロイ（Vercel）

GitHub リポジトリを Vercel に接続すると、`main` への push で自動デプロイされます。設定は `vercel.json` にあります（Framework は Astro が自動検出されます）。

独自ドメインを付けたら、Vercel の Environment Variables に `SITE_URL=https://（ドメイン）` を設定してください（sitemap・canonical URL に使われます）。

## 構成

```
src/
  data/site.ts        サイト設定・固定コンテンツ
  content/news/       活動記事（Markdown）
  layouts/Base.astro  共通レイアウト（<head>・ヘッダー・フッター）
  components/         ヘッダー・フッター・カード等
  pages/              各ページ
  styles/global.css   デザイン（配色・レイアウト）
public/               favicon・画像・PDF など
```
