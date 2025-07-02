"use-client";

import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import { Star, Quote, Building2, ChevronLeft, ChevronRight } from "lucide-react";
import { memo, useRef, useEffect, useCallback } from "react";

// (Interface and testimonials data remain the same)
interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  projectType: string;
  rating: number;
}

const testimonials: Testimonial[] = [
    // ... your testimonial data remains here
  {
    id: "testimonial-1",
    quote: "EFFI TECH transformed our manufacturing facility with their industrial automation solutions. The 45% efficiency increase exceeded our expectations.",
    author: "Ahmed Mansouri",
    role: "Plant Manager",
    company: "Algeria Steel Industries",
    projectType: "Industrial Automation",
    rating: 5,
  },
  {
    id: "testimonial-2", 
    quote: "The renewable energy integration project was flawless. EFFI TECH delivered a 50MW solar installation that reduced our energy costs by 40%.",
    author: "Fatima Benali",
    role: "Energy Director",
    company: "Sonatrach Complex",
    projectType: "Renewable Energy",
    rating: 5,
  },
  {
    id: "testimonial-3",
    quote: "Their electrical safety audit was comprehensive. EFFI TECH's ISO-compliant solutions ensure our facility meets all international standards.",
    author: "Karim Ouali",
    role: "Operations Manager",
    company: "Cevital Group",
    projectType: "Safety Systems",
    rating: 5,
  },
  {
    id: "testimonial-4",
    quote: "The industrial compressor solutions are exceptional. Their eco-friendly technology reduced our energy consumption significantly.",
    author: "Nadia Chebli",
    role: "Technical Director",
    company: "FERTIAL",
    projectType: "Compressor Technology",
    rating: 5,
  },
  {
    id: "testimonial-5",
    quote: "EFFI TECH's systematic approach impressed us. Their precision engineering resulted in a power distribution system that works flawlessly.",
    author: "Youcef Brahimi",
    role: "Facility Manager",
    company: "Condor Electronics",
    projectType: "Power Systems",
    rating: 5,
  },
  {
    id: "testimonial-6",
    quote: "EFFI TECH doesn't just supply products—they implement complete systems that work. Their consulting optimized our entire infrastructure.",
    author: "Amina Kaci",
    role: "Chief Engineer",
    company: "Algerian Petroleum Institute",
    projectType: "Engineering Consulting",
    rating: 5,
  },
  {
    id: "testimonial-7",
    quote: "Outstanding project management and technical expertise. EFFI TECH delivered our electrical upgrade on time and under budget.",
    author: "Hassan Benkhaled",
    role: "Project Director",
    company: "Air Algérie",
    projectType: "Infrastructure Upgrade",
    rating: 5,
  },
  {
    id: "testimonial-8",
    quote: "The maintenance contracts with EFFI TECH give us peace of mind. Their 24/7 support ensures our operations never stop.",
    author: "Leila Zahra",
    role: "Operations Chief",
    company: "Arzew Industrial Complex",
    projectType: "Maintenance Services",
    rating: 5,
  },
];


const TestimonialItem = memo(({ testimonial }: { testimonial: Testimonial }) => {
  const getInitials = (name: string) => name.split(' ').map((word) => word.charAt(0)).join('').toUpperCase().slice(0, 2);
  const getAvatarColor = (name: string) => {
    const colors = ['from-blue-500 to-blue-600', 'from-green-500 to-green-600', 'from-purple-500 to-purple-600', 'from-orange-500 to-orange-600', 'from-teal-500 to-teal-600', 'from-indigo-500 to-indigo-600'];
    const hash = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return colors[hash % colors.length];
  };

  return (
    <div className="flex-shrink-0 w-[90vw] max-w-[420px] group snap-center">
      <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5, ease: "easeOut" }} className="relative h-full p-6 rounded-2xl bg-gradient-to-br from-background/90 to-muted/30 backdrop-blur-sm border border-border/50 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
        <div className="flex items-start justify-between mb-4"><div className="p-2 rounded-xl bg-primary/10"><Quote className="size-5 text-primary" /></div><div className="flex gap-0.5">{Array.from({ length: testimonial.rating }, (_, i) => (<Star key={i} className="size-3.5 text-yellow-500 fill-yellow-500" />))}</div></div>
        <Badge variant="outline" className="mb-4 bg-primary/5 text-primary border-primary/20 text-xs">{testimonial.projectType}</Badge>
        <blockquote className="text-base leading-relaxed mb-6 text-foreground/90 line-clamp-4">"{testimonial.quote}"</blockquote>
        <div className="flex items-center gap-3 pt-4 border-t border-border/30">
          <Avatar className="size-10"><AvatarFallback className={`bg-gradient-to-br ${getAvatarColor(testimonial.author)} text-white font-semibold text-sm`}>{getInitials(testimonial.author)}</AvatarFallback></Avatar>
          <div className="flex-1 min-w-0"><h4 className="font-semibold text-sm text-foreground">{testimonial.author}</h4><p className="text-xs text-muted-foreground">{testimonial.role}</p><div className="flex items-center gap-1.5 mt-1"><Building2 className="size-3 text-muted-foreground" /><span className="text-xs text-muted-foreground truncate">{testimonial.company}</span></div></div>
        </div>
      </motion.div>
    </div>
  );
});

