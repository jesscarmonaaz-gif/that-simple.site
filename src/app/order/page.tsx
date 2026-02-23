"use client";

import ProductNavbar from "@/components/shared/product/ProductNavbar";
import ProductHero from "@/components/shared/product/ProductHero";
import ProductFeatures from "@/components/shared/product/ProductFeatures";
import ProductHowItWorks from "@/components/shared/product/ProductHowItWorks";
import ProductPricing from "@/components/shared/product/ProductPricing";
import ProductFooter from "@/components/shared/product/ProductFooter";
import { ORDER_CTA_URL } from "@/lib/links";

export default function OrderPage() {
  return (
    <>
      <ProductNavbar product="order" ctaUrl={ORDER_CTA_URL} />
      <main>
        <ProductHero product="order" ctaUrl={ORDER_CTA_URL} />
        <ProductFeatures product="order" />
        <ProductHowItWorks product="order" />
        <ProductPricing product="order" ctaUrl={ORDER_CTA_URL} />
      </main>
      <ProductFooter product="order" />
    </>
  );
}
