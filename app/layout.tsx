import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chhatrapati Shivaji Maharaj — Interactive History",
  description: "Explore the forts, battles, and lineage of Chhatrapati Shivaji Maharaj through interactive maps and family trees.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="h-full flex flex-col">{children}</body>
    </html>
  );
}
