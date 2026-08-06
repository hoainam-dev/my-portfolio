"use client";

export function PrefsBootLoader() {
  return (
    <div
      className="prefs-boot-loader"
      role="status"
      aria-live="polite"
      aria-busy="true"
      aria-label="Loading"
    >
      <svg
        className="boot-logo"
        width="88"
        height="88"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id="boot-logo-grad"
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
            id="boot-logo-inner"
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

        <rect
          className="boot-logo__frame"
          x="1.5"
          y="1.5"
          width="37"
          height="37"
          rx="11"
          stroke="url(#boot-logo-grad)"
          strokeWidth="1.5"
          pathLength="1"
        />

        <rect
          className="boot-logo__panel"
          x="5"
          y="5"
          width="30"
          height="30"
          rx="8"
          fill="url(#boot-logo-grad)"
        />

        <g className="boot-logo__n">
          <path
            d="M13 28V12h2.4l8.2 11.4V12H28v16h-2.4L17.4 16.6V28H13Z"
            fill="url(#boot-logo-inner)"
          />
        </g>

        <path
          className="boot-logo__accent"
          d="M13 30.5h14"
          stroke="url(#boot-logo-grad)"
          strokeWidth="1.6"
          strokeLinecap="round"
          pathLength="1"
        />
      </svg>
    </div>
  );
}
