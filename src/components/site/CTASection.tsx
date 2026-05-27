import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section id="book" className="py-14 md:py-20">
      <div className="mx-auto max-w-6xl container-pad">
        <div className="reveal gradient-band relative overflow-hidden rounded-3xl border border-border p-8 md:p-12">
          <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-[1fr_auto]">
            <div>
              <h2 className="text-3xl md:text-4xl">Ready when you are.</h2>
              <p className="mt-2 max-w-xl text-sm text-muted-foreground md:text-base">
                Most patients are talking to a doctor within 10 minutes. No waiting rooms, no insurance maze — just clear, calm care.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Button size="lg" className="group rounded-full px-5">
                Book consultation
                <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
              <a href="#articles" className="text-sm font-medium text-foreground link-underline">
                or browse articles
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
