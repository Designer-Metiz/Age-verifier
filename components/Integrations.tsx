"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Check, Plug, ShieldCheck, Sparkles, Zap } from "lucide-react";
import SectionHeading from "./SectionHeading";
import {
  BigCommerceIcon,
  GA4Icon,
  HubSpotIcon,
  KlaviyoIcon,
  MagentoIcon,
  MailchimpIcon,
  MetaIcon,
  OnfidoIcon,
  PersonaIcon,
  SquarespaceIcon,
  StripeIcon,
  VeriffIcon,
  WebflowIcon,
  WixIcon,
  WooCommerceIcon,
} from "./ui/icons/BrandIcons";
import ShopifyIcon from "./ui/icons/ShopifyIcon";

type Integration = {
  name: string;
  category: string;
  Chip: React.ComponentType<{ className?: string }>;
};

const integrations: Integration[] = [
  { name: "WooCommerce", category: "E-commerce", Chip: WooCommerceIcon },
  { name: "BigCommerce", category: "E-commerce", Chip: BigCommerceIcon },
  { name: "Magento", category: "E-commerce", Chip: MagentoIcon },
  { name: "Wix", category: "E-commerce", Chip: WixIcon },
  { name: "Squarespace", category: "E-commerce", Chip: SquarespaceIcon },
  { name: "Webflow", category: "Headless", Chip: WebflowIcon },
  { name: "Stripe", category: "Payments", Chip: StripeIcon },
  { name: "Klaviyo", category: "Marketing", Chip: KlaviyoIcon },
  { name: "HubSpot", category: "Marketing", Chip: HubSpotIcon },
  { name: "Mailchimp", category: "Marketing", Chip: MailchimpIcon },
  { name: "Persona", category: "Identity", Chip: PersonaIcon },
  { name: "Veriff", category: "Identity", Chip: VeriffIcon },
  { name: "Onfido", category: "Identity", Chip: OnfidoIcon },
  { name: "GA4", category: "Analytics", Chip: GA4Icon },
  { name: "Meta Pixel", category: "Marketing", Chip: MetaIcon },
];

const featurePoints = [
  "1-click install on the Shopify App Store",
  "Auto-syncs with your theme & products",
  "Compatible with all Online Store 2.0 themes",
  "Works alongside checkout extensions",
];

