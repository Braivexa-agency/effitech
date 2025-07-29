// types.ts
export interface FormData {
    name: string;
    email: string;
    phone: string;
    company: string;
    projectType: string;
    message: string;
  }
  
  export interface FormErrors {
    name?: string;
    email?: string;
    phone?: string;
    company?: string;
    projectType?: string;
    message?: string;
    general?: string;
  }
  
  export interface ProjectType {
    value: string;
    label: string;
    description?: string;
  }
  
  export interface TrustIndicator {
    icon: React.ComponentType<{ className?: string }>;
    text: string;
    color: string;
    description?: string;
  }
  
  export interface ContactInfo {
    phone: string;
    email: string;
    address?: string;
  }
  
  export type SubmissionStatus = 'idle' | 'submitting' | 'success' | 'error';
  
  export interface UseContactFormReturn {
    formData: FormData;
    errors: FormErrors;
    isValid: boolean;
    updateField: (field: keyof FormData, value: string) => void;
    validateForm: () => boolean;
    resetForm: () => void;
    clearError: (field: keyof FormErrors) => void;
  }
  
  export interface UseFormSubmissionReturn {
    status: SubmissionStatus;
    isSubmitting: boolean;
    submitForm: (data: FormData) => Promise<void>;
    resetStatus: () => void;
  }
  
  export interface EmailServiceConfig {
    provider: 'emailjs' | 'resend' | 'nodemailer' | 'webhook';
    apiKey?: string;
    serviceId?: string;
    templateId?: string;
    endpoint?: string;
  }
  
  export interface EmailData {
    to: string;
    from: string;
    subject: string;
    html: string;
    text?: string;
  }
  
  export interface GoogleSheetsConfig {
    spreadsheetId: string | undefined;
    apiKey: string | undefined;
    range: string;
  }
  
  export interface CTASectionProps {
    className?: string;
    showTrustIndicators?: boolean;
    showContactInfo?: boolean;
    customProjectTypes?: ProjectType[];
    onFormSubmit?: (data: FormData) => Promise<void>;
  }
  
  export interface ContactFormProps {
    onSubmit: (data: FormData) => Promise<void>;
    isVisible: boolean;
    onCancel: () => void;
    projectTypes?: ProjectType[];
    className?: string;
  }
  
  export interface FormFieldProps {
    id: string;
    label: string;
    type?: 'text' | 'email' | 'tel' | 'textarea' | 'select';
    value: string;
    onChange: (value: string) => void;
    error?: string;
    placeholder?: string;
    required?: boolean;
    disabled?: boolean;
    options?: { value: string; label: string }[];
    className?: string;
  }
  
  export interface StatusMessageProps {
    status: SubmissionStatus;
    successMessage?: string;
    errorMessage?: string;
    className?: string;
  }
  
  export interface TrustIndicatorsProps {
    indicators?: TrustIndicator[];
    className?: string;
  }
  
  export interface ActionButtonsProps {
    onGetConsultation: () => void;
    onViewCaseStudies: () => void;
    isFormVisible: boolean;
    className?: string;
  }