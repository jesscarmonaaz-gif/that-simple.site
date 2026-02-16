import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Simple.Order — Sistema de Pedidos",
  description: "Sistema de pedidos y entregas online simple y potente para restaurantes y negocios de delivery.",
  openGraph: {
    title: "Simple.Order — Sistema de Pedidos",
    description: "Sistema de pedidos y entregas online simple y potente para restaurantes y negocios de delivery.",
    url: "https://that-simple.site/order",
    siteName: "That Simple",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Simple.Order — Sistema de Pedidos",
    description: "Sistema de pedidos y entregas online simple y potente para restaurantes y negocios de delivery.",
  },
};

export default function OrderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
