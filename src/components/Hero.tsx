import { profile, stats } from "@/data/profile";
import { CopyEmailButton } from "./CopyEmailButton";
import { Portrait } from "./Portrait";

export function Hero() {
  const { before, highlight, after } = profile.headline;

  return (
    <section id="topo" className="mx-auto w-full max-w-6xl px-5 sm:px-8">
      <div className="grid items-center gap-14 pt-12 pb-16 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16 lg:pt-20 lg:pb-24">
        <div>
          <p className="animate-rise font-mono text-xs uppercase leading-relaxed tracking-[0.16em] text-muted">
            {profile.name} <span className="text-accent">—</span> {profile.role}
          </p>

          <h1 className="mt-6 animate-rise font-display text-[clamp(2.9rem,8.4vw,6rem)] leading-[0.96] font-light tracking-[-0.03em] text-balance [animation-delay:90ms]">
            {before} <em className="font-normal text-accent">{highlight}</em>{" "}
            {after}
          </h1>

          <p className="mt-8 max-w-xl animate-rise text-lg leading-relaxed text-muted [animation-delay:180ms]">
            {profile.intro}
          </p>

          <div className="mt-9 flex animate-rise flex-wrap items-center gap-3 [animation-delay:270ms]">
            <a
              href="#trabalhos"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 font-medium text-paper transition-colors hover:bg-accent hover:text-accent-ink"
            >
              Ver trabalhos
              <span aria-hidden="true">↓</span>
            </a>
            <CopyEmailButton
              email={profile.email}
              className="inline-flex cursor-pointer items-center gap-3 rounded-full border border-line px-6 py-3 font-medium transition-colors hover:border-ink"
            />
          </div>

          <p className="mt-7 flex animate-rise items-center gap-3 text-sm text-muted [animation-delay:360ms]">
            <span className="relative flex size-2 shrink-0">
              <span className="absolute inline-flex size-full rounded-full bg-accent opacity-60 motion-safe:animate-ping" />
              <span className="relative inline-flex size-2 rounded-full bg-accent" />
            </span>
            {profile.availability}
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-xs animate-rise [animation-delay:200ms] lg:max-w-none">
          <div className="overflow-hidden rounded-t-full rounded-b-[2rem] border border-line">
            <Portrait className="block aspect-[4/5] w-full" />
          </div>

          <p className="absolute -bottom-4 left-4 flex items-center gap-2 rounded-full border border-line bg-card px-4 py-2 text-sm shadow-sm">
            <svg
              viewBox="0 0 16 16"
              aria-hidden="true"
              className="size-4 text-accent"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M8 14.5s4.5-4 4.5-7.6a4.5 4.5 0 1 0-9 0C3.5 10.5 8 14.5 8 14.5Z" />
              <circle cx="8" cy="6.8" r="1.6" />
            </svg>
            {profile.location}
          </p>

          <RotatingBadge className="absolute -top-3 -right-3 size-24 sm:size-28 lg:-right-8" />
        </div>
      </div>

      <dl className="grid grid-cols-2 border-t border-line md:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="reveal flex flex-col-reverse justify-end gap-2 border-b border-line py-7 pr-6 md:border-b-0"
          >
            <dt className="max-w-[14rem] text-sm leading-snug text-muted">
              {stat.label}
            </dt>
            <dd className="font-display text-5xl font-light tracking-tight sm:text-6xl">
              {stat.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

function RotatingBadge({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" aria-hidden="true" className={className}>
      <circle cx="60" cy="60" r="60" fill="var(--ink)" />
      <g className="origin-center motion-safe:animate-turn">
        <defs>
          <path
            id="badge-circle"
            d="M60 60 m-43 0 a43 43 0 1 1 86 0 a43 43 0 1 1 -86 0"
          />
        </defs>
        <text
          fill="var(--paper)"
          fontSize="10.5"
          fontFamily="var(--font-geist-mono), monospace"
          letterSpacing="2"
        >
          <textPath href="#badge-circle" textLength="264" lengthAdjust="spacing">
            DESIGN · CÓDIGO · PESQUISA ·
          </textPath>
        </text>
      </g>
      <path
        d="M60 42v36M42 60h36M47.3 47.3l25.4 25.4M72.7 47.3L47.3 72.7"
        stroke="var(--accent)"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
