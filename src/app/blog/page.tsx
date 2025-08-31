// src/app/blog/page.tsx
import Heading from "@/components/Heading";
import PostCard from "@/components/PostCard";
import { getPosts } from "@/lib/posts";

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <>
      <Heading>Halaman Blog</Heading>

      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <PostCard
            key={post.slug}
            image={post.image ?? ""}
            link={`/blog/${post.slug}`}   // ✅ karena file route di /app/[slug]
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
