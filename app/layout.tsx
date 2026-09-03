import type { Metadata } from "next";
import { DM_Sans, Outfit } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { company } from "@/lib/content";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${company.name} | Steel Buildings & Construction`,
    template: `%s | ${company.name}`,
  },
  description:
    "Albivic Construction builds pre-engineered steel buildings, commercial shops, and community facilities across Western Canada and the North. Principal: Victor Rotaru.",
  keywords: [
    "Albivic Construction",
    "steel buildings",
    "Saskatchewan construction",
    "commercial shops",
    "Victor Rotaru",
  ],
  openGraph: {
    title: company.name,
    description: company.tagline,
    type: "website",
    locale: "en_CA",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${outfit.variable}`}>
      <body className="min-h-screen font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
