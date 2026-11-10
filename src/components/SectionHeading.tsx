export function SectionHeading({
  index,
  kicker,
  title,
  children,
}: {
  index: string;
  kicker: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <header className="reveal flex flex-col gap-5 border-b border-line pb-8 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
          <span className="text-accent">{index}</span> / {kicker}
        </p>
        <h2 className="mt-4 font-display text-4xl font-light tracking-[-0.02em] text-balance sm:text-5xl">
          {title}
        </h2>
      </div>
      {children ? (
        <p className="max-w-sm leading-relaxed text-muted">{children}</p>
      ) : null}
    </header>
  );
}
