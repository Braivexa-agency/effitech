"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { 
  Zap, 
  Settings, 
  Shield, 
  Leaf, 
  Factory, 
  ArrowRight,
  CheckCircle,
  Target,
  Users,
  Award
} from "lucide-react";

// EFFI TECH Services based on the specifications document
const services = [
  {
    id: "power-systems",
    title: "Electrical Power Systems",
    description: "Advanced electrical grid solutions and power distribution systems designed for maximum efficiency and reliability across Algeria.",
    icon: <Zap className="size-6" />,
    features: [
      "High-voltage power distribution",
      "Grid optimization solutions",
      "Power quality monitoring",
      "Load balancing systems"
    ],
    category: "Power Solutions",
    highlight: "99.9% Uptime",
  },
  {
    id: "industrial-automation",
    title: "Industrial Automation",
    description: "Smart manufacturing systems and AI-powered automation solutions that optimize operations and reduce costs across all sectors.",
    icon: <Factory className="size-6" />,
    features: [
      "AI-powered control systems",
      "Real-time monitoring",
      "Predictive maintenance",
      "Process optimization"
    ],
    category: "Industry 4.0",
    highlight: "45% Efficiency Increase",
  },
  {
    id: "compressor-technology",
    title: "Industrial Compressor Solutions",
    description: "High-tech compressor systems and eco-friendly technologies for industrial and commercial applications with energy efficiency focus.",
    icon: <Settings className="size-6" />,
    features: [
      "Energy-efficient compressors",
      "Eco-friendly technologies",
      "Custom compressor design",
      "Maintenance solutions"
    ],
    category: "High-Tech Solutions",
    highlight: "40% Energy Savings",
  },
  {
    id: "renewable-energy",
    title: "Renewable Energy Integration",
    description: "Leading the transition to clean energy with cutting-edge solar, wind, and hybrid power solutions for sustainable development.",
    icon: <Leaf className="size-6" />,
    features: [
      "Solar installation systems",
      "Wind power integration",
      "Energy storage solutions",
      "Hybrid power systems"
    ],
    category: "Green Technology",
    highlight: "50MW+ Generated",
  },
  {
    id: "safety-systems",
    title: "Safety & Protection Systems",
    description: "Comprehensive electrical safety solutions ensuring maximum protection and compliance with international standards.",
    icon: <Shield className="size-6" />,
    features: [
      "Electrical safety audits",
      "Protection relay systems",
      "Emergency shutdown systems",
      "Compliance certification"
    ],
    category: "Safety Solutions",
    highlight: "ISO Compliant",
  },
  {
    id: "consulting",
    title: "Engineering Consulting",
    description: "Expert electrical engineering consultation services helping businesses make informed decisions about their electrical infrastructure.",
    icon: <Target className="size-6" />,
    features: [
      "System design consultation",
      "Energy efficiency audits",
      "Technical feasibility studies",
      "Project management"
    ],
    category: "Expert Services",
    highlight: "15+ Years Experience",
  },
];

// Service categories for filtering
const serviceCategories = [
  { id: "all", label: "All Services" },
  { id: "power", label: "Power Solutions" },
  { id: "automation", label: "Automation" },
  { id: "renewable", label: "Renewable Energy" },
  { id: "safety", label: "Safety Systems" }
];

export default function ServicesSection() {
  // Animation variants
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

  const cardHoverVariants = {
    hover: {
      y: -8,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="services" className="w-full py-16 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
      
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
            className="rounded-full px-4 py-2 text-sm font-medium bg-primary/10 text-primary border-primary/20 mb-6" 
            variant="secondary"
          >
            Our Services
          </Badge>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground via-primary to-foreground">
            Transforming Technology into Power Solutions
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
            We deliver high-performance, energy-efficient solutions by integrating advanced electrical systems 
            and eco-friendly technologies. From industrial automation to renewable energy, we provide complete 
            systems that work.
          </p>

          {/* Key stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            {[
              { value: "12,653+", label: "Organizations Powered" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "24/7", label: "Support Available" },
              { value: "15+", label: "Years Experience" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover="hover"
            >
              <Card className="h-full group relative overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/20 backdrop-blur transition-all duration-300 hover:shadow-lg hover:border-primary/20">
                <CardHeader className="pb-4">
                  {/* Service icon and category */}
                  <div className="flex items-start justify-between mb-4">
                    <motion.div 
                      className="size-12 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                      variants={cardHoverVariants}
                    >
                      {service.icon}
                    </motion.div>
                    <Badge variant="outline" className="text-xs">
                      {service.category}
                    </Badge>
                  </div>

                  {/* Service title and highlight */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      <Award className="size-4 text-primary" />
                      <span className="text-sm font-medium text-primary">
                        {service.highlight}
                      </span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  {/* Service description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Service features */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="size-4 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="ml-2 size-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </CardContent>

                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </Card>
            </motion.div>
          ))}
        </motion.div>

 

        {/* Background decorative elements */}
        <div className="absolute top-1/4 -left-4 w-24 h-24 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-4 w-32 h-32 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full blur-3xl" />
      </div>
    </section>
  );
}