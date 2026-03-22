import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import ProductsPreview from "../components/ProductsPreview";
import WhyUsSection from "../components/WhyUsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <main className="bg-black text-white">
      <Navbar />
      <Hero />
      <div id="about">
        <AboutSection />
      </div>
      <ProductsPreview />
      <WhyUsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}