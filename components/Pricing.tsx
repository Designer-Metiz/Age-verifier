"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, Crown, Sparkles, Zap } from "lucide-react";
import { useState } from "react";
import SectionHeading from "./SectionHeading";

const tiers = [
  {
    name: "Starter",
    Icon: Sparkles,
    monthly: 0,
    yearly: 0,
    tagline: "Everything a small store needs to gate age & ship fast.",
    cta: "Start free",
    highlighted: false,
    features: [
      "Unlimited verifications",
      "Brand colors, logo & copy",
      "Geo-rules · 10 countries",
      "Cookie remember-me",
      "Email support",
    ],
  },
  {
    name: "Pro",
    Icon: Zap,
    monthly: 29,
    yearly: 24,
    tagline: "For growing brands serious about compliance.",
    cta: "Start 14-day trial",
    highlighted: true,
    features: [
      "Everything in Starter",
      "Custom fonts + custom CSS",
      "Per-product gating rules",
      "All 180+ country presets",
      "Compliance audit logs",
      "Conversion analytics",
      "Priority chat support",
    ],
  },
  {
    name: "Scale",
    Icon: Crown,
    monthly: 99,
    yearly: 79,
    tagline: "Multi-region, regulated, or high-volume stores.",
    cta: "Talk to sales",
    highlighted: false,
    features: [
      "Everything in Pro",
      "Live ID document checks",
      "AI fraud risk scoring",
      "SOC-2 export & SSO",
      "Custom data retention",
      "99.99% uptime SLA",
      "Dedicated success manager",
    ],
  },
];

