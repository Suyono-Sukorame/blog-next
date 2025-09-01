// src/components/ShareButtons.tsx
"use client";

import { useState } from "react";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import { ClipboardIcon, CheckIcon } from "@heroicons/react/24/outline";

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
    <div className="flex gap-3 mt-6">
      {/* Copy Link */}
      <button
        onClick={copyToClipboard}
        className="flex items-center gap-1 px-3 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
      >
        {copied ? <CheckIcon className="w-5 h-5" /> : <ClipboardIcon className="w-5 h-5" />}
        <span>{copied ? "Copied!" : "Copy Link"}</span>
      </button>

      {/* Twitter */}
      <a
        href={`https://twitter.com/intent/tweet?url=${encodedURL}&text=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        <FaTwitter className="w-5 h-5" />
        <span>Twitter</span>
      </a>

      {/* Facebook */}
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedURL}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 px-3 py-1 bg-blue-800 text-white rounded hover:bg-blue-900 transition"
      >
        <FaFacebook className="w-5 h-5" />
        <span>Facebook</span>
      </a>

      {/* LinkedIn */}
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedURL}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 px-3 py-1 bg-blue-700 text-white rounded hover:bg-blue-800 transition"
      >
        <FaLinkedin className="w-5 h-5" />
        <span>LinkedIn</span>
      </a>
    </div>
  );
}

