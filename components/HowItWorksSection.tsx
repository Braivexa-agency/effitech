"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { 
  Search, 
  Settings, 
  Wrench, 
  CheckCircle, 
  ArrowRight,
  Clock,
  Shield,
  Users,
  Target,
  Zap,
  Award
} from "lucide-react";

// EFFI TECH work process based on electrical engineering best practices
const processSteps = [
  {
    step: "01",
    title: "Assessment & Analysis",
    description: "We conduct comprehensive electrical system audits and analyze your current infrastructure to identify optimization opportunities and potential issues.",
    icon: <Search className="size-6" />,
    details: [
      "Site inspection and evaluation",
      "Power consumption analysis",
      "Safety compliance assessment",
      "Energy efficiency audit"
    ],
    duration: "1-2 weeks",
    deliverable: "Detailed technical report"
  },
  {
    step: "02", 
    title: "Custom Solution Design",
    description: "Our expert engineers design tailored electrical solutions that meet your specific requirements while ensuring maximum efficiency and safety.",
    icon: <Settings className="size-6" />,
    details: [
      "System architecture planning",
      "Component specification",
      "Safety protocol integration",
      "Future scalability consideration"
    ],
    duration: "2-3 weeks",
    deliverable: "Technical drawings & specifications"
  },
  {
    step: "03",
    title: "Professional Implementation",
    description: "We implement complete electrical systems using cutting-edge technology and industry best practices, ensuring reliable and efficient operations.",
    icon: <Wrench className="size-6" />,
    details: [
      "Professional installation",
      "System integration testing", 
      "Performance optimization",
      "Staff training provision"
    ],
    duration: "3-6 weeks",
    deliverable: "Fully operational system"
  },
  {
    step: "04",
    title: "Support & Maintenance",
    description: "We provide ongoing 24/7 technical support and preventive maintenance to ensure your electrical systems operate at peak performance.",
    icon: <CheckCircle className="size-6" />,
    details: [
      "24/7 monitoring support",
      "Preventive maintenance",
      "Emergency response",
      "Performance optimization"
    ],
    duration: "Ongoing",
    deliverable: "Continuous system reliability"
  },
];

// Key principles that guide EFFI TECH's work
const workPrinciples = [
  {
    icon: <Shield className="size-5" />,
    title: "Safety First",
    description: "We prioritize safety in every project with rigorous protocols"
  },
  {
    icon: <Target className="size-5" />,
    title: "Precision Engineering",
    description: "Cutting-edge solutions tailored to distinctive demands"
  },
  {
    icon: <Zap className="size-5" />,
    title: "Energy Efficiency",
    description: "Advanced systems that reduce consumption and costs"
  },
  {
    icon: <Award className="size-5" />,
    title: "Quality Assurance",
    description: "ISO-compliant solutions with proven reliability"
  }
];

export default function HowWeWorkSection() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const principleVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="how-we-work" className="w-full py-20 md:py-32 relative overflow-hidden">
      {/* Modern gradient background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-background via-muted/20 to-background"></div>
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,hsl(var(--primary))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_20%,transparent_100%)] opacity-[0.02]"></div>
      
      {/* Floating elements for depth */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      <div className="container px-4 md:px-6 lg:px-8 relative">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <Badge 
            className="rounded-full px-6 py-2 text-sm font-medium bg-gradient-to-r from-primary/10 to-secondary/10 text-primary border-primary/20 mb-8" 
            variant="secondary"
          >
            <Zap className="size-4 mr-2" />
            How We Work
          </Badge>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            Precision and Excellence in Every Detail
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-12 max-w-3xl mx-auto">
            We prioritize safety, precision, and sustainable practices in every project. Our systematic approach 
            ensures cutting-edge solutions tailored to meet your distinctive electrical engineering demands.
          </p>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible" 
          viewport={{ once: true, margin: "-50px" }}
          className="relative mb-20"
        >
          {/* Modern connection lines with glow effect */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-px">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent relative">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent blur-sm"></div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={stepVariants}
                className="relative group"
              >
                {/* Modern glassmorphism card */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur opacity-20 group-hover:opacity-60 transition duration-300"></div>
                
                <Card className="relative h-full bg-gradient-to-br from-background/80 to-muted/40 backdrop-blur-xl border-primary/10 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 group-hover:-translate-y-2">
                  <CardContent className="p-8">
                    {/* Modern step number and icon layout */}
                    <div className="flex items-center justify-between mb-8">
                      <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
                        <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/80 text-primary-foreground text-xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                          {step.step}
                        </div>
                      </div>
                      <div className="p-3 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 text-primary group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-secondary group-hover:text-primary-foreground transition-all duration-300">
                        {step.icon}
                      </div>
                    </div>

                    {/* Enhanced content layout */}
                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                        {step.title}
                      </h3>
                      
                      <p className="text-muted-foreground leading-relaxed text-base">
                        {step.description}
                      </p>

                      {/* Enhanced details list */}
                      <div className="space-y-3">
                        {step.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-start gap-3 text-sm group/item">
                            <div className="mt-0.5 p-1 rounded-full bg-primary/10 group-hover/item:bg-primary/20 transition-colors duration-200">
                              <CheckCircle className="size-3 text-primary" />
                            </div>
                            <span className="group-hover/item:text-foreground transition-colors duration-200">{detail}</span>
                          </div>
                        ))}
                      </div>

                      {/* Modern info cards */}
                      <div className="pt-6 border-t border-primary/10 space-y-3">
                        <div className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-primary/5 to-transparent">
                          <Clock className="size-4 text-primary" />
                          <span className="font-medium text-sm">Duration: {step.duration}</span>
                        </div>
                        <div className="flex items-start gap-3 p-3 rounded-xl bg-gradient-to-r from-secondary/5 to-transparent">
                          <Target className="size-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm"><strong>Deliverable:</strong> {step.deliverable}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Work Principles */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Our Core Principles
            </h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Every project is guided by these fundamental principles that ensure exceptional results and client satisfaction.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {workPrinciples.map((principle, index) => (
              <motion.div
                key={index}
                variants={principleVariants}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur opacity-0 group-hover:opacity-60 transition duration-300"></div>
                <div className="relative text-center p-8 rounded-2xl bg-gradient-to-br from-background/80 to-muted/40 backdrop-blur-xl border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-xl group-hover:-translate-y-1">
                  <div className="relative mb-6">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-2xl blur opacity-0 group-hover:opacity-50 transition duration-300"></div>
                    <div className="relative w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center text-primary group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-secondary group-hover:text-primary-foreground transition-all duration-500 group-hover:scale-110">
                      {principle.icon}
                    </div>
                  </div>
                  <h4 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                    {principle.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}