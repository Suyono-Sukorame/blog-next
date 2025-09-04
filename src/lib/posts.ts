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

type StrapiImage = {
  url: string;
};

type StrapiPostAttributes = {
  slug: string;
  title: string;
  author?: string;
  publishedAt?: string;
  description?: string;
  body?: string;
  image?: StrapiImage | null;
};

type StrapiPost = {
  id: number;
  attributes: StrapiPostAttributes;
};

type StrapiResponse = {
  data: StrapiPost[];
};

const STRAPI_URL = process.env.STRAPI_URL || "http://localhost:1337";

// Helper untuk mendapatkan URL image
export function getImageUrl(image?: StrapiImage | null): string {
  if (!image?.url) return "/placeholder.png";
  return `${STRAPI_URL}${image.url}`;
}

// Ambil semua post
export async function getPosts(): Promise<Post[]> {
  const res = await fetch(`${STRAPI_URL}/api/posts?populate=image`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) throw new Error("Gagal fetch posts dari Strapi");
  const json: StrapiResponse = await res.json();

  return json.data.map((item) => ({
    slug: item.attributes.slug,
    title: item.attributes.title,
    author: item.attributes.author || "Unknown",
    date: item.attributes.publishedAt || "",
    image: getImageUrl(item.attributes.image),
    description: item.attributes.description || "",
    content: item.attributes.body || "",
  }));
}

// Ambil 1 post berdasarkan slug
export async function getPostBySlug(slug: string): Promise<Post | null> {
  const res = await fetch(
    `${STRAPI_URL}/api/posts?filters[slug][$eq]=${slug}&populate=image`,
    { cache: "no-store" }
  );

  if (!res.ok) throw new Error("Gagal fetch post dari Strapi");
  const json: StrapiResponse = await res.json();

  if (!json.data || json.data.length === 0) return null;

  const item = json.data[0];

  return {
    slug: item.attributes.slug,
    title: item.attributes.title,
    author: item.attributes.author || "Unknown",
    date: item.attributes.publishedAt || "",
    image: getImageUrl(item.attributes.image),
    description: item.attributes.description || "",
    content: item.attributes.body || "",
  };
}

// Alias untuk getPosts
export async function getAllPosts(): Promise<Post[]> {
  return getPosts();
}
