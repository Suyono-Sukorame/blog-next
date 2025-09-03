// src/app/blog/page.tsx
import type { Metadata } from "next";
import Heading from "@/components/Heading";
import PostCard from "@/components/PostCard";
import { getAllPosts } from "@/lib/posts";  // ✅ pakai getAllPosts

export const metadata: Metadata = {
  title: "Blog",
  description: "Kumpulan artikel dan tulisan terbaru",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/blog`,
  },
};

export default async function BlogPage() {
  const posts = await getAllPosts();       // ✅ ambil semua post

  return (
    <>
      <Heading>Halaman Blog</Heading>

      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <PostCard
            key={post.slug}
            image={post.image ?? ""}
            link={`/blog/${post.slug}`}
            title={post.title}
            author={post.author ?? "Unknown"}
            date={post.date ?? ""}
            description={post.description ?? ""}
          />
        ))}
      </div>
    </>
  );
}
