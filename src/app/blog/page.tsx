import Heading from "@/app/components/Heading"; // asumsi Heading.tsx ada
import Link from "next/link";
import PostCard from "@/app/components/PostCard";

export default function LatihanPage() {
  return (
    <>
      <Heading>Halaman Blog</Heading>
      <p>List of posts</p>
      <ul className="mb-6 list-disc pl-5 text-blue-600">
        <li>
          <Link href="/blog/judul-berita" prefetch={false}>
            Judul Berita
          </Link>
        </li>
        <li>
          <Link href="/blog/belajar-next" prefetch={false}>
            Belajar Next JS
          </Link>
        </li>
        <li>
          <Link href="/blog/latihan-route-next" prefetch={false}>
            Latihan Route Next JS
          </Link>
        </li>
      </ul>

      <div className="flex flex-wrap gap-4">
        <PostCard
          image="/images/image-1.jpg"
          title="Pemandangan Kota Modern"
          author="Admin"
          date="30 Agustus 2025"
          description="Gambar ini memperlihatkan suasana perkotaan yang modern dengan gedung-gedung tinggi yang menjulang ke langit..."
        />
        <PostCard
          image="/images/image-2.jpg"
          title="Suasana Kota di Malam Hari"
          author="Admin"
          date="30 Agustus 2025"
          description="Kota ini tampak hidup di malam hari dengan cahaya lampu jalan, kendaraan, dan gedung pencakar langit yang berkilauan..."
        />
        <PostCard
          image="/images/image-3.jpg"
          title="Jalan Raya di Tengah Kota"
          author="Admin"
          date="30 Agustus 2025"
          description="Jalan raya yang membelah pusat kota ini menunjukkan betapa sibuknya aktivitas transportasi setiap harinya..."
        />
      </div>
    </>
  );
}
