import { Award, Clock, HardHat, MapPinned } from "lucide-react";
import { whyChooseUs } from "@/lib/content";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const icons = [HardHat, Award, Clock, MapPinned];

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-charcoal py-20 text-cream md:py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage: "url(/images/projects/golden-bc/golden-01.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-charcoal/85" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
        <AnimatedSection className="mb-14 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-copper">
            Construction Expertise
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold md:text-5xl">Why Choose Us</h2>
        </AnimatedSection>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((item, index) => {
            const Icon = icons[index] ?? HardHat;
            return (
              <AnimatedSection key={item.title} delay={index * 0.1}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition-colors hover:border-copper/40 hover:bg-white/10">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-sm bg-brand/20 text-brand">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-steel-light">{item.description}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
