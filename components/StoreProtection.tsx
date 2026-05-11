"use client";

import { motion, useInView } from "framer-motion";
import {
  Activity,
  Globe2,
  Shield,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import SectionHeading from "./SectionHeading";

const stats = [
  {
    Icon: Shield,
    label: "Underage attempts blocked",
    value: 42_318_492,
    suffix: "",
    accent: true,
  },
  {
    Icon: Globe2,
    label: "Countries actively protected",
    value: 184,
    suffix: "+",
  },
  {
    Icon: TrendingUp,
    label: "Average pass-rate",
    value: 96.4,
    suffix: "%",
    decimals: 1,
  },
  {
    Icon: Activity,
    label: "Median verification time",
    value: 38,
    suffix: " ms",
  },
];

export default function StoreProtection() {
  return (
    <section
      id="protection"
      className="relative py-32 sm:py-40 bg-[#F9FAFB] overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid opacity-[0.35] mask-radial-fade" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Store protection"
          title={
            <>
              Real-time defense.{" "}
              <span className="text-gradient-brand">Always-on intelligence.</span>
            </>
          }
          description="Watch what AgeShield blocks, allows, and learns from — across every store on the network."
        />

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {stats.map((s, i) => (
            <StatCard key={s.label} {...s} index={i} />
          ))}
        </div>

        {/* Dashboard mock */}
        <div className="mt-16 grid lg:grid-cols-12 gap-6 items-center">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#E2E5EA] bg-white px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-[#4D4D4D] font-medium">
              <ShieldCheck className="h-3 w-3 text-[#FF5C00]" />
              Live dashboard
            </div>
            <h3 className="mt-5 font-display text-3xl sm:text-4xl font-bold tracking-[-0.025em] text-[#1C1C1C] text-balance">
              See exactly what your gate is doing — every second.
            </h3>
            <p className="mt-4 text-base text-[#4D4D4D] leading-[1.65] text-pretty max-w-md">
              Pass-rate, drop-off, geo splits, fraud flags, and conversion
              deltas — all in a single calm dashboard. No more guessing whether
              compliance is costing you sales.
            </p>

            <ul className="mt-6 space-y-3">
              {[
                "Real-time pass / fail / fraud breakdown",
                "Per-country, per-product slices",
                "Conversion delta vs control cohort",
                "Tamper-resistant audit feed",
              ].map((line) => (
                <li
                  key={line}
                  className="flex items-start gap-3 text-sm text-[#1C1C1C]"
                >
                  <span className="mt-0.5 h-5 w-5 grid place-items-center rounded-full bg-[#FFF1E6] ring-1 ring-[#FFDDC2] text-[#FF5C00]">
                    <ShieldCheck className="h-3 w-3" strokeWidth={3} />
                  </span>
                  {line}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <DashboardMock />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function StatCard({
  Icon,
  label,
  value,
  suffix = "",
  decimals = 0,
  accent = false,
  index,
}: {
  Icon: React.ComponentType<any>;
  label: string;
  value: number;
  suffix?: string;
  decimals?: number;
  accent?: boolean;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const duration = 1800;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(value * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  const formatted =
    decimals > 0
      ? display.toFixed(decimals)
      : Math.floor(display).toLocaleString();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        delay: index * 0.06,
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative overflow-hidden rounded-3xl bg-white ring-1 ring-[#E2E5EA] shadow-card p-6 sm:p-7"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(255,92,0,0.08),transparent_55%)] opacity-70" />
      <div className="relative">
        <div
          className={`inline-flex h-11 w-11 grid place-items-center rounded-2xl ${
            accent
              ? "bg-gradient-to-br from-[#FFEACC] to-[#FFDDC2] ring-1 ring-[#FFB680]/40 text-[#FF5C00]"
              : "bg-[#F4F5F7] ring-1 ring-[#E2E5EA] text-[#2A2273]"
          }`}
        >
          <Icon className="h-5 w-5" />
        </div>
        <div className="mt-5 font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#1C1C1C]">
          {formatted}
          <span className="text-[#FF5C00]">{suffix}</span>
        </div>
        <div className="mt-1 text-sm text-[#4D4D4D]">{label}</div>
      </div>
    </motion.div>
  );
}

function DashboardMock() {
  return (
    <div className="relative">
      <div className="absolute -inset-4 sm:-inset-6 rounded-[36px] bg-[#FF5C00]/10 blur-2xl" />
      <div className="relative bg-white ring-1 ring-[#E2E5EA] shadow-card-lg rounded-3xl overflow-hidden">
        <div className="flex items-center justify-between px-5 py-3 border-b border-[#E2E5EA] bg-[#F9FAFB]">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
            <span className="ml-3 text-[11px] text-[#9AA0AC] font-mono">
              admin.ageshield.io / dashboard
            </span>
          </div>
          <span className="inline-flex items-center gap-1.5 text-[10px] font-mono text-[#FF5C00]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FF5C00] animate-pulse" />
            LIVE
          </span>
        </div>

        <div className="p-5 sm:p-7 grid grid-cols-12 gap-4">
          <div className="col-span-12 lg:col-span-8 rounded-2xl bg-[#F9FAFB] ring-1 ring-[#E2E5EA] p-5">
            <div className="flex items-baseline justify-between">
              <div>
                <div className="text-[11px] font-mono text-[#9AA0AC] uppercase tracking-wider">
                  Pass-rate · last 30d
                </div>
                <div className="mt-1 font-display text-3xl font-bold text-[#1C1C1C]">
                  96.4
                  <span className="text-[#FF5C00]">%</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-[11px] font-mono text-[#9AA0AC] uppercase tracking-wider">
                  vs prev
                </div>
                <div className="mt-1 inline-flex items-center gap-1 text-sm text-emerald-600 font-mono">
                  <TrendingUp className="h-3.5 w-3.5" />
                  +2.3%
                </div>
              </div>
            </div>
            <BigChart />
          </div>

          <div className="col-span-12 lg:col-span-4 rounded-2xl bg-[#F9FAFB] ring-1 ring-[#E2E5EA] p-5">
            <div className="text-[11px] font-mono text-[#9AA0AC] uppercase tracking-wider">
              Top regions
            </div>
            <div className="mt-3 space-y-3">
              {[
                { c: "United States", p: 42, color: "bg-[#FF5C00]" },
                { c: "United Kingdom", p: 22, color: "bg-[#2A2273]" },
                { c: "Germany", p: 14, color: "bg-cyan-500" },
                { c: "Canada", p: 11, color: "bg-emerald-500" },
                { c: "Australia", p: 8, color: "bg-rose-400" },
              ].map((r) => (
                <div key={r.c}>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#1C1C1C]">{r.c}</span>
                    <span className="font-mono text-[#4D4D4D]">{r.p}%</span>
                  </div>
                  <div className="mt-1 h-1.5 rounded-full bg-[#E2E5EA] overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${r.p}%` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1.2,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className={`h-full rounded-full ${r.color}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {[
            { l: "Verifications", v: "428,109", d: "↑ 14.2%" },
            { l: "Underage blocked", v: "9,318", d: "↑ 6.1%" },
            { l: "Fraud flags", v: "182", d: "↓ 3.4%" },
            { l: "Avg load impact", v: "31 ms", d: "↓ 2 ms" },
          ].map((k) => (
            <div
              key={k.l}
              className="col-span-6 lg:col-span-3 rounded-2xl bg-[#F9FAFB] ring-1 ring-[#E2E5EA] p-4"
            >
              <div className="text-[10px] font-mono text-[#9AA0AC] uppercase tracking-wider">
                {k.l}
              </div>
              <div className="mt-1.5 font-display text-xl font-bold text-[#1C1C1C]">
                {k.v}
              </div>
              <div className="mt-0.5 text-[11px] text-emerald-600 font-mono">
                {k.d}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function BigChart() {
  const points = [
    62, 65, 64, 68, 70, 69, 72, 74, 73, 76, 78, 77, 80, 82, 84, 83, 86, 88, 90,
    89, 91, 92, 93, 94, 93, 95, 95, 96, 96, 96,
  ];
  const max = 100;
  const min = 50;
  const w = 600;
  const h = 140;
  const step = w / (points.length - 1);
  const path = points
    .map((p, i) => {
      const x = i * step;
      const y = h - ((p - min) / (max - min)) * h;
      return `${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`;
    })
    .join(" ");
  return (
    <div className="mt-4 relative">
      <svg
        viewBox={`0 0 ${w} ${h}`}
        className="w-full h-32"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="dash-spark" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#FF5C00" stopOpacity="0.40" />
            <stop offset="100%" stopColor="#FF5C00" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[0, 0.25, 0.5, 0.75, 1].map((y) => (
          <line
            key={y}
            x1="0"
            x2={w}
            y1={y * h}
            y2={y * h}
            stroke="rgba(28,28,28,0.05)"
            strokeWidth="1"
          />
        ))}
        <path d={`${path} L ${w} ${h} L 0 ${h} Z`} fill="url(#dash-spark)" />
        <motion.path
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeOut" }}
          d={path}
          fill="none"
          stroke="#FF5C00"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
