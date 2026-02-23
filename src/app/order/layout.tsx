import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Simple.Order — Sistema de Pedidos y Entregas",
  description:
    "Sistema de pedidos y entregas online simple y potente para restaurantes, negocios de delivery y vendedores. Gestiona pedidos, cobros e inventario.",
  keywords: [
    "sistema de pedidos",
    "gestión de entregas",
    "delivery",
    "restaurante",
    "order management",
    "control de inventario",
    "simple order",
  ],
  alternates: {
    canonical: "https://that-simple.site/order",
  },
  openGraph: {
    title: "Simple.Order — Sistema de Pedidos y Entregas",
    description:
      "Sistema de pedidos y entregas online simple y potente para restaurantes y negocios de delivery.",
    url: "https://that-simple.site/order",
    siteName: "That Simple",
    type: "website",
    images: [
      {
        url: "/images/order-dashboard.png",
        width: 1200,
        height: 630,
        alt: "Simple.Order — Panel de pedidos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Simple.Order — Sistema de Pedidos y Entregas",
    description:
      "Sistema de pedidos y entregas online simple y potente para restaurantes y negocios de delivery.",
    images: ["/images/order-dashboard.png"],
  },
};

export default function OrderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
