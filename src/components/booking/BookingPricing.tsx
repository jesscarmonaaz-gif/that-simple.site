"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { CTA_URL } from "@/lib/links";

export default function BookingPricing() {
  const { t } = useLanguage();

  return (
    <section id="pricing" className="py-24 sm:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="inline-flex items-center px-3 py-1 bg-accent-50 text-accent-500 text-xs font-medium rounded-full border border-accent-100">
            {t.pricing.badge}
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gray-900 tracking-tight">
            {t.pricing.title}
            <br />
            <span className="text-accent">{t.pricing.titleHighlight}</span>
          </h2>
          <p className="mt-4 text-gray-500 text-lg">{t.pricing.subtitle}</p>
        </motion.div>

        {/* Pricing Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 max-w-lg mx-auto"
        >
          <div className="relative bg-white rounded-3xl border-2 border-accent/20 p-8 sm:p-10 shadow-xl shadow-accent/5">
            {/* Highlight badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-accent text-white text-xs font-semibold rounded-full shadow-lg shadow-accent/25">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                    clipRule="evenodd"
                  />
                </svg>
                Simple.Booking
              </span>
            </div>

            {/* Price */}
            <div className="text-center pt-4">
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-2xl font-semibold text-gray-400">
                  {t.pricing.plan.currency}
                </span>
                <span className="text-6xl sm:text-7xl font-display font-extrabold text-gray-900 tracking-tight">
                  {t.pricing.plan.price}
                </span>
                <span className="text-lg text-gray-400 font-medium">
                  {t.pricing.plan.period}
                </span>
              </div>
              <p className="mt-2 text-gray-500">
                {t.pricing.plan.description}
              </p>
            </div>

            {/* Divider */}
            <div className="my-8 h-px bg-gray-100" />

            {/* Features */}
            <ul className="space-y-4">
              {t.pricing.plan.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 mt-0.5 bg-accent-50 rounded-full flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-8">
              <a
                href={CTA_URL}
                className="w-full py-4 px-6 bg-accent hover:bg-accent-dark text-white font-semibold rounded-full transition-all duration-300 shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-0.5 text-base inline-flex items-center justify-center"
              >
                {t.pricing.plan.cta}
              </a>
              <p className="mt-3 text-center text-xs text-gray-400">
                {t.pricing.plan.trial}
              </p>
            </div>
          </div>

          {/* Guarantee */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-6 text-center text-sm text-gray-400 flex items-center justify-center gap-1.5"
          >
            <svg
              className="w-4 h-4 text-gray-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
              />
            </svg>
            {t.pricing.guarantee}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
