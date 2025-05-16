import { 
  users, 
  type User, 
  type InsertUser, 
  contactSubmissions,
  type ContactSubmission,
  type InsertContactSubmission,
  newsletterSubscribers,
  type NewsletterSubscriber,
  type InsertNewsletterSubscriber
} from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
  getContactSubmissions(): Promise<ContactSubmission[]>;
  createNewsletterSubscriber(subscriber: InsertNewsletterSubscriber): Promise<NewsletterSubscriber>;
  getNewsletterSubscribers(): Promise<NewsletterSubscriber[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contactSubmissions: Map<number, ContactSubmission>;
  private newsletterSubscribers: Map<number, NewsletterSubscriber>;
  private userCurrentId: number;
  private contactSubmissionCurrentId: number;
  private newsletterSubscriberCurrentId: number;

  constructor() {
    this.users = new Map();
    this.contactSubmissions = new Map();
    this.newsletterSubscribers = new Map();
    this.userCurrentId = 1;
    this.contactSubmissionCurrentId = 1;
    this.newsletterSubscriberCurrentId = 1;
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userCurrentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Contact submission methods
  async createContactSubmission(insertSubmission: InsertContactSubmission): Promise<ContactSubmission> {
    const id = this.contactSubmissionCurrentId++;
    const createdAt = new Date();
    
    const submission: ContactSubmission = { 
      ...insertSubmission, 
      id,
      createdAt
    };
    
    this.contactSubmissions.set(id, submission);
    return submission;
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return Array.from(this.contactSubmissions.values());
  }

  // Newsletter subscriber methods
  async createNewsletterSubscriber(insertSubscriber: InsertNewsletterSubscriber): Promise<NewsletterSubscriber> {
    // Check for duplicate email
    const existingSubscriber = Array.from(this.newsletterSubscribers.values()).find(
      (subscriber) => subscriber.email === insertSubscriber.email
    );
    
    if (existingSubscriber) {
      throw new Error("Email already subscribed (duplicate)");
    }
    
    const id = this.newsletterSubscriberCurrentId++;
    const createdAt = new Date();
    
    const subscriber: NewsletterSubscriber = {
      ...insertSubscriber,
      id,
      createdAt
    };
    
    this.newsletterSubscribers.set(id, subscriber);
    return subscriber;
  }

  async getNewsletterSubscribers(): Promise<NewsletterSubscriber[]> {
    return Array.from(this.newsletterSubscribers.values());
  }
}

export const storage = new MemStorage();
