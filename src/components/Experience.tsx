import { experience } from "@/data/profile";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return (
    <section
      id="trajetoria"
      className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8 lg:py-20"
    >
      <SectionHeading index="03" kicker="Trajetória" title="Por onde passei" />

      <ol>
        {experience.map((item) => (
          <li
            key={item.period}
            className="reveal grid gap-x-10 gap-y-2 border-b border-line py-8 md:grid-cols-[9rem_1fr_1.3fr]"
          >
            <p className="pt-1.5 font-mono text-sm text-muted">{item.period}</p>
            <div>
              <h3 className="font-display text-2xl tracking-tight">
                {item.role}
              </h3>
              <p className="mt-1 text-sm text-muted">{item.company}</p>
            </div>
            <p className="leading-relaxed text-muted">{item.description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
