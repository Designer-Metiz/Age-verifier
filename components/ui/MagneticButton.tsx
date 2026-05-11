"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

type Props = {
  href?: string;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "ghost" | "dark";
  onClick?: () => void;
  strength?: number;
};

export default function MagneticButton({
  href,
  children,
  className = "",
  variant = "primary",
  onClick,
  strength = 24,
}: Props) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });

  const childX = useTransform(sx, (v) => v * 0.4);
  const childY = useTransform(sy, (v) => v * 0.4);

  const handleMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = ((e.clientX - cx) / (rect.width / 2)) * strength;
    const dy = ((e.clientY - cy) / (rect.height / 2)) * strength;
    x.set(dx);
    y.set(dy);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  const baseStyles =
    variant === "primary"
      ? "relative inline-flex items-center justify-center gap-2 rounded-lg bg-[#FF5C00] hover:bg-[#E04F00] text-white font-semibold px-6 py-3.5 glow-accent will-change-transform transition-colors"
      : variant === "dark"
      ? "relative inline-flex items-center justify-center gap-2 rounded-lg bg-ink-900 hover:bg-ink-800 text-white font-semibold px-6 py-3.5 will-change-transform transition-colors"
      : "relative inline-flex items-center justify-center gap-2 rounded-lg bg-white hover:bg-bg-tertiary text-ink-900 font-medium px-6 py-3.5 ring-1 ring-ink-100 will-change-transform transition-colors";

  const Inner = (
    <motion.span
      style={{ x: childX, y: childY }}
      className="relative z-10 inline-flex items-center gap-2"
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <motion.div style={{ x: sx, y: sy }} className="inline-block magnetic">
        <Link
          ref={ref as React.MutableRefObject<HTMLAnchorElement>}
          href={href}
          onMouseMove={handleMove}
          onMouseLeave={handleLeave}
          className={`${baseStyles} ${className}`}
        >
          {Inner}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div style={{ x: sx, y: sy }} className="inline-block magnetic">
      <button
        ref={ref as React.MutableRefObject<HTMLButtonElement>}
        onClick={onClick}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className={`${baseStyles} ${className}`}
      >
        {Inner}
      </button>
    </motion.div>
  );
}
