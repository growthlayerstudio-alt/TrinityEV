import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FiSettings,
  FiUsers,
  FiMapPin,
  FiTrendingUp,
  FiArrowUpRight,
  FiGlobe,
  FiTool,
  FiBriefcase,
} from "react-icons/fi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const highlights = [
  {
    icon: FiSettings,
    title: "Customizable low-speed electric scooter portfolio",
    text: "Flexible model options designed to match different market needs and business use cases.",
  },
  {
    icon: FiUsers,
    title: "Dealer, distributor, and B2B oriented model strategy",
    text: "Positioned for partners who need commercially relevant products with scalable potential.",
  },
  {
    icon: FiMapPin,
    title: "Practical mobility built for urban use cases",
    text: "Focused on everyday city mobility, presentable styling, and real-world usability.",
  },
  {
    icon: FiTrendingUp,
    title: "Scalable partnership potential across multiple segments",
    text: "Built to support growth across dealership, distribution, and bulk procurement channels.",
  },
];

const pillars = [
  {
    number: "01",
    icon: FiGlobe,
    title: "Global Sourcing",
    text: "We work with established EV component and model ecosystems to shape a product lineup aligned with current market demand and practical buyer expectations.",
  },
  {
    number: "02",
    icon: FiTool,
    title: "Assembly in India",
    text: "An India-led assembly approach allows stronger operational relevance, local adaptability, and better alignment with dealer and market needs.",
  },
  {
    number: "03",
    icon: FiBriefcase,
    title: "Business-First Positioning",
    text: "Trinity EV is built for dealers, distributors, and bulk buyers looking for commercially relevant electric mobility solutions, not just display products.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden px-5 pb-16 pt-32 sm:px-6 md:px-8 md:pb-20 md:pt-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,145,234,0.16),transparent_38%)]" />
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-[#0091EA]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-4 text-[11px] uppercase tracking-[0.3em] text-[#0091EA] sm:text-xs"
              >
                About Trinity EV
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.05 }}
                className="max-w-5xl text-4xl font-semibold leading-[1.04] sm:text-5xl md:text-6xl"
              >
                Electric mobility designed around real business demand.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.1 }}
                className="mt-6 max-w-3xl text-sm leading-7 text-black/65 sm:text-base md:text-lg md:leading-8"
              >
                Trinity EV is a B2B-focused electric mobility brand offering
                customizable low-speed electric scooters for dealers,
                distributors, and bulk buyers. With globally sourced product
                ecosystems and assembly in India, the brand is positioned to
                deliver adaptable EV solutions for practical urban mobility.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.15 }}
                className="mt-8 flex flex-col gap-3 sm:flex-row"
              >
                <Link
                  to="/#products"
                  className="inline-flex items-center justify-center rounded-full bg-[#0091EA] px-7 py-3 text-sm font-medium text-white transition hover:bg-[#0078c4]"
                >
                  Explore Products
                </Link>

                <Link
                  to="/#contact"
                  className="inline-flex items-center justify-center rounded-full border border-[#0091EA]/20 bg-[#0091EA]/5 px-7 py-3 text-sm font-medium text-[#0091EA] transition hover:bg-[#0091EA] hover:text-white"
                >
                  Contact Trinity EV
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12 }}
              className="relative"
            >
              <div className="absolute -left-5 -top-5 h-28 w-28 rounded-full bg-[#0091EA]/15 blur-2xl" />
              <div className="overflow-hidden rounded-[34px] border border-[#0091EA]/12 bg-white shadow-[0_24px_80px_rgba(0,0,0,0.08)]">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80"
                  alt="Business and electric mobility planning"
                  className="aspect-[4/3] h-full w-full object-cover"
                />
              </div>

              <div className="mt-5 grid grid-cols-2 gap-4">
                <div className="rounded-[24px] border border-[#0091EA]/12 bg-[#f4faff] p-5">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-[#0091EA]">
                    Focus
                  </p>
                  <p className="mt-3 text-sm leading-6 text-black/68">
                    Practical scooters for everyday urban mobility.
                  </p>
                </div>

                <div className="rounded-[24px] border border-[#0091EA]/12 bg-[#f4faff] p-5">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-[#0091EA]">
                    Model
                  </p>
                  <p className="mt-3 text-sm leading-6 text-black/68">
                    Global sourcing with India-based assembly.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="border-t border-black/8 px-5 py-16 sm:px-6 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65 }}
            className="max-w-3xl"
          >
            <p className="mb-4 text-[11px] uppercase tracking-[0.3em] text-[#0091EA] sm:text-xs">
              What Trinity EV Offers
            </p>
            <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
              A more structured and business-ready EV portfolio.
            </h2>
          </motion.div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.6, delay: index * 0.06 }}
                  className="group rounded-[30px] border border-[#0091EA]/12 bg-white p-6 shadow-[0_12px_40px_rgba(0,0,0,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_55px_rgba(0,145,234,0.10)]"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0091EA] text-white">
                      <Icon size={20} />
                    </div>

                    <div>
                      <h3 className="text-lg font-medium leading-snug text-black sm:text-xl">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-black/62 sm:text-base">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BRAND STORY */}
      <section className="border-t border-black/8 px-5 py-16 sm:px-6 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65 }}
              className="overflow-hidden rounded-[34px] border border-[#0091EA]/12 bg-white shadow-[0_14px_50px_rgba(0,0,0,0.05)]"
            >
              <img
                src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=1400&q=80"
                alt="Industrial and warehouse operations"
                className="aspect-[4/3] w-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, delay: 0.05 }}
            >
              <p className="mb-4 text-[11px] uppercase tracking-[0.3em] text-[#0091EA] sm:text-xs">
                Brand Story
              </p>

              <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
                Built around what partners actually need.
              </h2>

              <div className="mt-6 space-y-5 text-sm leading-7 text-black/65 sm:text-base">
                <p>
                  Trinity EV is shaped by a simple business idea: electric
                  mobility should be commercially practical, adaptable, and easy
                  to position in the market. Instead of relying on a one-format
                  product line, the brand focuses on a scooter portfolio that
                  can support multiple segments across urban mobility.
                </p>

                <p>
                  By combining global sourcing access with assembly in India,
                  Trinity EV creates a stronger route for dealers,
                  distributors, and bulk buyers looking for presentable, usable,
                  and scalable EV products. The result is a business-first
                  portfolio designed around market relevance.
                </p>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[24px] border border-[#0091EA]/12 bg-[#f7fbff] p-5">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-[#0091EA]">
                    Positioning
                  </p>
                  <p className="mt-3 text-sm leading-6 text-black/68">
                    B2B-led brand built for partner growth.
                  </p>
                </div>

                <div className="rounded-[24px] border border-[#0091EA]/12 bg-[#f7fbff] p-5">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-[#0091EA]">
                    Relevance
                  </p>
                  <p className="mt-3 text-sm leading-6 text-black/68">
                    Designed for practical demand, not just display.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FOUNDATION */}
      <section className="border-t border-black/8 px-5 py-16 sm:px-6 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65 }}
            className="max-w-3xl"
          >
            <p className="mb-4 text-[11px] uppercase tracking-[0.3em] text-[#0091EA] sm:text-xs">
              Our Foundation
            </p>
            <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
              A cleaner structure behind the brand.
            </h2>
          </motion.div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {pillars.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.6, delay: index * 0.06 }}
                  className="rounded-[30px] border border-[#0091EA]/12 bg-white p-6 shadow-[0_12px_40px_rgba(0,0,0,0.04)]"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0091EA] text-lg font-semibold text-white">
                      {item.number}
                    </div>

                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0091EA]/10 text-[#0091EA]">
                      <Icon size={20} />
                    </div>
                  </div>

                  <h3 className="mt-6 text-xl font-medium text-black">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-black/62">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
<section className="border-t border-black/8 px-5 py-16 sm:px-6 md:px-8 md:py-24">
  <div className="mx-auto max-w-7xl">
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65 }}
      className="relative overflow-hidden rounded-[34px] border border-white/10 bg-black p-8 text-white md:p-10"
    >
      {/* subtle glow accents */}
      <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-[#0091EA]/20 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-white/10 blur-3xl" />

      <div className="relative max-w-4xl">
        <p className="mb-4 text-[11px] uppercase tracking-[0.3em] text-[#0091EA] sm:text-xs">
          Built For Partnership
        </p>

        <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
          Trinity EV is positioned to support practical and scalable
          electric mobility partnerships.
        </h2>

        <p className="mt-6 text-sm leading-7 text-white/75 sm:text-base">
          With a business-first mindset, adaptable scooter lineup, and a
          sourcing-plus-assembly model built around flexibility, Trinity
          EV offers a stronger route for dealers, distributors, and bulk
          buyers entering or expanding in electric mobility.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            to="/#products"
            className="inline-flex items-center justify-center rounded-full bg-[#0091EA] px-7 py-3 text-sm font-medium text-white transition hover:bg-[#0078c4]"
          >
            Explore Product Range
            <FiArrowUpRight className="ml-2" size={16} />
          </Link>

          <Link
            to="/#contact"
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-3 text-sm font-medium text-white transition hover:bg-white hover:text-black"
          >
            Contact Trinity EV
          </Link>
        </div>
      </div>
    </motion.div>
  </div>
</section>
      <Footer />
    </main>
  );
}