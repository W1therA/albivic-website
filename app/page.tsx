import { FAQ } from "@/components/sections/FAQ";
import { Hero } from "@/components/sections/Hero";
import { Kit } from "@/components/sections/Kit";
import { Protocol } from "@/components/sections/Protocol";
import { Stack } from "@/components/sections/Stack";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Protocol />
      <Kit />
      <Stack />
      <FAQ />
    </>
  );
}
