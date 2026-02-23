"use client";

import ProductNavbar from "@/components/shared/product/ProductNavbar";
import ProductHero from "@/components/shared/product/ProductHero";
import ProductFeatures from "@/components/shared/product/ProductFeatures";
import ProductHowItWorks from "@/components/shared/product/ProductHowItWorks";
import ProductPricing from "@/components/shared/product/ProductPricing";
import ProductFooter from "@/components/shared/product/ProductFooter";
import { CTA_URL } from "@/lib/links";

export default function BookingPage() {
  return (
    <>
      <ProductNavbar product="booking" ctaUrl={CTA_URL} />
      <main>
        <ProductHero product="booking" ctaUrl={CTA_URL} />
        <ProductFeatures product="booking" />
        <ProductHowItWorks product="booking" />
        <ProductPricing product="booking" ctaUrl={CTA_URL} />
      </main>
      <ProductFooter product="booking" />
    </>
  );
}
