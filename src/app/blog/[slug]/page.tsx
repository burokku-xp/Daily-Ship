import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getPostBySlug, getAdjacentPosts } from "@/lib/blog";

interface BlogDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const { prev, next } = getAdjacentPosts(slug);

  return (
    <div className="max-w-content mx-auto px-6 py-12">
      <article>
        <h1 className="text-2xl font-bold text-text mb-4">{post.title}</h1>

        <div className="text-sub-text text-sm mb-4 space-y-1">
          <p>
            投稿日:{" "}
            {new Date(post.publishedAt).toLocaleDateString("ja-JP", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          {post.updatedAt !== post.publishedAt && (
            <p>
              更新日:{" "}
              {new Date(post.updatedAt).toLocaleDateString("ja-JP", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          )}
        </div>

        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs text-sub-text border border-border rounded px-2 py-0.5"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="prose prose-gray max-w-none [&_h1]:text-xl [&_h2]:text-lg [&_h3]:text-base [&_a]:text-primary [&_a]:underline [&_a:hover]:no-underline">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
        </div>
      </article>

      <nav className="mt-12 pt-8 border-t border-border flex justify-between gap-4">
        <div className="min-w-0 flex-1">
          {prev ? (
            <Link
              href={`/blog/${prev.slug}`}
              className="block no-underline group"
            >
              <span className="text-sub-text text-sm">前の記事</span>
              <p className="text-text font-medium truncate group-hover:text-primary transition-colors">
                {prev.title}
              </p>
            </Link>
          ) : (
            <span className="text-sub-text text-sm">前の記事はありません</span>
          )}
        </div>
        <div className="min-w-0 flex-1 text-right">
          {next ? (
            <Link
              href={`/blog/${next.slug}`}
              className="block no-underline group"
            >
              <span className="text-sub-text text-sm">次の記事</span>
              <p className="text-text font-medium truncate group-hover:text-primary transition-colors">
                {next.title}
              </p>
            </Link>
          ) : (
            <span className="text-sub-text text-sm">次の記事はありません</span>
          )}
        </div>
      </nav>
    </div>
  );
}
