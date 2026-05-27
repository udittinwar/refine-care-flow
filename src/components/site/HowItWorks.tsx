import { MessageSquareText, UserCheck, ClipboardCheck } from "lucide-react";

const steps = [
  {
    icon: MessageSquareText,
    title: "Describe what's happening",
    body: "Answer a few quick questions about your symptoms. Takes under two minutes.",
  },
  {
    icon: UserCheck,
    title: "Match with a specialist",
    body: "We pair you with a board-certified doctor in your time zone, usually within ten minutes.",
  },
  {
    icon: ClipboardCheck,
    title: "Get a clear care plan",
    body: "Walk away with a treatment plan, prescriptions if needed, and follow-up included.",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="py-14 md:py-20">
      <div className="mx-auto max-w-6xl container-pad">
        <div className="reveal max-w-2xl">
          <span className="text-xs uppercase tracking-[0.18em] text-primary">How it works</span>
          <h2 className="mt-2 text-3xl md:text-4xl">Care that fits into your day, not the other way around.</h2>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 md:mt-10 md:grid-cols-3 md:gap-5">
          {steps.map((s, i) => (
            <div
              key={s.title}
              className="reveal card-hover relative overflow-hidden rounded-2xl border border-border bg-card p-5 md:p-6"
            >
              <span className="absolute right-5 top-5 text-xs font-medium text-muted-foreground/70">
                0{i + 1}
              </span>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-xl">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
