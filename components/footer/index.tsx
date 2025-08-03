"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect, useCallback } from "react";
import { footerConfig, socialLinks, footerSections } from "./footer-config";
import { containerVariants, itemVariants } from "./footer-animations";
import { FooterLogo,ContactInfo,Certifications,SocialMedia,Newsletter,TrustIndicators,ScrollToTopButton,FooterBackground,LegalLinks,FooterSection } from "./components/index";
// import { ContactInfo } from "./components/ContactInfo";
// import { Certifications } from "./components/Certifications";
// import { SocialMedia } from "./components/SocialMedia";
// import { Newsletter } from "./components/Newsletter";
// import { TrustIndicators } from "./components/TrustIndicators";
// import { ScrollToTopButton } from "./components/ScrollToTopButton";
// import { FooterBackground } from "./components/FooterBackground";
// import { LegalLinks } from "./components/LegalLinks";
// import { FooterSection } from "./components/FooterSection";

/**
 * Main Footer Component
 * 
 * A comprehensive footer with company information, navigation links,
 * contact details, social media, and interactive elements.
 */
export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Optimized scroll handler with throttling
  const handleScroll = useCallback(() => {
    setShowScrollTop(window.scrollY > 400);
  }, []);

  useEffect(() => {
    let ticking = false;
    
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledScroll);
  }, [handleScroll]);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <ScrollToTopButton show={showScrollTop} onClick={scrollToTop} />

      <footer className="w-full border-t bg-gradient-to-br from-background/95 to-muted/40 backdrop-blur-xl relative overflow-hidden">
        <FooterBackground />
        
        <div className="container px-4 py-12 md:px-6 lg:py-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-12 lg:gap-16"
          >
            {/* Main footer content */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
              
              {/* Company info section */}
              <motion.div variants={itemVariants} className="lg:col-span-2 space-y-6">
                <FooterLogo 
                  version={footerConfig.currentVersion}
                  companyName={footerConfig.companyName}
                  tagline={footerConfig.tagline}
                  description={footerConfig.description}
                />
                
                <ContactInfo contacts={footerConfig.contacts} />
                
                <Certifications certifications={footerConfig.certifications} />
              </motion.div>

              {/* Navigation sections */}
              {footerSections.map((section) => (
                <FooterSection 
                  key={section.title} 
                  section={section}
                  variants={itemVariants}
                />
              ))}
            </div>

            {/* Social media and bottom section */}
            <motion.div variants={itemVariants} className="space-y-8">
              
              {/* Social media and newsletter */}
              <div className="flex flex-col sm:flex-row justify-between items-center gap-6 py-6 border-t border-primary/20">
                <SocialMedia links={socialLinks} />
                <Newsletter />
              </div>

              {/* Copyright and legal */}
              <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 border-t border-primary/20">
                <div className="flex flex-col sm:flex-row items-center gap-4 text-xs text-muted-foreground">
                  <p>
                    &copy; {new Date().getFullYear()} {footerConfig.companyName}. All rights reserved.
                  </p>
                  <div className="flex items-center gap-2">
                    <footerConfig.brandIcon className="size-3" />
                    <span>Proudly serving Algeria since {footerConfig.foundedYear}</span>
                  </div>
                </div>
                
                <LegalLinks links={footerConfig.legalLinks} />
              </div>

              <TrustIndicators indicators={footerConfig.trustIndicators} />
            </motion.div>
          </motion.div>
        </div>
      </footer>
    </>
  );
}