// src/types/post.ts
export type Post = {
  slug: string;
  title: string;
  image?: string;
  author: string;
  date: string;
  description?: string;  // ✅ tambahkan supaya tidak error
  content?: string;
};

