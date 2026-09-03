import type { Metadata } from "next";
import { Manrope, Syne } from "next/font/google";
import { CartDrawer } from "@/components/shop/CartDrawer";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { CartProvider } from "@/lib/cart";
import { brand } from "@/lib/content";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${brand.name} | Men’s Looks Optimization`,
    template: `%s | ${brand.name}`,
  },
  description: brand.description,
  keywords: [
    "SharpStack",
    "men's grooming",
    "looksmaxxing",
    "jawline trainer",
    "ice roller men",
    "men skincare tools",
  ],
  openGraph: {
    title: brand.name,
    description: brand.tagline,
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} ${syne.variable}`}>
      <body className="min-h-screen font-sans antialiased">
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
