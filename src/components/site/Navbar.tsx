import { Link } from "@tanstack/react-router";
import { Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/75 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between container-pad">
        <Link to="/" className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Stethoscope className="h-4 w-4" />
          </span>
          <span className="text-base font-semibold tracking-tight">Caremint</span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
          <a href="#articles" className="link-underline hover:text-foreground">Articles</a>
          <a href="#how" className="link-underline hover:text-foreground">How it works</a>
          <a href="#doctors" className="link-underline hover:text-foreground">Doctors</a>
          <a href="#faq" className="link-underline hover:text-foreground">Pricing</a>
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="rounded-full px-4">
            <a href="#book">Book consultation</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
