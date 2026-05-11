"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import SectionHeading from "./SectionHeading";

const faqs = [
  {
    q: "Will AgeShield slow down my store?",
    a: "Not noticeably. Our overlay is preloaded as the page renders and adds less than 40 ms to median load. We avoid render-blocking scripts and use a tiny edge runtime worldwide.",
  },
  {
    q: "Do you handle different drinking ages by country?",
    a: "Yes — out of the box. Set per-country, per-region, or per-product rules with one click. We ship presets for 180+ countries and update them automatically when laws change.",
  },
  {
    q: "Is the verification compliant for regulated industries?",
    a: "AgeShield ships compliance-grade audit logs and supports ID document checks for regulated categories like alcohol, vape, cannabis, gambling, and adult retail. Your data retention is fully configurable.",
  },
  {
    q: "Will it hurt my conversion rate?",
    a: "Most stores see neutral-to-positive impact. The gate only shows for first-time visitors, supports remember-me cookies, and our analytics dashboard shows the real conversion delta vs. control.",
  },
  {
    q: "Can I match my brand exactly?",
    a: "Down to the pixel. Custom fonts, colors, copy, background imagery, multilingual content, and even custom CSS on Pro. Use our visual editor or bring your own designs.",
  },
  {
    q: "What happens to underage visitors?",
    a: "You choose. Redirect to a friendly explainer page, your homepage, or any URL — and optionally offer alternative non-restricted products.",
  },
  {
    q: "How quickly can we go live?",
    a: "Most stores ship AgeShield in under five minutes. Install the Shopify app or paste a single script tag, choose a preset, click publish.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative py-32 sm:py-40 bg-white overflow-hidden">
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title={
            <>
              Questions,{" "}
              <span className="text-gradient-brand">answered</span>
            </>
          }
          description="Anything else? Reach out — we usually reply within an hour."
        />

        <div className="mt-14 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={f.q}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.04 }}
                className={`group rounded-2xl bg-white ring-1 transition-all overflow-hidden ${
                  isOpen
                    ? "ring-[#FF5C00]/30 shadow-card"
                    : "ring-[#E2E5EA] hover:ring-[#2A2273]/30"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 text-left px-6 py-5"
                >
                  <span className="font-medium text-[15px] sm:text-base text-[#1C1C1C]">
                    {f.q}
                  </span>
                  <span
                    className={`shrink-0 grid place-items-center h-9 w-9 rounded-full transition-all duration-300 ${
                      isOpen
                        ? "bg-[#FF5C00] text-white rotate-45 glow-accent-soft"
                        : "bg-[#F4F5F7] ring-1 ring-[#E2E5EA] text-[#1C1C1C] group-hover:bg-[#E2E5EA]"
                    }`}
                  >
                    <Plus className="h-4 w-4" strokeWidth={2.5} />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-base text-[#4D4D4D] leading-[1.7] text-pretty">
                        {f.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 rounded-2xl bg-[#F9FAFB] ring-1 ring-[#E2E5EA] p-6 sm:p-7 text-center"
        >
          <h4 className="font-display text-xl font-semibold text-[#1C1C1C]">
            Still have questions?
          </h4>
          <p className="mt-1 text-sm text-[#4D4D4D]">
            Talk to a real human about your store and your rules.
          </p>
          <a
            href="#cta"
            className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-white ring-1 ring-[#E2E5EA] hover:ring-[#FF5C00]/40 text-[#1C1C1C] text-sm font-medium px-4 py-2 transition-colors"
          >
            Book a 30-min call →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
