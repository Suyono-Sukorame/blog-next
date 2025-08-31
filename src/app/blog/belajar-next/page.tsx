// src/app/blog/belajar-next/page.tsx
import { readFile } from "fs/promises";
import ReactMarkdown from "react-markdown";
import Heading from "@/app/components/Heading";

export default async function PostPage() {
  const text = await readFile("content/blog/belajar-nextjs.md", "utf8");

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      {/* Header */}
      <div className="mb-8 text-center">
        <Heading className="bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-4xl font-extrabold text-transparent">
          Belajar Next.js
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

      {/* Content */}
      <article className="prose prose-lg dark:prose-invert prose-headings:font-bold prose-a:text-blue-600 hover:prose-a:text-blue-800 prose-img:rounded-xl prose-img:shadow-md">
        <ReactMarkdown>{text}</ReactMarkdown>
      </article>
    </div>
  );
}
