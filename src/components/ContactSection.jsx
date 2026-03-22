import { useState } from "react";
import { motion } from "framer-motion";
import { FiPhone, FiMessageCircle } from "react-icons/fi";
import { allModels } from "../data/models";

const phoneNumbers = ["9728110070", "8510801010", "9896000493"];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    model: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Submitted data:", formData);

    setSubmitted(true);
    setFormData({
      name: "",
      phone: "",
      email: "",
      model: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      className="border-t border-white/10 bg-black px-5 py-20 text-white sm:px-6 md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start xl:gap-12">
          {/* LEFT COLUMN */}
          <div className="lg:pr-4">
            {/* Intro */}
            <motion.div
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
              className="order-1"
            >
              <p className="mb-5 text-xs font-medium uppercase tracking-[0.32em] text-[#0091EA] sm:text-sm">
                Contact Us
              </p>

              <h2 className="max-w-3xl text-4xl font-semibold leading-[1.05] sm:text-5xl md:text-6xl">
                Let’s build your EV portfolio together.
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-7 text-white/68 sm:text-base md:text-lg md:leading-8">
                Reach out for dealership enquiries, distribution partnerships,
                bulk mobility requirements, or product-related discussions.
              </p>
            </motion.div>

            {/* Business Info - desktop left, mobile below form */}
            <motion.div
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="order-3 mt-10 rounded-[28px] border border-white/10 bg-white/[0.03] p-6 sm:p-7 lg:mt-10"
            >
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#0091EA]">
                Business Information
              </p>

              <div className="mt-6 space-y-5">
                <div>
                  <p className="text-sm text-white/42">Business Name</p>
                  <p className="mt-2 text-lg font-medium text-white">
                    TRINITY ENTERPRISES
                  </p>
                </div>

                <div>
                  <p className="text-sm text-white/42">Phone Numbers</p>
                  <div className="mt-2 flex flex-wrap gap-x-5 gap-y-2 text-base text-white/82">
                    {phoneNumbers.map((number) => (
                      <a
                        key={number}
                        href={`tel:${number}`}
                        className="transition hover:text-[#0091EA]"
                      >
                        {number}
                      </a>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm text-white/42">Address</p>
                  <p className="mt-2 max-w-lg text-white/82 leading-7">
                    844 WE WORK DLF FORUM CYBER CITY PHASE 3 GURUGRAM, HARYANA
                    122002
                  </p>
                </div>
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="tel:9728110070"
                  className="inline-flex w-auto items-center justify-center gap-2 rounded-full bg-[#0091EA] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#0079c7]"
                >
                  <FiPhone size={16} />
                  Call Now
                </a>

                <a
                  href="https://wa.me/919728110070"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-auto items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#1ebe5b]"
                >
                  <FiMessageCircle size={16} />
                  WhatsApp
                </a>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="mt-0">
            {/* Form - mobile should appear before business info */}
            <motion.div
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.06 }}
              className="order-2 rounded-[32px] border border-white/10 bg-white/[0.03] p-6 sm:p-7 md:p-8"
            >
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm text-white/60">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                        className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition placeholder:text-white/25 focus:border-[#0091EA]"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm text-white/60">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                        required
                        className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition placeholder:text-white/25 focus:border-[#0091EA]"
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm text-white/60">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                        className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition placeholder:text-white/25 focus:border-[#0091EA]"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm text-white/60">
                        Model of Interest
                      </label>
                      <select
                        name="model"
                        value={formData.model}
                        onChange={handleChange}
                        required
                        className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-[#0091EA]"
                      >
                        <option value="" className="bg-black text-white">
                          Select a model
                        </option>
                        {allModels.map((model) => (
                          <option
                            key={model.slug}
                            value={model.name}
                            className="bg-black text-white"
                          >
                            {model.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm text-white/60">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your requirement"
                      rows={6}
                      className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition placeholder:text-white/25 focus:border-[#0091EA]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex w-auto items-center justify-center rounded-full bg-[#0091EA] px-7 py-3 text-sm font-medium text-white transition hover:bg-[#0079c7]"
                  >
                    Submit Enquiry
                  </button>
                </form>
              ) : (
                <div className="flex min-h-[420px] flex-col items-start justify-center">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#0091EA]/12 text-[#0091EA]">
                    ✓
                  </div>

                  <h3 className="mt-6 text-2xl font-semibold sm:text-3xl">
                    Enquiry submitted successfully.
                  </h3>

                  <p className="mt-4 max-w-lg text-sm leading-7 text-white/65 sm:text-base">
                    Thank you for your interest in Trinity EV. We will get back
                    to you shortly.
                  </p>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-8 inline-flex w-auto items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3 text-sm font-medium text-white transition hover:border-white/30 hover:bg-white/10"
                  >
                    Submit Another Response
                  </button>
                </div>
              )}
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="order-4 mt-5 overflow-hidden rounded-[28px] border border-white/10"
            >
              <iframe
                title="Trinity EV Location"
                src="https://www.google.com/maps?q=DLF+Cyber+City+Phase+3+Gurugram&z=15&output=embed"
                width="100%"
                height="260"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>
        </div>

        {/* MOBILE ORDER FIX */}
        <div className="mt-0 lg:hidden" />
      </div>
    </section>
  );
}