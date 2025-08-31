// src/types/post.ts
export interface Post {
  slug: string;
  data: {
    title: string;
    author?: string;
    date?: string;
    image?: string;
    [key: string]: any;
  };
  content: string;
}
