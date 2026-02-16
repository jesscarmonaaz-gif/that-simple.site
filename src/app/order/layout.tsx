import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Simple.Order — Sistema de Pedidos",
  description: "Sistema de pedidos y entregas online simple y potente para restaurantes y negocios de delivery.",
};

export default function OrderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
