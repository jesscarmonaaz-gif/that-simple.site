"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import Header from "@/components/shared/Header";
import SharedFooter from "@/components/shared/Footer";
import Link from "next/link";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function Home() {
  const { t } = useLanguage();

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/3 rounded-full blur-3xl" />
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
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent-50 text-accent-500 text-sm font-medium rounded-full border border-accent-100">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
                  {t.siteHero.badge}
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-extrabold text-gray-900 tracking-tight"
              >
                {t.siteHero.title}
                <br />
                <span className="text-accent">{t.siteHero.titleHighlight}</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-6 text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed"
              >
                {t.siteHero.subtitle}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-10"
              >
                <a
                  href="#products"
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-dark text-white text-base font-semibold rounded-full transition-all duration-300 shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-0.5"
                >
                  {t.siteHero.cta}
                  <svg
                    className="w-5 h-5 transition-transform group-hover:translate-y-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="py-24 sm:py-32 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-2xl mx-auto"
            >
              <span className="inline-flex items-center px-3 py-1 bg-accent-50 text-accent-500 text-xs font-medium rounded-full border border-accent-100">
                {t.siteProducts.badge}
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gray-900 tracking-tight">
                {t.siteProducts.title}
              </h2>
              <p className="mt-4 text-gray-500 text-lg">
                {t.siteProducts.subtitle}
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              {/* Simple.Booking Card */}
              <motion.div variants={itemVariants}>
                <div className="group relative bg-white rounded-3xl border border-gray-100 p-8 sm:p-10 hover:border-accent/20 transition-all duration-300 hover:shadow-xl hover:shadow-accent/5 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-accent-50 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-bold text-gray-900">{t.siteProducts.booking.name}</h3>
                      <p className="text-sm text-gray-500">{t.siteProducts.booking.description}</p>
                    </div>
                  </div>

                  {/* Mockup */}
                  <div className="mb-6 relative">
                    <div className="bg-gray-900 rounded-xl p-2 shadow-2xl">
                      <div className="flex items-center gap-1.5 mb-2 px-2 py-1">
                        <div className="w-2 h-2 rounded-full bg-red-400" />
                        <div className="w-2 h-2 rounded-full bg-yellow-400" />
                        <div className="w-2 h-2 rounded-full bg-green-400" />
                        <div className="flex-1 bg-gray-700 rounded-full h-4 ml-2 flex items-center px-2">
                          <span className="text-[9px] text-gray-400">app.that-simple.app/agenda</span>
                        </div>
                      </div>
                      <div className="rounded-lg overflow-hidden aspect-video">
                        <Image
                          src="/images/booking-dashboard.png"
                          alt="Simple.Booking Dashboard"
                          width={1920}
                          height={1080}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                    </div>
                    {/* Floating mobile mockup */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="absolute bottom-3 right-3 w-[26%] z-10"
                    >
                      <div className="bg-gray-900 rounded-[2rem] p-1.5 shadow-2xl border border-gray-700">
                        <div className="rounded-[1.5rem] overflow-hidden aspect-[9/19.5]">
                          <Image
                            src="/images/booking-mobile.jpg"
                            alt="Simple.Booking Mobile"
                            width={390}
                            height={844}
                            className="w-full h-full object-cover object-[center_15%]"
                          />
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  <ul className="space-y-2 mb-8 flex-1">
                    {t.siteProducts.booking.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                        <svg className="w-4 h-4 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <span className="text-sm font-semibold text-gray-400">{t.siteProducts.booking.price}</span>
                    <Link
                      href="/booking"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-dark text-white text-sm font-semibold rounded-full transition-all duration-200 shadow-sm hover:shadow-md whitespace-nowrap"
                    >
                      {t.siteProducts.booking.cta}
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </motion.div>

              {/* Simple.Order Card */}
              <motion.div variants={itemVariants}>
                <div className="group relative bg-white rounded-3xl border border-gray-100 p-8 sm:p-10 hover:border-accent/20 transition-all duration-300 hover:shadow-xl hover:shadow-accent/5 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-accent-50 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-bold text-gray-900">{t.siteProducts.order.name}</h3>
                      <p className="text-sm text-gray-500">{t.siteProducts.order.description}</p>
                    </div>
                  </div>

                  {/* Mockup */}
                  <div className="mb-6">
                    <div className="bg-gray-900 rounded-xl p-2 shadow-2xl">
                      <div className="flex items-center gap-1.5 mb-2 px-2 py-1">
                        <div className="w-2 h-2 rounded-full bg-red-400" />
                        <div className="w-2 h-2 rounded-full bg-yellow-400" />
                        <div className="w-2 h-2 rounded-full bg-green-400" />
                        <div className="flex-1 bg-gray-700 rounded-full h-4 ml-2 flex items-center px-2">
                          <span className="text-[9px] text-gray-400">app.that-simple.app/pedidos</span>
                        </div>
                      </div>
                      <div className="rounded-lg overflow-hidden aspect-video">
                        <Image
                          src="/images/order-dashboard.png"
                          alt="Simple.Order Dashboard"
                          width={3008}
                          height={1454}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-8 flex-1">
                    {t.siteProducts.order.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                        <svg className="w-4 h-4 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <span className="text-sm font-semibold text-gray-400">{t.siteProducts.order.price}</span>
                    <Link
                      href="/order"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-dark text-white text-sm font-semibold rounded-full transition-all duration-200 shadow-sm hover:shadow-md whitespace-nowrap"
                    >
                      {t.siteProducts.order.cta}
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Custom Development Bridge Banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-12"
            >
              <div className="relative bg-gray-900 rounded-3xl p-8 sm:p-12 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl" />
                  <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                      backgroundImage:
                        "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                      backgroundSize: "60px 60px",
                    }}
                  />
                </div>
                <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
                  <div className="flex-1">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent/10 text-accent text-xs font-medium rounded-full border border-accent/20 mb-4">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
                      {t.siteProducts.custom.badge}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
                      {t.siteProducts.custom.title}{" "}
                      <span className="text-accent">{t.siteProducts.custom.titleHighlight}</span>
                    </h3>
                    <p className="mt-3 text-gray-400 text-base sm:text-lg max-w-xl leading-relaxed">
                      {t.siteProducts.custom.subtitle}
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <a
                      href="#services"
                      className="group inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-dark text-white text-base font-semibold rounded-full transition-all duration-300 shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-0.5"
                    >
                      {t.siteProducts.custom.cta}
                      <svg
                        className="w-5 h-5 transition-transform group-hover:translate-y-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 sm:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="inline-flex items-center px-3 py-1 bg-accent-50 text-accent-500 text-xs font-medium rounded-full border border-accent-100">
                {t.siteAbout.badge}
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gray-900 tracking-tight">
                {t.siteAbout.title}
              </h2>
              <p className="mt-6 text-gray-500 text-lg leading-relaxed">
                {t.siteAbout.description}
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8"
            >
              {t.siteAbout.values.map((value, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="text-center p-8 bg-white rounded-2xl border border-gray-100 hover:border-accent/20 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5"
                >
                  <div className="w-14 h-14 bg-accent-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-display font-bold text-accent">
                      {["01", "02", "03"][i]}
                    </span>
                  </div>
                  <h3 className="text-lg font-display font-semibold text-gray-900">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        {/* Contact Section */}
        <section id="services" className="py-24 sm:py-32 bg-gray-900 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-accent/10 rounded-full blur-3xl" />
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                backgroundSize: "60px 60px",
              }}
            />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent text-sm font-medium rounded-full border border-accent/20">
                <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
                {t.siteContact.badge}
              </span>

              <h2 className="mt-8 text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight">
                {t.siteContact.title}
              </h2>

              <p className="mt-6 text-xl sm:text-2xl text-gray-400 leading-relaxed">
                {t.siteContact.subtitle}{" "}
                <span className="text-accent font-semibold">{t.siteContact.subtitleHighlight}</span>{" "}
                {t.siteContact.subtitleEnd}
              </p>

              {/* Feature Tiles */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left"
              >
                {t.siteContact.features.map((feature, i) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    className="bg-white/5 rounded-2xl border border-white/10 p-6 hover:bg-white/[0.08] transition-colors duration-300"
                  >
                    <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                      {feature.icon === "sparkles" && (
                        <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                        </svg>
                      )}
                      {feature.icon === "bolt" && (
                        <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                        </svg>
                      )}
                      {feature.icon === "handshake" && (
                        <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
                        </svg>
                      )}
                    </div>
                    <h4 className="text-base font-display font-semibold text-white mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>

              <div className="mt-8">
                <a
                  href="https://booking.that-simple.app/p/agenda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-dark text-white text-base font-semibold rounded-full transition-all duration-300 shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-0.5"
                >
                  {t.siteContact.cta}
                  <svg
                    className="w-5 h-5 transition-transform group-hover:translate-x-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <SharedFooter />
    </>
  );
}
