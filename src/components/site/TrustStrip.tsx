const logos = ["Mayo Clinic", "Johns Hopkins", "Cleveland Clinic", "Stanford Health", "Mount Sinai", "Kaiser"];

export function TrustStrip() {
  return (
    <section className="border-y border-border/60 bg-card/50">
      <div className="mx-auto max-w-6xl py-6 container-pad">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 md:justify-between">
          <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Featured in</span>
          {logos.map((l) => (
            <span key={l} className="text-sm font-medium text-muted-foreground/80">{l}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
