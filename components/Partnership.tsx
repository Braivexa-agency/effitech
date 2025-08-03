"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Shield, Award, Users, Zap, Star } from "lucide-react";

const benefits = [
  {
    id: "reliable-tech",
    title: "Proven & Reliable Technologies",
    description:
      "We collaborate with trusted solution providers to bring you technology that’s been tested and verified by industry professionals.",
    icon: <Award className="size-6" />,
    features: [
      "Field-tested systems",
      "Reliable performance",
      "Trusted suppliers",
      "Aligned with real-world needs",
    ],
    category: "Technology Reliability",
    highlight: "Partner Verified",
  },
  {
    id: "strategic-network",
    title: "Strategic Partnership Network",
    description:
      "EFFITECH builds long-term alliances with reputable organizations to deliver high-quality, future-ready electrical solutions.",
    icon: <Users className="size-6" />,
    features: [
      "Long-term collaboration",
      "Value-driven relationships",
      "Shared vision & ethics",
      "Mutual growth mindset",
    ],
    category: "Trusted Alliances",
    highlight: "Built on Trust",
  },
  {
    id: "tailored-delivery",
    title: "Custom-Tailored Engineering",
    description:
      "Each partnership is approached with a fresh perspective. Our engineering solutions are designed around your goals—not templates.",
    icon: <Zap className="size-6" />,
    features: [
      "Client-first approach",
      "Flexible systems",
      "Custom specs & design",
      "Collaborative development",
    ],
    category: "Tailored Solutions",
    highlight: "Precision Aligned",
  },
];

export default function Partnership() {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardHoverVariants = {
    hover: {
      y: -8,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="w-full py-20 md:py-20 border-y bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />

      <div className="container px-4 md:px-6 lg:px-8 relative">
        {/* Section header */}
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
            <Shield className="size-4 mr-2" />
            Partnership Excellence.
          </Badge>

          <h2 className="text-3xl pb-2 md:text-4xl lg:text-5xl font-bold tracking-tight leading-snug mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground via-primary to-foreground">
            Collaborating with Industry Leaders to Deliver Reliable, Custom
            Electrical Solutions Across Algeria.
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
            At EFFITECH, we believe that reliable engineering starts with
            reliable partnerships. That’s why we work alongside trusted solution
            providers to co-create powerful, custom electrical systems designed
            for long-term success.
          </p>
        </motion.div>

        {/* Benefits grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto mb-16"
        >
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.id}
              variants={itemVariants}
              whileHover="hover"
            >
              <Card className="h-full group relative overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/20 backdrop-blur transition-all duration-300 hover:shadow-lg hover:border-primary/20">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <motion.div
                      className="size-12 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                      variants={cardHoverVariants}
                    >
                      {benefit.icon}
                    </motion.div>
                    <Badge variant="outline" className="text-xs">
                      {benefit.category}
                    </Badge>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      <Star className="size-4 text-primary" />
                      <span className="text-sm font-medium text-primary">
                        {benefit.highlight}
                      </span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>

                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Decorative background elements */}
        <div className="absolute top-1/4 -left-4 w-24 h-24 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-4 w-32 h-32 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full blur-3xl" />
      </div>
    </section>
  );
}
