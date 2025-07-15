# Data Analyst Portfolio - Replit Development Guide

## Overview

This is a modern full-stack web application for a data analyst portfolio website. The application showcases professional work, skills, and provides a contact form for potential clients. It features a React frontend with shadcn/ui components, an Express.js backend, and PostgreSQL database integration using Drizzle ORM.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query for server state management
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (@neondatabase/serverless)
- **Session Management**: PostgreSQL-backed sessions (connect-pg-simple)
- **API Design**: RESTful API with JSON responses

### Database Schema
- **Users Table**: Basic user authentication (id, username, password)
- **Contacts Table**: Contact form submissions (id, firstName, lastName, email, subject, message, createdAt)

## Key Components

### Frontend Components
- **Navigation**: Sticky header with smooth scrolling navigation
- **Hero Section**: Landing area with call-to-action buttons
- **About Section**: Professional background and statistics
- **Skills Section**: Animated skill bars with categories (Programming, Data Analysis, Visualization)
- **Projects Section**: Portfolio showcase with project cards
- **Contact Form**: Validated form with success/error handling
- **Footer**: Links and social media integration

### Backend Components
- **Routes**: API endpoints for contact form submission and data retrieval
- **Storage**: Abstracted storage layer with in-memory fallback
- **Validation**: Zod schema validation for form inputs
- **Error Handling**: Centralized error handling middleware

### UI Components
- Comprehensive shadcn/ui component library including:
  - Form controls (Button, Input, Textarea, Select, Checkbox)
  - Layout components (Card, Sheet, Dialog, Tabs)
  - Feedback components (Toast, Alert, Progress)
  - Navigation components (Dropdown, Popover, Tooltip)

## Data Flow

1. **Page Load**: React app loads with TanStack Query client initialization
2. **Navigation**: Smooth scroll navigation between sections
3. **Contact Form**: 
   - Form validation using Zod schemas
   - API call to `/api/contact` endpoint
   - Database storage via Drizzle ORM
   - Success/error feedback via toast notifications
4. **Contact Retrieval**: Admin endpoint `/api/contacts` for viewing submissions

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL database connection
- **drizzle-orm**: Type-safe database queries
- **@tanstack/react-query**: Server state management
- **react-hook-form**: Form handling
- **zod**: Runtime type validation
- **tailwindcss**: Utility-first CSS framework

### UI Dependencies
- **@radix-ui/***: Headless UI components
- **lucide-react**: Icon library
- **class-variance-authority**: Component variant styling
- **tailwind-merge**: Tailwind class merging utility

### Development Dependencies
- **vite**: Build tool and dev server
- **typescript**: Type checking
- **esbuild**: Fast bundling for production
- **tsx**: TypeScript execution

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React app to `dist/public`
2. **Backend Build**: esbuild bundles Express server to `dist/index.js`
3. **Database Migration**: Drizzle Kit pushes schema changes

### Environment Configuration
- **DATABASE_URL**: PostgreSQL connection string (required)
- **NODE_ENV**: Environment setting (development/production)

### Development vs Production
- **Development**: 
  - Vite dev server with HMR
  - In-memory storage fallback
  - Replit-specific tooling integration
- **Production**:
  - Static file serving
  - PostgreSQL database connection
  - Optimized builds with esbuild

### File Structure
```
├── client/          # React frontend
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── pages/       # Page components
│   │   ├── hooks/       # Custom hooks
│   │   └── lib/         # Utilities
├── server/          # Express backend
│   ├── index.ts     # Server entry point
│   ├── routes.ts    # API routes
│   ├── storage.ts   # Data access layer
│   └── vite.ts      # Vite integration
├── shared/          # Shared code
│   └── schema.ts    # Database schema
└── migrations/      # Database migrations
```

The application follows modern full-stack development practices with clear separation of concerns, type safety throughout, and a responsive, accessible user interface optimized for showcasing data analysis work.