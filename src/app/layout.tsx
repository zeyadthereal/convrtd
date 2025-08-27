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
  title: "convrtd – AI Automation for Egypt's Fashion Brands",
  description:
    "convrtd helps Egypt's fashion brands automate WhatsApp, Instagram, and Shopify customer service with AI and human-in-the-loop. Boost sales, cut response times, and delight your customers.",
  keywords: [
    "AI",
    "automation",
    "Egypt",
    "WhatsApp",
    "Instagram",
    "Shopify",
    "fashion",
    "customer service",
    "chatbot",
    "ecommerce",
    "convrtd",
  ],
  openGraph: {
    title: "convrtd – AI Automation for Egypt's Fashion Brands",
    description:
      "Turn DMs into orders. AI + human-in-the-loop automation for WhatsApp, Instagram, and Shopify.",
    type: "website",
    url: "https://convrtd.ai/",
    images: [{ url: "/favicon.png" }],
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[#0b1024] text-[#e5e7eb]">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
