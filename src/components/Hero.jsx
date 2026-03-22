import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    eyebrow: "TRINITY EV",
    title: "Practical Electric Mobility",
    description: "Built for dealers and distributors.",
    image: "/Hero1.png",
    mobileImage: "/Hero1M.png",
    primaryCta: "Explore Models",
    secondaryCta: "Enquire Now",
  },
  {
    id: 2,
    eyebrow: "B2B EV SOLUTIONS",
    title: "Designed for Scalable Distribution",
    description: "Flexible scooter portfolio for real demand.",
    image: "/Hero2.png",
    mobileImage: "/Hero2M.png",
    primaryCta: "View Products",
    secondaryCta: "Contact Us",
  },
  {
    id: 3,
    eyebrow: "CUSTOM CONFIGURATIONS",
    title: "Adaptable for Business Needs",
    description: "Configurations tailored for dealers.",
    image: "/Hero3.png",
    mobileImage: "/Hero3M.png", // if you have it, else remove
    primaryCta: "Explore Range",
    secondaryCta: "Partner With Us",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const activeSlide = slides[current];

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-black text-white">
      {/* Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSlide.id}
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9 }}
          className="absolute inset-0"
        >
          {/* Desktop */}
<img
  src={activeSlide.image}
  alt={activeSlide.title}
  className="hidden md:block h-full w-full object-cover"
/>

{/* Mobile */}
<img
  src={activeSlide.mobileImage || activeSlide.image}
  alt={activeSlide.title}
  className="block md:hidden h-full w-full object-cover"
/>

          {/* overlays */}
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/70" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 flex min-h-[100svh] items-end md:items-center px-5 pt-28 pb-24 sm:px-6 md:px-8">
        <div className="mx-auto w-full max-w-6xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide.id + "-content"}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <p className="mb-4 text-[10px] uppercase tracking-[0.28em] text-white/60 sm:text-xs">
                {activeSlide.eyebrow}
              </p>

              <h1 className="text-4xl font-semibold leading-[1.05] sm:text-5xl md:text-6xl">
                {activeSlide.title}
              </h1>

              <p className="mt-5 max-w-lg text-sm text-white/70 sm:text-base">
                {activeSlide.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#products"
                  className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/90"
                >
                  {activeSlide.primaryCta}
                </a>

                <a
                  href="#contact"
                  className="rounded-full border border-white/25 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                >
                  {activeSlide.secondaryCta}
                </a>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Bottom Ticker */}
<div className="absolute bottom-0 left-0 z-10 w-full overflow-hidden border-t border-white/10 bg-black/40 backdrop-blur-sm">
  <div className="flex whitespace-nowrap py-3 sm:py-4">
    <div className="ticker-track flex items-center">
      {[
        "Dealer-Focused Portfolio",
        "Custom Configurations",
        "Low-Speed Urban Mobility",
        "Built for Distribution",
        "Scalable EV Solutions",
        "Business-Ready Models",
        "Urban Market Fit",
        "Flexible Product Range",
      ]
        .concat([
          "Dealer-Focused Portfolio",
          "Custom Configurations",
          "Low-Speed Urban Mobility",
          "Built for Distribution",
          "Scalable EV Solutions",
          "Business-Ready Models",
          "Urban Market Fit",
          "Flexible Product Range",
        ])
        .map((item, index) => (
          <div
            key={index}
            className="mx-6 flex items-center gap-6 text-[10px] uppercase tracking-[0.22em] text-white/60 sm:text-xs"
          >
            <span>{item}</span>
            <span className="h-1 w-1 rounded-full bg-[#0091EA]" />
          </div>
        ))}
    </div>
  </div>
</div>

          {/* Dots only (no arrows) */}
          <div className="mt-10 flex items-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-2.5 rounded-full transition-all ${
                  current === index
                    ? "w-8 bg-white"
                    : "w-2.5 bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}