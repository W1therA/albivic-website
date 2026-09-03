import Link from "next/link";
import { brand, navLinks } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-ink text-mist">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr] md:px-8">
        <div>
          <p className="font-display text-2xl font-bold tracking-tight">{brand.name}</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-stone">
            {brand.tagline} Tools for skin, jaw, hair, and posture — marketed as
            grooming protocols, not miracle surgery.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone">
            Navigate
          </p>
          <div className="mt-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-mist/90 transition hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone">
            Support
          </p>
          <div className="mt-4 flex flex-col gap-2 text-sm text-mist/90">
            <a href={`mailto:${brand.email}`} className="hover:text-white">
              {brand.email}
            </a>
            <Link href="/privacy" className="hover:text-white">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-stone md:px-8">
        © {new Date().getFullYear()} {brand.name}. Built for the daily protocol.
      </div>
    </footer>
  );
}
