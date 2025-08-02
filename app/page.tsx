"use client";

import { Header } from "@/components/header/Header";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import { CTASection } from "@/components/cta-section/CTASection";
import Footer from "@/components/Footer";
import LogosSection from "@/components/LogosSection";
import { ServicesSection } from "@/components/services-section";

export default function LandingPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <LogosSection />
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
