import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // ⬅️ wajib biar bisa static export
  images: {
    unoptimized: true, // ⬅️ kalau pakai <Image>, perlu ini supaya jalan di static
  },
};

export default nextConfig;
