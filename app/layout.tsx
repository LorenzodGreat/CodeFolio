import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hi, I Make Apps 👋",
  description: "I'm a Full-Stack Software Developer with hands-on experience building, supporting, and scaling modern web and application platforms. My technical stack includes React, TypeScript, PHP, SQL, Flutter, cloud-backed systems, and AI-assisted development tools such as v0 and Google Firebase Studio. I've worked on enterprise and government-grade systems, including national-scale applications, contributing across frontend and backend development, API integration, database-driven features, and production support. I'm comfortable owning features end-to-end — from design handoff and implementation to testing, deployment, and ongoing optimization.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
