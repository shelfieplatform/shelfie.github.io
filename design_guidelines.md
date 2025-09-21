# Shelfie Landing Page Design Guidelines

## Design Approach
**Reference-Based Approach** - Drawing inspiration from modern social media platforms like Instagram and Pinterest, combined with productivity app aesthetics like Notion for clean, content-focused design.

## Core Design Elements

### Color Palette
**Primary Colors:**
- Brand Purple: 270 70% 50% (deep purple for brand identity)
- Background Dark: 220 15% 8% (rich dark background)
- Background Light: 220 10% 98% (clean light background)

**Accent Colors:**
- Vibrant Pink: 320 80% 65% (for CTAs and highlights)
- Soft Blue: 200 60% 70% (for secondary elements)

**Gradients:**
- Hero background: Diagonal gradient from brand purple to deep blue (240 60% 20%)
- Feature cards: Subtle gradients using primary colors with 20% opacity
- Button gradients: Purple to pink for primary CTAs

### Typography
**Font Stack:** Inter (Google Fonts)
- Headlines: 600-700 weight, 2.5rem-4rem sizes
- Body text: 400-500 weight, 1rem-1.125rem sizes
- CTA buttons: 600 weight, 1rem size

### Layout System
**Spacing Units:** Tailwind utilities of 4, 8, 12, and 16 (p-4, m-8, gap-12, space-y-16)
- Consistent 16-unit vertical rhythm between major sections
- 8-unit spacing for component internal elements
- 4-unit micro-spacing for tight groupings

### Component Library

**Hero Section:**
- Full viewport height with gradient background
- Large centered headline with subtitle
- Primary CTA button with gradient background
- Floating media icons (books, music, movies) with subtle animations

**Features Section:**
- Three-column grid on desktop, single column on mobile
- Icon + headline + description cards
- Soft background colors with rounded corners
- Icons using Heroicons library

**Floating Waitlist Form:**
- Fixed position overlay with backdrop blur
- Clean white/dark card design
- Email input with gradient submit button
- Smooth fade-in animation trigger

**Navigation:**
- Minimal header with logo and CTA button
- Transparent background with blur effect on scroll
- Mobile hamburger menu for responsive design

### Animations
**Minimal Motion Design:**
- Floating media icons with gentle bounce/rotate
- Fade-in animations for feature cards on scroll
- Smooth hover states for buttons and cards
- Waitlist form slide-in from bottom

## Mobile Optimization
- Single-column layouts below 768px
- Touch-friendly button sizes (minimum 44px)
- Simplified navigation with collapsible menu
- Optimized image sizes and loading

## GitHub Pages Optimization
- Static HTML/CSS/JS build
- Inline critical CSS for performance
- CDN-hosted fonts and icons
- Minimal external dependencies
- Optimized asset loading

## Images
**Hero Background:** Abstract gradient overlay (no large hero image needed)
**Feature Icons:** Use Heroicons for book, music, film, and social sharing icons
**Media Elements:** Small floating SVG icons representing different media types scattered in hero section

The design emphasizes clean typography, strategic use of gradients, and minimal but impactful animations to create a modern, professional landing page that effectively communicates Shelfie's value proposition while maintaining fast loading times for GitHub Pages hosting.