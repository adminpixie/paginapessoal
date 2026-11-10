import { testimonials } from "@/data/profile";
import { SectionHeading } from "./SectionHeading";

const tones = {
  mustard: "bg-mustard text-night",
  forest: "bg-forest text-cream",
  tide: "bg-tide text-cream",
} as const;

export function Testimonials() {
  return (
    <section
      id="depoimentos"
      className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8 lg:py-20"
    >
      <SectionHeading
        index="04"
        kicker="Depoimentos"
        title="Quem já dividiu a mesa comigo"
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {testimonials.map((item) => (
          <figure
            key={item.name}
            className="reveal flex flex-col justify-between rounded-2xl border border-line bg-card p-7"
          >
            <blockquote>
              <span
                aria-hidden="true"
                className="block h-8 font-display text-6xl leading-none text-accent"
              >
                “
              </span>
              <p className="mt-3 font-display text-xl leading-snug">
                {item.quote}
              </p>
            </blockquote>

            <figcaption className="mt-8 flex items-center gap-3">
              <span
                aria-hidden="true"
                className={`grid size-11 shrink-0 place-items-center rounded-full font-mono text-xs ${tones[item.tone]}`}
              >
                {item.initials}
              </span>
              <span>
                <span className="block font-medium">{item.name}</span>
                <span className="block text-sm text-muted">{item.role}</span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
