"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BarChart3,
  Brush,
  Check,
  Globe2,
  IdCard,
  Languages,
  LayoutTemplate,
  Lock,
  ShieldCheck,
  Zap,
} from "lucide-react";
import SectionHeading from "./SectionHeading";

export default function Features() {
  return (
    <section
      id="features"
      className="relative py-20 sm:py-28 bg-[#F9FAFB]"
    >
      {/* faint grid */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.45] mask-radial-fade" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Features"
          title={
            <>
              Built like a{" "}
              <span className="text-gradient-brand">premium product</span>
            </>
          }
          description="Every detail engineered for stores that take compliance — and conversion — seriously."
        />

        {/* Bento grid */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-6 auto-rows-[minmax(220px,auto)] gap-4 sm:gap-5">
          {/* Featured large card — Automatic age gating (DARK accent for visual contrast) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1F1A57] via-[#2A2273] to-[#1A1553] text-white p-7 sm:p-9 md:col-span-4 md:row-span-2 ring-1 ring-[#1A1553]/40 shadow-card-lg"
          >
            <BentoBackground intensity="high" dark />
            <div className="relative h-full flex flex-col">
              <div className="flex items-center justify-between">
                <IconBlock Icon={ShieldCheck} large dark />
                <span className="text-[10px] font-mono tracking-widest text-white/45">
                  01 · FEATURED
                </span>
              </div>
              <h3 className="mt-6 font-display text-3xl sm:text-[34px] leading-[1.1] font-semibold tracking-tight text-white">
                Automatic age gating
              </h3>
              <p className="mt-3 max-w-md text-[15px] sm:text-base text-white/70 leading-[1.65] text-pretty">
                Block underage visitors instantly with a beautifully branded
                overlay that loads in under 40 ms — without slowing your store.
              </p>

              <ul className="mt-6 flex flex-wrap gap-2">
                {["18+ / 21+ / Custom", "FDA banner", "Smart remember-me", "Per-product"].map(
                  (t) => (
                    <li
                      key={t}
                      className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.08] ring-1 ring-white/15 px-2.5 py-1 text-xs text-white/90"
                    >
                      <Check className="h-3 w-3 text-[#FF8E40]" strokeWidth={3} />
                      {t}
                    </li>
                  )
                )}
              </ul>

              <div className="mt-auto pt-8 flex items-center gap-2 text-sm font-medium text-white group-hover:text-[#FF8E40] transition-colors">
                Explore feature
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>

            {/* Floating preview chip */}
            <div className="absolute right-7 bottom-7 hidden lg:block">
              <div className="relative w-56 rounded-2xl bg-white/[0.08] ring-1 ring-white/15 backdrop-blur p-3 animate-float-slow">
                <div className="text-[10px] uppercase tracking-wider text-white/55">
                  Live preview
                </div>
                <div className="mt-1 font-display text-base font-semibold text-white">
                  Are you 21+?
                </div>
                <div className="mt-2 flex items-center gap-1">
                  {["DD", "MM", "YY"].map((p) => (
                    <span
                      key={p}
                      className="h-6 px-2 rounded bg-white/10 ring-1 ring-white/15 text-[10px] font-mono text-white/85"
                    >
                      {p}
                    </span>
                  ))}
                </div>
                <div className="mt-2 h-6 rounded-md bg-[#FF5C00] grid place-items-center text-[10px] font-semibold text-white">
                  Verify
                </div>
              </div>
            </div>
          </motion.div>

          <BentoCard
            index={1}
            title="50+ languages"
            desc="Auto-detect visitor language and serve translated copy with flawless local terminology."
            Icon={Languages}
            className="md:col-span-2"
          />

          <BentoCard
            index={2}
            title="Lightning fast"
            desc="Edge-deployed worldwide. Won't break Core Web Vitals."
            Icon={Zap}
            className="md:col-span-2"
            accent
          />

          <BentoCard
            index={3}
            title="Conversion analytics"
            desc="Track pass-rate, drop-off, bounce, and conversion delta in real time."
            Icon={BarChart3}
            className="md:col-span-3"
          />

          <BentoCard
            index={4}
            title="Privacy-first"
            desc="Zero PII stored on the visitor's device. GDPR / CCPA aligned."
            Icon={Lock}
            className="md:col-span-3"
          />

          <BentoCard
            index={5}
            title="Multi-region"
            desc="Per-country age laws with one config."
            Icon={Globe2}
            className="md:col-span-2"
          />

          <BentoCard
            index={6}
            title="Easy integration"
            desc="1-click installs. Or paste a single script tag."
            Icon={LayoutTemplate}
            className="md:col-span-2"
          />

          <BentoCard
            index={7}
            title="Audit-grade logs"
            desc="Tamper-resistant trails ready for any regulator."
            Icon={IdCard}
            className="md:col-span-2"
          />

          <BentoCard
            index={8}
            title="Pixel-perfect brand"
            desc="Match colors, fonts, copy — without writing CSS."
            Icon={Brush}
            className="md:col-span-3"
          />

          <BentoCard
            index={9}
            title="Compliance reports"
            desc="On-demand PDF reports for any jurisdiction."
            Icon={ShieldCheck}
            className="md:col-span-3"
            accent
          />
        </div>
      </div>
    </section>
  );
}

function BentoCard({
  index,
  title,
  desc,
  Icon,
  className = "",
  accent = false,
}: {
  index: number;
  title: string;
  desc: string;
  Icon: React.ComponentType<any>;
  className?: string;
  accent?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.5,
        delay: (index % 3) * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`group relative overflow-hidden rounded-3xl bg-white ring-1 ring-[#E2E5EA] hover:ring-[#2A2273]/30 hover:shadow-card transition-all duration-300 p-6 sm:p-7 ${className}`}
    >
      {/* top accent gradient that slides in on hover */}
      <span className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#2A2273] via-[#FF5C00] to-[#2A2273] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
      <BentoBackground intensity={accent ? "med" : "low"} />

      <div className="relative h-full flex flex-col">
        <div className="flex items-center justify-between">
          <IconBlock Icon={Icon} accent={accent} />
          <span className="text-[10px] font-mono tracking-widest text-[#9AA0AC] group-hover:text-[#FF5C00] transition-colors">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-[#1C1C1C]">
          {title}
        </h3>
        <p className="mt-2 text-[14px] text-[#4D4D4D] leading-relaxed text-pretty">
          {desc}
        </p>

        <div className="mt-auto pt-6 inline-flex items-center gap-1 text-xs font-medium text-[#2A2273] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
          Learn more
          <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </motion.div>
  );
}

function IconBlock({
  Icon,
  large,
  accent,
  dark,
}: {
  Icon: React.ComponentType<any>;
  large?: boolean;
  accent?: boolean;
  dark?: boolean;
}) {
  if (dark) {
    return (
      <div
        className={`relative grid place-items-center rounded-2xl bg-gradient-to-br from-[#FF5C00] to-[#FF8E40] ring-1 ring-white/20 shadow-[0_12px_32px_-8px_rgba(255,92,0,0.65)] ${
          large ? "h-14 w-14" : "h-11 w-11"
        }`}
      >
        <Icon
          className={`text-white ${large ? "h-7 w-7" : "h-5 w-5"}`}
          strokeWidth={2.4}
        />
        <span className="absolute -inset-3 rounded-3xl bg-[#FF5C00]/30 blur-xl -z-10" />
      </div>
    );
  }
  return (
    <div
      className={`relative grid place-items-center rounded-2xl ${
        large ? "h-14 w-14" : "h-11 w-11"
      } ${
        accent
          ? "bg-gradient-to-br from-[#FFEACC] to-[#FFDDC2] ring-1 ring-[#FFB680]/40"
          : "bg-[#F4F5F7] ring-1 ring-[#E2E5EA]"
      } group-hover:bg-gradient-to-br group-hover:from-[#2A2273] group-hover:to-[#FF5C00] group-hover:ring-transparent transition-all duration-300`}
    >
      <Icon
        className={`${large ? "h-7 w-7" : "h-5 w-5"} ${
          accent ? "text-[#FF5C00]" : "text-[#2A2273]"
        } group-hover:text-white transition-colors`}
      />
    </div>
  );
}

function BentoBackground({
  intensity = "low",
  dark = false,
}: {
  intensity?: "low" | "med" | "high";
  dark?: boolean;
}) {
  const map = {
    low: "opacity-25",
    med: "opacity-40",
    high: "opacity-55",
  } as const;

  if (dark) {
    return (
      <>
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.18] mask-radial-fade" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(255,92,0,0.40),transparent_55%)]" />
        <div className="pointer-events-none absolute inset-0 bg-noise opacity-30 mix-blend-overlay" />
      </>
    );
  }

  return (
    <>
      <div
        className={`pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(255,92,0,0.10),transparent_55%)] ${map[intensity]}`}
      />
      <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/40" />
    </>
  );
}
