"use client";

import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import {
  Star,
  Quote,
  Building2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { memo, useRef, useEffect, useCallback } from "react";
import { Testimonial, testimonials } from "./data";

// TypeScript interface

const TestimonialItem = memo(
  ({ testimonial }: { testimonial: Testimonial }) => {
    const getInitials = (name: string) =>
      name
        .split(" ")
        .map((word) => word.charAt(0))
        .join("")
        .toUpperCase()
        .slice(0, 2);

    const getAvatarColor = (name: string) => {
      const colors = [
        "from-blue-500 to-blue-600",
        "from-green-500 to-green-600",
        "from-purple-500 to-purple-600",
        "from-orange-500 to-orange-600",
        "from-teal-500 to-teal-600",
        "from-indigo-500 to-indigo-600",
      ];
      const hash = name
        .split("")
        .reduce((acc, char) => acc + char.charCodeAt(0), 0);
      return colors[hash % colors.length];
    };

    return (
      <div className="flex-shrink-0 w-[90vw] max-w-[420px] group snap-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative h-full"
        >
          {/* Modern glassmorphism card with glow effect */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>

          <div className="relative h-full p-8 rounded-3xl bg-gradient-to-br from-background/95 to-muted/40 backdrop-blur-xl border border-primary/10 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 group-hover:-translate-y-1">
            {/* Header with modern quote icon and rating */}
            <div className="flex items-start justify-between mb-6">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
                <div className="relative p-3 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/5 group-hover:from-primary/20 group-hover:to-secondary/10 transition-all duration-300">
                  <Quote className="size-6 text-primary" />
                </div>
              </div>
              <div className="flex gap-1">
                {Array.from({ length: testimonial.rating }, (_, i) => (
                  <Star
                    key={i}
                    className="size-4 text-yellow-500 fill-yellow-500 hover:scale-110 transition-transform duration-200"
                  />
                ))}
              </div>
            </div>

            {/* Modern project type badge */}
            <Badge
              variant="outline"
              className="mb-6 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary border-primary/30 text-sm px-3 py-1 rounded-full hover:from-primary/20 hover:to-secondary/20 transition-all duration-300"
            >
              {testimonial.projectType}
            </Badge>

            {/* Enhanced testimonial quote */}
            <blockquote className="text-lg leading-relaxed mb-8 text-foreground font-medium">
              <span className="text-primary/60 text-2xl leading-none">"</span>
              {testimonial.quote}
              <span className="text-primary/60 text-2xl leading-none">"</span>
            </blockquote>

            {/* Modern author information */}
            <div className="flex items-center gap-4 pt-6 border-t border-gradient-to-r from-primary/20 to-secondary/20">
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/40 to-secondary/40 rounded-full blur opacity-0 group-hover:opacity-50 transition duration-300"></div>
                <Avatar className="relative size-12 ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300">
                  <AvatarFallback
                    className={`bg-gradient-to-br ${getAvatarColor(
                      testimonial.author
                    )} text-white font-bold text-sm`}
                  >
                    {getInitials(testimonial.author)}
                  </AvatarFallback>
                </Avatar>
              </div>

              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-base text-foreground group-hover:text-primary transition-colors duration-300">
                  {testimonial.author}
                </h4>
                <p className="text-sm text-muted-foreground font-medium">
                  {testimonial.role}
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <Building2 className="size-4 text-primary/60" />
                  <span className="text-sm text-muted-foreground font-medium truncate">
                    {testimonial.company}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }
);

TestimonialItem.displayName = "TestimonialItem";

export default function TestimonialsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Simple, clean scroll function - one item at a time
  const scroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (container) {
      const itemWidth = 420 + 32; // card width + gap

      container.scrollBy({
        left: direction === "left" ? -itemWidth : itemWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* Custom CSS for scrollbar hiding */}
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <section id="testimonials" className="w-full py-20 md:py-20 relative overflow-hidden">
        {/* Fixed background to match other sections */}

        {/* Animated grid pattern like other sections */}
        <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,hsl(var(--primary))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_20%,transparent_100%)] opacity-[0.02]"></div>

        {/* Floating elements for depth */}
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/3 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>

        <div className="container px-4 md:px-6 lg:px-8">
          {/* Enhanced header section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center max-w-5xl mx-auto mb-16"
          >
            <Badge
              className="rounded-full px-8 py-3 text-sm font-semibold bg-gradient-to-r from-primary/10 to-secondary/10 text-primary border-primary/20 mb-8 hover:from-primary/20 hover:to-secondary/20 transition-all duration-300"
              variant="secondary"
            >
              <Star className="size-5 mr-3" />
              Client Testimonials
            </Badge>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent leading-[1.2] pb-2">
              Trusted by Leading Organizations Across Algeria
            </h2>

            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              See what our clients have to say about their electrical
              engineering projects and the results we've delivered together.
            </p>
          </motion.div>

          {/* Enhanced scrollable testimonials */}
          <div className="relative -mx-4 md:mx-0">
            {/* Fixed navigation buttons positioning */}
            <button
              onClick={() => scroll("left")}
              className="absolute left-6 md:left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-background/95 backdrop-blur-xl border border-primary/30 hover:border-primary/50 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 hover:shadow-xl hover:shadow-primary/25 group"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6 text-primary group-hover:text-primary transition-colors duration-200" />
            </button>

            <button
              onClick={() => scroll("right")}
              className="absolute right-6 md:right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-background/95 backdrop-blur-xl border border-primary/30 hover:border-primary/50 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 hover:shadow-xl hover:shadow-primary/25 group"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6 text-primary group-hover:text-primary transition-colors duration-200" />
            </button>

            {/* Fixed scrollable container with proper padding */}
            <div
              ref={scrollContainerRef}
              className="flex gap-8 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar py-6 cursor-grab active:cursor-grabbing pl-6 pr-6 md:pl-20 md:pr-20"
            >
              {/* Single set of testimonials - clean and simple */}
              {testimonials.map((testimonial, index) => (
                <TestimonialItem
                  key={testimonial.id}
                  testimonial={testimonial}
                />
              ))}
            </div>

            {/* Enhanced gradient overlays to show button area */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background via-background/90 to-transparent z-20 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background via-background/90 to-transparent z-20 pointer-events-none" />
          </div>
        </div>
      </section>
    </>
  );
}
