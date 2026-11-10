/**
 * Retrato ilustrado (e inventado) — nenhuma foto de pessoa real é usada.
 * As cores vêm da paleta fixa definida em globals.css.
 */
export function Portrait({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 500"
      role="img"
      aria-label="Ilustração geométrica de uma mulher de cabelo curto e óculos redondos"
      preserveAspectRatio="xMidYMid slice"
      className={className}
    >
      <rect width="400" height="500" fill="var(--mustard)" />

      {/* sol e horizonte */}
      <circle cx="86" cy="150" r="46" fill="var(--vermilion)" />
      <path
        d="M0 372 q50 -26 100 0 t100 0 t100 0 t100 0 V500 H0 Z"
        fill="var(--tide)"
        opacity="0.22"
      />

      {/* cabelo (parte de trás) */}
      <path
        d="M104 268 C100 158 146 98 206 98 C266 98 306 156 302 262 L302 318 C302 334 290 344 276 344 L130 344 C116 344 104 334 104 318 Z"
        fill="var(--night)"
      />

      {/* pescoço */}
      <rect x="176" y="292" width="56" height="96" rx="24" fill="#c98b66" />

      {/* ombros */}
      <path
        d="M48 500 C48 418 112 368 204 368 C296 368 356 418 356 500 Z"
        fill="var(--forest)"
      />
      <path
        d="M170 370 Q204 410 238 370"
        fill="none"
        stroke="var(--cream)"
        strokeWidth="6"
        strokeLinecap="round"
      />

      {/* rosto */}
      <ellipse cx="204" cy="238" rx="70" ry="84" fill="#e2aa82" />

      {/* franja */}
      <path
        d="M132 232 C128 164 170 132 212 134 C254 136 280 170 276 226 C244 214 206 196 186 164 C176 196 158 220 132 232 Z"
        fill="var(--night)"
      />

      {/* óculos */}
      <g fill="none" stroke="var(--night)" strokeWidth="5" strokeLinecap="round">
        <circle cx="176" cy="246" r="23" fill="rgb(244 239 230 / 0.28)" />
        <circle cx="234" cy="246" r="23" fill="rgb(244 239 230 / 0.28)" />
        <path d="M199 244 q6 -5 12 0" />
        <path d="M153 242 l-16 -6" />
        <path d="M257 242 l16 -6" />
      </g>

      {/* sorriso */}
      <path
        d="M188 288 q17 13 34 0"
        fill="none"
        stroke="var(--night)"
        strokeWidth="4.5"
        strokeLinecap="round"
      />

      {/* brinco */}
      <circle cx="136" cy="276" r="7" fill="var(--cream)" />
    </svg>
  );
}
