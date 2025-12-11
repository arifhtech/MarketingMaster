export interface ContactSubmission {
  id?: number;
  name: string;
  email: string;
  phone?: string;
  project_type: string;
  message: string;
  created_at?: Date;
  status?: 'new' | 'read' | 'responded';
}

export interface NewsletterSubscriber {
  id?: number;
  email: string;
  subscribed_at?: Date;
  is_active?: boolean;
}