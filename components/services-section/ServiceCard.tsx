// components/services-section/ServiceCard.tsx
"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Award } from "lucide-react";
import { renderIcon } from "./icons-utils";
import type { ServiceCardProps } from "./types";

export const ServiceCard = memo<ServiceCardProps>(
  ({ service, onLearnMore, className = "" }) => {
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
      <motion.div
        className={className}
        whileHover="hover"
        variants={cardHoverVariants}
      >
        <Card className="h-full group relative overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/20 backdrop-blur transition-all duration-300 hover:shadow-lg hover:border-primary/20">
          <CardHeader className="pb-4">
            {/* Service icon and category */}
            <div className="flex items-start justify-between mb-4">
              <motion.div
                className="size-12 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                {renderIcon(service.icon, "size-6")}
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
                <motion.div
                  key={featureIndex}
                  className="flex items-center gap-2 text-sm"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                >
                  <CheckCircle className="size-4 text-primary flex-shrink-0" />
                  <span>{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* Learn More Button */}
            <Button
              variant="outline"
              className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300"
              onClick={() => onLearnMore(service)}
            >
              Learn More
              <ArrowRight className="ml-2 size-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </CardContent>

          {/* Hover gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </Card>
      </motion.div>
    );
  }
);

ServiceCard.displayName = "ServiceCard";
