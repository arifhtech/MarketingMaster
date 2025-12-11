import { Request, Response } from 'express';
import pool from '../config/database';
import { ContactSubmission, NewsletterSubscriber } from '../models/ContactSubmission';

export const submitContactForm = async (req: Request, res: Response) => {
  try {
    const { name, email, phone, projectType, message } = req.body;

    // Validate required fields
    if (!name || !email || !projectType || !message) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields'
      });
    }

    // Insert into database
    const query = `
      INSERT INTO contact_submissions (name, email, phone, project_type, message)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING id, created_at
    `;

    const values = [name, email, phone || null, projectType, message];
    const result = await pool.query(query, values);

    res.status(201).json({
      success: true,
      message: 'Contact form submitted successfully',
      data: result.rows[0]
    });
  } catch (error) {
    console.error('Error submitting contact form:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
};

export const subscribeNewsletter = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: 'Email is required'
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid email format'
      });
    }

    // Check database connection
    if (!pool) {
      console.error('Database connection not available');
      return res.status(503).json({
        success: false,
        message: 'Service temporarily unavailable'
      });
    }

    // Check if email already exists
    const checkQuery = 'SELECT id FROM newsletter_subscribers WHERE email = $1';
    const checkResult = await pool.query(checkQuery, [email]);

    if (checkResult.rows.length > 0) {
      return res.status(409).json({
        success: false,
        message: 'Email already subscribed'
      });
    }

    // Insert new subscriber
    const insertQuery = `
      INSERT INTO newsletter_subscribers (email)
      VALUES ($1)
      RETURNING id, subscribed_at
    `;

    const result = await pool.query(insertQuery, [email]);

    res.status(201).json({
      success: true,
      message: 'Successfully subscribed to newsletter',
      data: result.rows[0]
    });
  } catch (error: any) {
    console.error('Error subscribing to newsletter:', {
      message: error.message,
      code: error.code,
      detail: error.detail,
      timestamp: new Date().toISOString()
    });

    // Handle specific database errors
    if (error.code === 'ECONNREFUSED' || error.code === 'ENOTFOUND') {
      return res.status(503).json({
        success: false,
        message: 'Database connection error. Please try again later.'
      });
    }

    if (error.code === '23505') { // Unique constraint violation
      return res.status(409).json({
        success: false,
        message: 'This email is already subscribed'
      });
    }

    res.status(500).json({
      success: false,
      message: 'Internal server error. Please try again later.'
    });
  }
};
