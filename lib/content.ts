export const brand = {
  name: "SharpStack",
  tagline: "The daily stack for a sharper look.",
  description:
    "Men’s looks-optimization tools for skin, jaw, hair, and posture — built as simple protocols, not a 10-step beauty routine.",
  email: "hello@sharpstack.co",
  shippingNote: "Ships in 3–7 days from US warehouses where available.",
};

export const navLinks = [
  { href: "/#protocol", label: "Protocol" },
  { href: "/#stack", label: "The Stack" },
  { href: "/#kit", label: "Morning Kit" },
  { href: "/shop", label: "Shop" },
];

export type Product = {
  id: string;
  slug: string;
  name: string;
  price: number;
  compareAt?: number;
  blurb: string;
  angle: string;
  category: "skin" | "jaw" | "hair" | "frame" | "kit";
  image: string;
  imageAlt: string;
  featured?: boolean;
  bundleIds?: string[];
};

export const products: Product[] = [
  {
    id: "morning-sharp-kit",
    slug: "morning-sharp-kit",
    name: "Morning Sharp Kit",
    price: 54,
    compareAt: 72,
    blurb: "Ice roller, pore strips, and face razor — the 3-minute reset before work, gym, or camera.",
    angle: "Start here",
    category: "kit",
    image:
      "https://images.unsplash.com/photo-1621607512214-68297471b618?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Minimal men’s grooming tools on a concrete counter",
    featured: true,
    bundleIds: ["ice-roller", "pore-strips", "face-razor"],
  },
  {
    id: "ice-roller",
    slug: "steel-ice-roller",
    name: "Steel Ice Roller",
    price: 28,
    blurb: "Cold pass for morning puffiness and post-shave calm. Stainless, no fuss.",
    angle: "Skin",
    category: "skin",
    image:
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Cool metal facial roller on dark surface",
    featured: true,
  },
  {
    id: "jaw-trainer",
    slug: "jawline-trainer",
    name: "Jawline Trainer",
    price: 24,
    blurb: "Pocket resistance chew for short daily jaw work. Train smart — stop if it hurts.",
    angle: "Jaw",
    category: "jaw",
    image:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Focused athletic training atmosphere",
    featured: true,
  },
  {
    id: "pore-strips",
    slug: "pore-cleanup-strips",
    name: "Pore Cleanup Strips",
    price: 16,
    blurb: "Nose and T-zone strips for a cleaner look before photos or a night out.",
    angle: "Skin",
    category: "skin",
    image:
      "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Clean skincare packaging on light surface",
  },
  {
    id: "face-razor",
    slug: "precision-face-razor",
    name: "Precision Face Razor",
    price: 18,
    blurb: "Dermaplane-style face razor for smoother texture and a cleaner jaw shadow.",
    angle: "Skin",
    category: "skin",
    image:
      "https://images.unsplash.com/photo-1620916567138-a384d8a68aba?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Precision grooming tool close-up",
  },
  {
    id: "scalp-stack",
    slug: "scalp-density-stack",
    name: "Scalp Density Stack",
    price: 26,
    blurb: "Scalp massager plus rosemary-forward oil for a simple hairline routine.",
    angle: "Hair",
    category: "hair",
    image:
      "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Hair care bottle and tools on bathroom shelf",
    featured: true,
  },
  {
    id: "mouth-tape",
    slug: "sleep-mouth-tape",
    name: "Sleep Mouth Tape",
    price: 14,
    blurb: "Gentle overnight tape for nasal breathing habits. Remove if uncomfortable.",
    angle: "Recovery",
    category: "frame",
    image:
      "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Calm bedroom sleep setting",
  },
  {
    id: "posture-band",
    slug: "frame-posture-band",
    name: "Frame Posture Band",
    price: 36,
    blurb: "Light scapular support for desk days — stand taller, fill the frame better.",
    angle: "Frame",
    category: "frame",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Athlete standing tall in training space",
  },
];

export const protocolSteps = [
  {
    step: "01",
    title: "Cold pass",
    text: "Two minutes with the ice roller — depuff, wake up, look camera-ready.",
  },
  {
    step: "02",
    title: "Clean surface",
    text: "Strips or face razor when you need a cleaner T-zone and smoother texture.",
  },
  {
    step: "03",
    title: "Train the frame",
    text: "Short jaw or posture work. Consistency beats extreme routines.",
  },
];

export const faqs = [
  {
    q: "Is this skincare for women rebranded?",
    a: "No. SharpStack is built around men’s looks-optimization: short protocols, steel tools, and framing that fits gym, work, and camera — not spa language.",
  },
  {
    q: "Do these products change bone structure?",
    a: "No. We sell grooming and training tools that support how you look day to day. We don’t promise surgical or permanent bone changes.",
  },
  {
    q: "How fast do you ship?",
    a: brand.shippingNote,
  },
  {
    q: "What if something doesn’t work for me?",
    a: "Email us within 14 days of delivery and we’ll sort a swap or refund on unopened items. Tool wear from normal use isn’t covered.",
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function formatPrice(price: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(price);
}
