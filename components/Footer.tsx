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

const cols = [
  {
    title: "Navigation",
    links: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "Compliance", href: "#protection" },
      { label: "Integrations", href: "#integrations" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Contact", href: "#cta" },
    ],
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
      <div className="absolute inset-x-0 top-0 h-px bg-white/10" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-2xl bg-white text-[#1C1C1C] px-8 py-12 sm:px-12 sm:py-16 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.45)]"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-[40px] sm:text-[48px] lg:text-[56px] leading-[1.08] font-bold tracking-[-0.025em] text-balance text-[#1C1C1C]">
              Restrict Under-Age Visitors.{" "}
              <span className="text-gradient-brand">Stay Compliant.</span>
            </h2>

            <p className="mt-6 text-[17px] sm:text-[19px] leading-[1.6] text-[#4D4D4D] text-pretty">
              A powerful tool that helps businesses restrict access to underage
              individuals — promoting safety and compliance with an optional FDA
              banner that warns visitors of potential harm.
            </p>

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

        {/* Main footer grid */}
        <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Brand column */}
          <div>
            <Link href="#" className="inline-flex items-center gap-2 group">
              <AgeShieldLogo className="h-12 w-12" variant="orange" />
              <div className="flex flex-col leading-none">
                <span className="font-display text-[26px] font-extrabold tracking-[0.01em] text-white uppercase leading-none">
                  AgeShield
                </span>
                <span className="mt-1.5 text-[13px] text-white/60 font-normal leading-none">
                  Product by Shopify
                </span>
              </div>
            </Link>

            <p className="mt-5 max-w-md text-[16px] leading-[24px] text-white/60">
              A powerful tool that helps businesses restrict access to underage
              individuals, promoting safety and compliance.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/[0.05] ring-1 ring-white/10 px-3 py-1.5 text-[14px] text-white/85">
              <Star className="h-3.5 w-3.5 fill-[#FF8E40] text-[#FF8E40]" />
              <span>4.4 / 5 on Shopify App Store</span>
            </div>

            <div className="mt-8 flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.n}
                  href="#"
                  aria-label={s.n}
                  title={s.n}
                  className="h-10 w-10 grid place-items-center rounded-full ring-1 ring-white/15 bg-white/[0.06] text-white/85 hover:text-white hover:bg-[#FF5C00]/20 hover:ring-[#FF5C00]/50 transition-colors"
                >
                  <s.Icon className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 lg:gap-12 lg:justify-items-end">
            {cols.map((c) => (
              <div key={c.title}>
                <h4
                  className="text-[14px] font-semibold uppercase text-white/40 mb-6"
                  style={{ letterSpacing: "0.7px" }}
                >
                  {c.title}
                </h4>
                <ul className="space-y-3">
                  {c.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        className="text-[16px] font-normal leading-[24px] text-white/60 hover:text-white transition-colors"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-3 text-[14px] text-white/50">
          <span>
            © {new Date().getFullYear()} AgeShield, Inc. All rights reserved.
          </span>
          <span className="inline-flex items-center gap-2">
            <ShopifyIcon className="h-3.5 w-3.5 opacity-70" />
            Built for Shopify · On Shopify since 2017
          </span>
        </div>
      </div>
    </footer>
  );
}
