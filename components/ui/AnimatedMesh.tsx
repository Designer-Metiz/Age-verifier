"use client";

import { motion } from "framer-motion";

export default function AnimatedMesh({
  className = "",
  intensity = "medium",
}: {
  className?: string;
  intensity?: "low" | "medium" | "high";
}) {
  const opacityMul = intensity === "high" ? 1 : intensity === "low" ? 0.5 : 0.75;

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {/* Base soft mesh */}
      <div className="absolute inset-0 bg-mesh-light" />

      {/* Animated color blobs — soft purple + orange */}
      <motion.div
        initial={{ opacity: 0.4 * opacityMul }}
        animate={{ opacity: [0.35 * opacityMul, 0.55 * opacityMul, 0.35 * opacityMul] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-40 left-1/2 -translate-x-1/2 h-[760px] w-[1200px] rounded-full bg-[#A29CD6]/40 blur-[140px] animate-mesh-1"
      />
      <motion.div
        initial={{ opacity: 0.3 * opacityMul }}
        animate={{ opacity: [0.25 * opacityMul, 0.45 * opacityMul, 0.25 * opacityMul] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-1/3 -right-40 h-[560px] w-[820px] rounded-full bg-[#FFB680]/40 blur-[140px] animate-mesh-2"
      />
      <motion.div
        initial={{ opacity: 0.25 * opacityMul }}
        animate={{ opacity: [0.2 * opacityMul, 0.4 * opacityMul, 0.2 * opacityMul] }}
        transition={{ duration: 17, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        className="absolute -bottom-40 -left-40 h-[640px] w-[840px] rounded-full bg-[#DBDAF7]/60 blur-[120px] animate-mesh-3"
      />

      {/* Subtle drifting grid */}
      <div className="absolute inset-0 bg-grid opacity-50 mask-radial-fade animate-grid-pan" />

      {/* Faint grain */}
      <div className="absolute inset-0 bg-noise opacity-50" />
    </div>
  );
}
