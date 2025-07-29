// hooks/useEmailService.ts
import { useState, useCallback, useRef } from 'react';
import { emailService } from '../services/emailService';
import { googleSheetsService } from '../services/googleSheetsService';
import type { FormData, EmailServiceConfig } from '@/components/cta-section/types';

export interface UseEmailServiceOptions {
  enableGoogleSheets?: boolean;
  enableAutoReply?: boolean;
  customConfig?: Partial<EmailServiceConfig>;
  onSuccess?: (data: FormData) => void;
  onError?: (error: Error, data: FormData) => void;
}

export interface UseEmailServiceReturn {
  sendEmail: (data: FormData) => Promise<void>;
  isLoading: boolean;
  error: string | null;
  lastSubmission: FormData | null;
  retryLastSubmission: () => Promise<void>;
  testConnection: () => Promise<boolean>;
  clearError: () => void;
}

export const useEmailService = (options: UseEmailServiceOptions = {}): UseEmailServiceReturn => {
  const {
    enableGoogleSheets = true,
    enableAutoReply = true,
    customConfig,
    onSuccess,
    onError,
  } = options;

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lastSubmission, setLastSubmission] = useState<FormData | null>(null);
  
  // Use ref to store the latest options to avoid stale closures
  const optionsRef = useRef(options);
  optionsRef.current = options;

  // Clear error state
  const clearError = useCallback(() => {
    setError(null);
  }, []);

  // Test email service connection
  const testConnection = useCallback(async (): Promise<boolean> => {
    try {
      setIsLoading(true);
      setError(null);

      const isEmailWorking = await emailService.testConfiguration();
      
      if (enableGoogleSheets) {
        const isSheetsWorking = await googleSheetsService.testConnection();
        if (!isSheetsWorking) {
          console.warn('Google Sheets connection failed, but continuing with email only');
        }
      }

      return isEmailWorking;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Connection test failed';
      setError(errorMessage);
      return false;
    } finally {
      setIsLoading(false);
    }
  }, [enableGoogleSheets]);

  // Send email with all configured services
  const sendEmail = useCallback(async (data: FormData): Promise<void> => {
    if (isLoading) {
      throw new Error('Email service is currently busy. Please wait.');
    }

    setIsLoading(true);
    setError(null);
    setLastSubmission(data);

    try {
      // Validate data before sending
      if (!data.name?.trim() || !data.email?.trim() || !data.message?.trim()) {
        throw new Error('Missing required fields: name, email, and message are required');
      }

      // Sanitize data
      const sanitizedData: FormData = {
        name: data.name.trim(),
        email: data.email.trim().toLowerCase(),
        phone: data.phone?.trim() || '',
        company: data.company?.trim() || '',
        projectType: data.projectType || '',
        message: data.message.trim(),
      };

      const promises: Promise<void>[] = [];
      const errors: string[] = [];

      // Primary email service (critical - must succeed)
      promises.push(
        emailService.sendContactForm(sanitizedData).catch((err) => {
          const errorMsg = `Email service failed: ${err.message}`;
          errors.push(errorMsg);
          throw new Error(errorMsg);
        })
      );

      // Google Sheets (optional - don't fail if this fails)
      if (enableGoogleSheets) {
        promises.push(
          googleSheetsService.appendFormData(sanitizedData).catch((err) => {
            console.warn('Google Sheets save failed:', err);
            errors.push(`Google Sheets: ${err.message}`);
            // Don't throw here - this is optional
          })
        );
      }

      // Auto-reply (optional - don't fail if this fails)
      if (enableAutoReply) {
        promises.push(
          emailService.sendAutoReply(sanitizedData).catch((err) => {
            console.warn('Auto-reply failed:', err);
            errors.push(`Auto-reply: ${err.message}`);
            // Don't throw here - this is optional
          })
        );
      }

      // Wait for all services (but only email is critical)
      await Promise.allSettled(promises);

      // Call success handler
      if (optionsRef.current.onSuccess) {
        optionsRef.current.onSuccess(sanitizedData);
      }

      // Log non-critical errors as warnings
      if (errors.length > 1) { // More than just email error
        console.warn('Some services failed:', errors.filter(err => !err.includes('Email service failed')));
      }

    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to send email';
      setError(errorMessage);
      
      // Call error handler
      if (optionsRef.current.onError) {
        optionsRef.current.onError(err instanceof Error ? err : new Error(errorMessage), data);
      }

      throw err;
    } finally {
      setIsLoading(false);
    }
  }, [isLoading, enableGoogleSheets, enableAutoReply]);

  // Retry last submission
  const retryLastSubmission = useCallback(async (): Promise<void> => {
    if (!lastSubmission) {
      throw new Error('No previous submission to retry');
    }

    await sendEmail(lastSubmission);
  }, [lastSubmission, sendEmail]);

  return {
    sendEmail,
    isLoading,
    error,
    lastSubmission,
    retryLastSubmission,
    testConnection,
    clearError,
  };
};