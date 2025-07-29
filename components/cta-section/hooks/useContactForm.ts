// hooks/useContactForm.ts
import { useState, useCallback, useMemo } from 'react';
import type { FormData, FormErrors, UseContactFormReturn } from '@/components/cta-section/types';
import { VALIDATION_PATTERNS, FIELD_CONSTRAINTS } from '../constants/contact';

const initialFormData: FormData = {
  name: '',
  email: '',
  phone: '',
  company: '',
  projectType: '',
  message: '',
};

export const useContactForm = (): UseContactFormReturn => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});

  // Validate individual field
  const validateField = useCallback((field: keyof FormData, value: string): string | undefined => {
    const trimmedValue = value.trim();

    switch (field) {
      case 'name':
        if (!trimmedValue) return 'Name is required';
        if (trimmedValue.length < FIELD_CONSTRAINTS.name.minLength) {
          return `Name must be at least ${FIELD_CONSTRAINTS.name.minLength} characters`;
        }
        if (trimmedValue.length > FIELD_CONSTRAINTS.name.maxLength) {
          return `Name must be less than ${FIELD_CONSTRAINTS.name.maxLength} characters`;
        }
        if (!VALIDATION_PATTERNS.name.test(trimmedValue)) {
          return 'Name contains invalid characters';
        }
        break;

      case 'email':
        if (!trimmedValue) return 'Email is required';
        if (trimmedValue.length > FIELD_CONSTRAINTS.email.maxLength) {
          return `Email must be less than ${FIELD_CONSTRAINTS.email.maxLength} characters`;
        }
        if (!VALIDATION_PATTERNS.email.test(trimmedValue)) {
          return 'Please enter a valid email address';
        }
        break;

      case 'phone':
        if (!trimmedValue) return 'Phone number is required';
        if (trimmedValue.length > FIELD_CONSTRAINTS.phone.maxLength) {
          return `Phone number is too long`;
        }
        if (!VALIDATION_PATTERNS.phone.test(trimmedValue)) {
          return 'Please enter a valid Algerian phone number (e.g., +213 662 28 46 49)';
        }
        break;

      case 'company':
        if (trimmedValue && trimmedValue.length > FIELD_CONSTRAINTS.company.maxLength) {
          return `Company name must be less than ${FIELD_CONSTRAINTS.company.maxLength} characters`;
        }
        break;

      case 'message':
        if (!trimmedValue) return 'Message is required';
        if (trimmedValue.length < FIELD_CONSTRAINTS.message.minLength) {
          return `Message must be at least ${FIELD_CONSTRAINTS.message.minLength} characters`;
        }
        if (trimmedValue.length > FIELD_CONSTRAINTS.message.maxLength) {
          return `Message must be less than ${FIELD_CONSTRAINTS.message.maxLength} characters`;
        }
        break;

      case 'projectType':
        // Project type is optional, no validation needed
        break;

      default:
        break;
    }

    return undefined;
  }, []);

  // Update field value and clear its error
  const updateField = useCallback((field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear error when user starts typing
    if (errors[field as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  }, [errors]);

  // Validate entire form
  const validateForm = useCallback((): boolean => {
    const newErrors: FormErrors = {};

    // Validate all required fields
    (Object.keys(formData) as Array<keyof FormData>).forEach(field => {
      const error = validateField(field, formData[field]);
      if (error) {
        newErrors[field as keyof FormErrors] = error;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData, validateField]);

  // Clear specific error
  const clearError = useCallback((field: keyof FormErrors) => {
    setErrors(prev => ({ ...prev, [field]: undefined }));
  }, []);

  // Reset form to initial state
  const resetForm = useCallback(() => {
    setFormData(initialFormData);
    setErrors({});
  }, []);

  // Check if form is valid (all required fields filled and no errors)
  const isValid = useMemo(() => {
    const hasRequiredFields = !!(
      formData.name.trim() &&
      formData.email.trim() &&
      formData.phone.trim() &&
      formData.message.trim()
    );

    const hasNoErrors = Object.keys(errors).length === 0;

    return hasRequiredFields && hasNoErrors;
  }, [formData, errors]);

  return {
    formData,
    errors,
    isValid,
    updateField,
    validateForm,
    resetForm,
    clearError,
  };
};