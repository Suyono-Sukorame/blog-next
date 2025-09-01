// src/components/ShareButtons.tsx
"use client";

import { useState } from "react";

type ShareButtonsProps = {
  url: string;
  title: string;
};

export default function ShareButtons({ url, title }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const encodedURL = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  return (
    <div className="flex gap-2 mt-6">
      <button
        onClick={copyToClipboard}
        className="px-3 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
      >
        {copied ? "Copied!" : "Copy Link"}
      </button>

      <a
        href={`https://twitter.com/intent/tweet?url=${encodedURL}&text=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        Twitter
      </a>

      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedURL}`}
        target="_blank"
        rel="noopener noreferrer"
        className="px-3 py-1 bg-blue-800 text-white rounded hover:bg-blue-900 transition"
      >
        Facebook
      </a>

      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedURL}`}
        target="_blank"
        rel="noopener noreferrer"
        className="px-3 py-1 bg-blue-700 text-white rounded hover:bg-blue-800 transition"
      >
        LinkedIn
      </a>
    </div>
  );
}
