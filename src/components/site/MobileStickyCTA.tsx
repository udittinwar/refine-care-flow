import { Button } from "@/components/ui/button";

export function MobileStickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-3 z-40 px-4 md:hidden">
      <div className="mx-auto flex max-w-md items-center justify-between gap-3 rounded-full border border-border bg-card/95 p-1.5 pl-4 shadow-xl backdrop-blur">
        <span className="text-sm font-medium">Talk to a doctor today</span>
        <Button asChild size="sm" className="rounded-full">
          <a href="#book">Book</a>
        </Button>
      </div>
    </div>
  );
}
