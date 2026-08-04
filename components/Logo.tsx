"use client";

import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  showWordmark?: boolean;
  size?: "sm" | "md";
};

export default function Logo({
  className,
  showWordmark = false,
  size = "sm",
}: LogoProps) {
  const mark = size === "sm" ? 28 : 40;

  return (
    <span
      className={cn("inline-flex items-center gap-2.5", className)}
      aria-label="Huynh Hoai Nam"
    >
      <svg
        width={mark}
        height={mark}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id="logo-grad"
            x1="4"
            y1="2"
            x2="36"
            y2="38"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#5EEAD4" />
            <stop offset="0.55" stopColor="#2DD4BF" />
            <stop offset="1" stopColor="#38BDF8" />
          </linearGradient>
          <linearGradient
            id="logo-inner"
            x1="12"
            y1="10"
            x2="28"
            y2="30"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F8FAFC" />
            <stop offset="1" stopColor="#99F6E4" />
          </linearGradient>
        </defs>

        {/* Soft frame */}
        <rect
          x="1.5"
          y="1.5"
          width="37"
          height="37"
          rx="11"
          stroke="url(#logo-grad)"
          strokeWidth="1.5"
          opacity="0.9"
        />
        <rect
          x="5"
          y="5"
          width="30"
          height="30"
          rx="8"
          fill="url(#logo-grad)"
          opacity="0.12"
        />

        {/* Stylized N — dual stroke suggesting FE / BE layers */}
        <path
          d="M13 28V12h2.4l8.2 11.4V12H28v16h-2.4L17.4 16.6V28H13Z"
          fill="url(#logo-inner)"
        />
        {/* Accent bar under N */}
        <path
          d="M13 30.5h14"
          stroke="url(#logo-grad)"
          strokeWidth="1.6"
          strokeLinecap="round"
          opacity="0.75"
        />
      </svg>

      {showWordmark && (
        <span className="font-display text-sm font-semibold tracking-tight text-white">
          Hoai Nam
        </span>
      )}
    </span>
  );
}
