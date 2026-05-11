"use client";

import { motion } from "framer-motion";
import { Mail, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import AgeShieldLogo from "./ui/icons/AgeShieldLogo";

const links = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Compliance", href: "#protection" },
  { label: "Integrations", href: "#integrations" },
  { label: "Resources", href: "#faq" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const sectionIds = links.map((l) => l.href.slice(1));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      {
        // Trigger when section midpoint passes through the area below the navbar
        rootMargin: "-30% 0px -55% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 inset-x-0 z-50 bg-white"
    >
      <div className="w-full px-4 sm:px-6 lg:px-12 py-5">
        <div className="flex items-center justify-between h-14">
          {/* Logo + subtitle */}
          <Link href="#" className="flex items-center gap-2 group shrink-0">
            <AgeShieldLogo
              className="h-12 w-12 drop-shadow-[0_8px_20px_rgba(42,34,115,0.35)]"
              variant="purple"
            />
            <div className="flex flex-col leading-none">
              <span className="font-display text-[26px] font-extrabold tracking-[0.01em] text-[#2A2273] uppercase leading-none">
                AgeShield
              </span>
              <span className="mt-1.5 text-[13px] text-[#6E747F] font-normal leading-none">
                Product by Shopify
              </span>
            </div>
          </Link>

          {/* Nav links */}
          <nav className="hidden lg:flex items-center gap-8">
            {links.map((l) => {
              const isActive = activeId === l.href.slice(1);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`inline-flex items-center px-1 py-1.5 text-[19px] leading-6 transition-colors ${
                    isActive
                      ? "text-[#2A2273] font-semibold"
                      : "font-normal text-[#1C1C1C] hover:text-[#2A2273]"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA — far right */}
          <div className="hidden md:flex items-center shrink-0">
            <a
              href="mailto:designer.metizsoft@gmail.com"
              className="group inline-flex items-center gap-2.5 rounded-lg bg-[#2A2273] hover:bg-[#1A1553] text-white text-[15px] font-semibold px-8 h-12 transition-colors"
            >
              <Mail className="h-[18px] w-[18px] shrink-0" strokeWidth={2.2} />
              Email Us
            </a>
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
              {links.map((l) => {
                const isActive = activeId === l.href.slice(1);
                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center px-3 py-2.5 rounded-lg text-[15px] ${
                      isActive
                        ? "bg-[#F4F5F7] text-[#2A2273] font-semibold"
                        : "font-medium text-[#1C1C1C] hover:bg-[#F4F5F7]"
                    }`}
                  >
                    {l.label}
                  </Link>
                );
              })}
              <div className="mt-3 pt-3 border-t border-[#E2E5EA]">
                <a
                  href="mailto:designer.metizsoft@gmail.com"
                  className="flex items-center justify-center gap-2.5 rounded-lg bg-[#2A2273] hover:bg-[#1A1553] text-white text-sm font-semibold px-5 py-3 transition-colors"
                >
                  <Mail className="h-[18px] w-[18px] shrink-0" strokeWidth={2.2} />
                  Email Us
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
