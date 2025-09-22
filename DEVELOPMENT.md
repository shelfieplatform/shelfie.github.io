# 🚀 Shelfie Development Guide

## Development vs Production Setup

### **Development Environment** (Local Development)
- **Purpose**: Edit and preview changes
- **Files**: All source code, build tools, dependencies
- **Server**: `npm run dev` → http://localhost:5173
- **Structure**: Full project with `client/`, `server/`, etc.

### **Production Environment** (GitHub Pages)
- **Purpose**: Live website deployment
- **Files**: Only static files (`index.html`, `404.html`, `assets/`)
- **Server**: GitHub Pages → https://shelfieplatform.github.io/shelfie.github.io/
- **Structure**: Optimized for static hosting

## Development Workflow

### **1. Local Development**
```bash
# Start development server
npm run dev

# Your website: http://localhost:5173
# Edit files in client/src/
# Changes appear automatically
```

### **2. Build for Production**
```bash
# Build the website
npm run build:pages

# Files created in dist/ folder
# Copy to root for GitHub Pages
cp -r dist/* .
```

### **3. Deploy to GitHub Pages**
```bash
# Commit changes
git add .
git commit -m "Update website"
git push origin main

# Website automatically deploys to GitHub Pages
```

## File Structure

### **Development Files** (Keep for local development)
- `client/` - React source code
- `package.json` - Dependencies
- `vite.config.ts` - Build configuration
- `node_modules/` - Dependencies

### **Production Files** (Deploy to GitHub Pages)
- `index.html` - Main website
- `404.html` - SPA routing fix
- `assets/` - CSS and JS files

## Quick Commands

```bash
# Development
npm run dev          # Start dev server
npm run build:pages  # Build for production

# Git
git add .            # Stage changes
git commit -m "..."   # Commit changes
git push origin main # Deploy to GitHub
```

## Notes
- **Development**: Full project with all files
- **Production**: Only essential static files
- **GitHub Pages**: Automatically serves static files
- **Local Preview**: Full development environment
