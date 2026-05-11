"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import SectionHeading from "./SectionHeading";

const reviews = [
  {
    body: "We replaced three age-gate apps with AgeShield in an afternoon. Checkout actually got faster — and our compliance officer finally stopped emailing me.",
    author: "Maya Okafor",
    role: "Head of E-Commerce",
    brand: "Northwind Spirits",
    color: "from-[#FF5C00] to-[#FF8E40]",
  },
  {
    body: "Pass-rate jumped from 71% to 94% the week we shipped it. The branded overlay actually feels like a part of our store — not a third-party afterthought.",
    author: "Jonas Reed",
    role: "Founder",
    brand: "Wavelet Vape Co.",
    color: "from-[#2A2273] to-[#5C5CCF]",
  },
  {
    body: "Geo-rules across 14 markets configured in fifteen minutes. The audit log saved us in a regulator review last month. Worth every dollar.",
    author: "Priya Shah",
    role: "VP Compliance",
    brand: "Forgehaus Beverages",
    color: "from-cyan-400 to-blue-500",
  },
  {
    body: "Plugged into our headless Next.js storefront with one component. The team genuinely cares about both compliance AND conversion — rare combo.",
    author: "Liam Tanaka",
    role: "Engineering Lead",
    brand: "Sunhaus Cannabis",
    color: "from-emerald-400 to-teal-500",
  },
  {
    body: "The analytics view alone is worth the price. Finally a real number on what age-gating costs us — and the tools to optimise it.",
    author: "Daniel Park",
    role: "Growth Lead",
    brand: "Emberly Goods",
    color: "from-rose-400 to-orange-500",
  },
  {
    body: "Beautiful, fast, compliant — and the support team picks up in under an hour. AgeShield is the standard now in our category.",
    author: "Aisha Nasser",
    role: "Director of Ops",
    brand: "Quartz Distillery",
    color: "from-amber-400 to-orange-600",
  },
];

export default function Testimonials() {
  const row1 = [...reviews, ...reviews];
  const row2 = [...reviews.slice().reverse(), ...reviews.slice().reverse()];

  return (
    <section className="relative py-32 sm:py-40 bg-white overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Loved by merchants"
          title={
            <>
              Trusted by the brands{" "}
              <span className="text-gradient-brand">regulators trust</span>
            </>
          }
          description="From craft distilleries to multi-region cannabis chains — read what teams say after shipping AgeShield."
        />

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          {[
            { l: "4.9/5 on G2" },
            { l: "10,000+ stores" },
            { l: "180+ countries" },
            { l: "Built for Shopify" },
          ].map((b) => (
            <span
              key={b.l}
              className="inline-flex items-center gap-2 rounded-full border border-[#E2E5EA] bg-white px-3 py-1.5 text-xs text-[#1C1C1C]"
            >
              <Star className="h-3 w-3 fill-[#FF5C00] text-[#FF5C00]" />
              {b.l}
            </span>
          ))}
        </motion.div>
      </div>

      <div className="mt-14 space-y-5">
        <Marquee items={row1} direction="left" />
        <Marquee items={row2} direction="right" />
      </div>
    </section>
  );
}

function Marquee({
  items,
  direction,
}: {
  items: typeof reviews;
  direction: "left" | "right";
}) {
  return (
    <div className="relative mask-fade-edges overflow-hidden">
      <div
        className={`flex gap-5 w-max ${
          direction === "left" ? "animate-marquee" : "animate-marquee-slow"
        }`}
        style={
          direction === "right" ? { animationDirection: "reverse" } : undefined
        }
      >
        {items.map((r, i) => (
          <article
            key={`${r.author}-${i}`}
            className="group relative w-[360px] sm:w-[420px] shrink-0 rounded-2xl bg-white ring-1 ring-[#E2E5EA] shadow-card hover:ring-[#2A2273]/30 transition-all p-6"
          >
            <Quote
              className="absolute top-4 right-4 h-6 w-6 text-[#E2E5EA] group-hover:text-[#FF5C00]/40 transition-colors"
              strokeWidth={1.5}
            />

            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, k) => (
                <Star
                  key={k}
                  className="h-3.5 w-3.5 fill-[#FF5C00] text-[#FF5C00]"
                />
              ))}
            </div>

            <p className="mt-4 text-[15px] text-[#1C1C1C] leading-[1.7] text-pretty">
              “{r.body}”
            </p>

            <div className="mt-6 flex items-center gap-3">
              <div
                className={`h-10 w-10 rounded-full bg-gradient-to-br ${r.color} ring-2 ring-white grid place-items-center font-semibold text-white`}
              >
                {r.author
                  .split(" ")
                  .map((p) => p[0])
                  .join("")}
              </div>
              <div>
                <div className="text-sm font-semibold text-[#1C1C1C]">
                  {r.author}
                </div>
                <div className="text-xs text-[#4D4D4D]">
                  {r.role} · {r.brand}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
