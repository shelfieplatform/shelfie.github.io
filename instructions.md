# Shelfie - Digital Shelf Landing Page

## Project Overview
Shelfie is a modern React-based landing page for a social media app that allows users to curate and organize their favorite books, music, movies, and TV shows. The project is built with React, TypeScript, Vite, and Tailwind CSS.

## Current File Structure
```
shelfie.github.io/
├── client/                          # Frontend React application
│   ├── index.html                   # Main HTML template
│   └── src/
│       ├── App.tsx                  # Main app component with routing
│       ├── main.tsx                 # React entry point
│       ├── index.css                # Global styles
│       ├── components/              # React components
│       │   ├── Header.tsx           # Navigation header
│       │   ├── Hero.tsx             # Hero section with CTA
│       │   ├── Features.tsx         # Features showcase
│       │   ├── Footer.tsx           # Footer component
│       │   ├── LandingPage.tsx      # Main landing page layout
│       │   ├── FloatingWaitlist.tsx # Waitlist signup modal
│       │   └── ui/                  # Reusable UI components (Radix UI)
│       ├── pages/                   # Page components
│       │   ├── Home.tsx             # Home page
│       │   └── not-found.tsx        # 404 page
│       ├── hooks/                   # Custom React hooks
│       ├── lib/                     # Utility libraries
│       └── components/examples/     # Example components
├── server/                          # Backend Express server (not used for GitHub Pages)
├── shared/                          # Shared schemas and types
├── attached_assets/                 # Generated assets from V0
├── package.json                     # Project dependencies and scripts
├── vite.config.ts                   # Vite build configuration
├── tailwind.config.ts               # Tailwind CSS configuration
├── tsconfig.json                    # TypeScript configuration
└── design_guidelines.md             # Design system documentation
```

## Development Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Local Development
1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```
   - Server runs at: `http://localhost:5000`
   - Hot reload enabled for real-time preview

3. **Build for production:**
   ```bash
   npm run build
   ```

## GitHub Pages Configuration

### Current Build Output
- Build directory: `dist/public/`
- GitHub Pages requirement: `docs/` folder or root

### Required Changes for GitHub Pages
1. **Update Vite config** to output to `docs/` folder
2. **Configure GitHub Pages** to serve from `docs/` folder
3. **Update base path** for proper asset loading

## Key Features
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI**: Radix UI components with custom styling
- **Animations**: Framer Motion for smooth interactions
- **Gradient Design**: Purple/pink gradient theme
- **Waitlist Integration**: Email collection for early access
- **SEO Optimized**: Meta tags and structured data

## Component Architecture
- **LandingPage**: Main layout component
- **Hero**: Hero section with floating media icons
- **Features**: Three-column feature showcase
- **Header**: Navigation with CTA button
- **Footer**: Links and social media
- **FloatingWaitlist**: Modal for email signup

## Design System
- **Colors**: Purple primary, pink accents, gradient backgrounds
- **Typography**: Inter font family
- **Spacing**: Tailwind utility classes
- **Animations**: Subtle bounce and fade effects
- **Icons**: Lucide React icon library

## Deployment Status
- ✅ Local development setup
- ⏳ GitHub Pages configuration (in progress)
- ⏳ Production build optimization (pending)

## Backend Files (Not Used for GitHub Pages)
- `server/` - Express.js backend (not needed for static site)
- `shared/schema.ts` - Database schemas (not used in static build)
- `drizzle.config.ts` - Database configuration (not used)

## Notes
- This is a static website optimized for GitHub Pages
- No backend functionality is included in the deployed version
- All interactions are client-side React components
- The waitlist form is currently a UI mockup (no backend integration)
