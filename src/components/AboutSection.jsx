import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function AboutSection() {
  return (
    <section
  id="about"
  className="scroll-mt-32 bg-white px-5 py-20 text-black sm:px-6 md:px-8 md:py-28"
>
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-4 text-[11px] uppercase tracking-[0.28em] text-[#0091EA] sm:text-xs">
            About Trinity EV
          </p>

          <h2 className="max-w-2xl text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
            Practical electric mobility, built for real market demand.
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-7 text-black/70 sm:text-base">
            Trinity EV delivers customizable low-speed electric scooters for
            dealers, distributors, and bulk buyers — combining global sourcing
            with assembly in India.
          </p>

          <p className="mt-4 max-w-xl text-sm leading-7 text-black/55 sm:text-base">
            The focus is simple: adaptable products that are easy to position,
            easy to sell, and built for everyday urban mobility.
          </p>

          {/* CTA BUTTON */}
          <Link
            to="/about"
            className="mt-8 inline-flex items-center rounded-full bg-[#0091EA] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#0079c7]"
          >
            Read Full Story →
          </Link>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="overflow-hidden rounded-[32px] border border-black/10"
        >
          <img
  src="https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&w=1400&q=80"
  alt="Warehouse and industrial operations"
  className="h-full w-full object-cover"
/>
        </motion.div>

      </div>
    </section>
  );
}