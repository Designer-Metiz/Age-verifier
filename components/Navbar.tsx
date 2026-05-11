"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import AgeShieldLogo from "./ui/icons/AgeShieldLogo";

const links = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Compliance", href: "#protection", dropdown: true },
  { label: "Integrations", href: "#integrations" },
  { label: "Resources", href: "#faq", dropdown: true },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 12));

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled
          ? "shadow-[0_8px_24px_-12px_rgba(28,28,28,0.08)] border-b border-[#EEF1F8]"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-[78px]">
          {/* Logo + subtitle */}
          <Link href="#" className="flex items-center gap-3 group shrink-0">
            <AgeShieldLogo
              className="h-11 w-11 drop-shadow-[0_8px_20px_rgba(42,34,115,0.35)]"
              variant="purple"
            />
            <div className="flex flex-col leading-none">
              <span className="font-display text-[22px] font-extrabold tracking-[0.04em] text-[#2A2273] uppercase">
                AgeShield
              </span>
              <span className="mt-1 text-[11px] text-[#6E747F] font-medium">
                Built for Shopify
              </span>
            </div>
          </Link>

          {/* Nav links — centered */}
          <nav className="hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="group relative inline-flex items-center gap-1 px-4 py-2 text-[15px] text-[#1C1C1C] hover:text-[#2A2273] transition-colors"
              >
                <span
                  className={
                    l.label === "Compliance" ? "font-semibold" : "font-medium"
                  }
                >
                  {l.label}
                </span>
                {l.dropdown && (
                  <ChevronDown
                    className="h-3.5 w-3.5 text-[#9AA0AC] group-hover:text-[#2A2273] transition-colors"
                    strokeWidth={2.5}
                  />
                )}
                {/* Underline accent on hover */}
                <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-[#2A2273] to-[#FF5C00] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 rounded-full" />
              </Link>
            ))}
          </nav>

          {/* CTA — far right */}
          <div className="hidden md:flex items-center shrink-0">
            <Link
              href="#cta"
              className="group inline-flex items-center gap-2 rounded-lg bg-[#2A2273] hover:bg-[#1A1553] text-white text-[14px] font-semibold px-5 py-3 transition-colors shadow-[0_10px_28px_-10px_rgba(42,34,115,0.55)]"
            >
              Book A 30 Min Call
              <ArrowUpRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                strokeWidth={2.5}
              />
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden h-10 w-10 grid place-items-center rounded-lg ring-1 ring-[#E2E5EA] bg-white text-[#1C1C1C]"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden pb-4"
          >
            <div className="flex flex-col rounded-2xl border border-[#E2E5EA] bg-white shadow-card p-3">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between px-3 py-2.5 rounded-lg text-[15px] font-medium text-[#1C1C1C] hover:bg-[#F4F5F7]"
                >
                  <span>{l.label}</span>
                  {l.dropdown && (
                    <ChevronDown className="h-4 w-4 text-[#9AA0AC]" />
                  )}
                </Link>
              ))}
              <div className="mt-3 pt-3 border-t border-[#E2E5EA]">
                <Link
                  href="#cta"
                  className="flex items-center justify-center gap-2 rounded-lg bg-[#2A2273] hover:bg-[#1A1553] text-white text-sm font-semibold px-5 py-3 transition-colors"
                >
                  Book A 30 Min Call
                  <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
