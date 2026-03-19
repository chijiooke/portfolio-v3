import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chijioke Michael — Engineering Lead",
  description:
    "Senior Software Engineer & Engineering Lead. Building fault-tolerant distributed systems and high-throughput financial infrastructure.",
  keywords: ["software engineer", "engineering lead", "golang", "typescript", "fintech", "distributed systems"],
  authors: [{ name: "Silva Chijioke Michael" }],
  openGraph: {
    title: "Chijioke Michael — Engineering Lead",
    description: "Building fault-tolerant distributed systems and high-throughput financial infrastructure.",
    type: "website",
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
