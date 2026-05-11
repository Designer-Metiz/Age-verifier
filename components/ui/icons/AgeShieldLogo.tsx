type Props = {
  className?: string;
  /** "purple" for light backgrounds, "orange" for dark backgrounds */
  variant?: "purple" | "orange";
};

export default function AgeShieldLogo({
  className = "h-9 w-9",
  variant = "orange",
}: Props) {
  const main = variant === "purple" ? "#2A2273" : "#FF5C00";
  const accent = variant === "purple" ? "#FF5C00" : "#FFB680";

  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="AgeShield"
    >
      {/* Shield silhouette — refined geometry */}
      <path
        d="M24 4 L40 9 L40 22 C 40 32, 33 39.5, 24 43 C 15 39.5, 8 32, 8 22 L 8 9 Z"
        fill={main}
      />

      {/* Subtle inner highlight band (flat tone, not gradient) */}
      <path
        d="M24 4 L40 9 L40 22 C 40 25, 39.4 27.7, 38.3 30.2 C 32 25, 32 13, 32 11 C 29.5 10.2, 26.7 9.4, 24 8.5 C 21.3 9.4, 18.5 10.2, 16 11 C 16 13, 16 25, 9.7 30.2 C 8.6 27.7, 8 25, 8 22 L 8 9 Z"
        fill="white"
        fillOpacity="0.08"
      />

      {/* Accent stripe at top — adds character */}
      <path
        d="M24 4 L40 9 L40 11 L24 6 L8 11 L8 9 Z"
        fill={accent}
      />

      {/* "21+" wordmark — Poppins extrabold to match brand */}
      <text
        x="24"
        y="29"
        textAnchor="middle"
        fill="white"
        fontSize="14"
        fontWeight="800"
        fontFamily="Poppins, Inter, ui-sans-serif, system-ui, sans-serif"
        letterSpacing="-0.04em"
      >
        21+
      </text>
    </svg>
  );
}
