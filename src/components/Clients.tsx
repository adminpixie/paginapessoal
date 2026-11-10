import { clients } from "@/data/profile";
import { Spark } from "./Spark";

export function Clients() {
  return (
    <section
      aria-labelledby="clientes-titulo"
      className="mt-4 border-y border-line"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-x-8 gap-y-3 px-5 py-6 sm:px-8 md:grid-cols-[auto_1fr]">
        <h2
          id="clientes-titulo"
          className="font-mono text-xs uppercase tracking-[0.18em] text-muted"
        >
          Já desenhei para
        </h2>

        <div className="group flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-max shrink-0 group-hover:[animation-play-state:paused] motion-safe:animate-marquee">
            {[0, 1].map((copy) => (
              <ul
                key={copy}
                aria-hidden={copy === 1}
                className="flex shrink-0 items-center"
              >
                {clients.map((client) => (
                  <li
                    key={client}
                    className="flex items-center font-display text-2xl whitespace-nowrap italic"
                  >
                    <span className="px-7">{client}</span>
                    <Spark className="size-4 text-accent" />
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
