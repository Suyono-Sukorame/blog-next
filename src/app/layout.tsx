// src/app/layout.tsx
import Navbar from "./components/Navbar";
import type { Metadata } from "next";
import "./globals.css";
import { inter } from "./fonts"; // ⬅️ ambil dari fonts.ts

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
    <html lang="en" className={inter.className}>
      <body className="bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800 min-h-screen flex flex-col">
        <header className="sticky top-0 z-10">
          <Navbar />
        </header>
        <main className="container mx-auto px-4 py-8 flex-grow">
          {children}
        </main>
        <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white text-center p-6 mt-8">
          <p className="text-sm">&copy; {new Date().getFullYear()} MyBlog. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              Privacy Policy
            </a>
            <span className="text-gray-600">•</span>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
