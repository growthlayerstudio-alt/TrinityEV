import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import ProductsPreview from "../components/ProductsPreview";
import WhyUsSection from "../components/WhyUsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

export default function HomePage() {
  return (
    
    <main className="bg-black text-white">
      <SEO
        title="Trinity EV | B2B Electric Scooters for Dealers & Distributors"
        description="Explore Trinity EV's electric scooter lineup built for dealers, distributors, and commercial buyers across India."
        path="/"
      />
      <Navbar />
      <Hero />
      <AboutSection />
      <ProductsPreview />
      <WhyUsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
