import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { TrustStrip } from "@/components/site/TrustStrip";
import { HowItWorks } from "@/components/site/HowItWorks";
import { Doctors } from "@/components/site/Doctors";
import { BlogGrid } from "@/components/site/BlogGrid";
import { CTASection } from "@/components/site/CTASection";
import { Footer } from "@/components/site/Footer";
import { MobileStickyCTA } from "@/components/site/MobileStickyCTA";
import { useReveal } from "@/hooks/useReveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Caremint — Premium teleconsultation & clinician-written health writing" },
      {
        name: "description",
        content:
          "Talk to a board-certified doctor in minutes. Clear care, fair prices, and clinician-written articles on sleep, nutrition, and everyday health.",
      },
      { property: "og:title", content: "Caremint — Premium teleconsultation" },
      {
        property: "og:description",
        content: "Board-certified doctors, fast consultations, plain-English health writing.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  useReveal();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <HowItWorks />
        <Doctors />
        <BlogGrid />
        <CTASection />
      </main>
      <Footer />
      <MobileStickyCTA />
    </div>
  );
}
