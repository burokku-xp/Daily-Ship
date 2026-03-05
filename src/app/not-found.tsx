import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-content mx-auto px-6 py-12">
      <h1 className="text-2xl font-bold text-text mb-4">ページが見つかりません</h1>
      <p className="text-text mb-6">
        お探しのページは存在しないか、移動した可能性があります。
      </p>
      <Link href="/" className="text-primary underline hover:no-underline">
        ホームに戻る
      </Link>
    </div>
  );
}
