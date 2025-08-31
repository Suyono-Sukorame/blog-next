// src/app/blog/page.tsx
import Heading from "@/app/components/Heading";
import PostCard from "@/app/components/PostCard";
import { posts, Post } from "@/lib/posts";

export default function BlogPage() {
  return (
    <>
      <Heading>Halaman Blog</Heading>

      <div className="flex flex-wrap gap-4">
        {posts.map((post: Post) => (   // ✅ pakai type Post
          <PostCard
            key={post.slug}
            image={post.image}
            link={`/blog/${post.slug}`}
            title={post.title}
            author={post.author}
            date={post.date}
            description={post.description}
          />
        ))}
      </div>
    </>
  );
}

