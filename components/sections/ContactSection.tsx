import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { company } from "@/lib/content";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

type ContactSectionProps = {
  variant?: "preview" | "full";
};

export function ContactSection({ variant = "preview" }: ContactSectionProps) {
  return (
    <section id="contact" className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <AnimatedSection className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">Contact Us</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-charcoal md:text-5xl">
            {variant === "full"
              ? "Don't miss out on getting things done right."
              : "Contact us today and let's start building!"}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-steel">
            Call or email us about your project — we&apos;ll respond with next steps and a free estimate.
          </p>
        </AnimatedSection>

        <AnimatedSection>
          <div className="space-y-6 rounded-2xl bg-charcoal p-8 text-cream md:p-10">
            <h3 className="font-display text-2xl font-semibold">Get in touch</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-sm bg-brand text-cream">
                  <Phone className="h-4 w-4" />
                </span>
                <a href={`tel:${company.phone.replace(/\D/g, "")}`} className="hover:text-brand">
                  {company.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-sm bg-brand text-cream">
                  <Mail className="h-4 w-4" />
                </span>
                <a href={`mailto:${company.email}`} className="hover:text-brand">
                  {company.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-sm bg-brand text-cream">
                  <MapPin className="h-4 w-4" />
                </span>
                <span>
                  {company.address}
                  <br />
                  {company.location}
                </span>
              </li>
            </ul>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={`tel:${company.phone.replace(/\D/g, "")}`}
                className="rounded-sm bg-brand px-6 py-3 text-sm font-semibold uppercase tracking-wider text-cream transition-colors hover:bg-brand-light"
              >
                Call now
              </a>
              <a
                href={`mailto:${company.email}`}
                className="rounded-sm border border-cream/30 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-cream transition-colors hover:border-brand hover:text-brand"
              >
                Email us
              </a>
            </div>

            {variant === "preview" && (
              <Link
                href="/contact"
                className="inline-block pt-2 text-sm font-semibold uppercase tracking-wider text-brand hover:text-brand-light"
              >
                Full contact page →
              </Link>
            )}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
