import type { Metadata } from "next";
import CursorGlow from "@/components/providers/CursorGlow";
import SmoothScroll from "@/components/providers/SmoothScroll";
import "./globals.css";

export const metadata: Metadata = {
  title: "AgeShield — Age Verification & Compliance Made Effortless",
  description:
    "Detect under-aged visitors with our age verification app. Beautiful, compliant, and conversion-friendly age verification for Shopify and beyond.",
  keywords: [
    "age verification",
    "age gate",
    "shopify age verifier",
    "compliance",
    "alcohol",
    "tobacco",
    "vape",
    "cannabis",
  ],
  openGraph: {
    title: "AgeShield — Age Verification Made Effortless",
    description:
      "Block underage visitors with a beautifully branded age gate. Install on Shopify, free.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&family=Inter:wght@400;500;600;700&display=swap"
        />
      </head>
      <body className="bg-bg text-ink-900 font-sans selection:bg-accent-500/20 antialiased">
        <SmoothScroll>
          <CursorGlow />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
