"use client";

import { motion, useInView } from "framer-motion";
import { Activity, Globe2, ShieldCheck, Users } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import ShopifyIcon from "./ui/icons/ShopifyIcon";

type Stat = {
  Icon: React.ComponentType<any>;
  rawValue: number;
  decimals?: number;
  suffix?: string;
  label: string;
  sub: string;
  iconAccent?: "orange" | "purple";
};

const stats: Stat[] = [
  {
    Icon: Users,
    rawValue: 10000,
    suffix: "+",
    label: "Active Stores",
    sub: "Trust AgeShield daily",
    iconAccent: "orange",
  },
  {
    Icon: Globe2,
    rawValue: 180,
    suffix: "+",
    label: "Countries",
    sub: "Worldwide compliance",
    iconAccent: "purple",
  },
  {
    Icon: ShieldCheck,
    rawValue: 1,
    suffix: "B+",
    label: "Verifications",
    sub: "Underage visitors blocked",
    iconAccent: "purple",
  },
  {
    Icon: Activity,
    rawValue: 99.9,
    decimals: 1,
    suffix: "%",
    label: "Uptime",
    sub: "Always-on protection",
    iconAccent: "purple",
  },
];

export default function HeroStats() {
  return (
    <div className="relative mx-auto max-w-6xl mt-20 sm:mt-24 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-14 gap-x-8">
        {stats.map((s, i) => (
          <StatCell key={s.label} stat={s} index={i} />
        ))}
      </div>

      {/* Minimal trust strip */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="mt-16 pt-10 border-t border-[#EEF1F8] flex items-center justify-center gap-2 text-xs sm:text-sm text-[#4D4D4D]"
      >
        <ShopifyIcon className="h-4 w-4" />
        <span>
          Built for Shopify · Trusted by alcohol, vape, cannabis &amp;
          adult-retail merchants
        </span>
      </motion.div>
    </div>
  );
}

function StatCell({ stat, index }: { stat: Stat; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const duration = 1600;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(stat.rawValue * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, stat.rawValue]);

  const formatted =
    stat.decimals !== undefined
      ? n.toFixed(stat.decimals)
      : stat.rawValue >= 1000
      ? Math.floor(n).toLocaleString()
      : Math.floor(n).toString();

  const orange = stat.iconAccent === "orange";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: index * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="text-center"
    >
      {/* Icon on pastel square */}
      <div className="mx-auto inline-flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-[#EFEEFB] ring-1 ring-[#DBDAF7]/60">
        <stat.Icon
          className={`h-6 w-6 sm:h-7 sm:w-7 ${
            orange ? "text-[#FF5C00]" : "text-[#2A2273]"
          }`}
          strokeWidth={2}
        />
      </div>

      {/* Big animated value — dark ink, NOT purple */}
      <div className="mt-6 font-display text-[44px] sm:text-[52px] leading-none font-bold tracking-[-0.02em] text-[#1C1C1C]">
        {formatted}
        <span>{stat.suffix}</span>
      </div>

      {/* Label */}
      <div className="mt-3.5 text-[15px] sm:text-base font-bold text-[#1C1C1C]">
        {stat.label}
      </div>

      {/* Sub-label */}
      <div className="mt-1.5 text-[13px] sm:text-sm text-[#4D4D4D]">
        {stat.sub}
      </div>
    </motion.div>
  );
}
