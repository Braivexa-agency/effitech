"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  ArrowRight, 
  CheckCircle, 
  Users, 
  Phone, 
  Mail, 
  MessageSquare, 
  Zap,
  Shield,
  Clock,
  Award
} from "lucide-react";
import { motion } from "framer-motion";
import { useState, useCallback } from "react";

// Types for better type safety
interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  projectType: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

// Project types for electrical engineering
const projectTypes = [
  { value: "power-systems", label: "Power Systems Design" },
  { value: "industrial-automation", label: "Industrial Automation" },
  { value: "renewable-energy", label: "Renewable Energy" },
  { value: "building-electrical", label: "Building Electrical Systems" },
  { value: "maintenance", label: "Maintenance & Support" },
  { value: "consultation", label: "Technical Consultation" },
  { value: "other", label: "Other" },
];

// Trust indicators data
const trustIndicators = [
  { icon: Award, text: "ISO 9001 Certified", color: "text-blue-500" },
  { icon: Users, text: "Expert Engineers", color: "text-green-500" },
  { icon: Clock, text: "24/7 Support", color: "text-orange-500" },
  { icon: Shield, text: "Safety Compliant", color: "text-purple-500" },
];

export default function CTASection() {
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    message: '',
  });
  
  const [errors, setErrors] = useState<FormErrors>({});

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  // Phone validation for Algerian numbers
  const phoneRegex = /^(\+213|0)[5-7][0-9]{8}$/;

  // Form validation
  const validateForm = useCallback((): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid Algerian phone number';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  // Handle input changes
  const handleInputChange = useCallback((field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear error when user starts typing
    if (errors[field as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  }, [errors]);

  // Handle form submission
  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    try {
      // Simulate API call - replace with your actual API endpoint
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Form submitted:', formData);
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        projectType: '',
        message: '',
      });
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
        setShowForm(false);
      }, 5000);
      
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      
      // Hide error message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, validateForm]);

  return (
    <>
      {/* Custom CSS for enhanced animations */}
      <style jsx global>{`
        .form-slide-enter {
          animation: slideDown 0.3s ease-out forwards;
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
            max-height: 0;
          }
          to {
            opacity: 1;
            transform: translateY(0);
            max-height: 1000px;
          }
        }
        
        .status-message {
          animation: fadeInUp 0.4s ease-out;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <section id="contact" className="w-full py-20 md:py-32 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,hsl(var(--primary))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_20%,transparent_100%)] opacity-[0.02]"></div>
        
        {/* Floating elements */}
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative max-w-6xl mx-auto"
          >
            {/* Enhanced glassmorphism container */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
              
              <div className="relative bg-gradient-to-br from-background/95 to-muted/40 backdrop-blur-xl rounded-3xl border border-primary/20 hover:border-primary/30 transition-all duration-500 p-8 md:p-12">
                
                {/* Header Section */}
                <div className="text-center mb-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 text-primary mb-6"
                  >
                    <Zap className="size-5" />
                    <span className="font-semibold">Ready to Get Started?</span>
                  </motion.div>

                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent leading-[1.2] pb-2">
                    Transform Your Electrical Infrastructure
                  </h2>
                  
                  <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
                    Partner with EFFI TECH for reliable, efficient, and innovative electrical engineering solutions. 
                    We don't just supply products – we implement complete systems that work.
                  </p>
                </div>

                {/* Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="overflow-hidden"
                >
                  <motion.div
                    animate={{ 
                      opacity: showForm ? 0 : 1,
                      y: showForm ? -20 : 0,
                      height: showForm ? 0 : "auto"
                    }}
                    transition={{ 
                      duration: 0.4, 
                      ease: "easeInOut",
                      height: { duration: 0.3 }
                    }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
                    style={{ 
                      marginBottom: showForm ? 0 : undefined 
                    }}
                  >
                    <Button 
                      size="lg" 
                      onClick={() => setShowForm(true)}
                      className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-full hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-primary/25"
                    >
                      <MessageSquare className="mr-3 size-5" />
                      Get Free Consultation
                    </Button>
                    
                    <Button 
                      size="lg" 
                      variant="outline"
                      className="px-8 py-4 text-lg font-semibold rounded-full hover:scale-105 transition-all duration-300 border-primary/30 hover:border-primary/50 hover:bg-primary/5"
                    >
                      View Case Studies
                      <ArrowRight className="ml-3 size-5" />
                    </Button>
                  </motion.div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                  initial={{ opacity: 0, height: 0, y: -20 }}
                  animate={{ 
                    opacity: showForm ? 1 : 0,
                    height: showForm ? "auto" : 0,
                    y: showForm ? 0 : -20
                  }}
                  transition={{ 
                    duration: 0.5, 
                    ease: "easeInOut",
                    opacity: { duration: 0.4, delay: showForm ? 0.1 : 0 },
                    height: { duration: 0.4 },
                    y: { duration: 0.4, delay: showForm ? 0.1 : 0 }
                  }}
                  className="overflow-hidden mb-8"
                  style={{ 
                    marginBottom: showForm ? 32 : 0
                  }}
                >
                  <div className="pt-4">
                    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Name Field */}
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-sm font-semibold text-foreground">
                            Full Name *
                          </Label>
                          <Input
                            id="name"
                            type="text"
                            value={formData.name}
                            onChange={(e) => handleInputChange('name', e.target.value)}
                            className={`rounded-xl border-primary/20 focus:border-primary/50 transition-colors ${errors.name ? 'border-red-500 focus:border-red-500' : ''}`}
                            placeholder="Enter your full name"
                            disabled={isSubmitting}
                          />
                          {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
                        </div>

                        {/* Email Field */}
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-sm font-semibold text-foreground">
                            Email Address *
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            className={`rounded-xl border-primary/20 focus:border-primary/50 transition-colors ${errors.email ? 'border-red-500 focus:border-red-500' : ''}`}
                            placeholder="your.email@company.com"
                            disabled={isSubmitting}
                          />
                          {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
                        </div>

                        {/* Phone Field */}
                        <div className="space-y-2">
                          <Label htmlFor="phone" className="text-sm font-semibold text-foreground">
                            Phone Number *
                          </Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            className={`rounded-xl border-primary/20 focus:border-primary/50 transition-colors ${errors.phone ? 'border-red-500 focus:border-red-500' : ''}`}
                            placeholder="+213 5XX XXX XXX"
                            disabled={isSubmitting}
                          />
                          {errors.phone && <p className="text-sm text-red-500">{errors.phone}</p>}
                        </div>

                        {/* Company Field */}
                        <div className="space-y-2">
                          <Label htmlFor="company" className="text-sm font-semibold text-foreground">
                            Company Name
                          </Label>
                          <Input
                            id="company"
                            type="text"
                            value={formData.company}
                            onChange={(e) => handleInputChange('company', e.target.value)}
                            className="rounded-xl border-primary/20 focus:border-primary/50 transition-colors"
                            placeholder="Your company name"
                            disabled={isSubmitting}
                          />
                        </div>
                      </div>

                      {/* Project Type */}
                      <div className="space-y-2">
                        <Label htmlFor="projectType" className="text-sm font-semibold text-foreground">
                          Project Type
                        </Label>
                        <Select value={formData.projectType} onValueChange={(value) => handleInputChange('projectType', value)} disabled={isSubmitting}>
                          <SelectTrigger className="rounded-xl border-primary/20 focus:border-primary/50">
                            <SelectValue placeholder="Select your project type" />
                          </SelectTrigger>
                          <SelectContent>
                            {projectTypes.map((type) => (
                              <SelectItem key={type.value} value={type.value}>
                                {type.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Message Field */}
                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-sm font-semibold text-foreground">
                          Project Details *
                        </Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => handleInputChange('message', e.target.value)}
                          className={`rounded-xl border-primary/20 focus:border-primary/50 transition-colors min-h-[120px] resize-none ${errors.message ? 'border-red-500 focus:border-red-500' : ''}`}
                          placeholder="Tell us about your electrical engineering project requirements..."
                          disabled={isSubmitting}
                        />
                        {errors.message && <p className="text-sm text-red-500">{errors.message}</p>}
                      </div>

                      {/* Form Actions */}
                      <div className="flex flex-col sm:flex-row gap-4 py-4">
                        <Button
                          type="submit"
                          size="lg"
                          disabled={isSubmitting}
                          className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-full hover:scale-105 transition-all duration-300  hover:shadow-primary/25 disabled:hover:scale-100"
                        >
                          {isSubmitting ? (
                            <div className="flex items-center gap-3">
                              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                              Sending...
                            </div>
                          ) : (
                            <div className="flex items-center gap-3">
                              <Mail className="size-5" />
                              Send Message
                            </div>
                          )}
                        </Button>
                        
                        <Button
                          type="button"
                          variant="outline"
                          size="lg"
                          onClick={() => setShowForm(false)}
                          disabled={isSubmitting}
                          className="px-8 py-4 text-lg font-semibold rounded-full hover:scale-105 transition-all duration-300 border-primary/30 hover:border-primary/50 hover:bg-primary/5"
                        >
                          Cancel
                        </Button>
                      </div>
                    </form>
                  </div>
                </motion.div>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="status-message text-center p-6 bg-green-50 border border-green-200 rounded-xl mb-8"
                  >
                    <CheckCircle className="size-8 text-green-600 mx-auto mb-3" />
                    <h3 className="text-lg font-semibold text-green-800 mb-2">Message Sent Successfully!</h3>
                    <p className="text-green-700">
                      Thank you for reaching out. Our engineering team will contact you within 24 hours to discuss your project.
                    </p>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="status-message text-center p-6 bg-red-50 border border-red-200 rounded-xl mb-8"
                  >
                    <div className="size-8 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-3">
                      <span className="text-red-600 font-bold">!</span>
                    </div>
                    <h3 className="text-lg font-semibold text-red-800 mb-2">Message Failed to Send</h3>
                    <p className="text-red-700">
                      There was an error sending your message. Please try again or contact us directly at info@effitech.dz
                    </p>
                  </motion.div>
                )}

                {/* Trust Indicators */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-primary/20"
                >
                  {trustIndicators.map((indicator, index) => {
                    const IconComponent = indicator.icon;
                    return (
                      <div key={index} className="flex flex-col items-center text-center group">
                        <div className="relative mb-3">
                          <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur opacity-0 group-hover:opacity-50 transition duration-300"></div>
                          <div className="relative p-3 rounded-full bg-gradient-to-br from-primary/10 to-secondary/5 group-hover:from-primary/20 group-hover:to-secondary/10 transition-all duration-300">
                            <IconComponent className={`size-6 ${indicator.color}`} />
                          </div>
                        </div>
                        <span className="text-sm font-semibold text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                          {indicator.text}
                        </span>
                      </div>
                    );
                  })}
                </motion.div>

                {/* Contact Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="text-center mt-8 pt-6 border-t border-primary/20"
                >
                  <p className="text-muted-foreground mb-4">
                    Or reach out directly for immediate assistance
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a 
                      href="tel:+213XXXXXXX" 
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 hover:bg-primary/10 transition-colors duration-300 text-primary font-semibold"
                    >
                      <Phone className="size-4" />
                      +213 XXX XXX XXX
                    </a>
                    <a 
                      href="mailto:info@effitech.dz" 
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 hover:bg-primary/10 transition-colors duration-300 text-primary font-semibold"
                    >
                      <Mail className="size-4" />
                      info@effitech.dz
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}