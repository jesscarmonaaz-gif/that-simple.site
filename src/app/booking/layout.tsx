import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Simple.Booking — Sistema de Reservas",
  description: "Sistema de reservas online simple y potente para profesionales independientes y pequeños negocios.",
};

export default function BookingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