export default function Pricing() {
  const [yearly, setYearly] = useState(true);

  return (
    <section
      id="pricing"
      className="relative py-32 sm:py-40 bg-[#F9FAFB] overflow-hidden"
    >
      {/* soft top glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[420px] w-[900px] rounded-full bg-[#FF5C00]/10 blur-[140px]" />
      {/* faint dotted backdrop */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4] mask-radial-fade"
        style={{
          backgroundImage:
            "radial-gradient(rgba(28,28,28,0.10) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Pricing"
          title={
            <>
              Pricing that{" "}
              <span className="text-gradient-brand">scales with you</span>
            </>
          }
          description="Start free forever. Upgrade when you need ID checks, audit-grade logs, or premium support."
        />

        {/* Billing toggle — bigger, more substantial */}
        <div className="mt-12 flex justify-center">
          <div className="inline-flex items-center gap-1 rounded-full p-1.5 ring-1 ring-[#E2E5EA] bg-white shadow-card">
            <button
              onClick={() => setYearly(false)}
              className={`relative px-5 py-2 text-[14px] font-semibold rounded-full transition-colors ${
                !yearly ? "text-white" : "text-[#4D4D4D] hover:text-[#1C1C1C]"
              }`}
            >
              {!yearly && (
                <motion.span
                  layoutId="billing-pill"
                  className="absolute inset-0 rounded-full bg-[#1A1553]"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                />
              )}
              <span className="relative">Monthly</span>
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`relative px-5 py-2 text-[14px] font-semibold rounded-full transition-colors flex items-center gap-2 ${
                yearly ? "text-white" : "text-[#4D4D4D] hover:text-[#1C1C1C]"
              }`}
            >
              {yearly && (
                <motion.span
                  layoutId="billing-pill"
                  className="absolute inset-0 rounded-full bg-[#1A1553]"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                />
              )}
              <span className="relative">Yearly</span>
              <span
                className={`relative text-[10px] font-bold px-1.5 py-0.5 rounded-md ${
                  yearly
                    ? "bg-[#FF5C00] text-white"
                    : "bg-[#FFF1E6] text-[#FF5C00]"
                }`}
              >
                SAVE 20%
              </span>
            </button>
          </div>
        </div>

        <div className="mt-16 grid lg:grid-cols-3 gap-5 lg:gap-6 lg:items-stretch">
          {tiers.map((t, i) => (
            <PricingCard key={t.name} tier={t} index={i} yearly={yearly} />
          ))}
        </div>

        {/* Bottom microcopy + comparison link */}
        <div className="mt-12 flex flex-col items-center gap-3">
          <p className="text-[14px] text-[#4D4D4D]">
            All plans include 14-day free trial. No credit card required.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13px] text-[#6E747F]">
            <span className="inline-flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5 text-[#FF5C00]" strokeWidth={3} />
              Cancel anytime
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5 text-[#FF5C00]" strokeWidth={3} />
              Pro-rated upgrades
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5 text-[#FF5C00]" strokeWidth={3} />
              GDPR &amp; CCPA aligned
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5 text-[#FF5C00]" strokeWidth={3} />
              99.9% uptime SLA
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

type Tier = (typeof tiers)[number];

function PricingCard({
  tier,
  index,
  yearly,
}: {
  tier: Tier;
  index: number;
  yearly: boolean;
}) {
  const price = yearly ? tier.yearly : tier.monthly;
  const annualSaved = (tier.monthly - tier.yearly) * 12;
  const hl = tier.highlighted;

  // Split first feature ("Everything in X") from the rest if present
  const isContinuation = tier.features[0]?.startsWith("Everything in");
  const headerFeature = isContinuation ? tier.features[0] : null;
  const restFeatures = isContinuation
    ? tier.features.slice(1)
    : tier.features;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`group relative rounded-3xl flex flex-col transition-all duration-300 ${
        hl
          ? "bg-gradient-to-br from-[#1F1A57] via-[#1A1553] to-[#13104A] text-white ring-1 ring-[#1A1553]/40 shadow-[0_40px_80px_-30px_rgba(26,21,83,0.55)] lg:-my-2 lg:scale-[1.02] z-10"
          : "bg-white text-[#1C1C1C] ring-1 ring-[#E2E5EA] shadow-card hover:shadow-card-lg hover:ring-[#2A2273]/20"
      } overflow-hidden`}
    >
      {/* HIGHLIGHTED CARD DECORATIONS */}
      {hl && (
        <>
          {/* glow blob */}
          <div className="pointer-events-none absolute -top-32 -right-20 h-72 w-72 rounded-full bg-[#FF5C00]/30 blur-[80px]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(255,92,0,0.12),transparent_60%)]" />
          <div className="pointer-events-none absolute inset-0 bg-noise opacity-40 mix-blend-overlay" />

          {/* most popular ribbon — replaces small badge */}
          <div className="relative pt-1.5">
            <div className="text-center">
              <div className="inline-flex items-center gap-1.5 rounded-b-xl bg-gradient-to-b from-[#FF5C00] to-[#E04F00] text-white text-[10px] font-extrabold uppercase tracking-[0.22em] px-4 py-1.5 shadow-[0_6px_20px_-6px_rgba(255,92,0,0.5)]">
                <Sparkles className="h-3 w-3" strokeWidth={2.5} />
                Most Popular
              </div>
            </div>
          </div>
        </>
      )}

      <div className={`relative p-7 sm:p-8 flex flex-col flex-1 ${hl ? "pt-6" : ""}`}>
        {/* Top row: icon + name */}
        <div className="flex items-center gap-3">
          <div
            className={`grid place-items-center h-11 w-11 rounded-xl ${
              hl
                ? "bg-gradient-to-br from-[#FF5C00] to-[#FF8E40] text-white shadow-[0_10px_24px_-8px_rgba(255,92,0,0.6)]"
                : tier.name === "Scale"
                ? "bg-[#EFEEFB] text-[#5C5CCF] ring-1 ring-[#DBDAF7]"
                : "bg-[#F4F5F7] text-[#2A2273] ring-1 ring-[#E2E5EA]"
            }`}
          >
            <tier.Icon className="h-5 w-5" strokeWidth={2.2} />
          </div>
          <div>
            <h3
              className={`font-display text-[22px] font-bold tracking-tight ${
                hl ? "text-white" : "text-[#1C1C1C]"
              }`}
            >
              {tier.name}
            </h3>
          </div>
        </div>

        <p
          className={`mt-3 text-[14px] leading-[1.55] ${
            hl ? "text-white/65" : "text-[#4D4D4D]"
          }`}
        >
          {tier.tagline}
        </p>

        {/* Price block */}
        <div className="mt-7">
          <div className="flex items-baseline gap-1.5">
            {price === 0 ? (
              <>
                <span
                  className={`font-display text-[44px] sm:text-[52px] leading-none font-extrabold tracking-[-0.025em] ${
                    hl ? "text-white" : "text-[#1C1C1C]"
                  }`}
                >
                  Free
                </span>
                <span
                  className={`pb-1.5 text-[13px] ${
                    hl ? "text-white/55" : "text-[#9AA0AC]"
                  }`}
                >
                  forever
                </span>
              </>
            ) : (
              <>
                <span
                  className={`font-display text-[15px] font-semibold ${
                    hl ? "text-white/65" : "text-[#9AA0AC]"
                  }`}
                >
                  $
                </span>
                <span
                  className={`font-display text-[56px] sm:text-[64px] leading-none font-extrabold tracking-[-0.03em] ${
                    hl ? "text-white" : "text-[#1C1C1C]"
                  }`}
                >
                  {price}
                </span>
                <span
                  className={`pb-2 text-[14px] ${
                    hl ? "text-white/55" : "text-[#9AA0AC]"
                  }`}
                >
                  /mo
                </span>
              </>
            )}
          </div>

          {/* Billing detail */}
          <div className="mt-2 min-h-[20px]">
            {price > 0 ? (
              yearly ? (
                <div
                  className={`text-[12.5px] ${
                    hl ? "text-white/55" : "text-[#6E747F]"
                  }`}
                >
                  Billed yearly ·{" "}
                  <span
                    className={`font-semibold ${
                      hl ? "text-[#FF8E40]" : "text-[#FF5C00]"
                    }`}
                  >
                    Save ${annualSaved}/yr
                  </span>
                </div>
              ) : (
                <div
                  className={`text-[12.5px] ${
                    hl ? "text-white/55" : "text-[#6E747F]"
                  }`}
                >
                  Billed monthly · Save 20% with yearly
                </div>
              )
            ) : (
              <div
                className={`text-[12.5px] ${
                  hl ? "text-white/55" : "text-[#6E747F]"
                }`}
              >
                No credit card · No expiry
              </div>
            )}
          </div>
        </div>

        {/* CTA */}
        <button
          className={`group/btn mt-7 w-full inline-flex items-center justify-center gap-2 rounded-lg px-4 py-3.5 text-[14.5px] font-semibold transition-all ${
            hl
              ? "bg-gradient-to-b from-[#FF5C00] to-[#E04F00] hover:from-[#FF8E40] hover:to-[#FF5C00] text-white shadow-[0_12px_28px_-8px_rgba(255,92,0,0.55)] glow-accent"
              : tier.name === "Scale"
              ? "bg-[#1A1553] hover:bg-[#13104A] text-white shadow-[0_10px_24px_-10px_rgba(26,21,83,0.45)]"
              : "bg-[#F4F5F7] hover:bg-[#E2E5EA] text-[#1C1C1C] ring-1 ring-[#E2E5EA]"
          }`}
        >
          {tier.cta}
          <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
        </button>

        {/* "Includes" divider */}
        <div className="mt-8 flex items-center gap-3">
          <div
            className={`text-[10px] uppercase tracking-[0.18em] font-semibold ${
              hl ? "text-white/45" : "text-[#9AA0AC]"
            }`}
          >
            What&apos;s included
          </div>
          <div
            className={`flex-1 h-px ${
              hl ? "bg-white/10" : "bg-[#E2E5EA]"
            }`}
          />
        </div>

        {/* "Everything in X" callout */}
        {headerFeature && (
          <div
            className={`mt-4 inline-flex items-center gap-2 rounded-lg px-3 py-2 text-[13px] font-medium w-fit ${
              hl
                ? "bg-white/[0.06] ring-1 ring-white/10 text-white"
                : tier.name === "Scale"
                ? "bg-[#EFEEFB] ring-1 ring-[#DBDAF7] text-[#2A2273]"
                : "bg-[#FFF1E6] ring-1 ring-[#FFDDC2] text-[#FF5C00]"
            }`}
          >
            <Sparkles className="h-3.5 w-3.5" strokeWidth={2.4} />
            {headerFeature}
          </div>
        )}

        {/* Feature list */}
        <ul className="mt-5 space-y-3">
          {restFeatures.map((f) => (
            <li
              key={f}
              className={`flex items-start gap-3 text-[14.5px] leading-[1.45] ${
                hl ? "text-white/85" : "text-[#1C1C1C]"
              }`}
            >
              <span
                className={`mt-0.5 h-5 w-5 grid place-items-center rounded-full shrink-0 ${
                  hl
                    ? "bg-[#FF5C00]/15 text-[#FF8E40] ring-1 ring-[#FF5C00]/25"
                    : tier.name === "Scale"
                    ? "bg-[#EFEEFB] text-[#5C5CCF]"
                    : "bg-[#F4F5F7] text-[#2A2273]"
                }`}
              >
                <Check className="h-3 w-3" strokeWidth={3.5} />
              </span>
              {f}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
