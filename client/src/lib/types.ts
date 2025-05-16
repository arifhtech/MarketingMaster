export interface Service {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  icon: string;
  iconColor: string;
  slug: string;
  features: {
    title: string;
    description: string;
    icon: string;
  }[];
  benefits: string[];
  technologies: string[];
}

export interface CaseStudy {
  id: number;
  title: string;
  description: string;
  category: string;
  categoryColor: string;
  client: string;
  image: string;
  technologies: string[];
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content?: string;
  date: string;
  image: string;
  category: string;
  categoryColor: string;
  author: string;
}

export interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  content: string;
  initials: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  projectType: string;
  message: string;
  agreement: boolean;
}
