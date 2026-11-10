import { projects } from "@/data/profile";
import { ProjectCover } from "./ProjectCover";
import { SectionHeading } from "./SectionHeading";

export function Projects() {
  return (
    <section
      id="trabalhos"
      className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8 lg:py-20"
    >
      <SectionHeading index="01" kicker="Trabalhos" title="Projetos selecionados">
        Quatro histórias de produtos que ficaram mais simples — e dos números
        que mudaram junto.
      </SectionHeading>

      <div className="mt-12 grid gap-x-10 gap-y-14 md:grid-cols-2">
        {projects.map((project) => (
          <article key={project.title} className="group reveal md:even:mt-20">
            <div className="overflow-hidden rounded-2xl border border-line">
              <ProjectCover
                variant={project.cover}
                className="block aspect-[4/3] w-full transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
            </div>

            <div className="mt-6 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="font-display text-3xl tracking-tight">
                {project.title}
              </h3>
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
                {project.client} · {project.year}
              </p>
            </div>

            <p className="mt-3 leading-relaxed text-muted">
              {project.description}
            </p>

            <p className="mt-5 flex items-center gap-2 font-medium">
              <span aria-hidden="true" className="text-accent">
                ↗
              </span>
              {project.result}
            </p>

            <ul className="mt-5 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-line px-3 py-1 text-sm text-muted"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
