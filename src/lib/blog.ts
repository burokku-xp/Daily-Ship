import { blogPosts } from "@/data/blog-posts";
import type { BlogPost } from "@/types/blog";

const POSTS_PER_PAGE = 10;

export function getAllPublishedPosts(): BlogPost[] {
  return blogPosts
    .filter((post) => post.isPublished)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

export function getPostsByTag(tag: string): BlogPost[] {
  return getAllPublishedPosts().filter((post) => post.tags.includes(tag));
}

export function getAllTags(): string[] {
  const tags = new Set<string>();
  getAllPublishedPosts().forEach((post) => post.tags.forEach((tag) => tags.add(tag)));
  return Array.from(tags).sort();
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug && post.isPublished);
}

export function getPaginatedPosts(
  posts: BlogPost[],
  page: number
): { posts: BlogPost[]; totalPages: number; currentPage: number } {
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const start = (page - 1) * POSTS_PER_PAGE;
  const paginatedPosts = posts.slice(start, start + POSTS_PER_PAGE);
  return {
    posts: paginatedPosts,
    totalPages,
    currentPage: page,
  };
}

export function getAdjacentPosts(slug: string): { prev: BlogPost | null; next: BlogPost | null } {
  const allPosts = getAllPublishedPosts();
  const index = allPosts.findIndex((p) => p.slug === slug);
  if (index === -1) {
    return { prev: null, next: null };
  }
  return {
    prev: index > 0 ? allPosts[index - 1] : null,
    next: index < allPosts.length - 1 ? allPosts[index + 1] : null,
  };
}

export function formatExcerpt(text: string, maxLength: number = 150): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
}
