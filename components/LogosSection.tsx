"use client";

import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Shield, Award, Users, Zap } from "lucide-react";

export default function TrustedBySection() {
  const { theme } = useTheme();

  return (
    <section className="w-full py-16 border-y bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
      
      <div className="container px-4 md:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center space-y-8 text-center max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Badge 
              className="rounded-full px-4 py-2 text-sm font-medium bg-primary/10 text-primary border-primary/20 mb-4" 
              variant="secondary"
            >
              <Shield className="size-4 mr-2" />
              Our Partnership
            </Badge>
          </motion.div>

          {/* Main heading */}
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Trusted Solutions Through Strategic Partnership
          </motion.h2>

          {/* Description */}
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            We partner with a trusted solutions provider serving high-performing businesses, enabling us to deliver reliable, proven technologies tailored to professional needs.
          </motion.p>

          {/* Trust indicators */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 w-full max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-gradient-to-br from-background/80 to-muted/40 backdrop-blur-xl border border-primary/10">
              <div className="p-3 rounded-xl bg-primary/10 text-primary mb-4">
                <Award className="size-6" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Proven Technologies</h3>
              <p className="text-sm text-muted-foreground">Reliable solutions tested by industry leaders</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-gradient-to-br from-background/80 to-muted/40 backdrop-blur-xl border border-primary/10">
              <div className="p-3 rounded-xl bg-primary/10 text-primary mb-4">
                <Users className="size-6" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">High-Performing Businesses</h3>
              <p className="text-sm text-muted-foreground">Serving clients who demand excellence</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-gradient-to-br from-background/80 to-muted/40 backdrop-blur-xl border border-primary/10">
              <div className="p-3 rounded-xl bg-primary/10 text-primary mb-4">
                <Zap className="size-6" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Professional Solutions</h3>
              <p className="text-sm text-muted-foreground">Tailored technologies for professional needs</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}