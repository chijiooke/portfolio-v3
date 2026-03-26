import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chijioke Michael — Senior Software Engineer",
  description:
    "I build things end-to-end — from the details of a UI that feels right to the infrastructure holding it all together. 5+ years across fintech, logistics, and consumer products. Currently leading engineering at Scale, where we went from zero to 3,000+ users and hundreds of millions in transaction value in 60 days.",
  keywords: [
    "software engineer",
    "engineering lead",
    "golang",
    "typescript",
    "fintech",
    "distributed systems",
    "backend engineer",
    "system design",
    "high-throughput",
    "scalable systems",
  ],
  authors: [{ name: "Chijioke Michael" }],
  openGraph: {
    title: "Chijioke Michael — Senior Software Engineer & Engineering Lead",
    description:
      "I build things end-to-end — from the details of a UI that feels right to the infrastructure holding it all together. 5+ years across fintech, logistics, and consumer products. Currently leading engineering at Scale, where we went from zero to 3,000+ users and hundreds of millions in transaction value in 60 days.",
    type: "website",
    images: [
      {
        url: "/michael.png",
        width: 800,
        height: 800,
        alt: "Chijioke Michael — Senior Software Engineer",
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
