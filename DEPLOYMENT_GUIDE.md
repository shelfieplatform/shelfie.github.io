# 🚀 GitHub Pages Deployment Guide

## Your Website URL
**https://shelfieplatform.github.io/shelfie.github.io/**

## Quick Deployment (Recommended)

### Option 1: Automatic Deployment (Easiest)
1. **Push your changes to GitHub:**
   ```bash
   git add .
   git commit -m "Deploy: Update website"
   git push origin main
   ```

2. **GitHub Actions will automatically:**
   - Build your project
   - Deploy to GitHub Pages
   - Your site will be live at the URL above

### Option 2: Manual Deployment
1. **Build the project:**
   ```bash
   npm run build:pages
   ```

2. **Copy files to root directory:**
   ```bash
   # Copy the built files to the root
   cp -r dist/* .
   ```

3. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Deploy: Manual deployment"
   git push origin main
   ```

## GitHub Pages Setup

### 1. Enable GitHub Pages
1. Go to your repository: https://github.com/shelfieplatform/shelfie.github.io
2. Click **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select **GitHub Actions**
5. Save the settings

### 2. Verify Deployment
- Your website will be available at: **https://shelfieplatform.github.io/shelfie.github.io/**
- It may take 5-10 minutes for the first deployment
- Subsequent updates will be faster (1-2 minutes)

## Troubleshooting

### If your site shows 404:
1. Check that GitHub Pages is enabled in repository settings
2. Verify the source is set to "GitHub Actions"
3. Check the Actions tab for any failed deployments

### If assets don't load:
1. Make sure `vite.config.ts` has `base: "/shelfie.github.io/"`
2. Rebuild with `npm run build:pages`
3. Push the changes

### If you see "Page not found" error:
1. Make sure you have the `404.html` file in your root directory
2. The file should redirect to your main page

## Development Workflow

### Local Development:
```bash
npm run dev
```
Visit: http://localhost:5173

### Production Build:
```bash
npm run build:pages
```

### Deploy Changes:
```bash
./deploy.sh
```

## File Structure for GitHub Pages
```
shelfie.github.io/
├── index.html          # Main page
├── 404.html           # Error page redirect
├── assets/            # CSS, JS, images
│   ├── index-*.css
│   └── index-*.js
├── .github/
│   └── workflows/
│       └── deploy.yml  # Auto-deployment
└── client/            # Source code
```

## Important Notes

1. **Repository Name**: Your repository must be named `shelfie.github.io` for the custom domain to work
2. **Base Path**: The `base: "/shelfie.github.io/"` in vite.config.ts is crucial for asset loading
3. **Automatic Deployment**: GitHub Actions will handle building and deploying automatically
4. **Custom Domain**: You can add a custom domain later in the Pages settings

## Support
If you encounter any issues:
1. Check the Actions tab in your GitHub repository
2. Verify all files are committed and pushed
3. Ensure GitHub Pages is enabled in repository settings
