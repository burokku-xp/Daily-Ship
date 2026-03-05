import Link from "next/link";

export default function HomePage() {
  return (
    <div className="max-w-content mx-auto px-6 py-12">
      <h1 className="text-2xl font-bold text-text mb-4">Welcome to Daily Ship</h1>
      <p className="text-text leading-relaxed">
        Daily Ship へようこそ。ブログ記事は
        <Link href="/blog" className="text-primary underline hover:no-underline ml-1">
          ブログ一覧
        </Link>
        からご覧ください。
      </p>
    </div>
  );
}
