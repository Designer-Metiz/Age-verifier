import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HeroStats from "@/components/HeroStats";
import Integrations from "@/components/Integrations";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import StoreProtection from "@/components/StoreProtection";
import Testimonials from "@/components/Testimonials";
import VerificationFlow from "@/components/VerificationFlow";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-clip">
      <Navbar />
      <Hero />
      <section className="bg-white py-20 sm:py-28">
        <HeroStats />
      </section>
      <Features />
      <VerificationFlow />
      <StoreProtection />
      <Integrations />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}
