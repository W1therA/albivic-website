import type { Metadata } from "next";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Albivic Construction for a free estimate on steel buildings, commercial shops, and reconstruction projects.",
};

export default function ContactPage() {
  return (
    <div className="pt-16">
      <ContactSection variant="full" />
    </div>
  );
}
