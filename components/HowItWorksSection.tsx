"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { 
  Settings, 
  CheckCircle, 
  ArrowRight,
  Clock,
  Shield,
  Target,
  Zap,
  Award
} from "lucide-react";

// EFFI TECH work process - Simplified to Custom Solution only per client feedback
const customSolutionProcess = {
  step: "01",
  title: "Custom Solution",
  description: "Our expert engineers design and implement tailored electrical solutions that meet your specific requirements while ensuring maximum efficiency and safety.",
  icon: <Settings className="size-6" />,
  details: [
    "Comprehensive system assessment",
    "Custom design and engineering",
    "Professional implementation",
    "Ongoing support and maintenance"
  ],
  features: [
    "Site inspection and evaluation",
    "System architecture planning", 
    "Professional installation",
    "24/7 monitoring support"
  ],
  duration: "Tailored to project scope",
  deliverable: "Complete electrical solution"
};

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
    <section id="projects" className="w-full py-20 md:py-20 relative overflow-hidden">
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

        {/* Custom Solution - Featured Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="relative mb-20 max-w-5xl mx-auto"
        >
          {/* Modern glassmorphism card - Featured size */}
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur opacity-30"></div>
          
          <Card className="relative bg-gradient-to-br from-background/90 to-muted/50 backdrop-blur-xl border-primary/20 shadow-2xl shadow-primary/10">
            <CardContent className="p-12">
              {/* Header with icon and step */}
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-12">
                <div className="flex items-center gap-6 mb-8 lg:mb-0">
                  <div className="relative">
                    <div className="absolute -inset-2 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-50"></div>
                    <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/80 text-primary-foreground text-2xl font-bold shadow-lg">
                      {customSolutionProcess.step}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                      {customSolutionProcess.title}
                    </h3>
                    <p className="text-xl text-muted-foreground">
                      Comprehensive electrical engineering solutions
                    </p>
                  </div>
                </div>
                
                <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 text-primary">
                  {customSolutionProcess.icon}
                </div>
              </div>

              {/* Description */}
              <p className="text-xl text-muted-foreground leading-relaxed mb-12 max-w-4xl">
                {customSolutionProcess.description}
              </p>

              {/* Two-column layout for details */}
              <div className="grid md:grid-cols-2 gap-12 mb-12">
                {/* Process Details */}
                <div>
                  <h4 className="text-2xl font-bold mb-6 text-foreground">Our Process</h4>
                  <div className="space-y-4">
                    {customSolutionProcess.details.map((detail, index) => (
                      <div key={index} className="flex items-start gap-4 group">
                        <div className="mt-1 p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-200">
                          <CheckCircle className="size-4 text-primary" />
                        </div>
                        <span className="text-lg group-hover:text-foreground transition-colors duration-200">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="text-2xl font-bold mb-6 text-foreground">Key Features</h4>
                  <div className="space-y-4">
                    {customSolutionProcess.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-4 group">
                        <div className="mt-1 p-2 rounded-full bg-secondary/10 group-hover:bg-secondary/20 transition-colors duration-200">
                          <CheckCircle className="size-4 text-primary" />
                        </div>
                        <span className="text-lg group-hover:text-foreground transition-colors duration-200">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Project info and CTA */}
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between pt-8 border-t border-primary/10">
                <div className="flex flex-col sm:flex-row gap-6 mb-8 lg:mb-0">
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-primary/5 to-transparent">
                    <Clock className="size-5 text-primary" />
                    <span className="font-medium">Duration: {customSolutionProcess.duration}</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-secondary/5 to-transparent">
                    <Target className="size-5 text-primary" />
                    <span className="font-medium">Deliverable: {customSolutionProcess.deliverable}</span>
                  </div>
                </div>
                
                <Button 
                  size="lg"
                  className="rounded-full h-14 px-8 text-lg bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Start Your Custom Solution
                  <ArrowRight className="ml-3 size-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
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