# Mahadi Hasan Nayeem's Portfolio - Replit Development Guide

## Overview

This is a modern full-stack web application for Mahadi Hasan Nayeem's personal portfolio website. The application showcases his computer science and data science work, skills, education, and professional experience. It features a React frontend with shadcn/ui components, an Express.js backend, and PostgreSQL database integration using Drizzle ORM.

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
- **Navigation**: Sticky header with smooth scrolling navigation (Home, About, Skills, Experience, Projects, Contact)
- **Hero Section**: Landing area highlighting Computer Science & Data Science expertise
- **About Section**: Academic background and career objectives with CGPA and graduation timeline
- **Skills Section**: Animated skill bars with categories (Programming, Data Analysis & BI, Machine Learning)
- **Experience Section**: Professional work history and academic achievements
- **Projects Section**: Portfolio showcase featuring real projects from CV (Bengali License Plate Recognition, CNN Attendance System, Power BI Dashboards, etc.)
- **Contact Form**: Validated form with success/error handling
- **Footer**: Professional links and expertise areas

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

The application follows modern full-stack development practices with clear separation of concerns, type safety throughout, and a responsive, accessible user interface optimized for showcasing Mahadi Hasan Nayeem's computer science and data science work.

## Recent Changes: Latest modifications with dates

### January 15, 2025
- **Personalized Portfolio**: Updated entire portfolio with Mahadi Hasan Nayeem's actual information from CV
- **Updated Personal Information**: 
  - Name: Mahadi Hasan Nayeem
  - Email: mhnayem01@gmail.com
  - Phone: +88016380-01725
  - Location: Kuril, Dhaka, Bangladesh
- **Academic Information**:
  - CGPA: 3.78 (American International University-Bangladesh)
  - Expected Graduation: October 2025
  - Specialization: Computer Science & Engineering (Information Systems)
- **Real Projects Integration**: Added all 8 major projects from CV including:
  - Bengali License Plate Recognition System (MobileNet, Real-ESRGAN)
  - CNN-Based Automatic Attendance System (OpenCV, TensorFlow)
  - Stroke Prediction & Correlation Analysis (R, ggplot2)
  - Hotel Customer Data Analysis Dashboard (Power BI, DAX)
  - Wi-Steer: Wireless ESP32 Racing Controller
  - Elderly Care and Monitoring System (HTML, PHP, JavaScript)
  - US Economic & Demographic Analysis (Power BI)
  - World Bank Development Indicators Analysis
- **Skills Update**: Updated skill categories to reflect actual expertise:
  - Programming: Python (90%), R (88%), SQL (85%)
  - Data Analysis & BI: Power BI (90%), Excel (85%), Pandas (88%)
  - Machine Learning: TensorFlow (85%), PyTorch (82%), OpenCV (88%)
- **Experience Section**: Added new Experience component with:
  - Managing Director at AIO I.T LTD. (2020-2023)
  - Junior Financial Analyst at A.A. Engineering & Consultancy Firm (2024-2025)
  - Course Advisor at AIO I.T LTD. (2021-2023)
- **Achievements**: Added honors and awards section:
  - Dean's List Honor Award (2023, 2024)
  - GYA Youth Leadership Award (2020)
  - National Science Award 5th place (2018)
- **Navigation Update**: Added Experience section to navigation menu