interface FormSubmissionData {
  name: string;
  email: string;
  subject: string;
  message: string;
  category?: string;
  formType: 'contact' | 'feedback' | 'bug-report' | 'feature-request';
  additionalData?: Record<string, any>;
}

interface FormSubmissionResponse {
  success: boolean;
  message: string;
  submissionId?: string;
}

export class FormSubmissionService {
  private static readonly EMAIL_ADDRESS = 'shelfieplatform@gmail.com';
  
  static async submitForm(data: FormSubmissionData): Promise<FormSubmissionResponse> {
    try {
      // Create email content
      const emailContent = this.formatEmailContent(data);
      
      // Create mailto link
      const mailtoLink = this.createMailtoLink(data, emailContent);
      
      // Open email client
      window.open(mailtoLink, '_blank');
      
      // Log to console for development
      console.log('Form submission:', {
        ...data,
        timestamp: new Date().toISOString(),
        submissionId: this.generateSubmissionId()
      });
      
      return {
        success: true,
        message: 'Form submitted successfully. Please check your email client.',
        submissionId: this.generateSubmissionId()
      };
    } catch (error) {
      console.error('Form submission error:', error);
      return {
        success: false,
        message: 'Failed to submit form. Please try again or contact us directly.'
      };
    }
  }
  
  private static formatEmailContent(data: FormSubmissionData): string {
    const timestamp = new Date().toISOString();
    const formTypeLabels = {
      'contact': 'General Contact',
      'feedback': 'Feedback',
      'bug-report': 'Bug Report',
      'feature-request': 'Feature Request'
    };
    
    let content = `New ${formTypeLabels[data.formType]} Submission\n\n`;
    content += `Form Type: ${formTypeLabels[data.formType]}\n`;
    content += `Name: ${data.name}\n`;
    content += `Email: ${data.email}\n`;
    content += `Subject: ${data.subject}\n`;
    content += `Message:\n${data.message}\n`;
    
    if (data.category) {
      content += `Category: ${data.category}\n`;
    }
    
    if (data.additionalData) {
      content += `\nAdditional Information:\n`;
      Object.entries(data.additionalData).forEach(([key, value]) => {
        content += `${key}: ${value}\n`;
      });
    }
    
    content += `\nTimestamp: ${timestamp}\n`;
    content += `Submission ID: ${this.generateSubmissionId()}\n`;
    content += `\nThis is an automated notification from the Shelfie website.`;
    
    return content;
  }
  
  private static createMailtoLink(data: FormSubmissionData, content: string): string {
    const subject = `[${data.formType.toUpperCase()}] ${data.subject}`;
    const encodedSubject = encodeURIComponent(subject);
    const encodedContent = encodeURIComponent(content);
    
    return `mailto:${this.EMAIL_ADDRESS}?subject=${encodedSubject}&body=${encodedContent}`;
  }
  
  private static generateSubmissionId(): string {
    return `SUB-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }
}

// Utility function for form validation
export function validateFormData(data: Partial<FormSubmissionData>): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];
  
  if (!data.name?.trim()) {
    errors.push('Name is required');
  }
  
  if (!data.email?.trim()) {
    errors.push('Email is required');
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push('Please enter a valid email address');
  }
  
  if (!data.subject?.trim()) {
    errors.push('Subject is required');
  }
  
  if (!data.message?.trim()) {
    errors.push('Message is required');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
}
