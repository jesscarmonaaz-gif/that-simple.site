"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function HowItWorks() {
  const { t } = useLanguage();

  return (
    <section id="how-it-works" className="py-24 sm:py-32">
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
            {t.howItWorks.badge}
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gray-900 tracking-tight">
            {t.howItWorks.title}
          </h2>
          <p className="mt-4 text-gray-500 text-lg">
            {t.howItWorks.subtitle}
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6"
        >
          {t.howItWorks.steps.map((step, i) => (
            <motion.div key={i} variants={itemVariants} className="relative">
              {/* Connector line for desktop */}
              {i < t.howItWorks.steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[60%] w-[calc(100%-20%)] h-px bg-gradient-to-r from-accent/30 to-accent/10" />
              )}

              <div className="relative text-center lg:text-left">
                {/* Step number */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent-50 mb-4">
                  <span className="text-2xl font-display font-bold text-accent">
                    {step.step}
                  </span>
                </div>

                <h3 className="text-lg font-display font-semibold text-gray-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed max-w-xs mx-auto lg:mx-0">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
