"use client";

import { Header } from "@/components/header/Header";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import { CTASection } from "@/components/cta-section/CTASection";
// import Footer from "@/components/Footer";
import  Partnership from "@/components/Partnership";
import { ServicesSection } from "@/components/services-section";
import Footer from "@/components/footer/index";

export default function LandingPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <Partnership />
        <ServicesSection />
        <HowItWorksSection />
        {/* <TestimonialsSection /> */}
        {/* <FAQSection /> */}
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
