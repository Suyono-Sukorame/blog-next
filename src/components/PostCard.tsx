//components/PostCard.tsx
import Image from "next/image";
import Link from "next/link";

type PostCardProps = {
  image: string;
  link: string;
  title: string;
  author: string;
  date: string;
  description: string;
};

export default function PostCard({
  image,
  link,
  title,
  author,
  date,
  description,
}: PostCardProps) {
  return (
    <div className="mb-4 w-full sm:w-1/2 md:w-1/3">
      <Link
        href={link}
        className="block overflow-hidden rounded-lg shadow-md hover:shadow-xl transition"
      >
        <div className="overflow-hidden">
          <Image
            src={image}
            alt={title}
            width={400}
            height={250}
            className="h-auto w-full object-cover transform transition-transform duration-500 hover:scale-105"
          />
        </div>
        <div className="p-3">
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="text-xs text-gray-500 mb-1">
            Published by <span className="font-medium">{author}</span> • {date}
          </p>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </Link>
    </div>
  );
}
