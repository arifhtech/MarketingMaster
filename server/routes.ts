import type { Express } from "express";
import { storage } from "./storage";
import { insertContactSubmissionSchema, insertNewsletterSubscriberSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<void> {
  // Contact form submissions
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      
      const submission = await storage.createContactSubmission({
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone,
        projectType: validatedData.projectType,
        message: validatedData.message,
      });
      
      res.status(201).json({
        message: "Contact form submitted successfully",
        submission
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({ 
          message: "Validation error", 
          errors: validationError.details
        });
        return;
      }
      
      console.error("Error submitting contact form:", error);
      res.status(500).json({ message: "Failed to submit contact form" });
    }
  });

  // Newsletter subscriptions
  app.post("/api/newsletter-subscribe", async (req, res) => {
    try {
      const validatedData = insertNewsletterSubscriberSchema.parse(req.body);
      
      const subscriber = await storage.createNewsletterSubscriber({
        email: validatedData.email
      });
      
      res.status(201).json({
        message: "Subscribed to newsletter successfully",
        subscriber
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({ 
          message: "Validation error", 
          errors: validationError.details
        });
        return;
      }
      
      // Check for duplicate email error
      if (error instanceof Error && error.message.includes("duplicate")) {
        res.status(409).json({ message: "Email already subscribed" });
        return;
      }
      
      console.error("Error subscribing to newsletter:", error);
      res.status(500).json({ message: "Failed to subscribe to newsletter" });
    }
  });
}
