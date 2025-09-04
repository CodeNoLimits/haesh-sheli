# Overview

This is a Hebrew language e-commerce website for selling books by Rabbi Nachman of Breslov. The site features a modern React frontend with a Node.js/Express backend, designed specifically for the Israeli/Hebrew-speaking market. It includes features like book browsing, shopping cart functionality, and promotional campaigns such as flight giveaways to Uman (a significant pilgrimage site for Breslov Hasidim).

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite for build tooling
- **UI Library**: Radix UI components with shadcn/ui design system
- **Styling**: Tailwind CSS with custom Hebrew/RTL design tokens and color scheme (warm beige/cream background with red primary colors)
- **State Management**: TanStack Query (React Query) for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Forms**: React Hook Form with Zod validation through @hookform/resolvers
- **Internationalization**: Built specifically for Hebrew (RTL) with proper font support (Assistant, Rubik fonts)

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Database Provider**: Neon Database (@neondatabase/serverless)
- **Session Management**: Express sessions with PostgreSQL session store (connect-pg-simple)
- **Development**: Hot module replacement via Vite integration

## Data Storage
- **Primary Database**: PostgreSQL hosted on Neon Database
- **ORM**: Drizzle ORM with full TypeScript support and Zod schema validation
- **Schema Location**: Shared schema definitions in `/shared/schema.ts`
- **Migrations**: Drizzle Kit for database schema migrations stored in `/migrations`
- **Development Storage**: In-memory storage implementation for development/testing

## Authentication & Authorization
- **Session-based Authentication**: Express sessions with PostgreSQL persistence
- **User Schema**: Basic user model with username/password authentication
- **Storage Interface**: Abstract storage interface allowing for multiple implementations (currently in-memory for development)

## External Dependencies
- **Database**: Neon Database (PostgreSQL-compatible serverless database)
- **UI Components**: Radix UI primitives for accessible component foundation
- **Fonts**: Google Fonts (Assistant, Rubik) optimized for Hebrew text
- **Development Tools**: 
  - Replit integration for development environment
  - Vite plugins for runtime error handling and cartographer (development mapping)
- **Build Tools**: 
  - esbuild for server-side bundling
  - Vite for client-side bundling and development server
- **Validation**: Zod for runtime type validation and schema definition