// FormField.tsx
'use client';

import { memo } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import type { FormFieldProps } from './types';

export const FormField = memo<FormFieldProps>(({
  id,
  label,
  type = 'text',
  value,
  onChange,
  error,
  placeholder,
  required = false,
  disabled = false,
  options = [],
  className = '',
}) => {
  const baseInputClasses = `
    rounded-xl border-primary/20 focus:border-primary/50 transition-colors duration-200
    ${error ? 'border-red-500 focus:border-red-500 bg-red-50/50' : ''}
    ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
  `;

  const renderInput = () => {
    switch (type) {
      case 'textarea':
        return (
          <Textarea
            id={id}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className={`${baseInputClasses} min-h-[120px] resize-none`}
            placeholder={placeholder}
            disabled={disabled}
            required={required}
            aria-describedby={error ? `${id}-error` : undefined}
            aria-invalid={!!error}
          />
        );

      case 'select':
        return (
          <Select 
            value={value} 
            onValueChange={onChange} 
            disabled={disabled}
          >
            <SelectTrigger 
              className={baseInputClasses}
              aria-describedby={error ? `${id}-error` : undefined}
              aria-invalid={!!error}
            >
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
              {options.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );

      default:
        return (
          <Input
            id={id}
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className={baseInputClasses}
            placeholder={placeholder}
            disabled={disabled}
            required={required}
            aria-describedby={error ? `${id}-error` : undefined}
            aria-invalid={!!error}
            autoComplete={getAutoComplete(type, id)}
          />
        );
    }
  };

  return (
    <div className={`space-y-2 ${className}`}>
      <Label 
        htmlFor={id} 
        className="text-sm font-semibold text-foreground flex items-center gap-1"
      >
        {label}
        {required && (
          <span className="text-red-500" aria-label="required">
            *
          </span>
        )}
      </Label>
      
      {renderInput()}
      
      {error && (
        <p 
          id={`${id}-error`}
          className="text-sm text-red-500 flex items-center gap-1"
          role="alert"
          aria-live="polite"
        >
          <span className="inline-block w-1 h-1 bg-red-500 rounded-full" aria-hidden="true" />
          {error}
        </p>
      )}
    </div>
  );
});

// Helper function to determine autocomplete attributes
const getAutoComplete = (type: string, id: string): string => {
  const autoCompleteMap: Record<string, string> = {
    email: 'email',
    tel: 'tel',
    name: 'name',
    company: 'organization',
  };

  if (autoCompleteMap[type]) return autoCompleteMap[type];
  if (autoCompleteMap[id]) return autoCompleteMap[id];
  
  return 'off';
};

FormField.displayName = 'FormField';