import { faqs } from "@/lib/content";
import { Accordion } from "@/components/ui/Accordion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function FAQ() {
  return (
    <section className="bg-sand py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-2 md:px-8 lg:gap-20">
        <AnimatedSection>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-copper">FAQ</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-charcoal md:text-5xl">
            Questions we hear most often
          </h2>
          <p className="mt-4 text-steel leading-relaxed">
            Can&apos;t find what you need? Reach out and we&apos;ll get you answers quickly.
          </p>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <Accordion items={faqs} />
        </AnimatedSection>
      </div>
    </section>
  );
}
