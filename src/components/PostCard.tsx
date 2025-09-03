//components/PostCard.tsx
import Image from "next/image";
import Link from "next/link";

type PostCardProps = {
  image?: string;
  link: string;
  title: string;
  author?: string;
  date?: string;
  description?: string;
};

export default function PostCard({
  image = "",
  link,
  title,
  author = "Unknown",
  date = "",
  description = "",
}: PostCardProps) {
  const imgSrc =
    image.startsWith("http")
      ? image
      : image
      ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${image}`
      : "/placeholder.png"; // fallback

  return (
    <div className="mb-6 w-full sm:w-1/2 md:w-1/3">
      <Link
        href={link}
        className="block overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition"
      >
        <div className="overflow-hidden">
          <Image
            src={imgSrc}
            alt={title || "Blog post image"}
            width={400}
            height={250}
            className="h-48 w-full object-cover transform transition-transform duration-500 hover:scale-105"
          />
        </div>
        <div className="p-4">
          <h2 className="text-lg font-bold line-clamp-2">{title}</h2>
          <p className="text-xs text-gray-500 mb-2">
            Published by <span className="font-medium">{author}</span>
            {date && ` • ${date}`}
          </p>
          <p className="text-sm text-gray-600 line-clamp-3">{description}</p>
        </div>
      </Link>
    </div>
  );
}
