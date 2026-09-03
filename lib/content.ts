export const company = {
  name: "Albivic Construction",
  legalName: "Albivic Construction LTD",
  tagline: "Quality Never Goes Out of Style",
  principal: "Victor Rotaru",
  phone: "(306) 292-7081",
  email: "victorrotaru@hotmail.com",
  address: "6 Pelletier Rd",
  location: "RM of Dundurn, SK",
  serviceArea: "Western Canada & Northern territories",
};

export const navLinks = [
  { href: "/#services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact Us" },
];

export const services = [
  {
    id: "steel-buildings",
    title: "Industrial Steel Buildings",
    description:
      "Steel buildings and foundations for shops, warehouses, and commercial facilities — engineered for Canadian climates.",
    video: "/videos/steel-buildings.mp4",
    href: "/contact",
  },
  {
    id: "design-build",
    title: "Residential ICF Construction",
    description:
      "ICF blocks from foundation up to the roof — durable, efficient homes and residential builds.",
    video: "/videos/design-build.mp4",
    href: "/contact",
  },
  {
    id: "demolition",
    title: "Demolition & Reconstruction",
    description:
      "Safe demolition and full rebuilds — including complex community projects like arenas and public facilities.",
    video: "/videos/commercial.mp4",
    href: "/gallery",
  },
  {
    id: "crane",
    title: "Foundations & Heavy Install",
    description:
      "Solid foundations and heavy equipment coordination for industrial shops and specialized builds.",
    video: "/videos/foundations.mp4",
    href: "/contact",
  },
];

export const whyChooseUs = [
  {
    title: "Expertise",
    description:
      "Years of hands-on experience delivering steel buildings and specialized construction across Western Canada and the North.",
  },
  {
    title: "Quality",
    description:
      "Premium materials and craftsmanship on every project — from structural steel to finishing details that last.",
  },
  {
    title: "Reliability",
    description:
      "On-time delivery with clear communication. We plan carefully and keep you informed at every stage.",
  },
  {
    title: "Reach",
    description:
      "Proven capability from Saskatchewan shops to remote northern sites in Nunavut — we go where the work is.",
  },
];

export const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We specialize in pre-engineered steel buildings, design-build commercial shops, demolition and reconstruction, and crane or heavy equipment installation for industrial facilities.",
  },
  {
    question: "Do you offer free estimates?",
    answer:
      "Yes. Contact us with your project details and we will provide a free estimate tailored to your scope, timeline, and location.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We are based in Saskatchewan and serve Western Canada and Northern territories. Recent work includes projects in Saskatchewan, British Columbia, and Rankin Inlet, Nunavut.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes. Albivic Construction operates with appropriate licensing and insurance for the jurisdictions where we work. Ask us for current certificates when you request a quote.",
  },
  {
    question: "Do you offer warranties on your work?",
    answer:
      "We stand behind our workmanship. Warranty terms depend on the project scope and materials used — we will outline coverage clearly in your contract.",
  },
];

export type Project = {
  id: string;
  title: string;
  year: string;
  location: string;
  description: string;
  folder: string;
  images: string[];
};

