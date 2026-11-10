import { nav, profile } from "@/data/profile";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-6 px-5 sm:px-8">
        <a href="#topo" className="flex items-center gap-3">
          <span className="grid size-9 place-items-center rounded-full bg-ink font-mono text-xs tracking-wider text-paper">
            {profile.initials}
          </span>
          <span className="font-display text-lg tracking-tight">
            {profile.name}
          </span>
        </a>

        <nav aria-label="Seções da página" className="hidden md:block">
          <ul className="flex items-center gap-8 text-sm text-muted">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="transition-colors hover:text-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="#contato"
          className="rounded-full bg-ink px-4 py-2 text-sm font-medium whitespace-nowrap text-paper transition-colors hover:bg-accent hover:text-accent-ink"
        >
          Vamos conversar
        </a>
      </div>
    </header>
  );
}
