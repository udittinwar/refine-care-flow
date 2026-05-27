import { BadgeCheck } from "lucide-react";
import { doctors } from "@/data/doctors";

export function Doctors() {
  return (
    <section id="doctors" className="bg-card/40 py-14 md:py-20">
      <div className="mx-auto max-w-6xl container-pad">
        <div className="reveal flex items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.18em] text-primary">Your care team</span>
            <h2 className="mt-2 text-3xl md:text-4xl">Board-certified specialists, vetted twice.</h2>
            <p className="mt-2 text-sm text-muted-foreground md:text-base">
              Every doctor on Caremint is licensed in your state, credential-verified, and reviewed quarterly by our medical board.
            </p>
          </div>
          <a href="#doctors" className="hidden text-sm font-medium text-primary hover:underline md:block">
            See all 240+ →
          </a>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 md:mt-10 md:grid-cols-4 md:gap-5">
          {doctors.map((d) => (
            <div
              key={d.name}
              className="reveal group card-hover overflow-hidden rounded-2xl border border-border bg-card"
            >
              <div className="aspect-[4/5] overflow-hidden bg-muted">
                <img
                  src={d.image}
                  alt={d.name}
                  loading="lazy"
                  width={640}
                  height={800}
                  className="img-zoom h-full w-full object-cover"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center gap-1.5">
                  <span className="text-sm font-semibold">{d.name}</span>
                  <BadgeCheck className="h-4 w-4 text-primary" />
                </div>
                <div className="text-xs text-muted-foreground">{d.specialty}</div>
                <div className="mt-1 text-xs text-muted-foreground/80">{d.credentials}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
