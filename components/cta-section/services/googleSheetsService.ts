// services/googleSheetsService.ts
import type { FormData, GoogleSheetsConfig } from '@/components/cta-section/types';
import { GOOGLE_SHEETS_CONFIG, PROJECT_TYPES } from '../constants/contact';

class GoogleSheetsService {
  private config: GoogleSheetsConfig;

  constructor(config: GoogleSheetsConfig = GOOGLE_SHEETS_CONFIG) {
    this.config = config;
  }

  /**
   * Append form data to Google Sheets
   */
  async appendFormData(data: FormData): Promise<void> {
    if (!this.config.spreadsheetId || !this.config.apiKey) {
      throw new Error('Google Sheets configuration is incomplete');
    }

    const projectTypeLabel = PROJECT_TYPES.find(
      type => type.value === data.projectType
    )?.label || data.projectType;

    // Prepare row data - adjust order based on your sheet columns
    const rowData = [
      new Date().toISOString(), // Timestamp
      data.name,
      data.email,
      data.phone,
      data.company || '',
      projectTypeLabel || '',
      data.message,
      'New', // Status column
    ];

    try {
      const response = await fetch(
        `https://sheets.googleapis.com/v4/spreadsheets/${this.config.spreadsheetId}/values/${this.config.range}:append?valueInputOption=RAW&key=${this.config.apiKey}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            values: [rowData],
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          errorData.error?.message || `HTTP error! status: ${response.status}`
        );
      }

      const result = await response.json();
      console.log('Data appended to Google Sheets:', result);
      
    } catch (error) {
      console.error('Google Sheets API error:', error);
      throw new Error('Failed to save data to Google Sheets');
    }
  }

  /**
   * Get all form submissions from Google Sheets
   */
  async getFormSubmissions(): Promise<any[]> {
    if (!this.config.spreadsheetId || !this.config.apiKey) {
      throw new Error('Google Sheets configuration is incomplete');
    }

    try {
      const response = await fetch(
        `https://sheets.googleapis.com/v4/spreadsheets/${this.config.spreadsheetId}/values/${this.config.range}?key=${this.config.apiKey}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      return result.values || [];
      
    } catch (error) {
      console.error('Failed to fetch Google Sheets data:', error);
      throw new Error('Failed to retrieve data from Google Sheets');
    }
  }

  /**
   * Create headers in Google Sheets if they don't exist
   */
  async initializeSheet(): Promise<void> {
    const headers = [
      'Timestamp',
      'Name',
      'Email',
      'Phone',
      'Company',
      'Project Type',
      'Message',
      'Status',
    ];

    try {
      // First, check if headers already exist
      const existingData = await this.getFormSubmissions();
      
      if (existingData.length === 0) {
        // Sheet is empty, add headers
        const response = await fetch(
          `https://sheets.googleapis.com/v4/spreadsheets/${this.config.spreadsheetId}/values/${this.config.range}?valueInputOption=RAW&key=${this.config.apiKey}`,
          {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              values: [headers],
            }),
          }
        );

        if (!response.ok) {
          throw new Error(`Failed to initialize sheet headers: ${response.status}`);
        }

        console.log('Google Sheets headers initialized');
      }
    } catch (error) {
      console.error('Failed to initialize Google Sheets:', error);
      throw error;
    }
  }

  /**
   * Update submission status in Google Sheets
   */
  async updateSubmissionStatus(
    rowIndex: number, 
    status: 'New' | 'Contacted' | 'In Progress' | 'Completed'
  ): Promise<void> {
    if (!this.config.spreadsheetId || !this.config.apiKey) {
      throw new Error('Google Sheets configuration is incomplete');
    }

    try {
      const range = `Contact Form!H${rowIndex + 1}`; // Assuming status is in column H
      
      const response = await fetch(
        `https://sheets.googleapis.com/v4/spreadsheets/${this.config.spreadsheetId}/values/${range}?valueInputOption=RAW&key=${this.config.apiKey}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            values: [[status]],
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to update status: ${response.status}`);
      }

      console.log(`Updated row ${rowIndex} status to: ${status}`);
      
    } catch (error) {
      console.error('Failed to update submission status:', error);
      throw error;
    }
  }

  /**
   * Test Google Sheets connection
   */
  async testConnection(): Promise<boolean> {
    try {
      await this.getFormSubmissions();
      return true;
    } catch (error) {
      console.error('Google Sheets connection test failed:', error);
      return false;
    }
  }
}

// Export singleton instance
export const googleSheetsService = new GoogleSheetsService();

// Export class for custom configurations
export { GoogleSheetsService };