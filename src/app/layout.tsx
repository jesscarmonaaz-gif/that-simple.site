import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-cabinet",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://that-simple.site"),
  title:
    "That Simple — Soluciones digitales simples para pequeños y medianos negocios",
  description:
    "Herramientas simples, potentes y accesibles para gestionar tu negocio. Simple.Booking para reservas y Simple.Order para pedidos.",
  keywords: [
    "that simple",
    "SaaS",
    "pequeños negocios",
    "booking",
    "reservas",
    "pedidos",
    "entregas",
    "gestión",
    "profesionales independientes",
  ],
  alternates: {
    canonical: "https://that-simple.site",
    languages: {
      es: "https://that-simple.site",
      pt: "https://that-simple.site",
      en: "https://that-simple.site",
    },
  },
  openGraph: {
    title: "That Simple — Herramientas simples para negocios reales",
    description:
      "Soluciones digitales simples, potentes y accesibles para pequeños y medianos negocios.",
    url: "https://that-simple.site",
    siteName: "That Simple",
    type: "website",
    images: [
      {
        url: "/images/order-dashboard.png",
        width: 1200,
        height: 630,
        alt: "That Simple — Panel de gestión",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "That Simple — Herramientas simples para negocios reales",
    description:
      "Soluciones digitales simples, potentes y accesibles para pequeños y medianos negocios.",
    images: ["/images/order-dashboard.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${inter.variable} ${plusJakarta.variable} font-sans antialiased`}
      >
        <LanguageProvider>{children}</LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
