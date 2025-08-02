// hooks/useFormSubmission.ts
import { useState, useCallback } from 'react';
import type { FormData, SubmissionStatus, UseFormSubmissionReturn } from '@/components/cta-section/types';
import { useEmailService } from './useEmailService';
import { RATE_LIMIT } from '../constants/contact';

// Rate limiting storage key
const RATE_LIMIT_KEY = 'effi_tech_form_submissions';

interface SubmissionRecord {
  timestamp: number;
  count: number;
}

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export const useFormSubmission = (): UseFormSubmissionReturn => {
  const [status, setStatus] = useState<SubmissionStatus>('idle');
  const [currentError, setCurrentError] = useState<string | null>(null);

  // Use the email service hook
  const { sendEmail, isLoading, error } = useEmailService({
    enableGoogleSheets: true,
    enableAutoReply: true,
    onSuccess: (data) => {
      // Log successful submission for analytics
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'form_submit', {
          event_category: 'Contact',
          event_label: 'Contact Form',
          value: 1,
        });
      }
    },
    onError: (error, data) => {
      // Log error for analytics
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'form_error', {
          event_category: 'Contact',
          event_label: 'Contact Form Error',
          value: 0,
        });
      }
    },
  });

  // Check rate limiting
  const checkRateLimit = useCallback((): boolean => {
    try {
      const stored = localStorage.getItem(RATE_LIMIT_KEY);
      const now = Date.now();

      if (!stored) {
        // First submission
        localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify({
          timestamp: now,
          count: 1
        }));
        return true;
      }

      const record: SubmissionRecord = JSON.parse(stored);
      const timeElapsed = now - record.timestamp;

      if (timeElapsed > RATE_LIMIT.timeWindow) {
        // Time window has passed, reset counter
        localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify({
          timestamp: now,
          count: 1
        }));
        return true;
      }

      if (record.count >= RATE_LIMIT.maxSubmissions) {
        // Rate limit exceeded
        return false;
      }

      // Increment counter
      localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify({
        timestamp: record.timestamp,
        count: record.count + 1
      }));
      
      return true;
    } catch (error) {
      console.warn('Rate limiting check failed:', error);
      return true; // Allow submission if rate limiting fails
    }
  }, []);

  // Get remaining time for rate limit
  const getRateLimitResetTime = useCallback((): number => {
    try {
      const stored = localStorage.getItem(RATE_LIMIT_KEY);
      if (!stored) return 0;

      const record: SubmissionRecord = JSON.parse(stored);
      const timeElapsed = Date.now() - record.timestamp;
      const remainingTime = RATE_LIMIT.timeWindow - timeElapsed;

      return Math.max(0, remainingTime);
    } catch (error) {
      return 0;
    }
  }, []);

  // Submit form data
  const submitForm = useCallback(async (data: FormData): Promise<void> => {
    if (status === 'submitting' || isLoading) {
      return; // Prevent double submission
    }

    setStatus('submitting');

    try {
      // Check rate limiting first
      if (!checkRateLimit()) {
        const resetTime = getRateLimitResetTime();
        const minutes = Math.ceil(resetTime / (60 * 1000));
        const errorMessage = `Too many submissions. Please try again in ${minutes} minute${minutes > 1 ? 's' : ''}.`;
        
        setStatus('error');
        throw new Error(errorMessage);
      }

      // Validate required fields one more time
      if (!data.name.trim() || !data.email.trim() || !data.phone.trim() || !data.message.trim()) {
        setStatus('error');
        throw new Error('Please fill in all required fields');
      }

      // Use the email service to send
      await sendEmail(data);

      setStatus('success');

    } catch (error) {
      console.error('Form submission error:', error);
      const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
      setCurrentError(errorMessage);
      setStatus('error');
      throw error;
    }
  }, [status, isLoading, sendEmail, checkRateLimit, getRateLimitResetTime]);

  // Reset status
  const resetStatus = useCallback(() => {
    setStatus('idle');
    setCurrentError(null);
  }, []);

  const isSubmitting = status === 'submitting' || isLoading;

  return {
    status,
    isSubmitting,
    submitForm,
    resetStatus,
    error: currentError || error, // Return current error or email service error
  };
};