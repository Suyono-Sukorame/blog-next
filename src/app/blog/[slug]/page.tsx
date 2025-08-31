import { notFound } from "next/navigation";
import { getPosts, getPostBySlug } from "@/lib/posts";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import type { Components } from "react-markdown";

type PostPageProps = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostBySlug(params.slug);

  if (!post) return notFound();

  // ✅ Custom komponen markdown (Type aman)
  const components: Components = {
    h1: ({ node, ...props }) => (
      <h1
        className="text-3xl md:text-4xl font-extrabold mt-8 mb-4 border-b pb-2"
        {...props}
      />
    ),
    h2: ({ node, ...props }) => (
      <h2
        className="text-2xl md:text-3xl font-bold mt-6 mb-3 text-indigo-600 dark:text-indigo-400"
        {...props}
      />
    ),
    h3: ({ node, ...props }) => (
      <h3
        className="text-xl md:text-2xl font-semibold mt-5 mb-2"
        {...props}
      />
    ),
    p: ({ node, ...props }) => (
      <p
        className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-5"
        {...props}
      />
    ),
    blockquote: ({ node, ...props }) => (
      <blockquote
        className="border-l-4 border-indigo-500 pl-4 italic text-gray-700 dark:text-gray-300"
        {...props}
      />
    ),
    code: ({ node, inline, ...props }: any) =>
      inline ? (
        <code
          className="bg-gray-200 dark:bg-gray-800 text-pink-500 px-1 rounded"
          {...props}
        />
      ) : (
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto">
          <code {...props} />
        </pre>
      ),
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      {/* Header */}
      <header className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          {post.title}
        </h1>
        <p className="mt-3 text-gray-600 dark:text-gray-400">
          By{" "}
          <span className="font-semibold text-indigo-600 dark:text-indigo-400">
            {post.author}
          </span>{" "}
          • {post.date}
        </p>
      </header>

      {/* Hero Image */}
      {post.image && (
        <div className="mb-10">
          <img
            src={post.image}
            alt={post.title}
            className="w-full rounded-2xl shadow-xl object-cover"
          />
        </div>
      )}

      {/* Content */}
      <article className="prose prose-lg dark:prose-invert prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white prose-a:text-indigo-600 dark:prose-a:text-indigo-400 prose-blockquote:border-l-4 prose-blockquote:border-indigo-500 prose-blockquote:italic prose-blockquote:text-gray-700 dark:prose-blockquote:text-gray-300 prose-code:bg-gray-800 prose-code:text-pink-400 prose-code:px-1 prose-code:rounded prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:p-4 prose-pre:rounded-xl max-w-none">
        <Markdown rehypePlugins={[rehypeRaw]} components={components}>
          {post.content}
        </Markdown>
      </article>
    </div>
  );
}
