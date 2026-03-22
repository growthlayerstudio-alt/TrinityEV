import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FiArrowLeft, FiArrowRight, FiX } from "react-icons/fi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { allModels } from "../data/models";

export default function ProductDetailPage() {
  const { slug } = useParams();
  const model = allModels.find((item) => item.slug === slug);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") showPrevImage();
      if (e.key === "ArrowRight") showNextImage();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxOpen, activeImageIndex]);

  if (!model) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-white px-5 pb-20 pt-32 text-black sm:px-6 md:px-8">
          <div className="mx-auto max-w-5xl">
            <p className="text-xs font-medium uppercase tracking-[0.32em] text-[#0091EA] sm:text-sm">
              Product Not Found
            </p>

            <h1 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
              This model page is not available.
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-black/60 sm:text-base">
              The model you are trying to view does not exist in the current
              product data.
            </p>

            <Link
              to="/"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-black/85"
            >
              Back to Homepage
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const features =
    Array.isArray(model.features) && model.features.length > 0
      ? model.features
      : [
          "Practical urban mobility positioning",
          "Dealer-focused product appeal",
          "Low-speed electric platform",
          "Flexible business suitability",
        ];

  const gallery =
    Array.isArray(model.gallery) && model.gallery.length > 0
      ? model.gallery
      : [model.image, model.image, model.image, model.image].filter(Boolean);

  const specs = model.specs || {
    topSpeed: "To be updated",
    range: "To be updated",
    battery: "To be updated",
    chargingTime: "To be updated",
    motorPower: "To be updated",
  };

  const overview =
    model.overview ||
    "This model is positioned for practical electric mobility requirements with a dealer-friendly approach and clean commercial appeal.";

  const heroImage = model.heroImage || model.image;
  const seriesName = model.series || "Trinity EV Model";

  const specEntries = Object.entries(specs);

  const openLightbox = (index) => {
    setActiveImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const showPrevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  const showNextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % gallery.length);
  };

  return (
    <>
      <Navbar />

      <main className="bg-white text-black">
        {/* Hero */}
        <section className="px-5 pb-16 pt-32 sm:px-6 md:px-8 md:pb-20 md:pt-36">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.32em] text-[#0091EA] sm:text-sm">
                {seriesName}
              </p>

              <h1 className="mt-5 text-5xl font-semibold leading-[1.02] sm:text-6xl md:text-7xl">
                {model.name}
              </h1>

              <p className="mt-5 max-w-xl text-base leading-8 text-black/62 md:text-lg">
                {model.tagline || "Built for practical urban electric mobility."}
              </p>

              <p className="mt-8 max-w-2xl text-sm leading-7 text-black/60 sm:text-base">
                {overview}
              </p>

              <div className="mt-10">
                <a
                  href="/#contact"
                  className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-black/85"
                >
                  Enquire Now
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-[32px] border border-black/8 bg-[#f6f6f6]">
              {heroImage ? (
                <img
                  src={heroImage}
                  alt={model.name}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex min-h-[420px] items-center justify-center text-sm text-black/40">
                  Product image will be added here
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Highlights + Specs */}
        <section className="px-5 py-16 sm:px-6 md:px-8 md:py-20">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#0091EA]">
                Key Highlights
              </p>

              <div className="mt-8 space-y-4">
                {features.map((feature, index) => (
                  <div
                    key={`${feature}-${index}`}
                    className="flex gap-4 rounded-[24px] border border-black/10 bg-white px-5 py-5"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black text-sm font-medium text-white">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <p className="pt-1 text-sm leading-7 text-black/78 sm:text-base">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#0091EA]">
                Specifications
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {specEntries.map(([key, value]) => (
                  <div
                    key={key}
                    className="rounded-[24px] border border-black/10 bg-[#fafafa] p-5"
                  >
                    <p className="text-[11px] uppercase tracking-[0.18em] text-black/42 sm:text-xs">
                      {key.replace(/([A-Z])/g, " $1").trim()}
                    </p>
                    <p className="mt-3 text-lg font-medium text-black sm:text-xl">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="px-5 py-16 sm:px-6 md:px-8 md:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="flex items-end justify-between gap-6">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#0091EA]">
                  Gallery
                </p>
                <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
                  Explore {model.name} from every angle
                </h2>
              </div>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {gallery.map((image, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => openLightbox(index)}
                  className="group overflow-hidden rounded-[24px] border border-black/8 bg-[#f5f5f5] text-left"
                >
                  {image ? (
                    <img
                      src={image}
                      alt={`${model.name} ${index + 1}`}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                  ) : (
                    <div className="flex min-h-[260px] items-center justify-center text-sm text-black/40">
                      Image coming soon
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-black/10 px-5 py-16 sm:px-6 md:px-8 md:py-24">
  <div className="mx-auto max-w-7xl">
    <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-black p-8 text-white md:p-12">
      
      {/* glow effects */}
      <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-[#0091EA]/20 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-white/10 blur-3xl" />

      <div className="relative mx-auto max-w-4xl text-center">
        <p className="text-xs font-medium uppercase tracking-[0.32em] text-[#0091EA] sm:text-sm">
          Dealer Enquiry
        </p>

        <h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
          Interested in {model.name} for your EV lineup?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/75 sm:text-base md:text-lg">
          Reach out for dealership discussions, distribution partnerships,
          product enquiries, or bulk business requirements.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          
          {/* PRIMARY */}
          <a
            href="/#contact"
            className="inline-flex items-center justify-center rounded-full bg-[#0091EA] px-7 py-3 text-sm font-medium text-white transition hover:bg-[#0078c4]"
          >
            Submit Enquiry
          </a>

          {/* SECONDARY (WhatsApp – HIGHLY RECOMMENDED) */}
          <a
            href="https://wa.me/919728110070"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-3 text-sm font-medium text-white transition hover:bg-white hover:text-black"
          >
            Chat on WhatsApp
          </a>

        </div>
      </div>
    </div>
  </div>
</section>
      </main>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-[100] bg-black/95">
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute right-5 top-5 z-[110] inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/8 text-white transition hover:bg-white/14"
            aria-label="Close gallery"
          >
            <FiX size={20} />
          </button>

          <button
            type="button"
            onClick={showPrevImage}
            className="absolute left-4 top-1/2 z-[110] -translate-y-1/2 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/8 text-white transition hover:bg-white/14 sm:left-6"
            aria-label="Previous image"
          >
            <FiArrowLeft size={18} />
          </button>

          <button
            type="button"
            onClick={showNextImage}
            className="absolute right-4 top-1/2 z-[110] -translate-y-1/2 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/8 text-white transition hover:bg-white/14 sm:right-6"
            aria-label="Next image"
          >
            <FiArrowRight size={18} />
          </button>

          <div className="flex h-full w-full flex-col items-center justify-center px-4 pb-24 pt-20 sm:px-8">
            <div className="flex h-full max-h-[78vh] w-full max-w-6xl items-center justify-center overflow-hidden rounded-[24px]">
              <img
                src={gallery[activeImageIndex]}
                alt={`${model.name} ${activeImageIndex + 1}`}
                className="max-h-full max-w-full object-contain"
              />
            </div>

            <div className="mt-6 flex max-w-full gap-3 overflow-x-auto px-1">
              {gallery.map((image, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActiveImageIndex(index)}
                  className={`overflow-hidden rounded-xl border transition ${
                    activeImageIndex === index
                      ? "border-white"
                      : "border-white/15"
                  }`}
                >
                  <img
                    src={image}
                    alt={`${model.name} thumb ${index + 1}`}
                    className="h-16 w-20 object-cover sm:h-20 sm:w-28"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}