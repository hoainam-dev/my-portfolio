"use client";

import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  showWordmark?: boolean;
  size?: "sm" | "md" | "lg";
  variant?: "dark" | "light";
};

export const Logo: React.FC<LogoProps> = ({
  className,
  showWordmark = false,
  size = "sm",
  variant = "dark",
}) => {
  const mark = size === "lg" ? 72 : size === "md" ? 40 : 28;
  const isLight = variant === "light";
  const gradId = isLight ? "logo-grad-light" : "logo-grad-dark";
  const innerId = isLight ? "logo-inner-light" : "logo-inner-dark";

  return (
    <span className={cn("inline-flex items-center gap-2.5", className)} aria-label="Huynh Hoai Nam">
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
          {isLight ? (
            <>
              <linearGradient
                id={gradId}
                x1="4"
                y1="2"
                x2="36"
                y2="38"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#0EA5E9" />
                <stop offset="0.5" stopColor="#2563EB" />
                <stop offset="1" stopColor="#4F46E5" />
              </linearGradient>
              <linearGradient
                id={innerId}
                x1="12"
                y1="10"
                x2="28"
                y2="30"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FFFFFF" />
                <stop offset="1" stopColor="#DBEAFE" />
              </linearGradient>
            </>
          ) : (
            <>
              <linearGradient
                id={gradId}
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
                id={innerId}
                x1="12"
                y1="10"
                x2="28"
                y2="30"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#F8FAFC" />
                <stop offset="1" stopColor="#99F6E4" />
              </linearGradient>
            </>
          )}
        </defs>

        {/* Soft frame */}
        <rect
          x="1.5"
          y="1.5"
          width="37"
          height="37"
          rx="11"
          stroke={`url(#${gradId})`}
          strokeWidth="1.5"
          opacity="0.95"
        />
        <rect
          x="5"
          y="5"
          width="30"
          height="30"
          rx="8"
          fill={`url(#${gradId})`}
          opacity={isLight ? 0.92 : 0.12}
        />

        {/* Stylized N */}
        <path
          d="M13 28V12h2.4l8.2 11.4V12H28v16h-2.4L17.4 16.6V28H13Z"
          fill={isLight ? "#FFFFFF" : `url(#${innerId})`}
        />
        {/* Accent bar under N */}
        <path
          d="M13 30.5h14"
          stroke={isLight ? "#FFFFFF" : `url(#${gradId})`}
          strokeWidth="1.6"
          strokeLinecap="round"
          opacity={isLight ? 0.9 : 0.75}
        />
      </svg>

      {showWordmark && (
        <span
          className={cn(
            "font-display text-sm font-semibold tracking-tight",
            isLight ? "text-slate-900" : "text-white",
          )}
        >
          Hoai Nam
        </span>
      )}
    </span>
  );
};
