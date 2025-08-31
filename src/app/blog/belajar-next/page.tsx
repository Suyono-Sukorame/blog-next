// src/app/blog/belajar-next/page.tsx
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import Heading from "@/app/components/Heading";
import { getPost } from "@/lib/post";

export default async function PostPage() {
  const { data, content } = await getPost("content/blog/belajar-nextjs.md");

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <div className="mb-8 text-center">
        <Heading>
          <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-4xl font-extrabold text-transparent">
            {data.title}
          </span>
        </Heading>
        <p className="mt-2 text-gray-500 dark:text-gray-400">
          {`By ${data.author} • ${data.date}`}
        </p>
      </div>

      {data.image && (
        <img
          src={data.image}
          alt={data.title}
          className="mb-10 w-full rounded-2xl shadow-lg object-cover transition-transform duration-500 hover:scale-105"
        />
      )}

      <article className="prose prose-lg dark:prose-invert max-w-none">
        <ReactMarkdown
          rehypePlugins={[rehypeRaw]}
          components={{
            h1: ({ children }) => <h1 className="text-3xl font-bold mt-8 mb-4">{children}</h1>,
            h2: ({ children }) => <h2 className="text-2xl font-semibold mt-6 mb-3">{children}</h2>,
            h3: ({ children }) => <h3 className="text-xl font-medium mt-4 mb-2">{children}</h3>,
          }}
        >
          {content}
        </ReactMarkdown>
      </article>
    </div>
  );
}
