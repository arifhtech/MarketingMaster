# Marketing Master Server

A Node.js/Express server with PostgreSQL database integration for the Marketing Master website.

## Features

- Contact form submissions
- Newsletter subscriptions
- Rate limiting
- PostgreSQL database
- TypeScript support

## Setup

1. Install dependencies:
```bash
npm install
```

2. Configure environment variables:
Copy `.env.example` to `.env` and update the database URL with your actual password.

3. Set up database:
Run the SQL schema in `src/database/schema.sql` in your PostgreSQL database.

4. Run in development:
```bash
npm run dev
```

5. Build for production:
```bash
npm run build
npm start
```

## API Endpoints

- `POST /api/contact` - Submit contact form
- `POST /api/newsletter` - Subscribe to newsletter
- `GET /health` - Health check

## Database Schema

- `contact_submissions` - Stores contact form submissions
- `newsletter_subscribers` - Stores newsletter subscriptions