"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
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
];

const AUTOPLAY_MS = 6000;

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = reviews.length;

  const go = useCallback(
    (n: number) => setIndex(((n % total) + total) % total),
    [total]
  );
  const next = useCallback(() => go(index + 1), [go, index]);
  const prev = useCallback(() => go(index - 1), [go, index]);

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(next, AUTOPLAY_MS);
    return () => clearTimeout(t);
  }, [index, paused, next]);

  const review = reviews[index];

  return (
    <section className="relative py-20 sm:py-28 bg-[#FAFBFD] overflow-hidden">
      <div className="pointer-events-none absolute top-40 -left-40 h-[420px] w-[420px] rounded-full bg-[#FF5C00]/[0.06] blur-[120px]" />
      <div className="pointer-events-none absolute bottom-20 -right-40 h-[480px] w-[480px] rounded-full bg-[#2A2273]/[0.08] blur-[140px]" />

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
          className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-[#4D4D4D]"
        >
          <span className="inline-flex items-center gap-2 text-[14px]">
            <span className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-[#FF5C00] text-[#FF5C00]" />
              ))}
            </span>
            <span>
              <span className="font-bold text-[#1C1C1C]">4.9</span> on G2
            </span>
          </span>
          <span className="h-4 w-px bg-[#E2E5EA] hidden sm:block" />
          <span className="text-[14px]">
            <span className="font-bold text-[#1C1C1C]">10,000+</span> stores
          </span>
          <span className="h-4 w-px bg-[#E2E5EA] hidden sm:block" />
          <span className="text-[14px]">
            <span className="font-bold text-[#1C1C1C]">180+</span> countries
          </span>
          <span className="h-4 w-px bg-[#E2E5EA] hidden sm:block" />
          <span className="text-[14px]">
            <span className="font-bold text-[#1C1C1C]">Built for</span> Shopify
          </span>
        </motion.div>

        {/* Slider */}
        <div
          className="mt-16 max-w-4xl mx-auto"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative rounded-3xl bg-[#1A1553] text-white overflow-hidden shadow-[0_30px_80px_-30px_rgba(26,21,83,0.4)] min-h-[420px] sm:min-h-[380px]">
            <Quote
              className="absolute -top-2 -right-2 h-44 w-44 text-white/[0.04]"
              strokeWidth={1.5}
              fill="currentColor"
            />
            <div className="pointer-events-none absolute -top-32 -left-20 h-72 w-72 rounded-full bg-[#FF5C00]/15 blur-[80px]" />

            <div className="relative px-8 sm:px-14 py-12 sm:py-14">
              <AnimatePresence mode="wait">
                <motion.div
                  key={review.author}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, k) => (
                      <Star
                        key={k}
                        className="h-[18px] w-[18px] fill-[#FF8E40] text-[#FF8E40]"
                      />
                    ))}
                  </div>

                  <blockquote className="mt-7 font-display text-[22px] sm:text-[28px] lg:text-[32px] leading-[1.4] font-medium tracking-[-0.015em] text-balance">
                    “{review.body}”
                  </blockquote>

                  <div className="mt-10 pt-8 border-t border-white/10 flex items-center gap-4">
                    <div
                      className={`h-14 w-14 rounded-full bg-gradient-to-br ${review.color} grid place-items-center text-[16px] font-bold text-white shadow-[0_10px_24px_-8px_rgba(255,92,0,0.5)]`}
                    >
                      {review.author
                        .split(" ")
                        .map((p) => p[0])
                        .join("")}
                    </div>
                    <div>
                      <div className="text-[16px] font-semibold text-white leading-tight">
                        {review.author}
                      </div>
                      <div className="mt-1 text-[13.5px] text-white/60">
                        {review.role} · {review.brand}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-center gap-6">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="h-11 w-11 grid place-items-center rounded-full bg-white ring-1 ring-[#E2E5EA] text-[#1C1C1C] hover:ring-[#2A2273]/40 hover:text-[#2A2273] transition-colors shadow-[0_8px_20px_-12px_rgba(28,28,28,0.15)]"
            >
              <ChevronLeft className="h-5 w-5" strokeWidth={2.2} />
            </button>

            <div className="flex items-center gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    i === index
                      ? "w-8 bg-[#1A1553]"
                      : "w-2 bg-[#D7DAE3] hover:bg-[#9AA0AC]"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next testimonial"
              className="h-11 w-11 grid place-items-center rounded-full bg-white ring-1 ring-[#E2E5EA] text-[#1C1C1C] hover:ring-[#2A2273]/40 hover:text-[#2A2273] transition-colors shadow-[0_8px_20px_-12px_rgba(28,28,28,0.15)]"
            >
              <ChevronRight className="h-5 w-5" strokeWidth={2.2} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
