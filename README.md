# Daily Ship

Next.js (App Router) + Tailwind CSS で構築したブログサイトです。

## 技術スタック

- **フレームワーク**: Next.js 15 (App Router)
- **スタイリング**: Tailwind CSS
- **Markdown**: react-markdown + remark-gfm

## 開発の開始

```bash
npm install
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてください。

## 主な機能

- **ホーム** (`/`): ウェルカムページ
- **ブログ一覧** (`/blog`): 記事一覧、タグフィルター、ページネーション（10件/ページ）
- **ブログ詳細** (`/blog/[slug]`): 記事本文（Markdown）、前後記事ナビゲーション

## デザイン方針

- ミニマルなUI（アイコン不使用、テキストのみ）
- 最大幅 768px、左右パディング 1.5rem
- カラーテーマ: プライマリ #F97316、テキスト #1F2937

## ビルド

```bash
npm run build
npm start
```
