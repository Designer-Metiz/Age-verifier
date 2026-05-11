"use client";

import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowUpRight,
  Calendar,
  Check,
  IdCard,
  ScanFace,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import { useRef, useState } from "react";
import SectionHeading from "./SectionHeading";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const steps = [
  {
    Icon: Calendar,
    title: "Visitor lands on your store",
    desc: "AgeShield's lightweight script intercepts before any age-restricted product loads — under 40 ms, blocking-free.",
  },
  {
    Icon: ShieldCheck,
    title: "Branded age gate appears",
    desc: "A pixel-perfect, fully branded overlay matches your store. Multilingual copy, geo-rules, custom imagery — all from one config.",
  },
  {
    Icon: ScanFace,
    title: "AI fraud detection runs",
    desc: "Behavioral signals + device fingerprints + ID flags catch underage attempts that simple date-of-birth gates miss.",
  },
  {
    Icon: IdCard,
    title: "Audit-grade log written",
    desc: "Every verification stamped with a tamper-resistant record. Export to PDF, JSON, or SOC-2 anytime.",
  },
];

export default function VerificationFlow() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  useGSAP(
    () => {
      const triggers: ScrollTrigger[] = [];
      steps.forEach((_, i) => {
        const t = ScrollTrigger.create({
          trigger: `#vf-step-${i}`,
          start: "top 60%",
          end: "bottom 40%",
          onEnter: () => setActiveStep(i),
          onEnterBack: () => setActiveStep(i),
        });
        triggers.push(t);
      });
      return () => {
        triggers.forEach((t) => t.kill());
      };
    },
    { scope: sectionRef }
  );

  const progress = ((activeStep + 1) / steps.length) * 100;

  return (
    <section
      id="flow"
      ref={sectionRef}
      className="relative py-32 sm:py-40 overflow-hidden bg-white"
    >
      {/* faint dotted backdrop */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4] mask-radial-fade"
        style={{
          backgroundImage:
            "radial-gradient(rgba(28,28,28,0.08) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />
      {/* soft accent glows */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[420px] w-[600px] rounded-full bg-[#A29CD6]/15 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/2 -right-40 h-[400px] w-[600px] rounded-full bg-[#FF5C00]/[0.06] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Verification flow"
          title={
            <>
              The verification, <br />
              <span className="text-gradient-brand">step by perfect step</span>
            </>
          }
          description="Watch what happens between your visitor's first click and the moment they're verified — without ever leaving your store."
        />

        {/* Speed/spec strip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13px] text-[#4D4D4D]"
        >
          <span className="inline-flex items-center gap-1.5">
            <Zap className="h-3.5 w-3.5 text-[#FF5C00]" />
            4 steps · ~38ms total
          </span>
          <span className="text-[#C9CDD5]">·</span>
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck className="h-3.5 w-3.5 text-[#2A2273]" />
            Fully audit-grade
          </span>
          <span className="text-[#C9CDD5]">·</span>
          <span className="inline-flex items-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5 text-[#FF5C00]" />
            AI fraud-checked
          </span>
        </motion.div>

        {/* Progress indicator (mobile + desktop hint) */}
        <div className="mt-12 lg:hidden">
          <div className="relative h-1.5 w-full rounded-full bg-[#F4F5F7] overflow-hidden">
            <motion.div
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-[#2A2273] to-[#FF5C00]"
            />
          </div>
          <div className="mt-2 flex items-center justify-between text-[11px] font-mono text-[#9AA0AC]">
            <span>STEP {String(activeStep + 1).padStart(2, "0")}</span>
            <span>of {String(steps.length).padStart(2, "0")}</span>
          </div>
        </div>

        <div className="mt-12 lg:mt-16 grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left: scrolling step cards */}
          <div className="lg:col-span-6">
            <div className="relative">
              {/* Animated rail behind step badges */}
              <div
                className="hidden lg:block absolute left-[27px] top-12 bottom-12 w-0.5 bg-[#EEF1F8] rounded-full overflow-hidden"
                aria-hidden
              >
                <motion.div
                  animate={{ height: `${progress}%` }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-x-0 top-0 bg-gradient-to-b from-[#2A2273] to-[#FF5C00] rounded-full"
                />
              </div>

              <div className="space-y-6 lg:space-y-10">
                {steps.map((s, i) => (
                  <StepCard
                    key={s.title}
                    step={s}
                    index={i}
                    active={activeStep === i}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right: sticky visual */}
          <div className="lg:col-span-6 lg:sticky lg:top-28">
            <FlowVisual activeStep={activeStep} totalSteps={steps.length} />
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 flex flex-col items-center gap-3"
        >
          <a
            href="#cta"
            className="group inline-flex items-center gap-2 rounded-lg bg-[#1A1553] hover:bg-[#13104A] text-white text-[14px] font-semibold px-6 py-3 transition-colors shadow-[0_12px_28px_-10px_rgba(26,21,83,0.45)]"
          >
            See it live in your store
            <ArrowUpRight
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              strokeWidth={2.5}
            />
          </a>
          <p className="text-[13px] text-[#6E747F]">
            Average install time · 5 minutes
          </p>
        </motion.div>
      </div>
    </section>
  );
}

type Step = (typeof steps)[number];

function StepCard({
  step,
  index,
  active,
}: {
  step: Step;
  index: number;
  active: boolean;
}) {
  return (
    <div id={`vf-step-${index}`} className="relative">
      <div className="flex items-start gap-5">
        {/* Numbered badge — always positioned for vertical rail alignment */}
        <div className="relative shrink-0">
          <motion.div
            animate={{
              scale: active ? 1 : 0.92,
            }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className={`relative h-[56px] w-[56px] grid place-items-center rounded-2xl font-display font-extrabold text-lg transition-all duration-500 ${
              active
                ? "bg-gradient-to-br from-[#FF5C00] to-[#FF8E40] text-white shadow-[0_14px_30px_-10px_rgba(255,92,0,0.55)] ring-1 ring-[#FF5C00]/40"
                : "bg-white ring-1 ring-[#E2E5EA] text-[#9AA0AC] shadow-card"
            }`}
          >
            {String(index + 1).padStart(2, "0")}
            {active && (
              <span className="absolute -inset-1 rounded-2xl bg-[#FF5C00]/25 blur-md -z-10" />
            )}
          </motion.div>
        </div>

        {/* Card */}
        <motion.div
          animate={{
            scale: active ? 1 : 0.99,
          }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className={`flex-1 relative rounded-2xl p-5 sm:p-6 transition-all duration-500 ${
            active
              ? "bg-white ring-1 ring-[#FF5C00]/30 shadow-[0_24px_48px_-20px_rgba(255,92,0,0.20)]"
              : "bg-white/70 ring-1 ring-[#EEF1F8]"
          }`}
        >
          {/* Active accent line on top */}
          {active && (
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              className="absolute top-0 left-5 right-5 h-0.5 bg-gradient-to-r from-[#2A2273] to-[#FF5C00] origin-left rounded-full"
            />
          )}

          <div className="flex items-center justify-between gap-3">
            <div
              className={`inline-flex items-center gap-1.5 text-[10.5px] uppercase tracking-[0.18em] font-mono font-semibold transition-colors ${
                active ? "text-[#FF5C00]" : "text-[#9AA0AC]"
              }`}
            >
              <step.Icon className="h-3.5 w-3.5" strokeWidth={2.4} />
              Step {index + 1}
            </div>
            {active && (
              <motion.span
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-1 rounded-full bg-emerald-50 ring-1 ring-emerald-200/60 px-2 py-0.5 text-[10px] font-mono font-semibold text-emerald-700"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                ACTIVE
              </motion.span>
            )}
          </div>

          <h3
            className={`mt-2.5 font-display text-[20px] sm:text-[22px] leading-[1.2] font-bold tracking-tight transition-colors ${
              active ? "text-[#1C1C1C]" : "text-[#1C1C1C]/80"
            }`}
          >
            {step.title}
          </h3>
          <p
            className={`mt-3 text-[14.5px] leading-[1.65] text-pretty transition-colors ${
              active ? "text-[#4D4D4D]" : "text-[#6E747F]"
            }`}
          >
            {step.desc}
          </p>
        </motion.div>
      </div>
    </div>
  );
}

function FlowVisual({
  activeStep,
  totalSteps,
}: {
  activeStep: number;
  totalSteps: number;
}) {
  const stages = [
    {
      label: "Page load",
      pill: "38ms",
      content: (
        <div className="space-y-4">
          <div className="text-[11px] font-mono text-[#9AA0AC] uppercase tracking-wider">
            yourstore.com
          </div>
          <div className="grid grid-cols-3 gap-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                className="aspect-[4/5] rounded-xl bg-gradient-to-br from-[#F4F5F7] to-[#EEF1F8] ring-1 ring-[#E2E5EA]"
              />
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-between gap-3 rounded-lg bg-[#F9FAFB] ring-1 ring-[#E2E5EA] px-3 py-2.5"
          >
            <div className="inline-flex items-center gap-2 text-[12px] text-[#1C1C1C]">
              <span className="h-2 w-2 rounded-full bg-[#FF5C00] animate-pulse" />
              <span className="font-mono">ageshield.js</span>
            </div>
            <span className="text-[11px] font-mono text-emerald-700 font-semibold">
              ✓ 38ms
            </span>
          </motion.div>
        </div>
      ),
    },
    {
      label: "Age gate",
      pill: "21+",
      content: (
        <div className="text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#FFF1E6] ring-1 ring-[#FFDDC2] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-[#FF5C00] font-semibold">
            <ShieldCheck className="h-3 w-3" />
            Age verification
          </div>
          <h4 className="mt-5 font-display text-[26px] sm:text-[30px] font-bold leading-tight tracking-tight text-[#1C1C1C]">
            Are you 21+ to{" "}
            <span className="text-gradient-brand">enter?</span>
          </h4>
          <p className="mt-2 text-[13px] text-[#6E747F]">
            You must be 21+ to view this content.
          </p>
          <div className="mt-5 flex items-center justify-center gap-2">
            {[
              ["DD", "14"],
              ["MM", "06"],
              ["YYYY", "1998"],
            ].map(([p, v]) => (
              <span
                key={p}
                className="relative h-12 px-3.5 rounded-lg bg-[#F4F5F7] ring-1 ring-[#E2E5EA] grid place-items-center font-mono text-[15px] font-bold text-[#1C1C1C]"
              >
                {v}
                <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 px-1 bg-white text-[8px] font-sans font-medium text-[#9AA0AC]">
                  {p}
                </span>
              </span>
            ))}
          </div>
          <button className="mt-5 inline-flex items-center gap-2 rounded-lg bg-gradient-to-b from-[#FF5C00] to-[#E04F00] hover:from-[#FF8E40] hover:to-[#FF5C00] text-white text-sm font-semibold px-5 py-2.5 transition-colors shadow-[0_10px_24px_-8px_rgba(255,92,0,0.5)]">
            <ShieldCheck className="h-4 w-4" />
            Verify my age
          </button>
        </div>
      ),
    },
    {
      label: "AI scan",
      pill: "0.02 risk",
      content: (
        <div>
          <div className="flex items-center justify-between">
            <div className="text-[11px] font-mono text-[#9AA0AC] uppercase tracking-wider">
              AI fraud detection
            </div>
            <span className="inline-flex items-center gap-1 text-[10px] font-mono text-[#FF5C00] font-semibold">
              <Sparkles className="h-3 w-3" />
              SCANNING
            </span>
          </div>
          <div className="mt-4 space-y-2">
            {[
              { l: "Behavioral signals", v: "OK" },
              { l: "Device fingerprint", v: "OK" },
              { l: "VPN heuristics", v: "OK" },
              { l: "ID document scan", v: "98.7%" },
              { l: "Cross-check", v: "passed" },
            ].map((row, i) => (
              <motion.div
                key={row.l}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center justify-between rounded-lg bg-[#F9FAFB] ring-1 ring-[#E2E5EA] px-3.5 py-2.5 text-[13px]"
              >
                <span className="text-[#4D4D4D]">{row.l}</span>
                <span className="inline-flex items-center gap-1.5 text-emerald-600">
                  <Check className="h-3 w-3" strokeWidth={3.5} />
                  <span className="font-mono text-[12px] font-semibold">
                    {row.v}
                  </span>
                </span>
              </motion.div>
            ))}
          </div>
          <div className="mt-4 flex items-center justify-between gap-2 rounded-lg bg-gradient-to-r from-[#FFF1E6] to-[#FFEACC] ring-1 ring-[#FFDDC2] px-3.5 py-2.5">
            <span className="inline-flex items-center gap-1.5 text-[12px] text-[#FF5C00] font-semibold">
              <Sparkles className="h-3.5 w-3.5" />
              Risk score
            </span>
            <span className="font-mono text-[13px] font-bold text-[#FF5C00]">
              0.02
            </span>
          </div>
        </div>
      ),
    },
    {
      label: "Audit log",
      pill: "Signed ✓",
      content: (
        <div>
          <div className="flex items-center justify-between">
            <div className="text-[11px] font-mono text-[#9AA0AC] uppercase tracking-wider">
              Audit trail
            </div>
            <span className="font-mono text-[10px] text-[#1C1C1C] bg-[#F4F5F7] ring-1 ring-[#E2E5EA] px-1.5 py-0.5 rounded">
              #VR-9F8E2A
            </span>
          </div>
          <div className="mt-4 space-y-1.5 font-mono text-[12px]">
            {[
              { k: "verified_at", v: "2026-05-08T14:31:09Z" },
              { k: "method", v: "DOB + AI" },
              { k: "age_check", v: "21+ confirmed" },
              { k: "country", v: "US-CA" },
              { k: "fraud_score", v: "0.02" },
              { k: "signature", v: "sha256:9f8e2a…" },
            ].map((row) => (
              <div
                key={row.k}
                className="flex items-center justify-between rounded-md bg-[#F9FAFB] ring-1 ring-[#E2E5EA] px-3 py-2"
              >
                <span className="text-[#9AA0AC]">{row.k}</span>
                <span className="text-[#1C1C1C] font-semibold">{row.v}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2">
            {["PDF", "JSON", "SOC-2"].map((f) => (
              <button
                key={f}
                className="rounded-lg bg-[#F4F5F7] hover:bg-[#E2E5EA] ring-1 ring-[#E2E5EA] text-[12px] font-semibold text-[#1C1C1C] py-2 transition-colors"
              >
                Export {f}
              </button>
            ))}
          </div>
        </div>
      ),
    },
  ];

  const stage = stages[activeStep];

  return (
    <div className="relative">
      {/* outer glow */}
      <div className="absolute -inset-6 rounded-[36px] conic-glow opacity-25 blur-2xl" />

      <div className="relative bg-white rounded-3xl overflow-hidden shadow-card-lg ring-1 ring-[#E2E5EA]">
        {/* Browser chrome */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-[#EEF1F8] bg-[#F9FAFB]">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
          <div className="ml-2 flex-1 min-w-0">
            <div className="inline-flex items-center gap-1.5 rounded-md bg-white ring-1 ring-[#E2E5EA] px-2.5 py-1 text-[11px] font-mono text-[#6E747F] max-w-full">
              <ShieldCheck className="h-3 w-3 text-[#2A2273] shrink-0" />
              <span className="truncate">yourstore.com / verify</span>
            </div>
          </div>
          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 ring-1 ring-emerald-200/60 px-2 py-0.5 text-[10px] font-mono font-semibold text-emerald-700">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            LIVE
          </span>
        </div>

        {/* Stage label header */}
        <div className="flex items-center justify-between px-6 py-3 border-b border-[#EEF1F8] bg-white">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-[#9AA0AC] font-semibold">
              Stage {String(activeStep + 1).padStart(2, "0")}
            </span>
            <span className="font-display text-[14px] font-bold text-[#1C1C1C]">
              {stage.label}
            </span>
          </div>
          <span className="inline-flex items-center gap-1 rounded-full bg-[#FFF1E6] ring-1 ring-[#FFDDC2] px-2 py-0.5 text-[10px] font-mono font-semibold text-[#FF5C00]">
            {stage.pill}
          </span>
        </div>

        {/* Stage content */}
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="p-7 sm:p-9 min-h-[420px]"
        >
          {stage.content}
        </motion.div>

        {/* Footer with progress + step labels */}
        <div className="px-6 py-4 border-t border-[#EEF1F8] bg-[#F9FAFB]">
          <div className="flex items-center gap-2 flex-wrap">
            {stages.map((s, i) => (
              <button
                key={s.label}
                disabled
                className={`relative inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10.5px] font-mono font-semibold transition-all ${
                  i === activeStep
                    ? "bg-gradient-to-r from-[#2A2273] to-[#FF5C00] text-white"
                    : i < activeStep
                    ? "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200/60"
                    : "bg-white text-[#9AA0AC] ring-1 ring-[#E2E5EA]"
                }`}
              >
                {i < activeStep ? (
                  <Check className="h-3 w-3" strokeWidth={3.5} />
                ) : (
                  <span className="font-mono">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                )}
                <span className="hidden sm:inline">{s.label}</span>
              </button>
            ))}
          </div>

          <div className="mt-3 flex items-center justify-between">
            <div className="flex-1 h-1 rounded-full bg-[#E2E5EA] overflow-hidden">
              <motion.div
                animate={{
                  width: `${((activeStep + 1) / totalSteps) * 100}%`,
                }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="h-full bg-gradient-to-r from-[#2A2273] to-[#FF5C00] rounded-full"
              />
            </div>
            <div className="ml-3 text-[11px] font-mono text-[#9AA0AC] font-semibold">
              {String(activeStep + 1).padStart(2, "0")} /{" "}
              {String(totalSteps).padStart(2, "0")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
