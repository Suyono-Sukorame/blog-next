// src/app/blog/[slug]/page.tsx
import { notFound } from "next/navigation";
import { getPostBySlug } from "@/lib/posts";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import type { Components } from "react-markdown";
import type { Metadata } from "next";
import ShareButtons from "@/components/ShareButtons";

type PostPageProps = {
  params: { slug: string };
};

// Metadata dinamis per post
export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Post Not Found",
      description: "Halaman ini tidak tersedia",
    };
  }

  return {
    title: post.title,
    description: post.description ?? "",
    openGraph: {
      title: post.title,
      description: post.description ?? "",
      images: post.image ? [{ url: post.image }] : [],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description ?? "",
      images: post.image ? [post.image] : [],
    },
    alternates: {
      canonical: `/blog/${params.slug}`,
    },
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostBySlug(params.slug);

  if (!post) return notFound();

  const components: Components = {
    h1: ({ node, ...props }) => (
      <h1 className="text-3xl md:text-4xl font-extrabold mt-8 mb-4 border-b pb-2" {...props} />
    ),
    h2: ({ node, ...props }) => (
      <h2 className="text-2xl md:text-3xl font-bold mt-6 mb-3 text-indigo-600 dark:text-indigo-400" {...props} />
    ),
    h3: ({ node, ...props }) => (
      <h3 className="text-xl md:text-2xl font-semibold mt-5 mb-2" {...props} />
    ),
    p: ({ node, ...props }) => (
      <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-5" {...props} />
    ),
    blockquote: ({ node, ...props }) => (
      <blockquote className="border-l-4 border-indigo-500 pl-4 italic text-gray-700 dark:text-gray-300" {...props} />
    ),
    code: ({ node, inline, ...props }: any) =>
      inline ? (
        <code className="bg-gray-200 dark:bg-gray-800 text-pink-500 px-1 rounded" {...props} />
      ) : (
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto">
          <code {...props} />
        </pre>
      ),
  };

    return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <header className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          {post.title}
        </h1>
        <p className="mt-3 text-gray-600 dark:text-gray-400">
          By <span className="font-semibold text-indigo-600 dark:text-indigo-400">{post.author}</span> • {post.date}
        </p>
      </header>

      {post.image && (
        <div className="mb-10">
          <img src={post.image} alt={post.title} className="w-full rounded-2xl shadow-xl object-cover" />
        </div>
      )}

      <article className="prose prose-lg dark:prose-invert max-w-none">
        <Markdown rehypePlugins={[rehypeRaw]} components={components}>
          {post.content}
        </Markdown>
      </article>

      {/* Share Buttons */}
      <ShareButtons url={`https://example.com/blog/${post.slug}`} title={post.title} />
    </div>
  );
}
