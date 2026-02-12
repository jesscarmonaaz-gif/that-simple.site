"use client";

import OrderNavbar from "@/components/order/OrderNavbar";
import OrderHero from "@/components/order/OrderHero";
import OrderFeatures from "@/components/order/OrderFeatures";
import OrderHowItWorks from "@/components/order/OrderHowItWorks";
import OrderPricing from "@/components/order/OrderPricing";
import OrderFooter from "@/components/order/OrderFooter";

export default function OrderPage() {
  return (
    <>
      <OrderNavbar />
      <main>
        <OrderHero />
        <OrderFeatures />
        <OrderHowItWorks />
        <OrderPricing />
      </main>
      <OrderFooter />
    </>
  );
}
