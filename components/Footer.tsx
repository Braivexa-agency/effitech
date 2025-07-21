"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Zap, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Linkedin, 
  Instagram, 
  Twitter,
  Award,
  Shield,
  Clock,
  ArrowUp,
  Building2,
  Users,
  Settings,
  Leaf,
  Target
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";

// Version configuration
const CURRENT_VERSION = "v0.3";

// Animation variants for staggered reveals
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

// Social media links
const socialLinks = [
  { 
    name: "Facebook", 
    icon: Facebook, 
    href: "https://facebook.com/effitech", 
    color: "hover:text-blue-600" 
  },
  { 
    name: "LinkedIn", 
    icon: Linkedin, 
    href: "https://linkedin.com/company/effitech", 
    color: "hover:text-blue-500" 
  },
  { 
    name: "Instagram", 
    icon: Instagram, 
    href: "https://instagram.com/effitech", 
    color: "hover:text-pink-500" 
  },
  { 
    name: "Twitter", 
    icon: Twitter, 
    href: "https://twitter.com/effitech", 
    color: "hover:text-blue-400" 
  },
];

// Updated footer sections - removed services per client feedback
const footerSections = [
  {
    title: "Services",
    links: [
      { name: "Industrial Compressor Solutions", href: "#services", icon: Settings },
      { name: "Renewable Energy Integration", href: "#services", icon: Leaf },
      { name: "Engineering Consulting", href: "#services", icon: Target },
    ]
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "#about", icon: Users },
      { name: "Our Team", href: "#team", icon: Users },
      { name: "Case Studies", href: "#cases", icon: Award },
      { name: "Certifications", href: "#certifications", icon: Award },
      { name: "Careers", href: "#careers", icon: Building2 },
    ]
  },
  {
    title: "Resources",
    links: [
      { name: "Technical Documentation", href: "#docs", icon: Building2 },
      { name: "Project Portfolio", href: "#portfolio", icon: Award },
      { name: "Industry News", href: "#news", icon: Building2 },
      { name: "Support Center", href: "#support", icon: Clock },
      { name: "Contact Us", href: "#contact", icon: Mail },
    ]
  }
];

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Show scroll to top button when user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Scroll to top button */}
      {showScrollTop && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed bottom-8 right-8 z-50"
        >
          <Button
            onClick={scrollToTop}
            size="icon"
            className="rounded-full w-12 h-12 bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <ArrowUp className="size-5" />
          </Button>
        </motion.div>
      )}

      <footer className="w-full border-t bg-gradient-to-br from-background/95 to-muted/40 backdrop-blur-xl relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,hsl(var(--primary))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_20%,transparent_100%)] opacity-[0.02]"></div>
        
        {/* Floating elements */}
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-secondary/3 rounded-full blur-3xl"></div>

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
              
              {/* Company info - takes 2 columns on large screens */}
              <motion.div variants={itemVariants} className="lg:col-span-2 space-y-6">
                {/* Enhanced logo with version */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-primary/40 to-secondary/40 rounded-xl blur opacity-75"></div>
                      <div className="relative size-12 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-primary-foreground text-xl font-bold shadow-lg">
                        <Zap className="size-6" />
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div>
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                          EFFI TECH
                        </h3>
                        <p className="text-sm text-muted-foreground font-medium">
                          Electrical Engineering Excellence
                        </p>
                      </div>
                      <Badge 
                        className="rounded-full px-2 py-1 text-xs font-medium bg-muted/50 text-muted-foreground border-muted-foreground/20" 
                        variant="outline"
                      >
                        {CURRENT_VERSION}
                      </Badge>
                    </div>
                  </div>
                  
                  <p className="text-base text-muted-foreground leading-relaxed max-w-md">
                    Leading electrical engineering solutions across Algeria. We deliver innovative, 
                    sustainable, and reliable electrical systems for industrial, commercial, and residential projects.
                  </p>
                </div>

                {/* Contact information */}
                <div className="space-y-3">
                  <h4 className="text-sm font-bold text-foreground mb-4">Contact Information</h4>
                  
                  <div className="space-y-3">
                    <a 
                      href="tel:+213662284649" 
                      className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors duration-300 group"
                    >
                      <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                        <Phone className="size-4" />
                      </div>
                      <span>+213 662 28 46 49</span>
                    </a>
                    
                    <a 
                      href="mailto:info@effi-tech.net" 
                      className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors duration-300 group"
                    >
                      <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                        <Mail className="size-4" />
                      </div>
                      <span>info@effi-tech.net</span>
                    </a>
                    
                    <div className="flex items-start gap-3 text-sm text-muted-foreground group">
                      <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                        <MapPin className="size-4" />
                      </div>
                      <div>
                        <p>Blida, Algeria</p>
                        <p className="text-xs">Serving all major cities across Algeria</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Certifications badges */}
                <div className="space-y-3">
                  <h4 className="text-sm font-bold text-foreground">Certifications</h4>
                  <div className="flex flex-wrap gap-2">
            
                    <Badge variant="outline" className="bg-primary/5 border-primary/20 text-primary">
                      <Shield className="size-3 mr-1" />
                      Safety Certified
                    </Badge>
                    <Badge variant="outline" className="bg-primary/5 border-primary/20 text-primary">
                      <Zap className="size-3 mr-1" />
                      Licensed Engineers
                    </Badge>
                  </div>
                </div>
              </motion.div>

              {/* Footer sections */}
              {footerSections.map((section, index) => (
                <motion.div key={section.title} variants={itemVariants} className="space-y-4">
                  <h4 className="text-sm font-bold text-foreground">{section.title}</h4>
                  <ul className="space-y-3">
                    {section.links.map((link) => {
                      const IconComponent = link.icon;
                      return (
                        <li key={link.name}>
                          <Link 
                            href={link.href} 
                            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300 group"
                          >
                            <IconComponent className="size-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                            <span>{link.name}</span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Social media and bottom section */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Social media */}
              <div className="flex flex-col sm:flex-row justify-between items-center gap-6 py-6 border-t border-primary/20">
                <div className="space-y-2">
                  <h4 className="text-sm font-bold text-foreground">Follow Us</h4>
                  <div className="flex gap-4">
                    {socialLinks.map((social) => {
                      const IconComponent = social.icon;
                      return (
                        <a
                          key={social.name}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`p-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-muted-foreground ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg group`}
                        >
                          <IconComponent className="size-5" />
                          <span className="sr-only">{social.name}</span>
                        </a>
                      );
                    })}
                  </div>
                </div>

                {/* Newsletter signup */}
                <div className="space-y-2">
                  <h4 className="text-sm font-bold text-foreground">Stay Updated</h4>
                  <div className="flex gap-2 max-w-sm">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 px-3 py-2 text-sm rounded-lg border border-primary/20 bg-background/50 focus:border-primary/50 focus:outline-none transition-colors"
                    />
                    <Button size="sm" className="px-4">
                      <Mail className="size-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Copyright and legal */}
              <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 border-t border-primary/20">
                <div className="flex flex-col sm:flex-row items-center gap-4 text-xs text-muted-foreground">
                  <p>
                    &copy; {new Date().getFullYear()} EFFI TECH. All rights reserved.
                  </p>
                  <div className="flex items-center gap-2">
                    <Shield className="size-3" />
                    <span>Proudly serving Algeria since 2025</span>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <Link 
                    href="#privacy" 
                    className="text-xs text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    Privacy Policy
                  </Link>
                  <Link 
                    href="#terms" 
                    className="text-xs text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    Terms of Service
                  </Link>
                  <Link 
                    href="#safety" 
                    className="text-xs text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    Safety Policy
                  </Link>
                </div>
              </div>

              {/* Trust indicators - updated without metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-primary/20">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="size-3 text-primary" />
                  <span>Professional Support</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Shield className="size-3 text-primary" />
                  <span>Safety First Approach</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Award className="size-3 text-primary" />
                  <span>Expert Engineers</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Zap className="size-3 text-primary" />
                  <span>Sustainable Solutions</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </footer>
    </>
  );
}