import type { Metadata } from "next";
import { company } from "@/lib/content";

export const metadata: Metadata = { title: "Terms" };

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 pb-20 pt-28 md:px-8 md:pt-32">
      <h1 className="font-display text-4xl font-bold text-charcoal">Terms of Use</h1>
      <p className="mt-6 leading-relaxed text-steel">
        Content on this website is provided by {company.legalName} for general information about our
        construction services. Project details and availability may change. Estimates provided are
        subject to site conditions and a formal written agreement. By using this site you agree not
        to misuse form submissions or scrape content without permission.
      </p>
    </div>
  );
}
