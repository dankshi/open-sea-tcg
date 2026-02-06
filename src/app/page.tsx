import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black">
      {/* Noise overlay */}
      <div className="noise-overlay" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 border-b border-zinc-800/50 bg-black/80 backdrop-blur-xl">
        <div className="mx-auto max-w-6xl px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600">
                <span className="text-lg font-bold">OS</span>
              </div>
              <span className="text-lg font-semibold tracking-tight">
                OPEN SEA TCG
              </span>
            </Link>
            <div className="hidden items-center gap-8 md:flex">
              <Link
                href="#about"
                className="text-sm text-zinc-400 transition-colors hover:text-white"
              >
                About
              </Link>
              <Link
                href="#products"
                className="text-sm text-zinc-400 transition-colors hover:text-white"
              >
                Products
              </Link>
              <Link
                href="#contact"
                className="text-sm text-zinc-400 transition-colors hover:text-white"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center px-6">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 via-transparent to-transparent" />
        <div className="absolute top-1/4 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/50 px-4 py-2 text-sm text-zinc-400">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            Authorized TCG Retailer
          </div>

          <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            Premium Sealed
            <br />
            <span className="gradient-text">TCG Products</span>
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-lg text-zinc-400 md:text-xl">
            Specializing in One Piece, Pokémon, and premium trading card games.
            Trusted source for collectors and retailers seeking authentic sealed products.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="#contact"
              className="group relative inline-flex h-12 items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-8 font-medium text-black transition-transform hover:scale-105"
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
              className="inline-flex h-12 items-center justify-center rounded-full border border-zinc-700 px-8 font-medium text-white transition-colors hover:bg-zinc-900"
            >
              View Products
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="flex h-10 w-6 items-start justify-center rounded-full border border-zinc-700 p-2">
            <div className="h-2 w-1 animate-bounce rounded-full bg-zinc-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative border-t border-zinc-800/50 py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-16 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
                Built for the
                <br />
                <span className="gradient-text">New Era</span>
              </h2>
              <p className="mb-6 text-lg text-zinc-400">
                OPEN SEA TCG is a dedicated TCG retailer focused on
                bringing authentic, sealed products to collectors and businesses
                across the nation.
              </p>
              <p className="text-lg text-zinc-400">
                We work directly with authorized distributors to ensure every
                product we offer is genuine, sealed, and ready for your
                collection or resale inventory.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
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
                  className="card-hover rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6"
                >
                  <div className="mb-3 text-2xl">{item.icon}</div>
                  <h3 className="mb-2 font-semibold">{item.title}</h3>
                  <p className="text-sm text-zinc-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="relative border-t border-zinc-800/50 py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
              Our Focus
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-zinc-400">
              We specialize in premium TCG products with strong collector demand
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                name: "One Piece TCG",
                description:
                  "Bandai's flagship card game. Booster boxes, starter decks, and case quantities.",
                status: "Primary Focus",
                gradient: "from-red-500 to-orange-500",
              },
              {
                name: "Pokémon TCG",
                description:
                  "The world's most popular trading card game. Sealed booster boxes and ETBs.",
                status: "Available",
                gradient: "from-yellow-500 to-amber-500",
              },
              {
                name: "Other Bandai TCG",
                description:
                  "Dragon Ball Super, Digimon, and other Bandai card games.",
                status: "Available",
                gradient: "from-blue-500 to-purple-500",
              },
            ].map((product) => (
              <div
                key={product.name}
                className="card-hover group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50"
              >
                {/* Gradient bar */}
                <div
                  className={`h-1 w-full bg-gradient-to-r ${product.gradient}`}
                />
                <div className="p-8">
                  <div className="mb-4 inline-flex rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-300">
                    {product.status}
                  </div>
                  <h3 className="mb-3 text-2xl font-bold">{product.name}</h3>
                  <p className="text-zinc-400">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative border-t border-zinc-800/50 py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
              Let&apos;s Connect
            </h2>
            <p className="mb-10 text-lg text-zinc-400">
              Interested in wholesale orders or have questions? Reach out and
              we&apos;ll get back to you promptly.
            </p>

            <div className="border-glow rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8">
              <div className="space-y-6">
                <div className="text-left">
                  <label className="mb-2 block text-sm text-zinc-400">
                    Email
                  </label>
                  <a
                    href="mailto:contact@openseatcg.com"
                    className="text-lg font-medium transition-colors hover:text-blue-400"
                  >
                    contact@openseatcg.com
                  </a>
                </div>

                <div className="border-t border-zinc-800 pt-6 text-left">
                  <label className="mb-2 block text-sm text-zinc-400">
                    Business Hours
                  </label>
                  <p className="text-lg">Monday - Friday, 9AM - 6PM PST</p>
                </div>

                <div className="border-t border-zinc-800 pt-6 text-left">
                  <label className="mb-2 block text-sm text-zinc-400">
                    Location
                  </label>
                  <p className="text-lg">San Jose, California</p>
                </div>
              </div>
            </div>

            <p className="mt-8 text-sm text-zinc-500">
              We respond to all inquiries within 24 hours
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800/50 py-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600">
                <span className="text-sm font-bold">OS</span>
              </div>
              <span className="font-semibold">OPEN SEA TCG</span>
            </div>

            <div className="flex items-center gap-6">
              <Link
                href="#about"
                className="text-sm text-zinc-400 transition-colors hover:text-white"
              >
                About
              </Link>
              <Link
                href="#products"
                className="text-sm text-zinc-400 transition-colors hover:text-white"
              >
                Products
              </Link>
              <Link
                href="#contact"
                className="text-sm text-zinc-400 transition-colors hover:text-white"
              >
                Contact
              </Link>
            </div>

            <p className="text-sm text-zinc-500">
              © {new Date().getFullYear()} OPEN SEA TCG. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
