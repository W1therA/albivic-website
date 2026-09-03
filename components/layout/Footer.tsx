import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { BrandMark } from "@/components/ui/AlbivicLogo";
import { company, navLinks, services } from "@/lib/content";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-charcoal text-cream">
      {/* Business-card style blue curve accent */}
      <div className="absolute left-0 right-0 top-0 h-2 bg-brand" />
      <div
        className="pointer-events-none absolute -left-20 top-0 h-40 w-[55%] bg-brand"
        style={{ clipPath: "ellipse(100% 100% at 0% 0%)", opacity: 0.15 }}
      />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-4 md:px-8">
        <div className="md:col-span-1">
          <BrandMark variant="light" />
          <p className="mt-4 text-sm text-steel-light leading-relaxed">
            Industrial steel buildings &amp; foundations. Residential ICF blocks — foundation up to
            the roof.
          </p>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-brand">
            Reach Us
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-steel-light">
            <li className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-sm bg-brand text-cream">
                <Phone className="h-3.5 w-3.5" />
              </span>
              <a href={`tel:${company.phone.replace(/\D/g, "")}`} className="hover:text-cream">
                {company.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-sm bg-brand text-cream">
                <Mail className="h-3.5 w-3.5" />
              </span>
              <a href={`mailto:${company.email}`} className="hover:text-cream">
                {company.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-sm bg-brand text-cream">
                <MapPin className="h-3.5 w-3.5" />
              </span>
              <span>
                {company.address}
                <br />
                {company.location}
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-brand">
            Services
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-steel-light">
            {services.map((s) => (
              <li key={s.id}>
                <Link href="/#services" className="hover:text-cream">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-brand">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-steel-light">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-cream">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/privacy" className="hover:text-cream">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-cream">
                Terms
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10 px-5 py-6 text-center text-xs text-steel md:px-8">
        Copyright © {new Date().getFullYear()} {company.legalName}. All rights reserved.
      </div>
    </footer>
  );
}
