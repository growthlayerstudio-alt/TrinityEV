import { Link } from "react-router-dom";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { productSeries } from "../data/models";

const phoneNumbers = ["9728110070", "8510801010", "9896000493"];

export default function Footer() {
  return (
    <footer className="bg-[#0091EA] px-5 pb-8 pt-16 text-white sm:px-6 md:px-8 md:pb-10 md:pt-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1.8fr] lg:gap-16">
          
          {/* LEFT */}
          <div>
            <Link
              to="/"
              className="inline-block text-[13px] font-medium uppercase tracking-[0.34em] text-white sm:text-[14px]"
              style={{ fontFamily: '"Space Grotesk", "Inter", sans-serif' }}
            >
              Trinity EV
            </Link>

            <h3 className="mt-6 max-w-md text-3xl font-semibold leading-tight sm:text-4xl">
              Electric mobility built for modern cities.
            </h3>

            <p className="mt-5 max-w-xl text-sm leading-7 text-white/80 sm:text-base">
              Explore our range of EV scooters designed for performance,
              reliability, and everyday practicality.
            </p>

            {/* CTA */}
            <Link
              to="/#contact"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-[#0091EA] transition hover:bg-white/90"
            >
              Contact Us
            </Link>
          </div>

          {/* RIGHT GRID */}
          <div className="grid gap-10 sm:grid-cols-2 xl:grid-cols-3">
            
            {/* NAV */}
            <div>
              <div className="inline-block rounded-full bg-black px-3 py-1">
                <p className="text-[10px] uppercase tracking-[0.28em] text-white">
                  Navigation
                </p>
              </div>

              <div className="mt-5 flex flex-col gap-3 text-sm text-white/90 sm:text-base">
                <Link to="/" className="hover:text-white">Home</Link>
                <a href="/#about" className="hover:text-white">About</a>
                <a href="/#products" className="hover:text-white">Products</a>
                <a href="/#why-us" className="hover:text-white">Why Us</a>
                <a href="/#contact" className="hover:text-white">Contact</a>
              </div>
            </div>

            {/* PRODUCTS */}
            <div>
              <div className="inline-block rounded-full bg-black px-3 py-1">
                <p className="text-[10px] uppercase tracking-[0.28em] text-white">
                  Models
                </p>
              </div>

              <div className="mt-5 space-y-5 text-sm sm:text-base">
                {productSeries.map((series) => (
                  <div key={series.id}>
                    <p className="mb-2 text-xs uppercase tracking-[0.18em] text-white/50">
                      {series.name}
                    </p>

                    <div className="flex flex-col gap-2 text-white/90">
                      {series.models.map((model) => (
                        <Link
                          key={model.slug}
                          to={`/products/${model.slug}`}
                          className="hover:text-white"
                        >
                          {model.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CONTACT */}
            <div>
              <div className="inline-block rounded-full bg-black px-3 py-1">
                <p className="text-[10px] uppercase tracking-[0.28em] text-white">
                  Contact
                </p>
              </div>

              <div className="mt-5 space-y-4 text-sm leading-7 text-white/90 sm:text-base">
                <div className="flex items-start gap-3">
                  <FiMapPin className="mt-1 shrink-0" size={16} />
                  <p>
                    844 WE WORK DLF FORUM CYBER CITY PHASE 3 <br />
                    GURUGRAM, HARYANA
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <FiMail className="mt-1 shrink-0" size={16} />
                  <a href="mailto:info@trinityev.in" className="hover:text-white">
                    info@trinityev.in
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <FiPhone className="mt-1 shrink-0" size={16} />
                  <div className="flex flex-col">
                    {phoneNumbers.map((number) => (
                      <a key={number} href={`tel:${number}`} className="hover:text-white">
                        {number}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 h-px w-full bg-white/20" />

        {/* Bottom */}
        <div className="mt-6 flex flex-col gap-3 text-xs text-white/70 sm:flex-row sm:items-center sm:justify-between sm:text-sm">
          <p>
            © {new Date().getFullYear()} Trinity EV. All rights reserved.
          </p>
          <p>
            Designed for scalable electric mobility partnerships.
          </p>
        </div>
      </div>
    </footer>
  );
}