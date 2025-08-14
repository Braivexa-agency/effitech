"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

// Reusable Hero Slide Interface
interface HeroSlide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  description: string;
  badge?: string;
  features: string[];
  ctaText: string;
  ctaHref?: string;
}

// Updated slides data - removed stats per client feedback
const defaultSlides: HeroSlide[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1920&h=1080&fit=crop&q=80",
    title: "POWERING THE FUTURE",
    subtitle: "WITH EFFITECH",
    description: "Innovative Electrical Engineering Solutions Delivering Exceptional Efficiency and Performance Across Algeria, Discover EFFI TECH Today.",
    badge: "Launching Soon",
    features: ["Expert team", "Certified engineers"],
    ctaText: "Explore Our Services",
    ctaHref: "#services"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=1080&fit=crop&q=80",
    title: "INDUSTRIAL ENGINEERING",
    subtitle: "EFFIENT ENERGY & SOLUTIONS",
    description: "High-performance industrial systems and engineering services designed to optimize energy efficiency, extend equipment lifespan, and ensure reliable operation across diverse industrial sectors.",
    badge: "Industry 4.0",
    features: ["AI-powered systems", "Real-time monitoring", "Predictive maintenance"],
    ctaText: "View Automation Solutions",
    ctaHref: "#automation"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1920&h=1080&fit=crop&q=80",
    title: "RENEWABLE ENERGY",
    subtitle: "SUSTAINABLE FUTURE",
    description: "Leading the transition to clean energy with advanced hybrid power solutions, delivering reliable and sustainable technologies for a greener future in Africa",
    badge: "Green Technology",
    features: ["Energy storage"],
    ctaText: "Go Green Today",
    ctaHref: "#renewable"
  }
];

interface HeroSectionProps {
  slides?: HeroSlide[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showNavigation?: boolean;
  showIndicators?: boolean;
}

export default function HeroSection({ 
  slides = defaultSlides,
  autoPlay = true,
  autoPlayInterval = 6000,
  showNavigation = true,
  showIndicators = true
}: HeroSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isLoaded, setIsLoaded] = useState(false);

  // Auto-play functionality
  useEffect(() => {
    setIsLoaded(true);
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, autoPlayInterval);
    
    return () => clearInterval(interval);
  }, [isPlaying, autoPlayInterval, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsPlaying(false);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background Images with Smooth Transition */}
      <div className="absolute inset-0 -z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={currentSlideData.image}
              alt={currentSlideData.title}
              fill
              className="object-cover"
              priority={currentSlide === 0}
              quality={90}
            />
          </motion.div>
        </AnimatePresence>
        
        {/* Dark Overlay - Different opacity for light/dark modes */}
        <div className="absolute inset-0 bg-background/70 dark:bg-[#081919]/70 backdrop-blur-[1px]"></div>
      </div>

      {/* Main Content with Proper Padding - LOWERED TITLE POSITION */}
      <div className="container relative z-10 flex flex-col justify-center min-h-screen pt-32 md:pt-40">
        {/* Content with optimal reading width */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.8 }}
                className="mb-12"
              >
                {/* Badge */}
                {currentSlideData.badge && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Badge className="rounded-full px-4 py-1.5 mb-6 text-sm font-medium bg-primary/10 text-primary border-primary/20">
                      {currentSlideData.badge}
                    </Badge>
                  </motion.div>
                )}

                {/* Main Title - POSITIONED LOWER */}
                <motion.h1 
                  className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold tracking-tight mb-6 md:mb-8 text-foreground leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {currentSlideData.title}<br />
                  <span className="text-primary">{currentSlideData.subtitle}</span>
                </motion.h1>
                
                {/* Description */}
                <motion.p 
                  className="text-xs sm:text-xl md:text-2xl text-foreground/90 mb-8 md:mb-10 max-w-3xl leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {currentSlideData.description}
                </motion.p>
                
                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Button 
                    size="lg" 
                    className="rounded-full h-12 md:h-14 px-8 md:px-10 text-base md:text-lg bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                    asChild
                  >
                    <a href={currentSlideData.ctaHref || "#"}>
                      {currentSlideData.ctaText}
                      <ArrowRight className="ml-3 size-4 md:size-5" />
                    </a>
                  </Button>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* REMOVED STATS SECTION - As per client feedback */}

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap items-center gap-4 md:gap-6 text-foreground/70"
            >
              {currentSlideData.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Check className="size-4 md:size-5 text-primary flex-shrink-0" />
                  <span className="text-sm md:text-base">{feature}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Navigation Controls - Repositioned to avoid content overlap */}
      {showNavigation && slides.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-4 lg:left-8 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-background/20 hover:bg-background/40 backdrop-blur-sm border border-foreground/20 flex items-center justify-center transition-all duration-300 hover:scale-110 z-30"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-foreground" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 lg:right-8 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-background/20 hover:bg-background/40 backdrop-blur-sm border border-foreground/20 flex items-center justify-center transition-all duration-300 hover:scale-110 z-30"
            aria-label="Next slide"
          >
            <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-foreground" />
          </button>
        </>
      )}

      {/* Bottom Controls - Better spacing from bottom */}
      {showIndicators && slides.length > 1 && (
        <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-30">
          <div className="flex items-center gap-3 md:gap-4">
            {/* Slide Indicators */}
            <div className="flex gap-1.5 md:gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-primary scale-125' 
                      : 'bg-foreground/30 hover:bg-foreground/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            
            {/* Play/Pause Button */}
            <button
              onClick={togglePlayPause}
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-background/20 hover:bg-background/40 backdrop-blur-sm border border-foreground/20 flex items-center justify-center transition-all duration-300"
              aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
            >
              {isPlaying ? (
                <Pause className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 text-foreground" />
              ) : (
                <Play className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 text-foreground ml-0.5" />
              )}
            </button>
          </div>
        </div>
      )}

      {/* Progress Bar */}
      {isPlaying && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-foreground/10 z-30">
          <motion.div
            className="h-full bg-primary"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: autoPlayInterval / 1000, ease: "linear" }}
            key={currentSlide}
          />
        </div>
      )}

      {/* Decorative Elements - Responsive sizing */}
      <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 lg:bottom-10 lg:right-10 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-3xl"></div>
      <div className="absolute top-1/4 right-1/4 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-24 lg:h-24 rounded-full bg-gradient-to-br from-secondary/20 to-primary/20 blur-2xl"></div>
    </section>
  );
}