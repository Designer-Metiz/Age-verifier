"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "center" | "left";
}) {
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-3xl ${alignCls}`}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="inline-flex items-center gap-2 rounded-full border border-[#E2E5EA] bg-white px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-[#4D4D4D] font-medium"
      >
        <Sparkles className="h-3 w-3 text-[#FF5C00]" />
        {eyebrow}
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.05 }}
        className="mt-5 font-display text-[40px] sm:text-[48px] lg:text-[56px] leading-[1.08] font-bold tracking-[-0.025em] text-balance text-[#1C1C1C]"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.12 }}
          className="mt-5 text-lg sm:text-xl leading-[1.6] text-[#4D4D4D] text-pretty"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