export default function Integrations() {
  return (
    <section
      id="integrations"
      className="relative py-32 sm:py-40 bg-white overflow-hidden"
    >
      {/* faint orange/purple wash + dotted backdrop */}
      <div className="pointer-events-none absolute -top-40 right-1/4 h-[400px] w-[700px] rounded-full bg-[#FF5C00]/[0.06] blur-[120px]" />
      <div className="pointer-events-none absolute top-1/3 -left-40 h-[400px] w-[600px] rounded-full bg-[#A29CD6]/[0.15] blur-[120px]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.40] mask-radial-fade"
        style={{
          backgroundImage:
            "radial-gradient(rgba(28,28,28,0.08) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Integrations"
          title={
            <>
              Plays nicely with{" "}
              <span className="text-gradient-brand">your entire stack</span>
            </>
          }
          description="Drop AgeShield into any modern storefront. Connect with the marketing, identity, and analytics tools you already use."
        />

        {/* FEATURED — Built for Shopify */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1F1A57] via-[#1A1553] to-[#13104A] text-white p-8 sm:p-12 ring-1 ring-[#1A1553]/40 shadow-[0_40px_80px_-30px_rgba(26,21,83,0.55)]"
        >
          {/* glow accents */}
          <div className="pointer-events-none absolute -top-32 -right-20 h-72 w-72 rounded-full bg-[#FF5C00]/30 blur-[80px]" />
          <div className="pointer-events-none absolute -bottom-24 -left-20 h-60 w-60 rounded-full bg-[#A29CD6]/20 blur-[80px]" />
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.18] mask-radial-fade"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "44px 44px",
            }}
          />

          <div className="relative grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.08] ring-1 ring-white/15 px-3 py-1.5 text-[12px] font-semibold text-white/85">
                <Sparkles className="h-3.5 w-3.5 text-[#FF8E40]" strokeWidth={2.5} />
                Featured integration
              </div>

              <h3 className="mt-5 font-display text-[32px] sm:text-[40px] leading-[1.05] font-bold tracking-[-0.025em] text-white text-balance">
                Built for Shopify.{" "}
                <span className="bg-gradient-to-r from-[#FF5C00] to-[#FFB680] bg-clip-text text-transparent">
                  Native install.
                </span>
              </h3>

              <p className="mt-4 max-w-md text-[15px] sm:text-[16px] leading-[1.65] text-white/65">
                AgeShield installs directly from the Shopify App Store with one
                click. No theme code edits, works with every Online Store 2.0
                theme, and respects checkout extensions.
              </p>

              <ul className="mt-6 grid sm:grid-cols-2 gap-x-6 gap-y-2.5 text-[14px] text-white/85 max-w-md">
                {featurePoints.map((p) => (
                  <li key={p} className="flex items-start gap-2.5">
                    <span className="mt-0.5 h-4 w-4 grid place-items-center rounded-full bg-[#FF5C00]/15 ring-1 ring-[#FF5C00]/30 text-[#FF8E40] shrink-0">
                      <Check className="h-2.5 w-2.5" strokeWidth={3.5} />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  href="#"
                  className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-b from-[#FF5C00] to-[#E04F00] hover:from-[#FF8E40] hover:to-[#FF5C00] text-white text-[14px] font-semibold px-5 py-3 transition-colors shadow-[0_12px_28px_-8px_rgba(255,92,0,0.55)]"
                >
                  <ShopifyIcon className="h-[18px] w-[18px]" />
                  Install from Shopify
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 text-[14px] font-medium text-white/75 hover:text-white transition-colors"
                >
                  Read the docs →
                </a>
              </div>
            </div>

            {/* Right: visual install card */}
            <div className="lg:col-span-5 hidden lg:block">
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl conic-glow opacity-30 blur-2xl" />
                <div className="relative rounded-2xl bg-white text-[#1C1C1C] p-5 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.45)] ring-1 ring-white/40">
                  <div className="flex items-center gap-3">
                    <ShopifyIcon className="h-10 w-10" />
                    <div className="flex-1">
                      <div className="text-[13px] font-semibold text-[#1C1C1C]">
                        AgeShield · Age Verifier
                      </div>
                      <div className="text-[11px] text-[#6E747F]">
                        by Metizsoft · 4.4★
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 ring-1 ring-emerald-200/60 px-2 py-0.5 text-[10px] font-mono font-semibold text-emerald-700">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      LIVE
                    </span>
                  </div>

                  <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                    <div className="rounded-lg bg-[#F9FAFB] ring-1 ring-[#E2E5EA] py-2">
                      <div className="text-[9px] font-mono text-[#9AA0AC] uppercase tracking-wider">
                        Install
                      </div>
                      <div className="mt-0.5 text-[12px] font-bold text-[#1C1C1C]">
                        1-click
                      </div>
                    </div>
                    <div className="rounded-lg bg-[#F9FAFB] ring-1 ring-[#E2E5EA] py-2">
                      <div className="text-[9px] font-mono text-[#9AA0AC] uppercase tracking-wider">
                        Setup
                      </div>
                      <div className="mt-0.5 text-[12px] font-bold text-[#1C1C1C]">
                        ~5 min
                      </div>
                    </div>
                    <div className="rounded-lg bg-[#F9FAFB] ring-1 ring-[#E2E5EA] py-2">
                      <div className="text-[9px] font-mono text-[#9AA0AC] uppercase tracking-wider">
                        Code
                      </div>
                      <div className="mt-0.5 text-[12px] font-bold text-[#1C1C1C]">
                        Zero
                      </div>
                    </div>
                  </div>

                  <button className="mt-4 w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#1A1553] hover:bg-[#13104A] text-white text-[13px] font-semibold py-2.5 transition-colors">
                    <ShopifyIcon className="h-4 w-4" />
                    Add to your store
                  </button>
                </div>

                {/* Floating chip */}
                <div className="absolute -top-3 -right-3 inline-flex items-center gap-1.5 rounded-full bg-white text-[#1C1C1C] text-[11px] font-semibold px-2.5 py-1 shadow-card animate-float">
                  <Zap className="h-3 w-3 text-[#FF5C00]" />
                  Installed in 30s
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* OTHER INTEGRATIONS — clean grid */}
        <div className="mt-16">
          <div className="flex items-end justify-between mb-8">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#E2E5EA] bg-white px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-[#4D4D4D] font-semibold">
                <Plug className="h-3 w-3 text-[#FF5C00]" />
                Plus 100+ tools
              </div>
              <h3 className="mt-4 font-display text-[26px] sm:text-[32px] leading-[1.1] font-bold tracking-tight text-[#1C1C1C]">
                Works with{" "}
                <span className="text-gradient-brand">your favorite stack</span>
              </h3>
            </div>
            <a
              href="#"
              className="hidden md:inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#2A2273] hover:text-[#FF5C00] transition-colors"
            >
              Browse all
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {integrations.map((it, i) => (
              <IntegrationCard key={it.name} integration={it} index={i} />
            ))}
          </div>

          {/* Mobile "browse all" */}
          <div className="md:hidden mt-8 text-center">
            <a
              href="#"
              className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#2A2273] hover:text-[#FF5C00] transition-colors"
            >
              Browse all 100+ integrations
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Categories explainer */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-3"
        >
          {[
            { l: "E-commerce", c: "#FF5C00" },
            { l: "Identity verification", c: "#3A65FF" },
            { l: "Marketing & email", c: "#7F54B3" },
            { l: "Payments", c: "#635BFF" },
            { l: "Analytics", c: "#F9AB00" },
            { l: "Headless / API", c: "#2A2273" },
          ].map((cat) => (
            <span
              key={cat.l}
              className="inline-flex items-center gap-1.5 rounded-full border border-[#E2E5EA] bg-white px-3 py-1.5 text-[12.5px] font-medium text-[#1C1C1C]"
            >
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: cat.c }}
              />
              {cat.l}
            </span>
          ))}
        </motion.div>

        {/* Bottom: SLA / security strip */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[13px] text-[#4D4D4D]">
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck className="h-4 w-4 text-[#FF5C00]" />
            SOC-2 ready
          </span>
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck className="h-4 w-4 text-[#FF5C00]" />
            GDPR &amp; CCPA aligned
          </span>
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck className="h-4 w-4 text-[#FF5C00]" />
            REST &amp; Webhooks API
          </span>
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck className="h-4 w-4 text-[#FF5C00]" />
            React / Vue / Vanilla SDKs
          </span>
        </div>
      </div>
    </section>
  );
}

function IntegrationCard({
  integration,
  index,
}: {
  integration: Integration;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        delay: (index % 5) * 0.04 + Math.floor(index / 5) * 0.05,
        duration: 0.5,
      }}
      className="group relative overflow-hidden rounded-2xl bg-white ring-1 ring-[#E2E5EA] hover:ring-[#2A2273]/30 hover:shadow-card transition-all p-5"
    >
      {/* hover sweep */}
      <span className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#2A2273] via-[#FF5C00] to-[#2A2273] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />

      <div className="flex items-center gap-3.5">
        <div className="grid place-items-center h-12 w-12 shrink-0 rounded-xl bg-[#F4F5F7] ring-1 ring-[#E2E5EA] group-hover:bg-white group-hover:ring-[#2A2273]/20 transition-colors">
          <integration.Chip className="h-7 w-7" />
        </div>
        <div className="min-w-0">
          <div className="text-[15px] font-bold text-[#1C1C1C] truncate">
            {integration.name}
          </div>
          <div className="text-[11.5px] text-[#6E747F] mt-0.5">
            {integration.category}
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between text-[12px]">
        <span className="inline-flex items-center gap-1 text-emerald-600 font-semibold">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Available
        </span>
        <span className="inline-flex items-center gap-1 text-[#2A2273] opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-1 transition-all duration-300 font-semibold">
          Connect
          <ArrowUpRight className="h-3 w-3" strokeWidth={2.5} />
        </span>
      </div>
    </motion.div>
  );
}
