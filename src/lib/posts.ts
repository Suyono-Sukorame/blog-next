// src/lib/posts.ts

export type Post = {
  slug: string;
  title: string;
  author: string;
  date: string;
  image: string;
  description: string;
  content: string;
};

// Tipe data image dari Strapi
type StrapiImage = {
  url?: string;
};

// Tipe data post dari Strapi
type StrapiPost = {
  slug: string;
  title: string;
  author?: string;
  publishedAt?: string;
  image?: StrapiImage;
  description?: string;
  body?: string;
};

const STRAPI_URL = process.env.STRAPI_URL || "http://localhost:1337";

// Helper untuk image
function getImageUrl(image?: StrapiImage): string {
  if (!image?.url) return "/placeholder.png";
  return `${STRAPI_URL}${image.url}`;
}

// Ambil semua post
export async function getPosts(): Promise<Post[]> {
  const res = await fetch(`${STRAPI_URL}/api/posts?populate=image`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Gagal fetch posts dari Strapi");

  const json: { data?: StrapiPost[] } = await res.json();

  return (json.data || []).map((post) => ({
    slug: post.slug,
    title: post.title,
    author: post.author || "Unknown",
    date: post.publishedAt || "",
    image: getImageUrl(post.image),
    description: post.description || "",
    content: post.body || "",
  }));
}

// Ambil 1 post berdasarkan slug
export async function getPostBySlug(slug: string): Promise<Post | null> {
  const res = await fetch(
    `${STRAPI_URL}/api/posts?filters[slug][$eq]=${slug}&populate=image`,
    { cache: "no-store" }
  );

  if (!res.ok) throw new Error("Gagal fetch post dari Strapi");
  const json: { data?: StrapiPost[] } = await res.json();

  if (!json.data || json.data.length === 0) return null;

  const post = json.data[0];

  return {
    slug: post.slug,
    title: post.title,
    author: post.author || "Unknown",
    date: post.publishedAt || "",
    image: getImageUrl(post.image),
    description: post.description || "",
    content: post.body || "",
  };
}

export async function getAllPosts(): Promise<Post[]> {
  return getPosts();
}
