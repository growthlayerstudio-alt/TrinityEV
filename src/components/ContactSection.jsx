import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FiPhone, FiMessageCircle, FiChevronDown } from "react-icons/fi";
import { allModels } from "../data/models";

const phoneNumbers = ["9728110070", "8510801010", "9896000493"];
const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxqx9B_joW9SzrGfvlzqu9BouBZbRfgEwDh0yTurR-SxZ7EmGvbbEhqx4TIVCNffFzs/exec";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    location: "",
    models: [],
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showModelDropdown, setShowModelDropdown] = useState(false);

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowModelDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const toggleModel = (modelName) => {
    setFormData((prev) => {
      const alreadySelected = prev.models.includes(modelName);

      return {
        ...prev,
        models: alreadySelected
          ? prev.models.filter((item) => item !== modelName)
          : [...prev.models, modelName],
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (formData.models.length === 0) {
      setErrorMessage("Please select at least one model of interest.");
      return;
    }

    setIsSubmitting(true);

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify({
          ...formData,
          models: formData.models,
        }),
      });

      setSubmitted(true);
      setFormData({
        name: "",
        phone: "",
        email: "",
        company: "",
        location: "",
        models: [],
        message: "",
      });
      setShowModelDropdown(false);
    } catch (error) {
      console.error("Form submission error:", error);
      setErrorMessage("Something went wrong while submitting. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="scroll-mt-32 border-t border-white/10 bg-black px-5 py-20 text-white sm:px-6 md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start xl:gap-12">
          <div className="lg:pr-4">
            <motion.div
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
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

            <motion.div
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="mt-10 rounded-[28px] border border-white/10 bg-white/[0.03] p-6 sm:p-7 lg:mt-10"
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
                  <p className="mt-2 max-w-lg leading-7 text-white/82">
                    844 WE WORK DLF FORUM CYBER CITY PHASE 3 GURUGRAM, HARYANA
                    122002
                  </p>
                </div>
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="tel:9728110070"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0091EA] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#0079c7]"
                >
                  <FiPhone size={16} />
                  Call Now
                </a>

                <a
                  href="https://wa.me/919728110070"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#1ebe5b]"
                >
                  <FiMessageCircle size={16} />
                  WhatsApp
                </a>
              </div>
            </motion.div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.06 }}
              className="rounded-[32px] border border-white/10 bg-white/[0.03] p-6 sm:p-7 md:p-8"
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

                    <div ref={dropdownRef}>
                      <label className="mb-2 block text-sm text-white/60">
                        Models of Interest
                      </label>

                      <button
                        type="button"
                        onClick={() => setShowModelDropdown((prev) => !prev)}
                        className="flex w-full items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-left text-white transition hover:border-[#0091EA]"
                      >
                        <span className={formData.models.length ? "text-white" : "text-white/35"}>
                          {formData.models.length
                            ? formData.models.join(", ")
                            : "Select model(s)"}
                        </span>
                        <FiChevronDown className="shrink-0" />
                      </button>

                      {showModelDropdown && (
                        <div className="mt-3 max-h-56 overflow-y-auto rounded-2xl border border-white/10 bg-[#0b0b0b] p-3">
                          <div className="space-y-2">
                            {allModels.map((model) => (
                              <label
                                key={model.slug}
                                className="flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2 transition hover:bg-white/5"
                              >
                                <input
                                  type="checkbox"
                                  checked={formData.models.includes(model.name)}
                                  onChange={() => toggleModel(model.name)}
                                  className="h-4 w-4 accent-[#0091EA]"
                                />
                                <span className="text-sm text-white/85">
                                  {model.name}
                                </span>
                              </label>
                            ))}
                          </div>
                        </div>
                      )}

                      <p className="mt-2 text-xs text-white/45">
                        Tick multiple models from the list.
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm text-white/60">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Enter your company name"
                        className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition placeholder:text-white/25 focus:border-[#0091EA]"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm text-white/60">
                        Location
                      </label>
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="City / Region"
                        className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition placeholder:text-white/25 focus:border-[#0091EA]"
                      />
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

                  {errorMessage && (
                    <p className="text-sm text-red-400">{errorMessage}</p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center rounded-full bg-[#0091EA] px-7 py-3 text-sm font-medium text-white transition hover:bg-[#0079c7] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Enquiry"}
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
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-8 inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3 text-sm font-medium text-white transition hover:border-white/30 hover:bg-white/10"
                  >
                    Submit Another Response
                  </button>
                </div>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-5 overflow-hidden rounded-[28px] border border-white/10"
            >
              <iframe
                title="Trinity EV Location"
                src="https://www.google.com/maps?q=DLF+Cyber+City+Phase+3+Gurugram&z=15&output=embed"
                width="100%"
                height="260"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}