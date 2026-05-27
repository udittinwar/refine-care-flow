import { Stethoscope } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 py-10 md:grid-cols-4 container-pad">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Stethoscope className="h-4 w-4" />
            </span>
            <span className="text-sm font-semibold">Caremint</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            Premium teleconsultation and clinician-written health writing.
          </p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-wider text-muted-foreground">Product</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="#how" className="hover:text-primary">How it works</a></li>
            <li><a href="#doctors" className="hover:text-primary">Doctors</a></li>
            <li><a href="#articles" className="hover:text-primary">Articles</a></li>
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-wider text-muted-foreground">Company</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="#" className="hover:text-primary">About</a></li>
            <li><a href="#" className="hover:text-primary">Careers</a></li>
            <li><a href="#" className="hover:text-primary">Press</a></li>
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-wider text-muted-foreground">Newsletter</div>
          <form
            className="mt-3 flex items-center gap-2"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="you@email.com"
              className="w-full rounded-full border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/15"
            />
            <button className="rounded-full bg-primary px-3 py-2 text-sm font-medium text-primary-foreground transition hover:bg-primary/90">
              Join
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-border/70 py-4">
        <div className="mx-auto flex max-w-6xl items-center justify-between text-xs text-muted-foreground container-pad">
          <span>© 2026 Caremint Health, Inc.</span>
          <span>Privacy · Terms</span>
        </div>
      </div>
    </footer>
  );
}
