import Link from "next/link";
import {
  getAllPublishedPosts,
  getAllTags,
  getPaginatedPosts,
  getPostsByTag,
  formatExcerpt,
} from "@/lib/blog";

interface BlogPageProps {
  searchParams: Promise<{ page?: string; tag?: string }>;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const params = await searchParams;
  const page = Math.max(1, parseInt(params.page ?? "1", 10));
  const tagFilter = params.tag ?? "";

  const allPosts = tagFilter
    ? getPostsByTag(tagFilter)
    : getAllPublishedPosts();
  const { posts, totalPages, currentPage } = getPaginatedPosts(allPosts, page);
  const allTags = getAllTags();

  return (
    <div className="max-w-content mx-auto px-6 py-12">
      <h1 className="text-2xl font-bold text-text mb-8">ブログ</h1>

      {allTags.length > 0 && (
        <div className="mb-8">
          <p className="text-sub-text text-sm mb-2">タグでフィルター</p>
          <div className="flex flex-wrap gap-2">
            <Link
              href="/blog"
              className={`px-3 py-1 text-sm rounded border transition-colors no-underline ${
                !tagFilter
                  ? "bg-primary text-white border-primary"
                  : "bg-base text-text border-border hover:border-primary hover:text-primary"
              }`}
            >
              すべて
            </Link>
            {allTags.map((tag) => (
              <Link
                key={tag}
                href={`/blog?tag=${encodeURIComponent(tag)}`}
                className={`px-3 py-1 text-sm rounded border transition-colors no-underline ${
                  tagFilter === tag
                    ? "bg-primary text-white border-primary"
                    : "bg-base text-text border-border hover:border-primary hover:text-primary"
                }`}
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>
      )}

      <div className="space-y-6">
        {posts.length === 0 ? (
          <p className="text-sub-text">記事がありません。</p>
        ) : (
          posts.map((post) => (
            <article
              key={post.id}
              className="border border-border rounded p-6 hover:border-primary/50 transition-colors"
            >
              <Link href={`/blog/${post.slug}`} className="no-underline block">
                <h2 className="text-xl font-bold text-text mb-2 hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-sub-text text-sm mb-2">
                  {new Date(post.publishedAt).toLocaleDateString("ja-JP", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                {post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs text-sub-text border border-border rounded px-2 py-0.5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
                <p className="text-text leading-relaxed">
                  {formatExcerpt(post.excerpt, 150)}
                </p>
              </Link>
            </article>
          ))
        )}
      </div>

      {totalPages > 1 && (
        <nav className="mt-12 flex justify-center gap-2">
          {currentPage > 1 && (
            <Link
              href={
                tagFilter
                  ? `/blog?page=${currentPage - 1}&tag=${encodeURIComponent(tagFilter)}`
                  : `/blog?page=${currentPage - 1}`
              }
              className="px-4 py-2 text-text border border-border rounded hover:border-primary hover:text-primary transition-colors no-underline"
            >
              前へ
            </Link>
          )}
          <span className="px-4 py-2 text-sub-text text-sm">
            {currentPage} / {totalPages}
          </span>
          {currentPage < totalPages && (
            <Link
              href={
                tagFilter
                  ? `/blog?page=${currentPage + 1}&tag=${encodeURIComponent(tagFilter)}`
                  : `/blog?page=${currentPage + 1}`
              }
              className="px-4 py-2 text-text border border-border rounded hover:border-primary hover:text-primary transition-colors no-underline"
            >
              次へ
            </Link>
          )}
        </nav>
      )}
    </div>
  );
}
