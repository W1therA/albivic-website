import { ContactSection } from "@/components/sections/ContactSection";
import { FAQ } from "@/components/sections/FAQ";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <WhyChooseUs />
      <FAQ />
      <ContactSection variant="preview" />
    </>
  );
}
