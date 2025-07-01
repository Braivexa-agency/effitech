import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1920&h=1080&fit=crop&q=80"
          alt="Electrical Engineering Background"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay - Different opacity for light/dark modes */}
        <div className="absolute inset-0 bg-background/70 dark:bg-[#081919]/70 backdrop-blur-[1px]"></div>
      </div>

      {/* Sidebar Navigation Dots */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col gap-3">
        <div className="w-2 h-2 rounded-full bg-primary"></div>
        <div className="w-2 h-2 rounded-full bg-foreground/40"></div>
        <div className="w-2 h-2 rounded-full bg-foreground/40"></div>
        <div className="w-2 h-2 rounded-full bg-foreground/40"></div>
        <div className="w-2 h-2 rounded-full bg-foreground/40"></div>
      </div>

      <div className="container relative z-10 flex flex-col justify-center min-h-screen py-20 px-4 md:px-6">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 text-foreground leading-tight">
              POWERING THE FUTURE<br />
              WITH <span className="text-primary">EFFITECH</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-foreground/90 mb-10 max-w-3xl leading-relaxed">
              Innovative Electrical Engineering Solutions Delivering Exceptional Efficiency 
              and Performance Across Algeria, Discover EFFI TECH Today.
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Button 
                size="lg" 
                className="rounded-full h-14 px-10 text-lg bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
              >
                Explore Our Services
                <ArrowRight className="ml-3 size-5" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12"
          >
            <div className="text-center sm:text-left">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-2">
                12,653+
              </div>
              <div className="text-foreground/80 text-lg">
                Organizations Powered
              </div>
            </div>
            <div className="text-center sm:text-left">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-2">
                98%
              </div>
              <div className="text-foreground/80 text-lg">
                Client Satisfaction
              </div>
            </div>
            <div className="text-center sm:text-left">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-2">
                24/7
              </div>
              <div className="text-foreground/80 text-lg">
                Support Availability
              </div>
            </div>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center gap-4"
          >
            <div className="flex -space-x-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary border-2 border-background flex items-center justify-center">
                <span className="text-primary-foreground font-semibold text-sm">JD</span>
              </div>
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 border-2 border-background flex items-center justify-center">
                <span className="text-white font-semibold text-sm">AM</span>
              </div>
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-red-500 border-2 border-background flex items-center justify-center">
                <span className="text-white font-semibold text-sm">SF</span>
              </div>
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-teal-500 border-2 border-background flex items-center justify-center">
                <span className="text-white font-semibold text-sm">KM</span>
              </div>
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-yellow-500 border-2 border-background flex items-center justify-center">
                <span className="text-white font-semibold text-sm">RH</span>
              </div>
            </div>
            <div className="text-foreground/90 text-lg">
              Trusted by <span className="text-primary font-semibold">12,653+</span> productivity junkies
            </div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap items-center gap-6 mt-8 text-foreground/70"
          >
            <div className="flex items-center gap-2">
              <Check className="size-5 text-primary" />
              <span>Expert team</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="size-5 text-primary" />
              <span>Certified engineers</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="size-5 text-primary" />
              <span>ISO-compliant solutions</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-3xl"></div>
      <div className="absolute top-1/4 right-1/4 w-24 h-24 rounded-full bg-gradient-to-br from-secondary/20 to-primary/20 blur-2xl"></div>
    </section>
  );
}