import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import SmoothScroll from "@/components/providers/SmoothScroll";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-poppins",
});

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
    <html lang="en" className={poppins.variable}>
      <body className="bg-bg text-ink-900 font-sans selection:bg-accent-500/20 antialiased">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
