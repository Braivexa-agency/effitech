// ContactInfo.tsx
'use client';

import { memo } from 'react';
import { Phone, Mail } from 'lucide-react';
import { CONTACT_INFO } from './constants/navigation';
import type { ContactInfoProps } from './types';

export const ContactInfo = memo<ContactInfoProps>(({ 
  phone = CONTACT_INFO.phone,
  email = CONTACT_INFO.email,
  className = ''
}) => (
  <div className={`flex items-center gap-4 ${className}`}>
    {/* Phone */}
    <a 
      href={`tel:${phone}`} 
      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-md px-1 py-1"
      aria-label={`Call us at ${phone}`}
    >
      <Phone className="size-4" aria-hidden="true" />
      <span className="font-medium">{phone}</span>
    </a>

    {/* Email - only show on larger screens */}
    <a 
      href={`mailto:${email}`} 
      className="hidden 2xl:flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-md px-1 py-1"
      aria-label={`Email us at ${email}`}
    >
      <Mail className="size-4" aria-hidden="true" />
      <span className="font-medium">{email}</span>
    </a>
  </div>
));

ContactInfo.displayName = 'ContactInfo';