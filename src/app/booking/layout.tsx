import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Simple.Booking — Sistema de Reservas Online",
  description:
    "Sistema de reservas online simple y potente para profesionales independientes y pequeños negocios. Gestiona clientes, agenda y pagos en un solo lugar.",
  keywords: [
    "sistema de reservas",
    "agenda online",
    "booking",
    "gestión de citas",
    "profesionales independientes",
    "small business",
    "simple booking",
  ],
  alternates: {
    canonical: "https://that-simple.site/booking",
  },
  openGraph: {
    title: "Simple.Booking — Sistema de Reservas Online",
    description:
      "Sistema de reservas online simple y potente para profesionales independientes y pequeños negocios.",
    url: "https://that-simple.site/booking",
    siteName: "That Simple",
    type: "website",
    images: [
      {
        url: "/images/booking-dashboard.png",
        width: 1200,
        height: 630,
        alt: "Simple.Booking — Panel de reservas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Simple.Booking — Sistema de Reservas Online",
    description:
      "Sistema de reservas online simple y potente para profesionales independientes y pequeños negocios.",
    images: ["/images/booking-dashboard.png"],
  },
};

export default function BookingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
