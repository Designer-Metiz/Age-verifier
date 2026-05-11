"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Check, Star } from "lucide-react";
import Link from "next/link";
import AgeShieldLogo from "./ui/icons/AgeShieldLogo";
import ShopifyIcon from "./ui/icons/ShopifyIcon";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
  YouTubeIcon,
} from "./ui/icons/SocialIcons";
import MagneticButton from "./ui/MagneticButton";

/* All content sourced from the Shopify Age Verifier listing
   (apps.shopify.com/age-verifier). Design mirrors cookieshield.net's
   footer structure — dark bg with a white CTA card on top. */

const cols = [
  {
    title: "Features",
    links: [
      "Age Verification Popup",
      "Set 18+ / 21+ Rules",
      "Optional FDA Banner",
      "Popup Layout Options",
      "Visitor Tracking",
      "No-Code Setup",
    ],
  },
  {
    title: "Pricing",
    links: [
      "From $2.99 / month",
      "$31.99 / year (save 11%)",
      "7-day free trial",
      "Compare plans",
      "Refund policy",
    ],
  },
  {
    title: "Resources",
    links: [
      "Help Center",
      "Setup Documentation",
      "Privacy Policy",
      "Contact Support",
      "FAQs",
    ],
  },
  {
    title: "Company",
    links: ["About AgeShield", "Press", "Partners", "Contact", "Status"],
  },
];

const benefits = [
  "7-day free trial",
  "From $2.99/month",
  "No coding setup",
  "Optional FDA banner",
];

const socials = [
  { Icon: LinkedInIcon, n: "LinkedIn" },
  { Icon: FacebookIcon, n: "Facebook" },
  { Icon: InstagramIcon, n: "Instagram" },
  { Icon: XIcon, n: "X" },
  { Icon: YouTubeIcon, n: "YouTube" },
];

export default function Footer() {
  return (
    <footer
      id="cta"
      className="relative pt-24 pb-10 overflow-hidden text-white"
      style={{ backgroundColor: "#1A1553" }}
    >
      {/* subtle top hairline */}
      <div className="absolute inset-x-0 top-0 h-px bg-white/10" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* WHITE CTA CARD — sits on the dark footer like cookieshield */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-2xl bg-white text-[#1C1C1C] px-8 py-12 sm:px-12 sm:py-16 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.45)]"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-[32px] sm:text-[44px] lg:text-[52px] leading-[1.05] font-bold tracking-[-0.025em] text-balance text-[#1C1C1C]">
              Restrict Under-Age Visitors.{" "}
              <span className="text-gradient-brand">Stay Compliant.</span>
            </h2>

            <p className="mt-6 text-[17px] sm:text-[19px] leading-[1.6] text-[#4D4D4D] text-pretty">
              A powerful tool that helps businesses restrict access to underage
              individuals — promoting safety and compliance with an optional FDA
              banner that warns visitors of potential harm.
            </p>

            {/* Left-aligned benefit list */}
            <ul className="mt-8 grid sm:grid-cols-2 gap-x-10 gap-y-3 text-left max-w-md mx-auto">
              {benefits.map((b) => (
                <li
                  key={b}
                  className="flex items-center gap-3 text-[15px] sm:text-[16px] text-[#1C1C1C]"
                >
                  <span className="h-5 w-5 grid place-items-center rounded-full bg-[#FF5C00]/10 text-[#FF5C00] shrink-0">
                    <Check className="h-3 w-3" strokeWidth={3.5} />
                  </span>
                  {b}
                </li>
              ))}
            </ul>

            {/* CTA buttons — primary + secondary */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <MagneticButton
                href="#"
                className="!bg-[#1A1553] hover:!bg-[#13104A] !rounded-lg"
              >
                <ShopifyIcon className="h-[18px] w-[18px]" />
                Install on Shopify — It&apos;s Free
                <ArrowUpRight className="h-4 w-4" />
              </MagneticButton>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3.5 ring-1 ring-[#E2E5EA] bg-white hover:bg-[#F4F5F7] text-[#1C1C1C] text-[15px] font-semibold transition-colors"
              >
                <ShopifyIcon className="h-[18px] w-[18px]" />
                View on Shopify App Store
              </a>
            </div>

            {/* Rating row */}
            <div className="mt-8 inline-flex items-center gap-2 text-[14px] text-[#4D4D4D]">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-[#FF5C00] text-[#FF5C00]"
                  />
                ))}
              </div>
              <span>
                <span className="font-semibold text-[#1C1C1C]">4.4 / 5</span> on
                the Shopify App Store · 9 reviews
              </span>
            </div>
          </div>
        </motion.div>

        {/* Brand + Link columns row */}
        <div className="mt-20 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <Link href="#" className="flex items-center gap-2.5">
              <AgeShieldLogo className="h-11 w-11" variant="orange" />
              <span className="font-display text-[22px] font-bold tracking-tight text-white">
                Age
                <span className="bg-gradient-to-r from-[#FFB680] to-[#FF5C00] bg-clip-text text-transparent">
                  Shield
                </span>
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-[15px] text-white/65 leading-[1.65]">
              A powerful tool that helps businesses restrict access to underage
              individuals, promoting safety and compliance.
            </p>

            <div className="mt-6 flex flex-col gap-2.5 max-w-sm">
              <div className="inline-flex w-fit items-center gap-2 rounded-full bg-white/[0.05] ring-1 ring-white/10 px-3 py-1.5 text-[13px] text-white/85">
                <Star className="h-3.5 w-3.5 fill-[#FF8E40] text-[#FF8E40]" />
                4.4 / 5 on Shopify App Store
              </div>
              <div className="inline-flex w-fit items-center gap-2 rounded-full bg-white/[0.05] ring-1 ring-white/10 px-3 py-1.5 text-[13px] text-white/85">
                <ShopifyIcon className="h-3.5 w-3.5" />
                Category: Legal · English
              </div>
            </div>

            <div className="mt-6 flex items-center gap-2">
              {socials.map((s) => (
                <a
                  key={s.n}
                  href="#"
                  aria-label={s.n}
                  title={s.n}
                  className="h-10 w-10 grid place-items-center rounded-full ring-1 ring-white/10 bg-white/[0.04] text-white/65 hover:text-white hover:bg-[#FF5C00]/15 hover:ring-[#FF5C00]/40 transition-colors"
                >
                  <s.Icon className="h-[15px] w-[15px]" />
                </a>
              ))}
            </div>
          </div>

          {/* 4 link columns */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-10">
            {cols.map((c) => (
              <div key={c.title}>
                <div className="text-[12px] uppercase tracking-[0.16em] text-white/45 font-semibold">
                  {c.title}
                </div>
                <ul className="mt-5 space-y-3">
                  {c.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#"
                        className="text-[14.5px] text-white/65 hover:text-white transition-colors"
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Address row */}
        <div className="mt-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[13px] text-white/55">
          <div className="flex items-center gap-2">
            <ShopifyIcon className="h-4 w-4" />
            <span>
              1309 Coffeen Avenue STE 1200, Sheridan, WY, 82801, US · On
              Shopify since January 2017
            </span>
          </div>
          <div>
            From $2.99/month · $31.99/year (save 11%) · 7-day free trial
          </div>
        </div>

        {/* Bottom bar — cookieshield-style: copyright left + legal right */}
        <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-3 text-[13px] text-white/55">
          <span>
            © {new Date().getFullYear()} AgeShield, Inc. All rights reserved.
          </span>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
