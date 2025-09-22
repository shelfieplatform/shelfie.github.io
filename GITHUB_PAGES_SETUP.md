# 🚀 GitHub Pages Setup Guide

Based on the [official GitHub Pages documentation](https://docs.github.com/en/pages), here's the correct setup for your Shelfie website.

## ✅ Project Structure Fixed

### What I Fixed:
1. **Corrected base path** from `/shelfie.github.io/` to `/` in `vite.config.ts`
2. **Added `.nojekyll` file** to prevent Jekyll processing
3. **Simplified GitHub Actions workflow** to use standard "Deploy from a branch" method
4. **Cleaned up mixed file structure** in the root directory
5. **Updated homepage URL** in `package.json`

### Current Project Structure:
```
shelfie.github.io/
├── index.html          # Main website file
├── 404.html           # Custom 404 page
├── assets/            # CSS, JS, images
│   ├── index-*.css
│   └── index-*.js
├── .nojekyll          # Prevents Jekyll processing
├── .github/
│   └── workflows/
│       └── deploy.yml # Auto-deployment workflow
└── client/            # Source code
```

## 🔧 GitHub Pages Configuration

### Step 1: Configure Publishing Source
1. Go to: https://github.com/shelfieplatform/shelfie.github.io/settings/pages
2. Under **Source**, select **Deploy from a branch**
3. Select **main** branch
4. Select **/ (root)** folder
5. Click **Save**

### Step 2: Verify Settings
- **Source**: Deploy from a branch
- **Branch**: main
- **Folder**: / (root)
- **Custom domain**: (optional, can be added later)

## 🌐 Your Website URL
**https://shelfieplatform.github.io/shelfie.github.io/**

## 🚀 Deployment Methods

### Method 1: Automatic Deployment (Recommended)
The GitHub Actions workflow will automatically:
1. Build your project when you push to main
2. Copy built files to root directory
3. Commit and push the changes
4. GitHub Pages will serve the files

### Method 2: Manual Deployment
If automatic deployment fails, use the simple deployment script:
```bash
./simple-deploy.sh
```

## 📋 Key Changes Made

### 1. Vite Configuration
```typescript
// vite.config.ts
export default defineConfig({
  base: "/", // Changed from "/shelfie.github.io/"
  // ... other config
});
```

### 2. Package.json
```json
{
  "homepage": "https://shelfieplatform.github.io/shelfie.github.io/"
}
```

### 3. GitHub Actions Workflow
- Simplified to use standard git operations
- Copies built files to root directory
- Commits and pushes changes
- Works with "Deploy from a branch" setting

### 4. Added .nojekyll File
- Prevents GitHub from processing files with Jekyll
- Ensures static files are served correctly

## 🔍 Troubleshooting

### If your site shows 404:
1. Check that GitHub Pages is enabled in repository settings
2. Verify the source is set to "Deploy from a branch"
3. Ensure files are in the root directory

### If assets don't load:
1. Check that `base: "/"` is set in `vite.config.ts`
2. Verify assets are in the `assets/` folder in root
3. Rebuild with `npm run build:pages`

### If you see "Page not found" error:
1. Make sure `404.html` is in the root directory
2. The file should redirect to your main page

## 📁 Files in Root Directory
Your website needs these files in the repository root:
- `index.html` - Main page
- `assets/` - CSS and JS files
- `404.html` - Error page
- `.nojekyll` - Prevents Jekyll processing

## 🎯 Next Steps
1. **Wait 2-5 minutes** for the deployment to complete
2. **Visit your website**: https://shelfieplatform.github.io/shelfie.github.io/
3. **Check the Actions tab** to see deployment status
4. **Test all functionality** including the waitlist form

## 📚 References
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Configuring Publishing Source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
- [Custom 404 Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-custom-404-page-for-your-github-pages-site)
