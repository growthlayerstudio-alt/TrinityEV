import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiSliders, FiTruck, FiBox, FiZap } from "react-icons/fi";

const reasons = [
  {
    icon: FiSliders,
    title: "Flexible Configurations",
    text: "Model specifications can be adapted for different business needs, market preferences, and dealer requirements.",
  },
  {
    icon: FiTruck,
    title: "Built for\nDistribution",
    text: "A product approach designed for dealers, distributors, and bulk buyers looking for scalable EV opportunities.",
  },
  {
    icon: FiBox,
    title: "Assembly-Led Adaptability",
    text: "A sourcing and assembly model that supports variety, faster alignment, and evolving business demand.",
  },
  {
    icon: FiZap,
    title: "Practical Urban Focus",
    text: "Low-speed electric scooters created for everyday city mobility and commercially relevant use cases.",
  },
];

export default function WhyUsSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <section
  id="why-us"
  className="scroll-mt-32 bg-white px-5 py-20 text-black sm:px-6 md:px-8 md:py-28"
>
      <div className="mx-auto max-w-7xl">
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl"
        >
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.32em] text-[#0091EA] sm:text-sm">
            Why Trinity EV
          </p>

          <h2 className="max-w-5xl text-5xl font-semibold leading-[1.02] sm:text-6xl md:text-7xl">
            Built for business, flexibility, and practical EV distribution.
          </h2>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-black/60 sm:text-base md:text-lg md:leading-8">
            Trinity EV supports dealers and mobility partners with adaptable
            products, scalable supply thinking, and market-relevant positioning.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-16 grid gap-4 md:mt-20 md:grid-cols-2 xl:grid-cols-4">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={reason.title}
                initial={
                  isMobile
                    ? { opacity: 0, x: isEven ? -14 : 14 }
                    : { opacity: 0, y: 24 }
                }
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.05 }}
                className="group rounded-[28px] border border-black/10 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-black/20 hover:shadow-[0_14px_35px_rgba(0,0,0,0.06)] sm:p-7"
              >
                {/* Icon */}
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0091EA] text-white shadow-[0_8px_20px_rgba(0,145,234,0.25)] transition duration-300 group-hover:scale-105">
                  <Icon size={24} />
                </div>

                {/* Title */}
                <h3 className="mt-6 whitespace-pre-line text-xl font-semibold leading-[1.15] text-black sm:text-2xl">
                  {reason.title}
                </h3>

                {/* Text */}
                <p className="mt-3 text-sm leading-7 text-black/60 sm:text-base">
                  {reason.text}
                </p>

                {/* Accent */}
                <div className="mt-6 h-[2px] w-10 rounded-full bg-[#0091EA] transition-all duration-300 group-hover:w-16" />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Separator */}
        <div className="mt-20 h-px w-full bg-gradient-to-r from-transparent via-[#0091EA]/25 to-transparent md:mt-24" />
      </div>
    </section>
  );
}