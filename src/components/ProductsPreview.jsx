import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { productSeries } from "../data/models";

export default function ProductsPreview() {
  return (
    <section
      id="products"
      className="bg-white px-5 py-20 text-black sm:px-6 md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl"
        >
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.32em] text-[#0091EA] sm:text-sm">
            Product Portfolio
          </p>

          <h2 className="max-w-6xl text-5xl font-semibold leading-[1.02] sm:text-6xl md:text-7xl">
            A flexible scooter lineup built for practical urban mobility.
          </h2>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-black/60 sm:text-base md:text-lg md:leading-8">
            Designed for dealers across city, utility, and classic EV segments.
          </p>
        </motion.div>

        <div className="mt-20 space-y-20 md:mt-24 md:space-y-24">
          {productSeries.map((series, seriesIndex) => (
            <motion.div
              key={series.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.65, delay: seriesIndex * 0.06 }}
            >
              <div className="mb-8 md:mb-10">
                <p className="text-[11px] uppercase tracking-[0.26em] text-[#0091EA] sm:text-xs">
                  Series
                </p>

                <h3 className="mt-3 text-4xl font-semibold leading-tight sm:text-5xl">
                  {series.name}
                </h3>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-black/55 sm:text-base">
                  {series.description}
                </p>

                <div className="mt-7 h-px w-full bg-black/10" />
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
                {series.models.map((model) => (
                  <div
                    key={model.slug}
                    className="group overflow-hidden rounded-[28px] border border-black/10 bg-white transition duration-300 hover:-translate-y-1 hover:border-black/20 hover:shadow-[0_18px_50px_rgba(0,0,0,0.07)]"
                  >
                    <div className="aspect-[16/10] overflow-hidden bg-[#f6f6f6]">
                      <img
                        src={model.image}
                        alt={model.name}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                      />
                    </div>

                    <div className="p-5 sm:p-6 md:p-7">
                      <h4 className="text-xl font-semibold text-black sm:text-2xl">
                        {model.name}
                      </h4>

                      <p className="mt-3 min-h-[56px] text-sm leading-6 text-black/55 sm:text-base sm:leading-7">
                        {model.tagline}
                      </p>

                      <Link
  to={`/products/${model.slug}`}
  className="mt-5 inline-flex items-center justify-center rounded-full bg-[#0091EA] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#0078c4]"
>
  View Details →
</Link>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 h-px w-full bg-gradient-to-r from-transparent via-black/12 to-transparent md:mt-24" />
      </div>
    </section>
  );
}