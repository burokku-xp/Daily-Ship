import Link from "next/link";

export default function BlogNotFound() {
  return (
    <div className="max-w-content mx-auto px-6 py-12">
      <h1 className="text-2xl font-bold text-text mb-4">記事が見つかりません</h1>
      <p className="text-text mb-6">
        お探しの記事は存在しないか、削除された可能性があります。
      </p>
      <Link
        href="/blog"
        className="text-primary underline hover:no-underline"
      >
        ブログ一覧に戻る
      </Link>
    </div>
  );
}
