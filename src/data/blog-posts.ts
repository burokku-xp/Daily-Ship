import type { BlogPost } from "@/types/blog";

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Next.js と Tailwind CSS でブログを構築する",
    slug: "nextjs-tailwind-blog",
    content: `# Next.js と Tailwind CSS でブログを構築する

この記事では、Next.js の App Router と Tailwind CSS を使って、シンプルなブログサイトを構築する方法を紹介します。

## はじめに

モダンな Web フレームワークを活用することで、パフォーマンスの高い静的サイトを簡単に構築できます。

## 主な特徴

- **App Router**: ファイルベースのルーティング
- **Tailwind CSS**: ユーティリティファーストのスタイリング
- **TypeScript**: 型安全な開発

## まとめ

Next.js と Tailwind CSS の組み合わせは、ブログ構築に最適な選択肢の一つです。`,
    excerpt: "Next.js の App Router と Tailwind CSS を使って、シンプルでパフォーマンスの高いブログサイトを構築する方法を紹介します。",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    publishedAt: "2025-03-05T10:00:00Z",
    updatedAt: "2025-03-05T10:00:00Z",
    isPublished: true,
  },
  {
    id: "2",
    title: "Markdown で記事を書くメリット",
    slug: "markdown-benefits",
    content: `# Markdown で記事を書くメリット

Markdown は、シンプルな記法でリッチなドキュメントを作成できる軽量マークアップ言語です。

## メリット

1. **シンプル**: 学習コストが低く、すぐに使い始められる
2. **可搬性**: プレーンテキストなので、どの環境でも編集可能
3. **バージョン管理**: Git との相性が良い

## 基本的な記法

- 見出し: \`#\` で表現
- リスト: \`-\` や \`*\` で表現
- リンク: \`[テキスト](URL)\` で表現

ぜひ Markdown を活用して、効率的にコンテンツを作成してみてください。`,
    excerpt: "Markdown を使うことで、シンプルかつ効率的に記事を書くことができます。主なメリットと基本的な記法を紹介します。",
    tags: ["Markdown", "ドキュメント", "執筆"],
    publishedAt: "2025-03-04T14:30:00Z",
    updatedAt: "2025-03-04T14:30:00Z",
    isPublished: true,
  },
  {
    id: "3",
    title: "Daily Ship プロジェクトの始まり",
    slug: "daily-ship-start",
    content: `# Daily Ship プロジェクトの始まり

Daily Ship は、日々の学びや気づきを発信するブログプロジェクトです。

## コンセプト

- **ミニマル**: 余計な装飾を排除し、コンテンツに集中
- **テキスト中心**: アイコンを使わず、テキストのみで構成
- **読みやすさ**: 十分な余白と適切なタイポグラフィ

## 今後の展望

今後は、検索機能や RSS 配信などの機能追加を検討しています。`,
    excerpt: "Daily Ship プロジェクトのコンセプトと今後の展望について紹介します。ミニマルで読みやすいブログを目指しています。",
    tags: ["Daily Ship", "プロジェクト", "ブログ"],
    publishedAt: "2025-03-03T09:00:00Z",
    updatedAt: "2025-03-03T09:00:00Z",
    isPublished: true,
  },
  {
    id: "4",
    title: "TypeScript で型安全な開発を",
    slug: "typescript-type-safety",
    content: `# TypeScript で型安全な開発を

TypeScript は、JavaScript に型システムを追加した言語です。

## 型安全のメリット

- **バグの早期発見**: コンパイル時にエラーを検出
- **IDE サポート**: 補完やリファクタリングが強力
- **ドキュメント**: 型定義がそのままドキュメントになる

## 導入のポイント

既存の JavaScript プロジェクトにも、段階的に TypeScript を導入することが可能です。`,
    excerpt: "TypeScript を導入することで、型安全な開発が可能になります。主なメリットと導入のポイントを紹介します。",
    tags: ["TypeScript", "JavaScript", "開発"],
    publishedAt: "2025-03-02T16:00:00Z",
    updatedAt: "2025-03-02T16:00:00Z",
    isPublished: true,
  },
  {
    id: "5",
    title: "レスポンシブデザインの基本",
    slug: "responsive-design-basics",
    content: `# レスポンシブデザインの基本

レスポンシブデザインは、様々なデバイスで最適な表示を実現する手法です。

## 重要な考え方

- **モバイルファースト**: 小さい画面から設計を始める
- **フルイドレイアウト**: 固定幅ではなく相対的な幅を使用
- **メディアクエリ**: 画面サイズに応じてスタイルを変更

Tailwind CSS のブレークポイントを活用することで、効率的にレスポンシブ対応ができます。`,
    excerpt: "レスポンシブデザインの基本概念と、モバイルファーストの考え方について解説します。",
    tags: ["CSS", "レスポンシブ", "デザイン"],
    publishedAt: "2025-03-01T11:00:00Z",
    updatedAt: "2025-03-01T11:00:00Z",
    isPublished: true,
  },
  {
    id: "6",
    title: "Tailwind CSS のユーティリティファースト",
    slug: "tailwind-utility-first",
    content: `# Tailwind CSS のユーティリティファースト

Tailwind CSS は、ユーティリティファーストの CSS フレームワークです。

## 特徴

- **低レベルのユーティリティ**: 細かいスタイルを組み合わせてデザイン
- **カスタマイズ性**: 設定ファイルでデザインシステムを定義
- **本番ビルドの最適化**: 未使用のスタイルは自動的に削除

## 使い方

クラス名を組み合わせることで、素早く一貫したデザインを実現できます。`,
    excerpt: "Tailwind CSS のユーティリティファーストの考え方と、そのメリットについて紹介します。",
    tags: ["Tailwind CSS", "CSS", "フロントエンド"],
    publishedAt: "2025-02-28T13:00:00Z",
    updatedAt: "2025-02-28T13:00:00Z",
    isPublished: true,
  },
  {
    id: "7",
    title: "Web アクセシビリティの重要性",
    slug: "web-accessibility",
    content: `# Web アクセシビリティの重要性

アクセシビリティは、すべてのユーザーが Web を利用できるようにするための取り組みです。

## 主なポイント

- **セマンティック HTML**: 適切な要素を使用する
- **キーボード操作**: マウスなしでも操作可能に
- **色のコントラスト**: 十分な視認性を確保

アクセシビリティを考慮した設計は、すべてのユーザーにとって使いやすいサイトになります。`,
    excerpt: "Web アクセシビリティの重要性と、実装時に考慮すべき主なポイントについて解説します。",
    tags: ["アクセシビリティ", "Web", "UX"],
    publishedAt: "2025-02-27T10:00:00Z",
    updatedAt: "2025-02-27T10:00:00Z",
    isPublished: true,
  },
  {
    id: "8",
    title: "Git を使ったバージョン管理",
    slug: "git-version-control",
    content: `# Git を使ったバージョン管理

Git は、分散型バージョン管理システムの代表的なツールです。

## 基本的なコマンド

- \`git add\`: 変更をステージング
- \`git commit\`: 変更を記録
- \`git push\`: リモートに送信

## ベストプラクティス

コミットメッセージは明確に、変更は小さな単位で行うことが重要です。`,
    excerpt: "Git の基本的な使い方と、効果的なバージョン管理のためのベストプラクティスを紹介します。",
    tags: ["Git", "バージョン管理", "開発"],
    publishedAt: "2025-02-26T15:00:00Z",
    updatedAt: "2025-02-26T15:00:00Z",
    isPublished: true,
  },
  {
    id: "9",
    title: "React Server Components の概要",
    slug: "react-server-components",
    content: `# React Server Components の概要

React Server Components は、サーバーでレンダリングされる React コンポーネントです。

## メリット

- **バンドルサイズの削減**: クライアントに送る JavaScript が減る
- **データフェッチ**: サーバーで直接データベースにアクセス可能
- **セキュリティ**: 機密情報をクライアントに送らない

Next.js の App Router では、デフォルトで Server Components が使用されます。`,
    excerpt: "React Server Components の概要と、Next.js での活用方法について紹介します。",
    tags: ["React", "Next.js", "サーバー"],
    publishedAt: "2025-02-25T09:00:00Z",
    updatedAt: "2025-02-25T09:00:00Z",
    isPublished: true,
  },
  {
    id: "10",
    title: "パフォーマンス最適化のヒント",
    slug: "performance-optimization",
    content: `# パフォーマンス最適化のヒント

Web サイトのパフォーマンスは、ユーザー体験に直結します。

## 最適化のポイント

- **画像最適化**: 適切なフォーマットとサイズ
- **コード分割**: 必要なコードだけを読み込む
- **キャッシュ**: ブラウザキャッシュの活用

Next.js には、画像最適化や自動コード分割など、パフォーマンス向上のための機能が組み込まれています。`,
    excerpt: "Web サイトのパフォーマンスを向上させるための、実践的な最適化のヒントを紹介します。",
    tags: ["パフォーマンス", "最適化", "Next.js"],
    publishedAt: "2025-02-24T14:00:00Z",
    updatedAt: "2025-02-24T14:00:00Z",
    isPublished: true,
  },
  {
    id: "11",
    title: "環境変数とセキュリティ",
    slug: "env-variables-security",
    content: `# 環境変数とセキュリティ

環境変数は、機密情報を安全に管理するための重要な仕組みです。

## Next.js での使い方

- \`NEXT_PUBLIC_\`: クライアントに公開される変数
- それ以外: サーバー側でのみ利用可能

API キーやデータベースの接続情報は、絶対にクライアントに公開しないように注意しましょう。`,
    excerpt: "環境変数の適切な管理方法と、Next.js でのセキュリティを考慮した使い方を解説します。",
    tags: ["セキュリティ", "環境変数", "Next.js"],
    publishedAt: "2025-02-23T11:00:00Z",
    updatedAt: "2025-02-23T11:00:00Z",
    isPublished: true,
  },
];
