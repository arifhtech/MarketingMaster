import express from 'express';
import { submitContactForm, subscribeNewsletter } from '../controllers/contactController';
import rateLimit from 'express-rate-limit';

const router = express.Router();

// Rate limiting for contact form submissions
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per windowMs
  message: {
    success: false,
    message: 'Too many contact form submissions, please try again later.'
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// Rate limiting for newsletter subscriptions
const newsletterLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 3, // limit each IP to 3 requests per windowMs
  message: {
    success: false,
    message: 'Too many newsletter subscriptions, please try again later.'
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// Contact form submission
router.post('/contact', contactLimiter, submitContactForm);

// Newsletter subscription
router.post('/newsletter', newsletterLimiter, subscribeNewsletter);

export default router;