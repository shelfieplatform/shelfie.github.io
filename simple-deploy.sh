#!/bin/bash

echo "🚀 Simple GitHub Pages Deployment"
echo "=================================="

# Build the project
echo "📦 Building project..."
npm run build:pages

# Check if dist folder exists
if [ ! -d "dist" ]; then
    echo "❌ Error: dist folder not found. Build failed."
    exit 1
fi

echo "✅ Build completed successfully!"
echo ""

# Copy files to root for direct deployment
echo "📁 Copying files to root directory..."
cp dist/index.html ./index.html
cp -r dist/assets ./assets/
cp 404.html ./404.html

echo "✅ Files copied to root directory"
echo ""

# Add and commit the files
echo "💾 Committing files..."
git add index.html assets/ 404.html
git commit -m "Deploy: Update website files for GitHub Pages"

echo "🚀 Pushing to GitHub..."
git push origin main

echo ""
echo "✅ Deployment complete!"
echo "🌐 Your website will be available at: https://shelfieplatform.github.io/shelfie.github.io/"
echo "⏰ It may take 2-5 minutes for GitHub Pages to update."
echo ""
echo "📋 Make sure GitHub Pages is configured:"
echo "1. Go to: https://github.com/shelfieplatform/shelfie.github.io/settings/pages"
echo "2. Source: Deploy from a branch"
echo "3. Branch: main"
echo "4. Folder: / (root)"
echo "5. Save"
