// src/lib/posts.ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";

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
  const filePath = path.join(postsDir, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

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
