export function LogoMark({ className = 'h-6 w-6' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 220 220"
      fill="none"
      role="img"
      aria-label="Tec-Deck"
    >
      <defs>
        <linearGradient
          id="tdg"
          x1="34"
          y1="40"
          x2="190"
          y2="180"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#34D399" />
          <stop offset="0.52" stopColor="#60A5FA" />
          <stop offset="1" stopColor="#A7F3D0" />
        </linearGradient>
        <mask id="cut">
          <rect width="220" height="220" fill="#fff" />
          <path
            d="M48 138c34 12 78 12 124 0"
            stroke="#000"
            strokeWidth="14"
            strokeLinecap="round"
          />
          <path
            d="M52 112c32 18 84 18 116 0"
            stroke="#000"
            strokeWidth="14"
            strokeLinecap="round"
          />
          <path
            d="M56 86c30 22 86 22 108 0"
            stroke="#000"
            strokeWidth="14"
            strokeLinecap="round"
          />
        </mask>
      </defs>

      <rect
        x="26"
        y="26"
        width="168"
        height="168"
        rx="44"
        fill="rgba(255,255,255,0.06)"
        stroke="rgba(255,255,255,0.18)"
      />
      <g mask="url(#cut)">
        <path
          d="M38 66c22-26 52-40 78-40s56 14 78 40"
          stroke="url(#tdg)"
          strokeWidth="16"
          strokeLinecap="round"
        />
        <path
          d="M30 110c28-40 64-60 86-60s58 20 86 60"
          stroke="url(#tdg)"
          strokeWidth="16"
          strokeLinecap="round"
          opacity="0.8"
        />
        <path
          d="M34 158c34-44 70-66 82-66s48 22 82 66"
          stroke="url(#tdg)"
          strokeWidth="16"
          strokeLinecap="round"
          opacity="0.6"
        />
      </g>
      <path
        d="M62 170c24-12 72-12 96 0"
        stroke="rgba(255,255,255,0.20)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