TestimonialItem.displayName = "TestimonialItem";

export default function TestimonialsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // ✨ Logic to handle the infinite scroll loop
  const handleScroll = useCallback(() => {
    if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
    }
    
    timeoutRef.current = setTimeout(() => {
        const container = scrollContainerRef.current;
        if (container) {
            const { scrollLeft, scrollWidth, clientWidth } = container;
            const originalContentWidth = scrollWidth / 2;

            // When we scroll past the end of the original content
            if (scrollLeft >= originalContentWidth) {
                // Instantly jump back to the corresponding item at the beginning
                container.scrollTo({
                    left: scrollLeft - originalContentWidth,
                    behavior: 'instant',
                });
            }
        }
    }, 150); // A short delay to ensure scroll event has settled
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
        container.addEventListener('scroll', handleScroll);
    }
    return () => {
        if (container) {
            container.removeEventListener('scroll', handleScroll);
        }
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    };
  }, [handleScroll]);

  // ✨ Updated scroll function to handle looping backwards
  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = container.clientWidth;
      if (direction === 'left' && container.scrollLeft < scrollAmount) {
          // If we are at the beginning and click left, jump to the end to loop
          const originalContentWidth = container.scrollWidth / 2;
          container.scrollTo({
              left: container.scrollLeft + originalContentWidth,
              behavior: 'instant'
          });
      }
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <style jsx global>{`.no-scrollbar::-webkit-scrollbar{display: none;}.no-scrollbar{-ms-overflow-style: none;scrollbar-width: none;}`}</style>
      <section id="testimonials" className="w-full py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-background via-muted/5 to-background"></div>
        <div className="container px-0 md:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center max-w-4xl mx-auto mb-12 px-4">
                <Badge className="rounded-full px-6 py-2 text-sm font-medium bg-primary/10 text-primary border-primary/20 mb-6" variant="secondary"><Star className="size-4 mr-2" />Client Testimonials</Badge>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">Trusted by Leading Organizations Across Algeria</h2>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">See what our clients have to say about their projects and results.</p>
            </motion.div>
            <div className="relative">
                <button onClick={() => scroll('left')} className="absolute left-0 md:left-[-20px] top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 hover:border-primary/30 flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95" aria-label="Scroll left"><ChevronLeft className="w-5 h-5" /></button>
                <button onClick={() => scroll('right')} className="absolute right-0 md:right-[-20px] top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 hover:border-primary/30 flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95" aria-label="Scroll right"><ChevronRight className="w-5 h-5" /></button>
                
                <div ref={scrollContainerRef} className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-auto no-scrollbar py-4 cursor-grab active:cursor-grabbing px-[5vw] md:px-0">
                    {/* ✨ Duplicating the list to create the infinite track */}
                    {[...testimonials, ...testimonials].map((testimonial, index) => (
                        <TestimonialItem key={`${testimonial.id}-${index}`} testimonial={testimonial} />
                    ))}
                </div>
                
                <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-container-start to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-container-end to-transparent z-10 pointer-events-none" />
            </div>
        </div>
      </section>
    </>
  );
}