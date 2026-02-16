"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { CTA_URL } from "@/lib/links";
import Image from "next/image";

export default function BookingHero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/3 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(#1a1a1a 1px, transparent 1px), linear-gradient(90deg, #1a1a1a 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent-50 text-accent-500 text-sm font-medium rounded-full border border-accent-100">
                <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
                {t.hero.badge}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8 text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-gray-900 tracking-tight"
            >
              {t.hero.title}
              <br />
              <span className="text-accent">{t.hero.titleHighlight}</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6 text-lg text-gray-500 max-w-lg leading-relaxed"
            >
              {t.hero.subtitle}
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10 flex flex-col items-start gap-4"
            >
              <a
                href={CTA_URL}
                className="group inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-dark text-white text-base font-semibold rounded-full transition-all duration-300 shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-0.5"
              >
                {t.hero.cta}
                <svg
                  className="w-5 h-5 transition-transform group-hover:translate-x-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
              <p className="text-sm text-gray-400">{t.hero.ctaSub}</p>
            </motion.div>
          </div>

          {/* Right: Dashboard Mockup & Mobile Client View */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="hidden lg:block"
          >
            {/* Main laptop - Dashboard */}
            <div className="relative">
              <div className="bg-gray-900 rounded-2xl p-2 shadow-2xl">
                {/* Browser chrome */}
                <div className="flex items-center gap-2 mb-2 px-3 py-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  <div className="flex-1 bg-gray-700 rounded-full h-5 ml-3 flex items-center px-3">
                    <span className="text-[10px] text-gray-400">booking.that-simple.app/dashboard</span>
                  </div>
                </div>
                {/* Dashboard Screenshot */}
                <div className="rounded-b-lg overflow-hidden">
                  <Image
                    src="/images/booking-dashboard.png"
                    alt="Simple.Booking - Panel de Control"
                    width={1920}
                    height={1080}
                    className="w-full h-auto"
                    priority
                  />
                </div>
              </div>

              {/* Floating mobile - Client Booking View */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -bottom-8 -right-12 w-[28%] z-10"
              >
                <div className="bg-gray-900 rounded-[2rem] p-1.5 shadow-2xl border border-gray-700">
                  {/* Mobile screenshot */}
                  <div className="rounded-[1.5rem] overflow-hidden aspect-[9/19.5]">
                    <Image
                      src="/images/booking-mobile.jpg"
                      alt="Simple.Booking - Vista del Cliente"
                      width={390}
                      height={844}
                      className="w-full h-full object-cover object-[center_15%]"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
