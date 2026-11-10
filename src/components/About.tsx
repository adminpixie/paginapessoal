import { profile, services, toolbox } from "@/data/profile";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section
      id="sobre"
      className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8 lg:py-20"
    >
      <SectionHeading
        index="02"
        kicker="Sobre"
        title="Metade prancheta, metade terminal."
      />

      <div className="mt-12 grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <div className="reveal">
          <p className="font-display text-2xl leading-snug sm:text-[1.75rem]">
            {profile.about.lead}
          </p>
          {profile.about.body.map((paragraph) => (
            <p key={paragraph} className="mt-6 leading-relaxed text-muted">
              {paragraph}
            </p>
          ))}

          <h3 className="mt-10 font-mono text-xs uppercase tracking-[0.18em] text-muted">
            Caixa de ferramentas
          </h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {toolbox.map((tool) => (
              <li
                key={tool}
                className="rounded-full border border-line px-3 py-1 text-sm"
              >
                {tool}
              </li>
            ))}
          </ul>
        </div>

        <div className="reveal">
          <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
            Como posso ajudar
          </h3>
          <ol className="mt-4">
            {services.map((service, i) => (
              <li
                key={service.title}
                className="grid grid-cols-[2.5rem_1fr] gap-4 border-t border-line py-7 last:border-b"
              >
                <span className="pt-2 font-mono text-xs text-accent">
                  0{i + 1}
                </span>
                <div>
                  <h4 className="font-display text-2xl tracking-tight">
                    {service.title}
                  </h4>
                  <p className="mt-2 leading-relaxed text-muted">
                    {service.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
