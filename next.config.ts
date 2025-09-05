import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone", // ⬅️ biar bisa runtime fetch ke Strapi
  images: {
    unoptimized: true, // ⬅️ kalau pakai <Image>, biar tidak error saat export
  },
};

export default nextConfig;
