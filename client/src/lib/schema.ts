import { z } from "zod";

export const contactSubmissionSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  projectType: z.string().min(1, "Please select a project type"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export const newsletterSubscriberSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

export type ContactSubmission = z.infer<typeof contactSubmissionSchema>;
export type NewsletterSubscriber = z.infer<typeof newsletterSubscriberSchema>; 