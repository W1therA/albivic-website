import type { Metadata } from "next";
import { company } from "@/lib/content";

export const metadata: Metadata = { title: "Privacy" };

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 pb-20 pt-28 md:px-8 md:pt-32">
      <h1 className="font-display text-4xl font-bold text-charcoal">Privacy Policy</h1>
      <p className="mt-6 leading-relaxed text-steel">
        {company.name} respects your privacy. Information you submit through our contact form
        (name, email, and message) is used only to respond to your inquiry. We do not sell your
        personal information. For questions, email{" "}
        <a href={`mailto:${company.email}`} className="text-copper hover:underline">
          {company.email}
        </a>
        .
      </p>
    </div>
  );
}
