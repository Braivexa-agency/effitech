"use client";

import { Header } from "@/components/header/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import { CTASection } from "@/components/cta-section/CTASection";
import Footer from "@/components/Footer";
import LogosSection from "@/components/LogosSection";

export default function LandingPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <LogosSection />
        <FeaturesSection />
        <HowItWorksSection />
        {/* <TestimonialsSection /> */}
        {/* <FAQSection /> */}
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
