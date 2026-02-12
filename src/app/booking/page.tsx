"use client";

import BookingNavbar from "@/components/booking/BookingNavbar";
import BookingHero from "@/components/booking/BookingHero";
import BookingFeatures from "@/components/booking/BookingFeatures";
import BookingHowItWorks from "@/components/booking/BookingHowItWorks";
import BookingPricing from "@/components/booking/BookingPricing";
import BookingFooter from "@/components/booking/BookingFooter";

export default function BookingPage() {
  return (
    <>
      <BookingNavbar />
      <main>
        <BookingHero />
        <BookingFeatures />
        <BookingHowItWorks />
        <BookingPricing />
      </main>
      <BookingFooter />
    </>
  );
}
