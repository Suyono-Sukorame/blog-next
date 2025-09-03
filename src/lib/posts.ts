// src/lib/posts.ts
export type Post = {
  slug: string;
  title: string;
  author?: string;
  date?: string;
  image?: string;
  description?: string;
  content: string;
};

const STRAPI_URL = process.env.STRAPI_URL || "http://localhost:1337";

export function getImageUrl(image: any) {
  if (!image || !image.url) return "/placeholder.png";
  return `${STRAPI_URL}${image.url}`;
}

export async function getPosts(): Promise<Post[]> {
  const res = await fetch(`${STRAPI_URL}/api/posts?populate=image`, {
    next: { revalidate: 60 }, // ISR cache 60 detik
  });

  if (!res.ok) throw new Error("Gagal fetch posts dari Strapi");
  const json = await res.json();

  return json.data.map((item: any) => {
    return {
      slug: item.slug,
      title: item.title,
      author: item.author || "Unknown",
      date: item.publishedAt || "",
      image: getImageUrl(item.image), // ✅ pakai helper
      description: item.description || "",
      content: item.body || "",
    };
  });
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const res = await fetch(
    `${STRAPI_URL}/api/posts?filters[slug][$eq]=${slug}&populate=image`,
    { cache: "no-store" }
  );

  if (!res.ok) throw new Error("Gagal fetch post dari Strapi");
  const json = await res.json();

  if (!json.data || json.data.length === 0) return null;

  const item = json.data[0];

  return {
    slug: item.slug,
    title: item.title,
    author: item.author || "Unknown",
    date: item.publishedAt || "",
    image: getImageUrl(item.image), // ✅ konsisten
    description: item.description || "",
    content: item.body || "",
  };
}

export async function getAllPosts(): Promise<Post[]> {
  return getPosts();
}
