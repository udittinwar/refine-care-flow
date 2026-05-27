import { ArrowRight, ShieldCheck, Star, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import hero from "@/assets/hero-doctor.jpg";

export function Hero() {
  return (
    <section className="relative overflow-hidden gradient-soft">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 pt-10 pb-14 md:grid-cols-2 md:gap-12 md:pt-16 md:pb-20 container-pad">
        <div className="reveal">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
            Trusted by 80,000+ patients
          </span>

          <h1 className="mt-4 text-[2.5rem] leading-[1.05] tracking-tight md:text-6xl">
            Premium healthcare, <em className="font-serif italic text-primary">on your time</em>.
          </h1>

          <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Talk to a board-certified doctor in minutes. Clear answers, fair prices, no waiting rooms — designed for the way you actually live.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Button asChild size="lg" className="group rounded-full px-5">
              <a href="#book">
                Book consultation
                <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </Button>
            <Button asChild size="lg" variant="ghost" className="rounded-full px-5">
              <a href="#articles">Browse articles</a>
            </Button>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Star className="h-4 w-4 fill-primary text-primary" />
              <span className="font-medium text-foreground">4.9</span>
              <span>· 12k reviews</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-primary" />
              <span>HIPAA secure</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-primary" />
              <span>Avg. 7 min response</span>
            </div>
          </div>
        </div>

        <div className="relative reveal">
          <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-accent to-transparent blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-card shadow-[0_30px_80px_-30px_oklch(0.21_0.045_265/0.25)]">
            <img
              src={hero}
              alt="Doctor consulting via tablet"
              width={1024}
              height={1024}
              className="aspect-[4/5] w-full object-cover md:aspect-[5/6]"
            />
          </div>

          {/* Floating stat card */}
          <div className="absolute -bottom-5 -left-4 hidden w-64 rounded-2xl border border-border bg-card/95 p-4 shadow-xl backdrop-blur md:block">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div className="text-sm">
                <div className="font-semibold text-foreground">Board-certified</div>
                <div className="text-muted-foreground">240+ specialists online</div>
              </div>
            </div>
          </div>

          <div className="absolute -right-3 top-6 hidden rounded-2xl border border-border bg-card/95 px-4 py-3 shadow-lg backdrop-blur md:block">
            <div className="text-xs uppercase tracking-wider text-muted-foreground">Next opening</div>
            <div className="text-sm font-semibold text-foreground">Today · 14:25</div>
          </div>
        </div>
      </div>
    </section>
  );
}
