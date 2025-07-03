"use client";

import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { HelpCircle, Zap, Users, Shield, Clock, Phone } from "lucide-react";

const faqs = [
  {
    question: "What types of electrical engineering projects do you handle?",
    answer:
      "We specialize in a wide range of electrical engineering projects including power systems design, industrial automation, renewable energy installations, electrical infrastructure for commercial and residential buildings, motor control systems, and electrical safety audits. Our team has expertise in both low and high voltage applications.",
    icon: Zap,
  },
  {
    question: "How long does a typical electrical engineering project take?",
    answer:
      "Project timelines vary depending on complexity and scope. Small residential projects typically take 1-2 weeks, commercial installations can range from 2-8 weeks, while large industrial projects may take 3-6 months. We provide detailed project timelines during the initial consultation phase.",
    icon: Clock,
  },
  {
    question: "Do you provide maintenance services after project completion?",
    answer:
      "Yes, we offer comprehensive maintenance and support services for all our electrical installations. This includes preventive maintenance schedules, emergency repair services, system upgrades, and performance monitoring to ensure optimal operation of your electrical systems.",
    icon: Shield,
  },
  {
    question: "Are your electrical engineers licensed and certified?",
    answer:
      "All our electrical engineers are fully licensed and certified professionals with extensive experience in the field. Our team holds relevant certifications from recognized institutions and stays updated with the latest industry standards and safety regulations in Algeria.",
    icon: Users,
  },
  {
    question: "Do you work with renewable energy systems?",
    answer:
      "Absolutely! We have significant expertise in renewable energy solutions including solar panel installations, wind energy systems, energy storage solutions, and grid-tie systems. We can help you design and implement sustainable energy solutions for your residential or commercial needs.",
    icon: Zap,
  },
  {
    question: "What areas in Algeria do you serve?",
    answer:
      "We proudly serve clients throughout Algeria, with our main operations based in major cities. We handle projects in Algiers, Oran, Constantine, Blida, and surrounding regions. For projects in remote areas, we coordinate logistics to ensure seamless service delivery.",
    icon: Phone,
  },
  {
    question: "How do you ensure electrical safety and compliance?",
    answer:
      "Safety is our top priority. We strictly adhere to Algerian electrical codes and international safety standards. All our installations undergo rigorous testing and inspection. We provide safety certifications and documentation for insurance and regulatory compliance purposes.",
    icon: Shield,
  },
  {
    question: "Can you help with electrical system upgrades for older buildings?",
    answer:
      "Yes, we specialize in modernizing electrical systems in older buildings. This includes panel upgrades, rewiring, adding new circuits, improving grounding systems, and ensuring compliance with current electrical codes while preserving the building's integrity.",
    icon: Zap,
  },
];

export default function FAQSection() {
  return (
    <>
      {/* Custom CSS for enhanced styling */}
      <style jsx global>{`
        .accordion-content-enhanced {
          @apply text-muted-foreground leading-relaxed;
        }
      `}</style>

      <section id="faq" className="w-full py-20 md:py-20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,hsl(var(--primary))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_20%,transparent_100%)] opacity-[0.02]"></div>
        
        {/* Floating elements for depth */}
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center justify-center space-y-6 text-center mb-16"
          >
            <Badge 
              className="rounded-full px-8 py-3 text-sm font-semibold bg-gradient-to-r from-primary/10 to-secondary/10 text-primary border-primary/20 hover:from-primary/20 hover:to-secondary/20 transition-all duration-300" 
              variant="secondary"
            >
              <HelpCircle className="size-5 mr-3" />
              Frequently Asked Questions
            </Badge>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent leading-[1.2] pb-2">
              Everything You Need to Know
            </h2>
            
            <p className="max-w-3xl text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Get answers to common questions about our electrical engineering services, project processes, and expertise in Algeria.
            </p>
          </motion.div>

          <div className="mx-auto max-w-4xl">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, i) => {
                const IconComponent = faq.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="group"
                  >
                    <AccordionItem 
                      value={`item-${i}`} 
                      className="border border-primary/10 rounded-2xl bg-gradient-to-br from-background/95 to-muted/40 backdrop-blur-xl hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 group-hover:-translate-y-1 px-6 py-2"
                    >
                      <AccordionTrigger className="text-left font-semibold hover:no-underline text-lg py-6 group">
                        <div className="flex items-center gap-4">
                          <div className="relative">
                            <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-xl blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
                            <div className="relative p-2 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/5 group-hover:from-primary/20 group-hover:to-secondary/10 transition-all duration-300">
                              <IconComponent className="size-5 text-primary" />
                            </div>
                          </div>
                          <span className="group-hover:text-primary transition-colors duration-300">
                            {faq.question}
                          </span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="accordion-content-enhanced text-base pt-2 pb-6 pl-16">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                );
              })}
            </Accordion>
          </div>

          {/* Call to action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-16"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 text-primary">
              <Phone className="size-5" />
              <span className="font-semibold">
                Still have questions? Contact our engineering team directly
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}