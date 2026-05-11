"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import HeroStats from "./HeroStats";
import ShopifyIcon from "./ui/icons/ShopifyIcon";
import RevealText from "./ui/RevealText";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-24 sm:pt-40 sm:pb-28 overflow-hidden">
      <HeroBackground />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow pill — actual launch date from Shopify listing */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-[#E2E5EA] bg-white/70 backdrop-blur px-4 py-2 text-sm font-medium text-[#1C1C1C]"
        >
          <ShopifyIcon className="h-4 w-4" />
          On Shopify since January 2017
        </motion.div>

        {/* Headline — derived directly from Shopify Age Verifier tagline:
            "Detect under-aged visitors with our Age Verification App, ensuring compliance and safety." */}
        <div className="mt-10 sm:mt-12 font-display tracking-[-0.025em] text-[#1C1C1C]">
          <RevealText
            as="div"
            className="font-bold text-[44px] sm:text-[68px] lg:text-[84px] leading-[1.05]"
          >
            Restrict Under-Age
          </RevealText>

          <div className="mt-2 sm:mt-3 inline-flex flex-wrap items-baseline justify-center gap-x-4 lg:gap-x-6 font-bold text-[44px] sm:text-[68px] lg:text-[84px] leading-[1.05]">
            <RevealText as="span" delay={0.35}>
              Visitors.
            </RevealText>
            <RevealText as="span" delay={0.65} className="text-gradient-brand">
              Stay
            </RevealText>
          </div>

          <RevealText
            as="div"
            delay={0.95}
            className="mt-2 sm:mt-3 font-bold text-[#FF5C00] text-[44px] sm:text-[68px] lg:text-[84px] leading-[1.05]"
          >
            Compliant.
          </RevealText>
        </div>

        {/* Subheadline — verbatim sentences 1 & 3 from Shopify listing description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.7 }}
          className="mt-10 mx-auto max-w-2xl text-[16px] sm:text-[18px] leading-[1.6] text-[#1C1C1C] text-pretty"
        >
          A powerful tool that helps businesses restrict access to underage
          individuals — promoting safety and compliance with an optional FDA
          banner that warns visitors of potential harm.
        </motion.p>

        {/* Feature mini-row — from Shopify listing's 3 feature bullets */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-[#4D4D4D]"
        >
          {[
            "Set 18+ or 21+",
            "No theme code edits",
            "Optional FDA banner",
          ].map((f) => (
            <span key={f} className="inline-flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FF5C00]" />
              {f}
            </span>
          ))}
        </motion.div>

        {/* CTA — Shopify install */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.55, duration: 0.6 }}
          className="mt-9"
        >
          <Link
            href="#cta"
            className="group inline-flex items-center gap-2.5 rounded-lg bg-[#1A1553] hover:bg-[#13104A] text-white text-[15px] sm:text-[16px] font-semibold px-7 py-4 transition-colors shadow-[0_14px_36px_-10px_rgba(26,21,83,0.45)]"
          >
            <ShopifyIcon className="h-[18px] w-[18px]" />
            Install on Shopify — It&apos;s Free
            <ArrowUpRight
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              strokeWidth={2.5}
            />
          </Link>
        </motion.div>

        {/* Microcopy — exact pricing from Shopify listing */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.7, duration: 0.5 }}
          className="mt-5 text-sm text-[#6E747F]"
        >
          From <span className="font-semibold text-[#1C1C1C]">$2.99/month</span>{" "}
          ·{" "}
          <span className="font-semibold text-[#1C1C1C]">$31.99/year</span>{" "}
          (save 11%) · 7-day free trial
        </motion.p>
      </div>

      <HeroStats />
    </section>
  );
}

function HeroBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-white" />

      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 70% 60% at 30% 15%, rgba(220, 200, 250, 0.55), transparent 60%),
            radial-gradient(ellipse 60% 55% at 75% 25%, rgba(250, 200, 230, 0.55), transparent 60%),
            radial-gradient(ellipse 50% 40% at 90% 35%, rgba(255, 220, 200, 0.40), transparent 60%),
            linear-gradient(to bottom, rgba(252, 240, 255, 0.6) 0%, rgba(255, 255, 255, 1) 80%)
          `,
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.6]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(28, 28, 28, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(28, 28, 28, 0.04) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage:
            "linear-gradient(to bottom, black 0%, black 70%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, black 70%, transparent 100%)",
        }}
      />

      <div
        className="absolute top-0 right-0 h-full w-1/3"
        style={{
          background:
            "radial-gradient(ellipse at right, rgba(255, 138, 60, 0.06), transparent 70%)",
        }}
      />

      <div className="absolute inset-0 bg-noise opacity-[0.5]" />
    </div>
  );
}
