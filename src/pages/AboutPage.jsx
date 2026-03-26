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
  FiLayers,
  FiTruck,
  FiShield,
  FiPackage,
  FiTarget,
  FiZap,
} from "react-icons/fi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const highlights = [
  {
    icon: FiSettings,
    title: "A channel-ready electric scooter portfolio",
    text: "A versatile lineup of low-speed electric scooters built to support different buyer needs, pricing positions, and business opportunities.",
  },
  {
    icon: FiUsers,
    title: "Built for dealers, distributors, and serious EV partners",
    text: "Trinity EV is positioned for businesses looking for products that are commercially viable, visually presentable, and ready to be taken to market.",
  },
  {
    icon: FiMapPin,
    title: "Urban mobility designed for practical Indian demand",
    text: "The product direction focuses on real-world usability, everyday mobility relevance, and a format that fits modern city movement.",
  },
  {
    icon: FiTrendingUp,
    title: "Structured for business growth and market expansion",
    text: "Suitable for dealership growth, regional distribution, bulk requirements, and businesses entering the EV segment with intent to scale.",
  },
];

const pillars = [
  {
    number: "01",
    icon: FiGlobe,
    title: "Global Sourcing Backbone",
    text: "We work within established EV product and component ecosystems to shape a lineup that aligns with evolving mobility demand and practical market expectations.",
  },
  {
    number: "02",
    icon: FiTool,
    title: "India-Based Assembly Approach",
    text: "An India-led assembly model allows stronger local relevance, operational adaptability, and a structure better suited to market-facing business needs.",
  },
  {
    number: "03",
    icon: FiBriefcase,
    title: "Business-First Brand Strategy",
    text: "Trinity EV is not built as a concept brand. It is built as a commercial mobility brand for dealers, distributors, and B2B partners who need real market-ready products.",
  },
];

const partnerReasons = [
  {
    icon: FiLayers,
    title: "Stronger product positioning",
    text: "A varied and presentable model lineup helps partners address different customer segments with greater clarity and confidence.",
  },
  {
    icon: FiTruck,
    title: "Commercial relevance",
    text: "The scooters are positioned around practical movement, daily usability, and real mobility demand rather than brochure-only appeal.",
  },
  {
    icon: FiShield,
    title: "Brand-ready presentation",
    text: "Clean styling and a more structured identity make the lineup easier to represent in retail, distribution, and institutional conversations.",
  },
  {
    icon: FiPackage,
    title: "Flexible B2B opportunity",
    text: "Suitable for dealerships, distribution channels, fleet-style requirements, and emerging businesses entering the EV ecosystem.",
  },
];

const audiences = [
  {
    title: "Dealers",
    text: "For partners who want to expand their product offering with practical electric mobility solutions that are easier to position and sell.",
  },
  {
    title: "Distributors",
    text: "For businesses looking to build stronger regional presence with products that support wider channel movement and growth potential.",
  },
  {
    title: "Bulk Buyers",
    text: "For institutions and commercial buyers seeking electric mobility options for larger or repeat procurement needs.",
  },
  {
    title: "EV Entrepreneurs",
    text: "For new-age business builders looking for a structured route into the growing electric mobility category.",
  },
];

const valuePoints = [
  {
    icon: FiTarget,
    title: "Clear market intent",
    text: "Every aspect of the brand is positioned toward practical business adoption, not just visual appeal.",
  },
  {
    icon: FiZap,
    title: "Future-facing category",
    text: "Electric mobility continues to create new opportunities for businesses that enter with the right product and positioning strategy.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden px-5 pb-16 pt-36 sm:px-6 md:px-8 md:pb-20 md:pt-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,145,234,0.14),transparent_38%)]" />
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-[#0091EA]/10 blur-3xl" />
        <div className="absolute left-0 top-24 h-52 w-52 rounded-full bg-black/[0.03] blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-4 text-[11px] uppercase tracking-[0.32em] text-[#0091EA] sm:text-xs"
              >
                About Trinity EV
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.05 }}
                className="max-w-5xl text-4xl font-semibold leading-[1.02] sm:text-5xl md:text-6xl"
              >
                Market-ready electric mobility built for serious business growth.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.1 }}
                className="mt-6 max-w-3xl text-sm leading-7 text-black/65 sm:text-base md:text-lg md:leading-8"
              >
                Trinity EV is a B2B-focused electric mobility brand offering
                customizable low-speed electric scooters for dealers,
                distributors, and commercial buyers. With globally sourced
                product ecosystems and assembly in India, the brand is designed
                to deliver practical, scalable, and business-oriented EV
                solutions for the evolving mobility market.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.15 }}
                className="mt-4 max-w-3xl text-sm leading-7 text-black/56 sm:text-base md:leading-8"
              >
                The vision behind Trinity EV is clear: create a stronger route
                for businesses that want electric mobility products with market
                relevance, channel potential, and long-term commercial value.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.2 }}
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
                  className="inline-flex items-center justify-center rounded-full border border-black bg-white px-7 py-3 text-sm font-medium text-black transition hover:bg-black hover:text-white"
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
              <div className="overflow-hidden rounded-[34px] border border-black/8 bg-white shadow-[0_24px_80px_rgba(0,0,0,0.08)]">
               <img
  src="/Hero2.png"
  alt="Trinity EV premium product lineup"
  className="aspect-[4/3] h-full w-full object-cover"
