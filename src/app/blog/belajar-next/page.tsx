// src/app/blog/belajar-next/page.tsx
import { readFile } from "fs/promises";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import Heading from "@/app/components/Heading";

export default async function PostPage() {
  const markdown = await readFile("content/blog/belajar-nextjs.md", "utf8");

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      {/* Header */}
      <div className="mb-8 text-center">
        <Heading>
          <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-4xl font-extrabold text-transparent">
            Belajar Next.js
          </span>
        </Heading>
        <p className="mt-2 text-gray-500 dark:text-gray-400">
          Membahas dasar-dasar Next.js secara ringkas & modern
        </p>
      </div>

      {/* Thumbnail */}
      <div className="relative mb-10 overflow-hidden rounded-2xl shadow-lg">
        <img
          src="/images/image-1.jpg"
          alt="Thumbnail Belajar Next.js"
          className="h-auto w-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Markdown Content */}
      <article className="prose prose-lg dark:prose-invert max-w-none">
        <ReactMarkdown
          rehypePlugins={[rehypeRaw]}
          components={{
            h1: ({ children, ...props }) => (
              <Heading {...props}>
                <span className="text-3xl mt-8 mb-4">{children}</span>
              </Heading>
            ),
            h2: ({ children, ...props }) => (
              <h2 {...props} className="text-2xl font-bold mt-6 mb-3">
                {children}
              </h2>
            ),
            h3: ({ children, ...props }) => (
              <h3 {...props} className="text-xl font-semibold mt-4 mb-2">
                {children}
              </h3>
            ),
            p: ({ children, ...props }) => (
              <p {...props} className="text-gray-700 dark:text-black mb-4">
                {children}
              </p>
            ),
            li: ({ children, ...props }) => (
              <li {...props} className="ml-6 mb-2 list-disc">
                {children}
              </li>
            ),
            a: ({ children, ...props }) => (
              <a {...props} className="text-blue-600 hover:text-blue-800">
                {children}
              </a>
            ),
            blockquote: ({ children, ...props }) => (
              <blockquote
                {...props}
                className="border-l-4 border-purple-500 bg-purple-50 dark:bg-gray-800 rounded-md px-4 py-2 my-4"
              >
                {children}
              </blockquote>
            ),
            code: (props: any) => (
              <code
                {...props}
                className="bg-gray-100 dark:bg-gray-800 text-pink-600 dark:text-pink-400 px-1 py-0.5 rounded"
              >
                {props.children}
              </code>
            ),
          }}
        >
          {markdown}
        </ReactMarkdown>
      </article>
    </div>
  );
}
