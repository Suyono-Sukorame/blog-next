import Link from "next/link";

export default function LatihanPage() {
  return (
    <>
      <h1>Halaman Blog</h1>
      <p>List of posts</p>
      <ul>
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
    </>
  );
}
