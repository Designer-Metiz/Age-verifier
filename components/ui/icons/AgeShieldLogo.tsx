type Props = {
  className?: string;
  /** When true, render with deep purple shield (for light backgrounds);
   *  default uses orange gradient (for dark backgrounds) */
  variant?: "purple" | "orange";
};

export default function AgeShieldLogo({
  className = "h-9 w-9",
  variant = "orange",
}: Props) {
  const id = `ag-grad-${variant}`;
  const stops =
    variant === "purple"
      ? { from: "#2A2273", to: "#1A1553" }
      : { from: "#FF5C00", to: "#FF8E40" };

  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="AgeShield"
    >
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={stops.from} />
          <stop offset="100%" stopColor={stops.to} />
        </linearGradient>
      </defs>

      {/* Shield silhouette */}
      <path
        d="M16 2.5L4.5 6.2v8c0 7.4 4.9 13.5 11.5 16.3 6.6-2.8 11.5-8.9 11.5-16.3v-8L16 2.5z"
        fill={`url(#${id})`}
      />

      {/* Inner soft highlight */}
      <path
        d="M16 4.4L6.4 7.5v6.7c0 6.2 4 11.4 9.6 13.7 5.6-2.3 9.6-7.5 9.6-13.7V7.5L16 4.4z"
        fill="white"
        fillOpacity="0.08"
      />

      {/* "21+" age mark */}
      <text
        x="16"
        y="20.5"
        textAnchor="middle"
        fill="white"
        fontSize="10.5"
        fontWeight="800"
        fontFamily="ui-sans-serif, system-ui, -apple-system, Inter, sans-serif"
        letterSpacing="-0.04em"
      >
        21+
      </text>
    </svg>
  );
}
