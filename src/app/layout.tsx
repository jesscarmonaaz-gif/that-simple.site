import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
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
  openGraph: {
    title: "That Simple — Herramientas simples para negocios reales",
    description:
      "Soluciones digitales simples, potentes y accesibles para pequeños y medianos negocios.",
    type: "website",
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
      </body>
    </html>
  );
}
