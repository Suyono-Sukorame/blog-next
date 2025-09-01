// src/lib/posts.ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { readdir } from "node:fs/promises";

export type Post = {
  slug: string;
  title: string;
  author?: string;
  date?: string;
  image?: string;
  description?: string;
  content: string;
};

const postsDir = path.join(process.cwd(), "content");

export async function getPosts(): Promise<Post[]> {
  const files = fs.readdirSync(postsDir);

  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const filePath = path.join(postsDir, file);
      const fileContent = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(fileContent);

      return {
        slug,
        title: data.title || slug,
        author: data.author || "Unknown",
        date: data.date || "",
        image: data.image || "",
        description: data.description || "",
        content,
      };
    });
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const filePath = path.join(postsDir, "blog", `${slug}.md`); // tambahkan folder blog di path
  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContent);

  return {
    slug,
    title: data.title || slug,
    author: data.author || "Unknown",
    date: data.date || "",
    image: data.image || "",
    description: data.description || "",
    content,
  };
}

export async function getAllPosts(): Promise<Post[]> {
  const blogDir = path.join(postsDir, "blog");
  const files = await readdir(blogDir);

  const slugs = files
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));

  const posts: Post[] = [];

  for (const slug of slugs) {
    const post = await getPostBySlug(slug);
    if (post) posts.push(post);
  }

  return posts;
}
