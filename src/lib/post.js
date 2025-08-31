// lib/post.js
import { readFile } from "fs/promises";
import matter from "gray-matter";

/**
 * Membaca file markdown dan mengembalikan data + konten
 * @param {string} filePath Path relatif ke root proyek, misal "content/blog/belajar-nextjs.md"
 * @returns {Promise<{data: any, content: string}>}
 */
export async function getPost(filePath) {
  const file = await readFile(filePath, "utf8");
  const { data, content } = matter(file);
  return { data, content };
}
