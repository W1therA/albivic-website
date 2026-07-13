"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BrandMark } from "@/components/ui/AlbivicLogo";
import { company, navLinks } from "@/lib/content";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const solid = scrolled || !isHome || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid ? "bg-cream/95 shadow-md backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-8">
        <Link href="/" className="group">
          <BrandMark variant={solid ? "dark" : "light"} />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium uppercase tracking-wider transition-colors hover:text-brand ${
                solid ? "text-charcoal/75" : "text-cream/85"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <a
          href={`tel:${company.phone.replace(/\D/g, "")}`}
          className="hidden rounded-sm bg-brand px-5 py-2 text-sm font-semibold text-cream transition-colors hover:bg-brand-light lg:inline-block"
        >
          {company.phone}
        </a>

        <button
          type="button"
          className={`rounded-md p-2 md:hidden ${solid ? "text-charcoal" : "text-cream"}`}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-charcoal/10 bg-cream px-5 py-6 md:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-display text-lg text-charcoal hover:text-brand"
              >
                {link.label}
              </Link>
            ))}
            <a href={`tel:${company.phone.replace(/\D/g, "")}`} className="mt-2 text-brand">
              {company.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