export const projects: Project[] = [
  {
    id: "max-motors",
    title: "Max Motors Facility",
    year: "2024",
    location: "Saskatchewan",
    description:
      "Full commercial facility build for Max Motors — auto sales, service, and collision centre under one roof.",
    folder: "max-motors",
    images: [
      "/images/projects/max-motors/max-motors-01.jpg",
      "/images/projects/max-motors/max-motors-02.jpg",
      "/images/projects/max-motors/max-motors-03.jpg",
      "/images/projects/max-motors/max-motors-04.jpg",
      "/images/projects/max-motors/max-motors-05.jpg",
      "/images/projects/max-motors/max-motors-06.jpg",
      "/images/projects/max-motors/max-motors-07.jpg",
      "/images/projects/max-motors/max-motors-08.jpg",
      "/images/projects/max-motors/max-motors-09.jpg",
      "/images/projects/max-motors/max-motors-10.jpg",
    ],
  },
  {
    id: "ituna-arena",
    title: "Ituna Community Arena",
    year: "2024",
    location: "Ituna, SK",
    description:
      "Demolition of the 1963 arena and full custom-designed rebuild. Grand opening January 11, 2025 — Home of the Avalanche.",
    folder: "ituna-arena",
    images: [
      "/images/projects/ituna-arena/plaque.jpg",
      "/images/projects/ituna-arena/ituna-01.jpg",
      "/images/projects/ituna-arena/ituna-02.jpg",
      "/images/projects/ituna-arena/ituna-03.jpg",
      "/images/projects/ituna-arena/ituna-04.jpg",
      "/images/projects/ituna-arena/ituna-05.jpg",
      "/images/projects/ituna-arena/ituna-06.jpg",
    ],
  },
  {
    id: "viscount-shop",
    title: "RM of Viscount Shop",
    year: "2026",
    location: "Viscount, SK",
    description: "Full completed steel building for the Rural Municipality of Viscount.",
    folder: "viscount-shop",
    images: [
      "/images/projects/viscount-shop/viscount-01.jpg",
      "/images/projects/viscount-shop/viscount-02.jpg",
      "/images/projects/viscount-shop/viscount-03.jpg",
      "/images/projects/viscount-shop/viscount-04.jpg",
      "/images/projects/viscount-shop/viscount-05.jpg",
      "/images/projects/viscount-shop/viscount-06.jpg",
      "/images/projects/viscount-shop/viscount-07.jpg",
      "/images/projects/viscount-shop/viscount-08.jpg",
    ],
  },
  {
    id: "rankin-inlet",
    title: "Rankin Inlet Shop",
    year: "2026",
    location: "Rankin Inlet, Nunavut",
    description: "Full steel building construction with crane installation in a remote northern community.",
    folder: "rankin-inlet",
    images: [
      "/images/projects/rankin-inlet/rankin-01.jpg",
      "/images/projects/rankin-inlet/rankin-02.jpg",
      "/images/projects/rankin-inlet/rankin-03.jpg",
      "/images/projects/rankin-inlet/rankin-04.jpg",
      "/images/projects/rankin-inlet/rankin-05.jpg",
      "/images/projects/rankin-inlet/rankin-06.jpg",
      "/images/projects/rankin-inlet/rankin-07.jpg",
    ],
  },
  {
    id: "golden-bc",
    title: "Golden Shop",
    year: "2025",
    location: "Golden, BC",
    description: "Full steel building in the mountain community of Golden, British Columbia.",
    folder: "golden-bc",
    images: [
      "/images/projects/golden-bc/golden-01.jpg",
      "/images/projects/golden-bc/golden-02.jpg",
      "/images/projects/golden-bc/golden-03.jpg",
      "/images/projects/golden-bc/golden-04.jpg",
      "/images/projects/golden-bc/golden-05.jpg",
      "/images/projects/golden-bc/golden-06.jpg",
      "/images/projects/golden-bc/golden-07.jpg",
    ],
  },
  {
    id: "muscowpetung",
    title: "Muscowpetung Shop",
    year: "2025",
    location: "Muscowpetung, SK",
    description: "Commercial steel shop construction for Muscowpetung First Nation.",
    folder: "muscowpetung",
    images: [
      "/images/projects/muscowpetung/muscowpetung-01.jpg",
      "/images/projects/muscowpetung/muscowpetung-02.jpg",
      "/images/projects/muscowpetung/muscowpetung-03.jpg",
      "/images/projects/muscowpetung/muscowpetung-04.jpg",
      "/images/projects/muscowpetung/muscowpetung-05.jpg",
      "/images/projects/muscowpetung/muscowpetung-06.jpg",
      "/images/projects/muscowpetung/muscowpetung-07.jpg",
    ],
  },
];
