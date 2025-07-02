import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Users } from "lucide-react"
import { motion } from "framer-motion"

export default function CTASection() {
  return (
    <section className="p-16">
            {/* Call to Action Section */}
            <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center bg-gradient-to-r from-primary/10 via-primary/5 to-secondary/10 rounded-2xl p-8 md:p-12 border border-primary/20"
        >
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Transform Your Electrical Infrastructure?
            </h3>
            <p className="text-muted-foreground mb-8 text-lg">
              Partner with EFFI TECH for reliable, efficient, and innovative electrical engineering solutions. 
              We don't just supply products – we implement complete systems that work.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Users className="mr-2 size-5" />
                Get Free Consultation
              </Button>
              <Button size="lg" variant="outline">
                View Case Studies
                <ArrowRight className="ml-2 size-4" />
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="size-4 text-primary" />
                <span>ISO Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="size-4 text-primary" />
                <span>Expert Engineers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="size-4 text-primary" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="size-4 text-primary" />
                <span>Sustainable Solutions</span>
              </div>
            </div>
          </div>
        </motion.div>
    </section>
  )
}
