// src/app/blog/page.tsx
import Heading from "@/app/components/Heading";
import PostCard from "@/app/components/PostCard";

const posts = [
  {
    image: "/images/image-1.jpg",
    title: "Pemandangan Kota Modern",
    author: "Admin",
    date: "30 Agustus 2025",
    description: "Gambar ini memperlihatkan suasana perkotaan yang modern..."
  },
  {
    image: "/images/image-2.jpg",
    title: "Suasana Kota di Malam Hari",
    author: "Admin",
    date: "30 Agustus 2025",
    description: "Kota ini tampak hidup di malam hari dengan cahaya lampu jalan..."
  },
  {
    image: "/images/image-3.jpg",
    title: "Jalan Raya di Tengah Kota",
    author: "Admin",
    date: "30 Agustus 2025",
    description: "Jalan raya yang membelah pusat kota ini menunjukkan betapa sibuknya aktivitas..."
  },
];

export default function LatihanPage() {
  return (
    <>
      <Heading>Halaman Blog</Heading>

      <div className="flex flex-wrap gap-4">
        {posts.map((post, index) => (
          <PostCard
            key={index}
            image={post.image}
            title={post.title}
            author={post.author}
            date={post.date}
            description={post.description}
          />
        ))}
      </div>
    </>
  );
}
