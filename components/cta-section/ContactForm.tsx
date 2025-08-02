// ContactForm.tsx
'use client';

import { memo } from 'react';
import { motion } from 'framer-motion';
import { Mail, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FormField } from './FormField';
import { StatusMessage } from './StatusMessage';
import { useContactForm } from './hooks/useContactForm';
import { useFormSubmission } from './hooks/useFormSubmission';
import { PROJECT_TYPES } from './constants/contact';
import type { ContactFormProps } from './types';

export const ContactForm = memo<ContactFormProps>(({
  onSubmit,
  isVisible,
  onCancel,
  projectTypes = PROJECT_TYPES,
  className = '',
}) => {
  const {
    formData,
    errors,
    isValid,
    updateField,
    validateForm,
    resetForm,
  } = useContactForm();

  const { status, isSubmitting, submitForm, resetStatus, error: submissionError } = useFormSubmission();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    try {
      await submitForm(formData);
      await onSubmit(formData); // Call parent handler if provided
      
      // Reset form after successful submission
      setTimeout(() => {
        resetForm();
        resetStatus();
        onCancel();
      }, 3000);
      
    } catch (error) {
      console.error('Form submission failed:', error);
      // Error status is already set by useFormSubmission hook
      // The error will be displayed in StatusMessage component
    }
  };

  const handleCancel = () => {
    resetForm();
    resetStatus();
    onCancel();
  };

  if (!isVisible) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, height: 0, y: -20 }}
      animate={{ 
        opacity: 1,
        height: 'auto',
        y: 0
      }}
      exit={{ 
        opacity: 0, 
        height: 0, 
        y: -20 
      }}
      transition={{ 
        duration: 0.5, 
        ease: [0.4, 0, 0.2, 1],
        height: { duration: 0.4 },
        opacity: { duration: 0.4, delay: 0.1 },
        y: { duration: 0.4, delay: 0.1 }
      }}
      className={`overflow-hidden ${className}`}
    >
      <div className="pt-4">
        {/* Status Messages */}
        <StatusMessage 
          status={status} 
          errorMessage={submissionError || undefined}
          className="mb-6"
        />

        {/* Form */}
        <form 
          onSubmit={handleSubmit} 
          className="max-w-2xl mx-auto space-y-6"
          noValidate
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name Field */}
            <FormField
              id="name"
              label="Full Name"
              type="text"
              value={formData.name}
              onChange={(value) => updateField('name', value)}
              error={errors.name}
              placeholder="Enter your full name"
              required
              disabled={isSubmitting}
            />

            {/* Email Field */}
            <FormField
              id="email"
              label="Email Address"
              type="email"
              value={formData.email}
              onChange={(value) => updateField('email', value)}
              error={errors.email}
              placeholder="your.email@company.com"
              required
              disabled={isSubmitting}
            />

            {/* Phone Field */}
            <FormField
              id="phone"
              label="Phone Number"
              type="tel"
              value={formData.phone}
              onChange={(value) => updateField('phone', value)}
              error={errors.phone}
              placeholder="+213 662 28 46 49"
              required
              disabled={isSubmitting}
            />

            {/* Company Field */}
            <FormField
              id="company"
              label="Company Name"
              type="text"
              value={formData.company}
              onChange={(value) => updateField('company', value)}
              error={errors.company}
              placeholder="Your company name"
              disabled={isSubmitting}
            />
          </div>

          {/* Project Type */}
          <FormField
            id="projectType"
            label="Project Type"
            type="select"
            value={formData.projectType}
            onChange={(value) => updateField('projectType', value)}
            placeholder="Select your project type"
            disabled={isSubmitting}
            options={projectTypes.map(type => ({
              value: type.value,
              label: type.label
            }))}
          />

          {/* Message Field */}
          <FormField
            id="message"
            label="Project Details"
            type="textarea"
            value={formData.message}
            onChange={(value) => updateField('message', value)}
            error={errors.message}
            placeholder="Tell us about your electrical engineering project requirements..."
            required
            disabled={isSubmitting}
          />

          {/* Form Actions */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 py-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.3 }}
          >
            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting || !isValid}
              className="
                flex-1 relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground 
                px-8 py-4 text-lg font-semibold rounded-full 
                transition-all duration-300 hover:shadow-lg 
                hover:shadow-primary/25 group
                hover:scale-105 active:scale-95
                disabled:hover:scale-100 disabled:opacity-50 disabled:cursor-not-allowed
                focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2
              "
            >
              {/* Shimmer effect */}
              <div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"
                aria-hidden="true"
              />
              
              {isSubmitting ? (
                <span className="relative flex items-center gap-3">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Sending...
                </span>
              ) : (
                <span className="relative flex items-center gap-3">
                  <Mail className="size-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-200" />
                  Send Message
                </span>
              )}
            </Button>
            
            <Button
              type="button"
              variant="outline"
              size="lg"
              onClick={handleCancel}
              disabled={isSubmitting}
              className="
                relative overflow-hidden px-8 py-4 text-lg font-semibold rounded-full 
                transition-all duration-300 
                border-primary/30 hover:border-primary/50 hover:bg-primary/5
                hover:scale-105 active:scale-95 group
                disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
                focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2
              "
            >
              <span className="relative flex items-center gap-2">
                <X className="size-5 group-hover:scale-110 group-hover:rotate-90 transition-all duration-200" />
                Cancel
              </span>
            </Button>
          </motion.div>

          {/* Form Footer */}
          <motion.div
            className="text-center text-sm text-muted-foreground pt-4 border-t border-primary/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.3 }}
          >
            <p>
              By submitting this form, you agree to our{' '}
              <a 
                href="/privacy" 
                className="text-primary hover:underline focus-visible:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>{' '}
              and{' '}
              <a 
                href="/terms" 
                className="text-primary hover:underline focus-visible:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Terms of Service
              </a>
            </p>
          </motion.div>
        </form>
      </div>
    </motion.div>
  );
});

ContactForm.displayName = 'ContactForm';