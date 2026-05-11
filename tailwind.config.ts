import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // EXACT cookieshield surfaces
        bg: {
          DEFAULT: "#FFFFFF",
          secondary: "#F9FAFB",
          tertiary: "#F4F5F7",
          elevated: "#FFFFFF",
          dark: "#0B0B12",
        },
        ink: {
          50: "#F4F5F7",
          100: "#E2E5EA",
          200: "#C9CDD5",
          300: "#9AA0AC",
          400: "#6E747F",
          500: "#4D4D4D",   // cookieshield body text — exact
          600: "#333333",
          700: "#262626",
          800: "#1F1F1F",
          900: "#1C1C1C",   // cookieshield heading text — exact
          950: "#0A0A0A",
        },
        // Brand: cookieshield deep purple + electric indigo
        brand: {
          50: "#EFEEFB",
          100: "#DBDAF7",
          200: "#B5B2EE",
          300: "#8C88E1",
          400: "#5C5CCF",
          500: "#2A22FF",   // electric indigo
          600: "#2A2273",   // deep purple — primary
          700: "#1F1A57",
          800: "#1A1553",
          900: "#13104A",
        },
        // Accent: signature orange (cookieshield CTA color)
        accent: {
          50: "#FFF1E6",
          100: "#FFDDC2",
          200: "#FFB680",
          300: "#FF8E40",
          400: "#FF7320",
          500: "#FF5C00",   // exact CTA orange
          600: "#E04F00",
          700: "#B33F00",
        },
        soft: {
          purple: "#A29CD6",
        },
      },
      fontFamily: {
        sans: [
          "Poppins",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        display: [
          "Poppins",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "Segoe UI",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "monospace",
        ],
      },
      fontSize: {
        "display-2xl": [
          "clamp(3rem, 7.5vw, 6.5rem)",
          { lineHeight: "1.02", letterSpacing: "-0.035em" },
        ],
        "display-xl": [
          "clamp(2.5rem, 5.5vw, 5rem)",
          { lineHeight: "1.05", letterSpacing: "-0.03em" },
        ],
        "display-lg": [
          "clamp(2rem, 4.5vw, 3.75rem)",
          { lineHeight: "1.08", letterSpacing: "-0.025em" },
        ],
        "display-md": [
          "clamp(1.75rem, 3.2vw, 2.75rem)",
          { lineHeight: "1.15", letterSpacing: "-0.02em" },
        ],
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-slow": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(8px, -16px)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.8)", opacity: "0.7" },
          "100%": { transform: "scale(2.4)", opacity: "0" },
        },
        "grid-pan": {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "60px 60px" },
        },
        "mesh-1": {
          "0%, 100%": { transform: "translate(0,0) scale(1)" },
          "50%": { transform: "translate(40px, -30px) scale(1.1)" },
        },
        "mesh-2": {
          "0%, 100%": { transform: "translate(0,0) scale(1)" },
          "50%": { transform: "translate(-30px, 40px) scale(1.05)" },
        },
        "mesh-3": {
          "0%, 100%": { transform: "translate(0,0) scale(1)" },
          "50%": { transform: "translate(-20px, -50px) scale(1.15)" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards",
        marquee: "marquee 28s linear infinite",
        "marquee-slow": "marquee-slow 50s linear infinite",
        shimmer: "shimmer 3s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 12s ease-in-out infinite",
        "pulse-ring":
          "pulse-ring 2.4s cubic-bezier(0.215, 0.61, 0.355, 1) infinite",
        "grid-pan": "grid-pan 20s linear infinite",
        "mesh-1": "mesh-1 14s ease-in-out infinite",
        "mesh-2": "mesh-2 18s ease-in-out infinite",
        "mesh-3": "mesh-3 22s ease-in-out infinite",
        "spin-slow": "spin-slow 24s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
