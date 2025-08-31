import { notFound } from "next/navigation";
import { getPosts, getPostBySlug } from "@/lib/posts";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";

type PostPageProps = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-4xl font-bold">{post.title}</h1>
      <p className="mt-2 text-gray-500 dark:text-gray-400">
        {`By ${post.author} • ${post.date}`}
      </p>
      {post.image && (
        <img
          src={post.image}
          alt={post.title}
          className="mb-10 w-full rounded-2xl shadow-lg object-cover"
        />
      )}
      <article className="prose prose-lg dark:prose-invert mt-8 max-w-none">
        <Markdown rehypePlugins={[rehypeRaw]}>{post.content}</Markdown>
      </article>
    </div>
  );
}
