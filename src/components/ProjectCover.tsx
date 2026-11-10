import type { CoverVariant } from "@/data/profile";

/**
 * Capas abstratas dos projetos, desenhadas em SVG — sem imagens externas.
 */
export function ProjectCover({
  variant,
  className,
}: {
  variant: CoverVariant;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 400 300"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
      className={className}
    >
      {covers[variant]}
    </svg>
  );
}

const petals = Array.from({ length: 12 }, (_, i) => i * 30);
const waves = [0, 1, 2, 3, 4, 5];

const covers: Record<CoverVariant, React.ReactNode> = {
  /* Girassol Pay — um girassol e um cartão */
  girassol: (
    <>
      <rect width="400" height="300" fill="var(--mustard)" />
      <g transform="rotate(-10 250 190)">
        <rect x="150" y="128" width="210" height="132" rx="18" fill="var(--vermilion)" />
        <rect x="174" y="154" width="38" height="28" rx="6" fill="var(--mustard)" />
        <rect x="174" y="220" width="96" height="9" rx="4.5" fill="var(--cream)" opacity="0.85" />
        <rect x="282" y="220" width="44" height="9" rx="4.5" fill="var(--cream)" opacity="0.5" />
      </g>
      <g transform="translate(124 118)">
        {petals.map((angle) => (
          <ellipse
            key={angle}
            cx="0"
            cy="-52"
            rx="15"
            ry="32"
            fill="var(--cream)"
            transform={`rotate(${angle})`}
          />
        ))}
        <circle r="34" fill="var(--night)" />
        <circle r="34" fill="none" stroke="var(--mustard)" strokeWidth="2" strokeDasharray="2 7" />
      </g>
    </>
  ),

  /* Atlas de Marés — lua e linhas de maré */
  mares: (
    <>
      <rect width="400" height="300" fill="var(--tide)" />
      <circle cx="300" cy="82" r="38" fill="var(--mustard)" />
      <circle cx="300" cy="82" r="58" fill="none" stroke="var(--mustard)" strokeWidth="1.5" opacity="0.45" />
      {waves.map((i) => (
        <path
          key={i}
          d={`M-20 ${150 + i * 26} q25 ${-16 + i * 2} 50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0`}
          fill="none"
          stroke="var(--cream)"
          strokeWidth={i === 2 ? 5 : 2.5}
          strokeLinecap="round"
          opacity={i === 2 ? 1 : 0.3 + i * 0.1}
        />
      ))}
      <g fill="var(--cream)" opacity="0.7">
        <circle cx="52" cy="58" r="3" />
        <circle cx="96" cy="92" r="2" />
        <circle cx="150" cy="48" r="2.5" />
        <circle cx="206" cy="100" r="2" />
      </g>
    </>
  ),

  /* Prontuário Aurora — um nascer do sol, uma ficha e um batimento */
  aurora: (
    <>
      <rect width="400" height="300" fill="var(--forest)" />
      <circle cx="96" cy="300" r="120" fill="var(--mustard)" />
      <circle cx="96" cy="300" r="78" fill="var(--vermilion)" />
      <g transform="rotate(5 270 150)">
        <rect x="186" y="46" width="168" height="208" rx="16" fill="var(--cream)" />
        <circle cx="218" cy="82" r="14" fill="var(--forest)" />
        <rect x="242" y="72" width="84" height="8" rx="4" fill="var(--night)" opacity="0.8" />
        <rect x="242" y="88" width="52" height="6" rx="3" fill="var(--night)" opacity="0.3" />
        <path
          d="M206 150 h34 l10 -26 l16 52 l12 -38 l8 12 h48"
          fill="none"
          stroke="var(--vermilion)"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect x="206" y="196" width="128" height="6" rx="3" fill="var(--night)" opacity="0.25" />
        <rect x="206" y="214" width="92" height="6" rx="3" fill="var(--night)" opacity="0.25" />
      </g>
    </>
  ),

  /* Feira Livre — frutas e folhas em grade */
  feira: (
    <>
      <rect width="400" height="300" fill="var(--vermilion)" />
      {/* linha de cima */}
      <circle cx="68" cy="98" r="36" fill="var(--mustard)" />
      <path d="M120 98 a36 36 0 0 1 72 0 Z" fill="var(--cream)" />
      <path d="M120 106 a36 36 0 0 0 72 0 Z" fill="var(--forest)" />
      <circle cx="244" cy="98" r="36" fill="var(--cream)" />
      <circle cx="244" cy="98" r="22" fill="none" stroke="var(--vermilion)" strokeWidth="3" strokeDasharray="3 8" />
      <path d="M296 98 q36 -44 72 0 q-36 44 -72 0 Z" fill="var(--forest)" />
      <path d="M302 98 h60" stroke="var(--cream)" strokeWidth="2.5" strokeLinecap="round" opacity="0.7" />
      {/* linha de baixo */}
      <path d="M32 202 q36 -44 72 0 q-36 44 -72 0 Z" fill="var(--cream)" />
      <circle cx="156" cy="202" r="36" fill="var(--night)" />
      <circle cx="156" cy="202" r="12" fill="var(--mustard)" />
      <path d="M208 220 a36 36 0 0 1 72 0 Z" fill="var(--mustard)" />
      <rect x="208" y="226" width="72" height="8" rx="4" fill="var(--cream)" />
      <circle cx="332" cy="202" r="36" fill="var(--mustard)" />
      <path d="M332 166 q14 -18 30 -14 q-2 18 -30 14 Z" fill="var(--forest)" />
    </>
  ),
};
