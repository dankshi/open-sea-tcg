"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);

  const copyEmail = () => {
    const text = "contact@openseatcg.com";
    navigator.clipboard.writeText(text).then(() => {
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    }).catch(() => {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      textArea.remove();
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    });
  };

  const copyPhone = () => {
    const text = "(669) 200-9430";
    navigator.clipboard.writeText(text).then(() => {
      setPhoneCopied(true);
      setTimeout(() => setPhoneCopied(false), 2000);
    }).catch(() => {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      textArea.remove();
      setPhoneCopied(true);
      setTimeout(() => setPhoneCopied(false), 2000);
    });
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-sky-100 via-sky-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 border-b border-sky-200/50 bg-white/70 backdrop-blur-xl">
        <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 sm:gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-sky-500 to-blue-600 sm:h-10 sm:w-10">
                <span className="text-base font-bold text-white sm:text-lg">OS</span>
              </div>
              <span className="text-base font-semibold tracking-tight text-sky-950 sm:text-lg">
                OPEN SEA TCG
              </span>
            </Link>

            {/* Desktop navigation */}
            <div className="hidden items-center gap-8 md:flex">
              <Link
                href="#about"
                className="text-sm text-sky-700 transition-colors hover:text-sky-950"
              >
                About
              </Link>
              <Link
                href="#products"
                className="text-sm text-sky-700 transition-colors hover:text-sky-950"
              >
                Products
              </Link>
              <Link
                href="#contact"
                className="text-sm text-sky-700 transition-colors hover:text-sky-950"
              >
                Contact
              </Link>
              <a
                href="https://opcardlist.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-rose-500 to-orange-500 px-3 py-1.5 text-xs font-medium text-white transition-transform hover:scale-105"
              >
                OP Card List
                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-lg text-sky-700 transition-colors hover:bg-sky-100 hover:text-sky-950 md:hidden"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="mt-4 border-t border-sky-200 pt-4 md:hidden">
              <div className="flex flex-col gap-4">
                <Link
                  href="#about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 text-base text-sky-700 transition-colors hover:text-sky-950"
                >
                  About
                </Link>
                <Link
                  href="#products"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 text-base text-sky-700 transition-colors hover:text-sky-950"
                >
                  Products
                </Link>
                <Link
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 text-base text-sky-700 transition-colors hover:text-sky-950"
                >
                  Contact
                </Link>
                <a
                  href="https://opcardlist.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex w-fit items-center gap-1.5 rounded-full bg-gradient-to-r from-rose-500 to-orange-500 px-4 py-2 text-sm font-medium text-white"
                >
                  OP Card List
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 sm:px-6">
        {/* Sky gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-sky-200 via-sky-100 to-white" />

        {/* Decorative clouds */}
        <div className="cloud absolute top-20 left-[10%] h-16 w-32 rounded-full bg-white/80 blur-sm sm:h-20 sm:w-40" />
        <div className="cloud-slow absolute top-32 right-[15%] h-12 w-24 rounded-full bg-white/70 blur-sm sm:h-16 sm:w-32" />
        <div className="cloud absolute top-40 left-[25%] h-10 w-20 rounded-full bg-white/60 blur-sm sm:h-14 sm:w-28" />
        <div className="cloud-slow absolute top-24 right-[30%] h-8 w-16 rounded-full bg-white/50 blur-sm sm:h-12 sm:w-24" />

        {/* Sun glow */}
        <div className="absolute top-10 right-[20%] h-32 w-32 rounded-full bg-amber-200/30 blur-3xl sm:h-48 sm:w-48" />

        {/* Ocean horizon hint */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-sky-200/50 to-transparent" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <div className="mb-4 flex flex-wrap items-center justify-center gap-2 sm:mb-6 sm:gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-300 bg-white/80 px-3 py-1.5 text-xs text-sky-700 shadow-sm backdrop-blur-sm sm:px-4 sm:py-2 sm:text-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 sm:h-2 sm:w-2" />
              Authorized TCG Retailer
            </div>
            <a
              href="https://opcardlist.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-sky-300 bg-white/80 px-3 py-1.5 text-xs text-sky-700 shadow-sm backdrop-blur-sm transition-colors hover:bg-white sm:px-4 sm:py-2 sm:text-sm"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-rose-500 sm:h-2 sm:w-2" />
              Creators of opcardlist.com
            </a>
          </div>

          <h1 className="mb-4 text-4xl font-bold leading-tight tracking-tight text-sky-950 sm:mb-6 sm:text-5xl md:text-7xl">
            Premium Sealed
            <br />
            <span className="gradient-text">TCG Products</span>
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-base text-sky-800/80 sm:mb-10 sm:text-lg md:text-xl">
            Your trusted source for authentic One Piece TCG sealed products.
            Serving collectors and retailers nationwide.
          </p>

          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Link
              href="#contact"
              className="group relative inline-flex h-11 w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-sky-500 to-blue-600 px-6 font-medium text-white shadow-lg shadow-sky-500/25 transition-transform hover:scale-105 sm:h-12 sm:w-auto sm:px-8"
            >
              Get In Touch
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
            <Link
              href="#products"
              className="inline-flex h-11 w-full items-center justify-center rounded-full border border-sky-300 bg-white/80 px-6 font-medium text-sky-700 shadow-sm backdrop-blur-sm transition-colors hover:bg-white hover:text-sky-900 sm:h-12 sm:w-auto sm:px-8"
            >
              View Products
            </Link>
          </div>
        </div>

        {/* Scroll indicator - hidden on very small screens */}
        <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 sm:bottom-10 sm:block">
          <div className="flex h-10 w-6 items-start justify-center rounded-full border border-sky-300 bg-white/50 p-2">
            <div className="h-2 w-1 animate-bounce rounded-full bg-sky-500" />
          </div>
        </div>
      </section>

      {/* Why One Piece Section */}
      <section className="relative bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-orange-500 sm:h-16 sm:w-16">
            <span className="text-xl font-bold text-white sm:text-2xl">OP</span>
          </div>
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-sky-950 sm:text-3xl">
            Why One Piece?
          </h2>
          <p className="mb-4 text-base text-sky-800/80 sm:text-lg">
            We&apos;re not just sellers — we&apos;re die-hard One Piece fans building the ultimate TCG experience.
          </p>
          <p className="text-base text-sky-800/70 sm:text-lg">
            From our <a href="https://opcardlist.com" target="_blank" rel="noopener noreferrer" className="font-medium text-sky-600 underline decoration-sky-300 hover:text-sky-800">card database</a> to
            authentic sealed products, everything we do is dedicated to the One Piece community.
            We believe this game deserves world-class tools and trusted retailers — and we&apos;re here to deliver both.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative bg-gradient-to-b from-white to-sky-50 py-16 sm:py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-10 md:grid-cols-2 md:items-center md:gap-16">
            <div>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-sky-950 sm:mb-6 sm:text-4xl md:text-5xl">
                Built for the
                <br />
                <span className="gradient-text">New Era</span>
              </h2>
              <p className="mb-4 text-base text-sky-800/70 sm:mb-6 sm:text-lg">
                OPEN SEA TCG is a dedicated TCG retailer focused on
                bringing authentic, sealed products to collectors and businesses
                across the nation.
              </p>
              <p className="mb-6 text-base text-sky-800/70 sm:text-lg">
                We work directly with authorized distributors to ensure every
                product we offer is genuine, sealed, and ready for your
                collection or resale inventory.
              </p>
              {/* Badges */}
              <div className="flex flex-wrap gap-3">
                <div className="inline-flex items-center gap-3 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-emerald-800">CA Licensed Retailer</p>
                    <p className="text-xs text-emerald-600">CDTFA #247-884128</p>
                  </div>
                </div>
                <a
                  href="https://opcardlist.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-lg border border-sky-200 bg-sky-50 px-4 py-2 transition-colors hover:bg-sky-100"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-rose-500 to-orange-500">
                    <span className="text-xs font-bold text-white">OP</span>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-sky-800">Our Card Database</p>
                    <p className="text-xs text-sky-600">opcardlist.com</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6">
              {[
                {
                  title: "Sealed Products",
                  description: "Factory sealed cases and boxes only",
                  icon: "📦",
                },
                {
                  title: "Authorized",
                  description: "Direct from licensed distributors",
                  icon: "✓",
                },
                {
                  title: "Bulk Orders",
                  description: "Case quantities available",
                  icon: "📊",
                },
                {
                  title: "Fast Shipping",
                  description: "Secure, insured delivery",
                  icon: "🚀",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="card-hover rounded-xl border border-sky-200 bg-gradient-to-br from-sky-50 to-white p-4 shadow-sm sm:rounded-2xl sm:p-6"
                >
                  <div className="mb-2 text-xl sm:mb-3 sm:text-2xl">{item.icon}</div>
                  <h3 className="mb-1 text-sm font-semibold text-sky-950 sm:mb-2 sm:text-base">{item.title}</h3>
                  <p className="text-xs text-sky-700/70 sm:text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="relative bg-gradient-to-b from-white via-sky-50 to-sky-100 py-16 sm:py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-10 text-center sm:mb-16">
            <h2 className="mb-3 text-3xl font-bold tracking-tight text-sky-950 sm:mb-4 sm:text-4xl md:text-5xl">
              What We Offer
            </h2>
            <p className="mx-auto max-w-2xl text-base text-sky-800/70 sm:text-lg">
              Factory sealed One Piece TCG products for collectors and retailers
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 sm:gap-6 lg:gap-8">
            {[
              {
                name: "Booster Boxes",
                description:
                  "Factory sealed booster boxes with 24 packs each. Perfect for collectors and retailers.",
                gradient: "from-rose-400 to-orange-400",
              },
              {
                name: "Starter Decks",
                description:
                  "Ready-to-play starter decks featuring popular characters. Great for new players.",
                gradient: "from-amber-400 to-orange-400",
              },
              {
                name: "Case Quantities",
                description:
                  "Bulk orders available for retailers. Competitive pricing on sealed cases.",
                gradient: "from-sky-400 to-blue-500",
              },
            ].map((product) => (
              <div
                key={product.name}
                className="card-hover group relative overflow-hidden rounded-xl border border-sky-200 bg-white shadow-sm sm:rounded-2xl"
              >
                {/* Gradient bar */}
                <div
                  className={`h-1.5 w-full bg-gradient-to-r ${product.gradient}`}
                />
                <div className="p-5 sm:p-6 md:p-8">
                  <h3 className="mb-2 text-xl font-bold text-sky-950 sm:mb-3 sm:text-2xl">{product.name}</h3>
                  <p className="text-sm text-sky-800/70 sm:text-base">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="relative bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-10 text-center sm:mb-12">
            <h2 className="mb-3 text-3xl font-bold tracking-tight text-sky-950 sm:mb-4 sm:text-4xl">
              Coming Soon
            </h2>
            <p className="mx-auto max-w-2xl text-base text-sky-800/70 sm:text-lg">
              Upcoming One Piece TCG releases we&apos;re tracking
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2 lg:max-w-2xl lg:mx-auto">
            {[
              {
                name: "EB-03",
                date: "2026",
                type: "Extra Booster",
                status: "Coming Soon",
              },
              {
                name: "OP-15",
                date: "2026",
                type: "Booster Box",
                status: "Coming Soon",
              },
            ].map((release) => (
              <div
                key={release.name}
                className="relative overflow-hidden rounded-xl border border-sky-200 bg-gradient-to-br from-sky-50 to-white p-5 sm:p-6"
              >
                <div className="absolute top-0 right-0 rounded-bl-lg bg-rose-500 px-3 py-1 text-xs font-medium text-white">
                  {release.status}
                </div>
                <p className="mb-1 text-xs font-medium text-sky-600">{release.type}</p>
                <h3 className="mb-2 text-lg font-bold text-sky-950">{release.name}</h3>
                <p className="text-sm text-sky-700">{release.date}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-sky-600">
            Contact us to secure your allocation
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative bg-gradient-to-b from-white to-sky-50 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="mb-10 text-center text-3xl font-bold tracking-tight text-sky-950 sm:mb-12 sm:text-4xl">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {[
              {
                q: "Do you sell to other retailers?",
                a: "Yes! We offer wholesale pricing for verified retailers. Contact us with your resale certificate for bulk order inquiries.",
              },
              {
                q: "Are all products factory sealed?",
                a: "Absolutely. We only sell 100% authentic, factory-sealed products sourced directly from authorized distributors.",
              },
              {
                q: "What is your shipping policy?",
                a: "We ship nationwide with full insurance. Orders are processed within 1-2 business days. Expedited shipping available.",
              },
              {
                q: "Do you offer pre-orders?",
                a: "Yes, we accept pre-orders for upcoming releases. Contact us to reserve your allocation before release dates.",
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept all major credit cards, PayPal, and bank transfers for wholesale orders.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="rounded-xl border border-sky-200 bg-white p-5 shadow-sm sm:p-6"
              >
                <h3 className="mb-2 font-semibold text-sky-950">{faq.q}</h3>
                <p className="text-sm text-sky-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="relative bg-gradient-to-r from-sky-500 to-blue-600 py-12 sm:py-16">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
          <h2 className="mb-3 text-2xl font-bold text-white sm:text-3xl">
            Stay Updated
          </h2>
          <p className="mb-6 text-sky-100">
            Get notified about new releases, restocks, and exclusive deals
          </p>
          <form className="flex flex-col gap-3 sm:flex-row sm:gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-full border-2 border-white/20 bg-white/10 px-5 py-3 text-white placeholder-sky-200 backdrop-blur-sm focus:border-white focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-full bg-white px-6 py-3 font-semibold text-sky-600 transition-transform hover:scale-105"
            >
              Subscribe
            </button>
          </form>
          <p className="mt-4 text-xs text-sky-200">
            No spam, unsubscribe anytime
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative bg-sky-100 py-16 sm:py-24 md:py-32">
        {/* Decorative wave at top */}
        <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-sky-100 to-transparent" />

        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-3 text-3xl font-bold tracking-tight text-sky-950 sm:mb-4 sm:text-4xl md:text-5xl">
              Let&apos;s Connect
            </h2>
            <p className="mb-8 text-base text-sky-800/70 sm:mb-10 sm:text-lg">
              Interested in wholesale orders or have questions? Reach out and
              we&apos;ll get back to you promptly.
            </p>

            <div className="border-glow rounded-xl border border-sky-200 bg-white p-5 shadow-lg shadow-sky-200/50 sm:rounded-2xl sm:p-8">
              <div className="space-y-5 sm:space-y-6">
                <div className="text-left">
                  <label className="mb-1.5 block text-sm text-sky-600 sm:mb-2">
                    Email
                  </label>
                  <div className="flex items-center gap-2">
                    <a
                      href="mailto:contact@openseatcg.com"
                      className="break-all text-base font-medium text-sky-950 transition-colors hover:text-sky-600 sm:text-lg"
                    >
                      contact@openseatcg.com
                    </a>
                    <button
                      type="button"
                      onClick={copyEmail}
                      className="relative z-50 ml-2 flex h-8 w-8 items-center justify-center rounded bg-sky-500 text-white hover:bg-sky-600"
                    >
                      {emailCopied ? (
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>

                <div className="border-t border-sky-100 pt-5 text-left sm:pt-6">
                  <label className="mb-1.5 block text-sm text-sky-600 sm:mb-2">
                    Phone
                  </label>
                  <div className="flex items-center gap-2">
                    <a
                      href="tel:+16692009430"
                      className="text-base font-medium text-sky-600 underline transition-colors hover:text-sky-800 sm:text-lg"
                    >
                      (669) 200-9430
                    </a>
                    <button
                      type="button"
                      onClick={copyPhone}
                      className="relative z-50 ml-2 flex h-8 w-8 items-center justify-center rounded bg-sky-500 text-white hover:bg-sky-600"
                    >
                      {phoneCopied ? (
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>

                <div className="border-t border-sky-100 pt-5 text-left sm:pt-6">
                  <label className="mb-1.5 block text-sm text-sky-600 sm:mb-2">
                    Business Hours
                  </label>
                  <p className="text-base text-sky-950 sm:text-lg">Monday - Friday, 9AM - 6PM PST</p>
                </div>

                <div className="border-t border-sky-100 pt-5 text-left sm:pt-6">
                  <label className="mb-1.5 block text-sm text-sky-600 sm:mb-2">
                    Location
                  </label>
                  <p className="text-base text-sky-950 sm:text-lg">San Jose, California</p>
                </div>
              </div>
            </div>

            <p className="mt-6 text-sm text-sky-700/60 sm:mt-8">
              We respond to all inquiries within 24 hours
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-sky-200 bg-white py-8 sm:py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}
            <div>
              <div className="mb-4 flex items-center gap-2 sm:gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-sky-500 to-blue-600">
                  <span className="text-sm font-bold text-white">OS</span>
                </div>
                <span className="font-semibold text-sky-950">OPEN SEA TCG</span>
              </div>
              <p className="text-sm text-sky-700">
                Premium sealed One Piece TCG products for collectors and retailers.
              </p>
              {/* Social Links */}
              <div className="mt-4 flex gap-3">
                <a
                  href="https://instagram.com/openseatcg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-100 text-sky-600 transition-colors hover:bg-sky-200 hover:text-sky-800"
                  aria-label="Instagram"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href="https://tiktok.com/@openseatcg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-100 text-sky-600 transition-colors hover:bg-sky-200 hover:text-sky-800"
                  aria-label="TikTok"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="mb-4 font-semibold text-sky-950">Quick Links</h3>
              <div className="flex flex-col gap-2">
                <Link href="#about" className="text-sm text-sky-700 transition-colors hover:text-sky-950">About</Link>
                <Link href="#products" className="text-sm text-sky-700 transition-colors hover:text-sky-950">Products</Link>
                <Link href="#contact" className="text-sm text-sky-700 transition-colors hover:text-sky-950">Contact</Link>
                <a href="https://opcardlist.com" target="_blank" rel="noopener noreferrer" className="text-sm text-sky-700 transition-colors hover:text-sky-950">OP Card List</a>
              </div>
            </div>

            {/* Products */}
            <div>
              <h3 className="mb-4 font-semibold text-sky-950">One Piece TCG</h3>
              <div className="flex flex-col gap-2">
                <span className="text-sm text-sky-700">Booster Boxes</span>
                <span className="text-sm text-sky-700">Starter Decks</span>
                <span className="text-sm text-sky-700">Case Quantities</span>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="mb-4 font-semibold text-sky-950">Contact</h3>
              <div className="flex flex-col gap-2 text-sm text-sky-700">
                <a href="mailto:contact@openseatcg.com" className="transition-colors hover:text-sky-950">contact@openseatcg.com</a>
                <a href="tel:+16692009430" className="transition-colors hover:text-sky-950">(669) 200-9430</a>
                <span>San Jose, California</span>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-sky-200 pt-8 sm:flex-row">
            <p className="text-xs text-sky-600/70">
              © {new Date().getFullYear()} OPEN SEA TCG. All rights reserved.
            </p>
            <p className="text-xs text-sky-600/70">
              CA Licensed Retailer · CDTFA #247-884128
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
