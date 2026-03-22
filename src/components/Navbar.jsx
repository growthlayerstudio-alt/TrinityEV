import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { productSeries } from "../data/models";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Products", type: "products" },
  { label: "Why Us", href: "/#why-us" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="fixed left-0 top-4 z-50 w-full px-4">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between rounded-full border border-white/10 bg-black/88 px-4 py-3 shadow-[0_12px_30px_rgba(0,0,0,0.22)] backdrop-blur-sm sm:px-6">
          {/* Logo */}
          <Link
            to="/"
            className="text-[13px] font-medium uppercase tracking-[0.34em] text-white sm:text-[14px]"
            style={{ fontFamily: '"Space Grotesk", "Inter", sans-serif' }}
          >
            Trinity EV
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => {
              if (link.type === "products") {
                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setProductsOpen(true)}
                    onMouseLeave={() => setProductsOpen(false)}
                  >
                    <button
                      type="button"
                      className="flex items-center gap-1 text-sm text-white/82 transition hover:text-white"
                    >
                      Products <FiChevronDown size={16} />
                    </button>

                    <AnimatePresence>
                      {productsOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.985 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.985 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-1/2 top-11 w-[720px] -translate-x-1/2 rounded-[28px] border border-white/10 bg-black/95 p-5 shadow-[0_22px_55px_rgba(0,0,0,0.38)]"
                        >
                          <p className="mb-4 px-1 text-[11px] uppercase tracking-[0.28em] text-[#0091EA]">
                            Product Models
                          </p>

                          <div className="grid gap-5 md:grid-cols-3">
                            {productSeries.map((series) => (
                              <div key={series.id} className="min-w-0">
                                <p className="mb-3 border-b border-white/8 pb-2 text-xs font-medium uppercase tracking-[0.18em] text-white/42">
                                  {series.name}
                                </p>

                                <div className="grid gap-1">
                                  {series.models.map((model) => (
                                    <Link
                                      key={model.slug}
                                      to={`/products/${model.slug}`}
                                      className="rounded-xl px-3 py-2.5 text-sm text-white/76 transition hover:bg-white/6 hover:text-white"
                                    >
                                      {model.name}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              if (link.href.startsWith("/#")) {
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm text-white/82 transition hover:text-white"
                  >
                    {link.label}
                  </a>
                );
              }

              return (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-sm text-white/82 transition hover:text-white"
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href="/#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white px-4 py-2 text-xs font-medium text-black transition hover:bg-white/92"
            >
              Quick Enquire
            </a>

            <button
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white transition hover:bg-white/[0.08]"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <FiMenu size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/98 p-6 text-white"
          >
            <div className="mx-auto flex h-full max-w-md flex-col">
              <div className="flex items-center justify-between">
                <Link
                  to="/"
                  onClick={() => setMobileOpen(false)}
                  className="text-[13px] font-medium uppercase tracking-[0.34em] text-white"
                  style={{ fontFamily: '"Space Grotesk", "Inter", sans-serif' }}
                >
                  Trinity EV
                </Link>

                <button
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5"
                  aria-label="Close menu"
                >
                  <FiX size={22} />
                </button>
              </div>

              <div className="mt-10 flex flex-col gap-5">
                <Link
                  to="/"
                  onClick={() => setMobileOpen(false)}
                  className="text-2xl font-medium text-white/92"
                >
                  Home
                </Link>

                <a
                  href="/#about"
                  onClick={() => setMobileOpen(false)}
                  className="text-2xl font-medium text-white/92"
                >
                  About
                </a>

                <div className="border-b border-white/10 pb-5">
                  <button
                    type="button"
                    onClick={() => setMobileProductsOpen((prev) => !prev)}
                    className="flex w-full items-center justify-between text-2xl font-medium text-white/92"
                  >
                    Products
                    <FiChevronDown
                      size={20}
                      className={`transition-transform duration-200 ${
                        mobileProductsOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {mobileProductsOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.22 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-4 rounded-[22px] border border-white/8 bg-white/[0.03] p-4">
                          <div className="space-y-5">
                            {productSeries.map((series) => (
                              <div key={series.id}>
                                <p className="mb-2 text-[11px] uppercase tracking-[0.22em] text-white/42">
                                  {series.name}
                                </p>

                                <div className="grid gap-1">
                                  {series.models.map((model) => (
                                    <Link
                                      key={model.slug}
                                      to={`/products/${model.slug}`}
                                      onClick={() => setMobileOpen(false)}
                                      className="rounded-xl px-3 py-2 text-sm text-white/76 transition hover:bg-white/6 hover:text-white"
                                    >
                                      {model.name}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <a
                  href="/#why-us"
                  onClick={() => setMobileOpen(false)}
                  className="text-2xl font-medium text-white/92"
                >
                  Why Us
                </a>

                <a
                  href="/#contact"
                  onClick={() => setMobileOpen(false)}
                  className="text-2xl font-medium text-white/92"
                >
                  Contact
                </a>
              </div>

              <div className="mt-auto pt-8">
                <a
                  href="/#contact"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex w-auto items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/92"
                >
                  Quick Enquire
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}