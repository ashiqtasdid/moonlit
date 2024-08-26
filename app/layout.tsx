import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata: Metadata = {
  title: "Home | Moonlit Hosting",
  description:
    "Moonlit Hosting is a hosting company aimed to provide the best hosting experience for Minecraft servers. We offer a wide range of hosting plans to fit your needs.",
  keywords: ["free minecraft hosing", "hosting", "minecraft"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>{children}</body>
    </html>
  );
}
