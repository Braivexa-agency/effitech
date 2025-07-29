// services/emailService.ts
import emailjs from '@emailjs/browser';
import type { FormData, EmailServiceConfig, EmailData } from '@/components/cta-section/types';
import { EMAIL_CONFIG, CONTACT_INFO } from '../constants/contact';

class EmailService {
  private config: EmailServiceConfig;

  constructor(config: EmailServiceConfig = EMAIL_CONFIG) {
    this.config = config;
    this.initializeService();
  }

  private initializeService() {
    if (this.config.provider === 'emailjs' && this.config.apiKey) {
      emailjs.init(this.config.apiKey);
    }
  }

  /**
   * Send email using EmailJS (client-side)
   */
  private async sendWithEmailJS(data: FormData): Promise<void> {
    if (!this.config.serviceId || !this.config.templateId) {
      throw new Error('EmailJS configuration is incomplete');
    }

    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      phone: data.phone,
      company: data.company || 'Not specified',
      project_type: data.projectType || 'Not specified',
      message: data.message,
      to_email: CONTACT_INFO.email,
      reply_to: data.email,
    };

    try {
      const response = await emailjs.send(
        this.config.serviceId,
        this.config.templateId,
        templateParams
      );

      if (response.status !== 200) {
        throw new Error(`EmailJS failed with status: ${response.status}`);
      }
    } catch (error) {
      console.error('EmailJS error:', error);
      throw new Error('Failed to send email via EmailJS');
    }
  }

  /**
   * Send email using Resend API (server-side)
   */
  private async sendWithResend(data: FormData): Promise<void> {
    const emailData: EmailData = {
      to: CONTACT_INFO.email,
      from: `noreply@${window.location.hostname}`,
      subject: `New Contact Form Submission from ${data.name}`,
      html: this.generateEmailHTML(data),
      text: this.generateEmailText(data),
    };

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          provider: 'resend',
          emailData,
          apiKey: this.config.apiKey,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error('Resend API error:', error);
      throw new Error('Failed to send email via Resend');
    }
  }

  /**
   * Send to webhook endpoint
   */
  private async sendWithWebhook(data: FormData): Promise<void> {
    if (!this.config.endpoint) {
      throw new Error('Webhook endpoint not configured');
    }

    try {
      const response = await fetch(this.config.endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          timestamp: new Date().toISOString(),
          source: 'effi-tech-contact-form',
        }),
      });

      if (!response.ok) {
        throw new Error(`Webhook failed with status: ${response.status}`);
      }
    } catch (error) {
      console.error('Webhook error:', error);
      throw new Error('Failed to send to webhook');
    }
  }

  /**
   * Generate HTML email template
   */
  private generateEmailHTML(data: FormData): string {
    return `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>New Contact Form Submission</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #44E5E7, #0F3030); color: white; padding: 20px; text-align: center; }
            .content { background: #f9f9f9; padding: 20px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #0F3030; }
            .value { margin-top: 5px; padding: 8px; background: white; border-radius: 4px; }
            .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>⚡ EFFI TECH</h1>
              <p>New Contact Form Submission</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Name:</div>
                <div class="value">${data.name}</div>
              </div>
              <div class="field">
                <div class="label">Email:</div>
                <div class="value">${data.email}</div>
              </div>
              <div class="field">
                <div class="label">Phone:</div>
                <div class="value">${data.phone}</div>
              </div>
              ${data.company ? `
                <div class="field">
                  <div class="label">Company:</div>
                  <div class="value">${data.company}</div>
                </div>
              ` : ''}
              ${data.projectType ? `
                <div class="field">
                  <div class="label">Project Type:</div>
                  <div class="value">${data.projectType}</div>
                </div>
              ` : ''}
              <div class="field">
                <div class="label">Message:</div>
                <div class="value">${data.message.replace(/\n/g, '<br>')}</div>
              </div>
              <div class="field">
                <div class="label">Submitted:</div>
                <div class="value">${new Date().toLocaleString('en-US', {
                  timeZone: 'Africa/Algiers',
                  dateStyle: 'full',
                  timeStyle: 'medium'
                })}</div>
              </div>
            </div>
            <div class="footer">
              <p>This email was sent from the EFFI TECH contact form</p>
            </div>
          </div>
        </body>
      </html>
    `;
  }

  /**
   * Generate plain text email
   */
  private generateEmailText(data: FormData): string {
    return `
EFFI TECH - New Contact Form Submission

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
${data.company ? `Company: ${data.company}` : ''}
${data.projectType ? `Project Type: ${data.projectType}` : ''}

Message:
${data.message}

Submitted: ${new Date().toLocaleString('en-US', {
      timeZone: 'Africa/Algiers',
      dateStyle: 'full',
      timeStyle: 'medium'
    })}
    `.trim();
  }

  /**
   * Main method to send email based on configured provider
   */
  async sendContactForm(data: FormData): Promise<void> {
    try {
      switch (this.config.provider) {
        case 'emailjs':
          await this.sendWithEmailJS(data);
          break;
        case 'resend':
          await this.sendWithResend(data);
          break;
        case 'webhook':
          await this.sendWithWebhook(data);
          break;
        default:
          throw new Error(`Unsupported email provider: ${this.config.provider}`);
      }
    } catch (error) {
      console.error('Email service error:', error);
      throw error;
    }
  }

  /**
   * Send auto-reply to the user
   */
  async sendAutoReply(data: FormData): Promise<void> {
    if (this.config.provider !== 'emailjs') {
      return; // Auto-reply only implemented for EmailJS for now
    }

    const autoReplyTemplate = process.env.NEXT_PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID;
    if (!autoReplyTemplate || !this.config.serviceId) return;

    try {
      await emailjs.send(
        this.config.serviceId,
        autoReplyTemplate,
        {
          to_name: data.name,
          to_email: data.email,
          company_name: 'EFFI TECH',
          project_type: data.projectType,
        }
      );
    } catch (error) {
      console.warn('Failed to send auto-reply:', error);
      // Don't throw here as auto-reply failure shouldn't break the main flow
    }
  }

  /**
   * Test email configuration
   */
  async testConfiguration(): Promise<boolean> {
    try {
      const testData: FormData = {
        name: 'Test User',
        email: 'test@example.com',
        phone: '+213662284649',
        company: 'Test Company',
        projectType: 'consultation',
        message: 'This is a test message to verify email configuration.',
      };

      await this.sendContactForm(testData);
      return true;
    } catch (error) {
      console.error('Email configuration test failed:', error);
      return false;
    }
  }
}

// Export singleton instance
export const emailService = new EmailService();

// Export class for custom configurations
export { EmailService };