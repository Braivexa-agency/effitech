// index.ts - Export barrel
export { CTASection } from './CTASection';
export { ContactForm } from './ContactForm';
export { FormField } from './FormField';
export { StatusMessage } from './StatusMessage';
export { TrustIndicators } from './TrustIndicators';
export { ActionButtons } from './ActionButtons';
export { ContactInfoDirect } from './ContactInfo';

// Export types
export type * from './types';

// Export hooks for external usage if needed
export { useContactForm } from './hooks/useContactForm';
export { useFormSubmission } from './hooks/useFormSubmission';
export { useEmailService } from './hooks/useEmailService';

// Export services
export { emailService, EmailService } from './services/emailService';
export { googleSheetsService, GoogleSheetsService } from './services/googleSheetsService';

// Export constants
export { 
  PROJECT_TYPES, 
  TRUST_INDICATORS, 
  CONTACT_INFO,
  EMAIL_CONFIG,
  VALIDATION_PATTERNS,
  FIELD_CONSTRAINTS
} from './constants/contact';