/>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-4">
                <div className="rounded-[24px] border border-black/8 bg-[#f8fbff] p-5">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-[#0091EA]">
                    Focus
                  </p>
                  <p className="mt-3 text-sm leading-6 text-black/68">
                    Practical EV products built for real market movement.
                  </p>
                </div>

                <div className="rounded-[24px] border border-black/8 bg-[#f8fbff] p-5">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-[#0091EA]">
                    Model
                  </p>
                  <p className="mt-3 text-sm leading-6 text-black/68">
                    Global sourcing supported by India-based assembly.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* INTRO BAND */}
      <section className="border-y border-black/8 bg-black px-5 py-14 text-white sm:px-6 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-4 text-[11px] uppercase tracking-[0.3em] text-[#0091EA] sm:text-xs">
              Why Trinity EV
            </p>
            <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
              A brand positioned for dealers, distributors, and businesses that
              want to grow with the EV category.
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-sm leading-7 text-white/74 sm:text-base"
          >
            Trinity EV is built to bridge product opportunity with business
            opportunity. It offers a sharper path for partners seeking
            commercially relevant electric mobility solutions with stronger
            positioning and market-facing value.
          </motion.p>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="px-5 py-16 sm:px-6 md:px-8 md:py-24">
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
              A sharper, more business-ready EV proposition.
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
                  className="group rounded-[30px] border border-black/8 bg-white p-6 shadow-[0_12px_40px_rgba(0,0,0,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_55px_rgba(0,145,234,0.10)]"
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
              className="overflow-hidden rounded-[34px] border border-black/8 bg-white shadow-[0_14px_50px_rgba(0,0,0,0.05)]"
            >
              <img
  src="/TRINITY%20EV.png"
  alt="Trinity EV product lineup"
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
                Built around what modern mobility businesses actually need.
              </h2>

              <div className="mt-6 space-y-5 text-sm leading-7 text-black/65 sm:text-base">
                <p>
                  Trinity EV is shaped by a simple but powerful idea: electric
                  mobility products should not only look presentable, they
                  should make commercial sense. The brand is focused on creating
                  a stronger route for businesses that want to enter, expand, or
                  scale within the EV category with confidence.
                </p>

                <p>
                  Instead of relying on a one-size-fits-all approach, Trinity EV
                  brings together a flexible low-speed scooter portfolio designed
                  for practical use cases, broader channel adaptability, and
                  stronger market-facing potential. This makes the lineup more
                  relevant for dealers, distributors, and commercial partners
                  looking beyond surface-level product appeal.
                </p>

                <p>
                  With global sourcing access and assembly in India, Trinity EV
                  is positioned to support a more agile, more commercially
                  aligned mobility proposition for today’s evolving business
                  landscape.
                </p>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {valuePoints.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.55, delay: index * 0.06 }}
                      className="rounded-[24px] border border-black/8 bg-[#f8fbff] p-5"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0091EA]/10 text-[#0091EA]">
                        <Icon size={18} />
                      </div>
                      <h3 className="mt-4 text-base font-medium text-black">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-black/68">
                        {item.text}
                      </p>
                    </motion.div>
                  );
                })}
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
              The Trinity EV Foundation
            </p>
            <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
              The structure behind a stronger EV business proposition.
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
                  className="rounded-[30px] border border-black/8 bg-white p-6 shadow-[0_12px_40px_rgba(0,0,0,0.04)]"
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

      {/* WHY PARTNERS CHOOSE */}
      <section className="border-t border-black/8 bg-[#fbfcff] px-5 py-16 sm:px-6 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65 }}
            className="max-w-3xl"
          >
            <p className="mb-4 text-[11px] uppercase tracking-[0.3em] text-[#0091EA] sm:text-xs">
              Why Businesses Choose Trinity EV
            </p>
            <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
              A brand designed to attract serious mobility partners.
            </h2>
          </motion.div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {partnerReasons.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="rounded-[28px] border border-black/8 bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.03)]"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0091EA] text-white">
                      <Icon size={19} />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium sm:text-xl">
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

      {/* WHO WE WORK WITH */}
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
              Who We Work With
            </p>
            <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
              Built for businesses entering or expanding in electric mobility.
            </h2>
          </motion.div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {audiences.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="rounded-[28px] border border-black/8 bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.03)]"
              >
                <h3 className="text-lg font-medium text-black">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-black/62">
                  {item.text}
                </p>
              </motion.div>
            ))}
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
            <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-[#0091EA]/20 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-white/10 blur-3xl" />

            <div className="relative max-w-4xl">
              <p className="mb-4 text-[11px] uppercase tracking-[0.3em] text-[#0091EA] sm:text-xs">
                Built For Partnership
              </p>

              <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
                Trinity EV is positioned to help businesses move into electric
                mobility with stronger clarity, stronger products, and stronger
                market potential.
              </h2>

              <p className="mt-6 text-sm leading-7 text-white/75 sm:text-base">
                For dealers, distributors, and commercial buyers looking for a
                serious EV opportunity, Trinity EV offers a more structured,
                more presentable, and more business-ready route into the market.
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
                  className="inline-flex items-center justify-center rounded-full border border-white/25 px-7 py-3 text-sm font-medium text-white transition hover:bg-white hover:text-black"
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