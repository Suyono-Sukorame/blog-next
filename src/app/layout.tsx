// src/app/layout.tsx
import Navbar from "../components/Navbar";
import type { Metadata } from "next";
import "./globals.css";
import { inter, roboto } from "./fonts";
import { Github, Twitter, Linkedin } from "lucide-react"; // ⬅️ Ikon sosial

export const metadata: Metadata = {
  title: "Blog NextJS",
  description: "A modern blog created with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${roboto.variable}`}
    >
      <body className="font-inter bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800 min-h-screen flex flex-col">
        {/* Navbar */}
        <header className="sticky top-0 z-10 backdrop-blur bg-white/80 shadow-sm">
          <Navbar />
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-8 flex-grow">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-8 mt-8">
          <div className="container mx-auto px-6 md:flex md:items-center md:justify-between">
            {/* Brand */}
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <h2 className="text-lg font-bold text-white">MyBlog</h2>
              <p className="text-sm text-gray-400">
                Sharing knowledge with the world 🌍
              </p>
            </div>

            {/* Links */}
            <div className="flex justify-center space-x-6 mb-6 md:mb-0">
              <a
                href="#"
                className="hover:text-white transition-colors duration-300 text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300 text-sm"
              >
                Terms of Service
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center space-x-4">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="mt-6 text-center text-xs text-gray-500">
            &copy; {new Date().getFullYear()} MyBlog. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
